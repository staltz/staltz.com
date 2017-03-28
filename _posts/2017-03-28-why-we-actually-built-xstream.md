---
layout: post
title: "Why we actually built xstream"
tags: [blog]
---

It has been about [a year](http://staltz.com/why-we-built-xstream.html) since we published [xstream](http://github.com/staltz/xstream), a reactive programming library tailored for Cycle.js. The library has been working well for our original goals: small library, fast enough, which eliminates reasoning about hidden subscribes.

As an RxJS advocate, [some people](https://medium.com/@MichalMajewski/rxjs-be-careful-with-that-axe-eugene-a1763d115e30#.aografxx8) unfortunately thought I cut my relationship with the library, avoiding it entirely. This couldn't be further from the truth.

This was our original reason to build xstream:

> we needed a reactive stream library tailored for Cycle.js. It needs to be "hot" only, so users don't need to think about **subscription semantics hidden in drivers**. Also, it needs to be really small in kB size in order to **keep the size of drivers small**.

After a year, I have to admit our original reason for building xstream was, guess what:

> we needed a reactive stream library tailored for Cycle.js. It needs to be "hot" only, so users don't need to think about **subscription semantics hidden in drivers**. Also, it needs to be really small in kB size in order to **keep the size of drivers small**.

I'll save you from doing the diff: it's exactly the same. Let's talk about those reasons for a bit.

<h2 id="cold-vs-hot" class="hr"><span class="hr">COLD VS HOT</span></h2>

Streams in xstream are hot only. This means that an execution of a stream is shared to all its listeners.

Before jumping to the conclusion that hot is more intuitive and natural than cold, please observe the peculiar conditions we had with Cycle.js: **subscribe only happened in drivers** (which are libraries), which meant that a developer using Cycle.js as a framework would never see any `subscribe` call.

With RxJS, it turned out to be unintuitive because [hot and cold has to do with side effects on subscription](http://davesexton.com/blog/post/Hot-and-Cold-Observables.aspx). Since a Cycle.js developer has **no visibility** of `subscribe` calls, they were particularly vulnerable to confusion around the topic.

This has nothing to do with cold and hot being confusing elsewhere, because outside Cycle.js you have `subscribe` calls inside app code and you have better visibility over subscription side effects.

With xstream, we ended up implementing a weird mix of cold and hot (it's called *reference counted multicasted execution with synchronous start and asynchronous stop*) in order to hide as much as possible subscription side effects from application code.

I'll be honest with you, it wasn't easy and we had to do a couple of different iterations and designs. Today, it mostly works, and we're fairly happy with it, but sometimes someone hits a bug related to that.

In particular, we discovered that hot-only streams means we lose functional purity everywhere. In practice, most of the times it's pure (referential transparent), but in some odd corner cases, we can't guarantee it. Here's the [known corner case](https://github.com/cyclejs/cyclejs/issues/365):

```diff
 const inc$ = sources.DOM.select('.inc').events('click').mapTo(+1);
 const refresh$ = sources.DOM.select('.ref').events('click').startWith(0);
+const sum$ = inc$.fold((x, y) => x + y, 0);
+const lastSum$ = refresh$.map(_ => sum$).flatten();
-const lastSum$ = refresh$.map(_ => inc$.fold((x, y) => x + y, 0)).flatten();
 const vdom$ = lastSum$.map(count =>
   div([
```

Extracting `sum$` out of the expression inside the map operation leads to different behavior, and it all has to do with the creation of a stream. In the previous case, we were creating a stream for each map emission, which meant we had a separate fold execution (fold carries state) each time. With the new code, there is only one fold state creation. It's a very tricky corner case because it also has to do with sync start and async stop together with `flatten`. (It's even less common to hit this issue since nowadays it's common to use a fractal state management approach like [Onionify](https://github.com/staltz/cycle-onionify) for all the state in the app)

And there isn't much we can do to fix that, because cold streams would be necessary for the fix, and there aren't cold streams in xstream. However, there is something you can do about that.

<h2 id="rxjs-meets-xstream" class="hr"><span class="hr">RXJS MEETS XSTREAM</span></h2>

Most reactive stream libraries for JavaScript nowadays support some interoperability with the ES Observable proposal. This means you can do this:

```javascript
const timer$ = Rx.Observable.timer(0, 1000);
const message$ = xs.from(timer$).map(i => '' + i + ' seconds have passed');
```

Take a look at that. We started with an RxJS Observable and we ended up with an xstream Stream. This means you can snowboard on cold RxJS mountains then switch to surf in the hot beaches of xstream. Usually with RxJS, in order to surf in the hot beaches, you do something like `.share()` or `.publish().refCount()`. But, if you apply operators *after* that, you will go back to the cold world, but it's still somewhat based on a hot thing. Some people call these "lukewarm" Observables, which is a term that gives me allergic reactions. Anyway, the point here is that RxJS strongly gravitates back to cold, even after you make something become hot.

xstream on the other hand strongly gravitates to hot. So they can easily compliment each other. You can operate purely in the cold world, then switch **permanently** to hot by converting to xstream. You cannot do that with RxJS (unlesss through some creative use of the [Lift Architecture](https://github.com/ReactiveX/rxjs/blob/3e9d5295f118c29193f88ea825902ac359901119/src/Observable.ts#L60-L72)). So these two libraries complement each other actually quite well.

To give an example, we could solve that fold corner case in RxJS, then switch permanently to xstream.

```javascript
const incObs = sources.DOM.select('.inc').events('click').map(() => +1);
const refreshObs = sources.DOM.select('.ref').events('click').startWith(0);
const sumObs = incObs.startWith(0).scan((x, y) => x + y);
const lastSumObs = refresh$.switchMap(_ => sum$);
// From cold world (above) to hot world (below)
const lastSum$ = xs.from(lastSumObs);
const vdom$ = lastSum$.map(count =>
  div([
```

So forget about the "competition of reactive libraries". Where some people see competition I see collaboration and cross-polination.

<h2 id="conclusion" class="hr"><span class="hr">CONCLUSION</span></h2>

I'll finish with exactly the same conclusion as one year ago:

> I am still a core contributor and advocate of RxJS and will remain to be so. RxJS is a better option than *xstream* as a general-purpose library for reactive programming in the browser and in Node.js. In many ways it is more powerful than *xstream*, providing access to cold Observables (which are more generic than hot ones), schedulers (which *xstream* has none so far), marble diagram testing, and dozens of battle-proven operators. It is the ideal library to integrate with conventional imperative code and JavaScript.

> *xstream* is not a competitor to RxJS in those cases. It is instead a complementary library, that distills the best of RxJS in the most appropriate API for Cycle.js apps.
