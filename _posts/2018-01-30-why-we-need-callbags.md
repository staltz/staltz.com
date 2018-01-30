---
layout: post
title: "Why we need Callbags"
tags: [blog]
---

In the past I've helped write parts of [RxJS](https://github.com/ReactiveX/RxJS), I've written [xstream](https://github.com/staltz/xstream/issues), and now I bring a new stream library for JavaScript. This time, it's a bit different, though, because there are 3 new things:

- A reactive stream programming library
- An iterable programming library
- A specification for callback-based programming

In reality, those 3 are realized in just one thing: [Callbags](https://github.com/staltz/callbag-basics).

```js
const {observe, fromEvent, map, filter, pipe} = require('callbag-basics');

pipe(
  fromEvent(document, 'click'),
  filter(ev => ev.target.tagName === 'BUTTON'),
  map(ev => ({x: ev.clientX, y: ev.clientY}))
  observe(x => console.log(x))
);
```

It's a spec more than it is a library, and combines a couple of ideas from people I admire in this field:

- Erik Meijer's [getter and setter mantra](https://www.youtube.com/watch?v=sTSQlYX5DU0)
- Paul Taylor's [definition of Iterables and Observables](https://github.com/ReactiveX/rxjs/issues/752#issuecomment-161234549) unveils a lot of similarities between them
- Ben Lesh: [*an observable is just a function*](https://medium.com/@benlesh/learning-observable-by-building-observable-d5da57405d87)
- RxJava 2: [Observer is notified of the Subscription](https://github.com/tc39/proposal-observable/issues/43#issuecomment-121003367), for backpressure (a type of communication upwards with the Observable)
- Paul Taylor's idea of an [ultra-modular Observable library](https://github.com/ReactiveX/rxjs/issues/29)
- Dominic Tarr's [pull-streams](https://github.com/pull-stream/pull-stream), where a stream is just a function following some conventions

After a lot of discussion and experimentation, I discovered what I call "callback heaven". Even though you can experience callback hell, callbacks are immensely powerful, and if you're able to tame them, then you don't need heavy libraries for async because the language already has them natively. So if we can contain tricky callback code in utilities, then we can lift the level of abstraction and from that point onwards use familiar operators like `map`, `merge`, `combine`, `share`, etc.

Callbag is a [specification](https://github.com/callbag/callbag) that gives some guidelines for callback-based programming in JavaScript, so that they can be easily used for reactive programming with operators, or for iterable programming through similar operators. In fact, often the same operator works for both reactive programming and iterable programming.

In this article, let me tell you what problems I wanted to solve and how Callbags are a solution.

## Hybrid push and pull primitive

It started in [CycleConf 2017](https://vimeo.com/album/4578937) (April) when we were talking about an untapped issue where we should be handling inherently pull-style data sources, such as `Math.random()`, `UUID()`, and even network requests, which led to a [lengthy discussion in this issue](https://github.com/cyclejs/cyclejs/issues/581). Our initial plan was to build a dedicated pull library (tentatively called `ysignal`) so that Cycle.js sinks could be either xstream or ysignal, depending on the driver.

This didn't make us comfortable, though, since it meant an additional mental cost (specially for beginners) of being aware which APIs required streams and which required signals. Recently, in December, after discussing with [Jan](https://github.com/jvanbruegge), I noticed that ["a Pull is just two Pushes"](https://github.com/cyclejs/cyclejs/issues/581#issuecomment-353895517). This was exciting because it meant that Push is a more foundational primitive than Pull is, and since Cycle.js has so far been a Push-only framework, we aren't missing anything important in the foundations of the framework. In practice, we still need to improve the usage of Pull-style APIs, but now we're comfortable that this can be added on top of existing structures, as opposed to causing a big rewrite to introduce a new foundation.

"A Pull is just two Pushes" soon converted in my mind into "Push is another word for *message passing*, so Pull is just two messages". From there, I noticed that functions of type `x => void` in JavaScript provide one-way message passing. We've already been using plenty of those functions, and they're called callbacks. What Observables had brought on top of callbacks were:

- 3 different types of notifications: next, error, complete
- A contract of validity for those notifications: `(next)*(error|complete)?`
- Functional operators that work on an abstract level, lazily

So I took those valuable principles from RxJS and I looked at how I could simplify the Observer / Observable methods-on-an-object API:

```
interface Observer {
  next(x): void;
  error(e): void;
  complete(): void;
}

interface Observable {
  subscribe(observer): Subscription;
}
```

And I decided to try a more raw form that you may have found in some RxJS tutorials:

```js
function myObservable(nextCallback) {
}
```

It struck me that a raw observable isn't that much different than a raw observer (`nextCallback`). Both are functions. The observable is supposed to return a Subscription so that we can call `unsubscribe` on it, but what if there was another way? The observer can do disposal logic on `complete`, so couldn't the observable receive some `complete` notification too? This kind of thinking led me to a similar API:

```js
function observable(msgType, msgPayload) {
}
```

When `msgType == 0`, the payload should be the observer function. When `msgType == 2`, it means unsubscribe. This meant that the observable function (a.k.a. subscribe) no longer needs to return a Subscription. The API for the observer could also be the following:

```js
function observer(msgType, msgPayload) {
}
```

When `msgType == 1`, it means `observer.next` and the payload contains the data. When `msgType == 2` and payload is undefined, it means `observer.complete`. When `msgType == 2` and payload is a truthy value, then it means `observer.error`. So I'm able to cover all the traditional Observer use cases with this.

Then I put both of these raw APIs side by side and I saw:

**Observer**:

- `observer(1, data): void`
  - "next"
- `observer(2, err): void`
  - "error"
- `observer(2): void`
  - "complete"

**Observable**:

- `observable(0, observer): void`
  - "subscribe"
- `observable(2): void`
  - "unsubscribe"

And I immediately noticed how they have basically the same function signature, but with some holes here and there. We haven't utilized `observer(0, payload)` neither `observable(1, payload)`. And that's because those are the only pieces needed in order to enable... (wait for it) Iterable programming.

~~Observer~~ **Consumer**:

- `consumer(0, producer): void`
  - **pass the producer to the consumer**
- `consumer(1, data): void`
  - "next"
- `consumer(2, err): void`
  - "error"
- `consumer(2): void`
  - "complete"

~~Observable~~ **Producer**:

- `producer(0, consumer): void`
  - "subscribe"
- `producer(1, data): void`
  - **request received from consumer**
- `producer(2): void`
  - "unsubscribe" received from consumer

And now a consumer can be a *Listener* ("observer") or a *Puller*, it's up to the consumer whether it will pull the producer or not. And the producer can be a *Listenable* ("observable") or a *Pullable* ("iterable"), it's up to the producer whether it sends data proactively or only on demand. As you can see, both consumer and producer are simple functions of the same type:

**`(num, payload) => void`**

So any operator that we build will work for both reactive programming or iterable programming, simply because the line between those two modes gets blurred and it's not anymore about observables versus iterables, it's just about transformations of data between producer and consumer. Speaking about operators...

## Ecosystem of operators

[RxJS version 4](https://github.com/Reactive-Extensions/RxJS/) was quite huge in number of operators. I remember counting them to be around 150. It was often a complaint surrounding the difficulty of adoption of the library, because it looked like you had to learn most of those in order to be a prolific RxJS user.

With RxJS version 5+, we knew we wanted to limit the scope of the operator portfolio. The first iteration of that rewrite probably had less than a hundred operators. It was an improvement, but over time it is very difficult to justify why a new operator should not be added to the library, specially since the API surface for comparing with existing operators is large.

Our plan with xstream was to pick only operators that were useful for Cycle.js applications. We surveyed the community and were able to settle on approximately 20 fundamental operators. To restrict the size of the core library, we put some important (but not fundamental) operators in a subpackage we call [extra](https://github.com/staltz/xstream/blob/master/EXTRA_DOCS.md). This worked well for a while, but requests to add more extra operators kept coming, and it was hard to manage, just like it is in RxJS 5+.

There is a lot of maintenance burden because people expect all operators to be equally well documented and well tested. In practice, a reactive programming library with operators quickly becomes an "npm for operators", but with centralized maintenance and more obstacles for publishing. It doesn't need to be like this. People can easily create and publish their own operators and compose them with existing ones. It's a cultural issue where people build expectations for operators to exist in the core library.

Contrast that with the React ecosystem where there are thousands of React components available on npm. Does one need to learn all of these components to be a prolific user? Certainly not. Does React as a library come with hundreds of "core" components? No, but that is roughly what happens with reactive stream libraries. Are React users comfortable with creating and publishing their own components on npm? Yes, it seems so.

There isn't a technological reason why React components are by default community-driven, and why reactive operators are officially and centrally maintained. It's a matter of culture only. For both UI components and reactive streams, we can have an **interoperable specification** that allows all these pieces of code to be built by the community, for the community. It's the common consensus-based core that allows the community to be free from central maintenance.

Even though RxJS and xstream fully support community-driven operators, I first saw a culture of community operators in the pull-stream ecosystem (check these [`pull-*` packages on npm](https://www.npmjs.com/search?q=pull-&page=2&ranking=optimal)). It was eye-opening, particularly because `pull-stream` doesn't have a "core". To be accurate, the only core part of pull-stream is the "pipe" function [`pull`](https://github.com/pull-stream/pull-stream/blob/master/pull.js). The library is just a collection of a few fundamental operators, but you could build a pull stream from scratch and continue from there. I loved that idea, and wanted to take it to the next level.

## Minimal overhead

Callbag has no core library. It is just a spec based on a primitive that comes built-in with JS: functions.

**`(type: 0|1|2, payload?: any) => void`**

There is no official package that always needs to be present. I have provided [callbag-basics](https://github.com/staltz/callbag-basics), but it's literally just an `index.js` that requires other libraries. Every operator and every factory is its own package. If you want to have a different collection of operators, just require them one by one and bundle them together as your own toolkit.

The first operators I've built in callbag-basics also demonstrate how lightweight you can get with this pattern. For instance, this is literally the whole source code for the `callbag-map` operator:

```js
const map = f => source => (start, sink) => {
  if (start !== 0) return;
  source(0, (t, d) => {
    sink(t, t === 1 ? f(d) : d)
  });
};

module.exports = map;
```

That's 0.1kB, and the resulting CPU performance (together with other operators) is on the same order of magnitude (in some benchmarks faster, in some, slower) as RxJS v5 and xstream. When it comes to memory usage, the use of `type: 0|1|2` numbers help us to avoid allocating objects for observers or observables, leaving the garbage collector in peace. That `map` operator works seamlessly with either listenable ("observable") or pullable ("iterable") sources.

One can certainly make more sophisticated operators, perhaps by adding more developer-experience warnings or debugging features. But callbag-basics proves that this approach has no core library and the operators can be extremely small.

## Interoperability

I don't think Callbags *replace* existing libraries like xstream or RxJS. In fact, to emphasize, I don't even think xstream replaces RxJS, and I've blogged about that [twice](https://staltz.com/why-we-actually-built-xstream.html). A minimal overhead standard for push-pull callbacks can in fact help those other libraries. I can give a few examples how.

With xstream, it's fundamental that all streams are multicasted, because in this way we can crawl the stream graph in runtime and build a dataflow graph, which is the long-term goal of Cycle.js: to be a framework for visual programming. RxJS Observables (cold by default) don't give this property because a crawler would uncover duplicate paths when Observable subscriptions create independent executions of the underlying producer. This is both a strength and a weakness of RxJS. And in xstream, it's both a strength and a weakness. It means RxJS isn't best suited as a crawled-in-runtime primitive for constructing dataflow graphs. On the other hand, cold by default guarantees referential transparency (purity), and is overall both safer and simpler. xstream gives a good crawlable primitive, but cannot guarantee referential transparency. Each one has its best use case.

Callbags are just concerned about the interoperable API and the minimal core. We might rewrite xstream using callbags to gain that interoperability with community operators, and to reduce the size of xstream's core. However, we want to keep the always-multicasted aspect of xstream, because of reasons mentioned in the previous paragraph. At the same time, using callbags for the internal mechanics of xstream helps us have an easy path for adding Pull support in the library.

Callbags support both push and pull, which can be both an advantage and a disadvantage. As an advantage, we gain generic operators that work for both push and pull. As a disadvantage, you can never know if a callbag source should be *observed* or *iterated* unless you have knowledge about the source itself. The added power of flexibility also translates to added responsibility. Under this perspective, we can view RxJS as a push-only stream library with cold by default (for referential transparency), good developer experience, well tested operators and schedulers (for disambiguating execution order). Similarly, [IxJS](https://github.com/ReactiveX/IxJS/) does that but for pull-only streams. Callbags can be a way of seamlessly bridging the two worlds of RxJS and IxJS. But also keeping them separate is a way of avoiding problems that may come with blending them.

As a conclusion, my perspective on tools is like keys on a piano. It doesn't make sense to ask which piano key is the best of all. But it does make sense to ask "given this key, which other keys harmonize with it in this particular context?", and I'm hoping that Callbags can be like that, by bringing something new to compose with existing stuff. In the end of the day, this is not a new competing library. It's not even code. It's a *reusable idea*.
