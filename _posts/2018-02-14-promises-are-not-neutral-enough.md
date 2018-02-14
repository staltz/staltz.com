---
layout: post
title: "Promises are not neutral enough"
tags: [blog]
---

Promises in JavaScript create problems which affect the entire ecosystem. In this blog post I'll explain some of those problems.

The way this article starts might make you imagine that it was written by someone in a grumpy state of mind who, after several hours swearing at the computer, decided to rant about it on the internet. That's not at all the case. I was just making my morning coffee in no hurry, when [someone asked me on Twitter](https://twitter.com/tomasz_ducin/status/963671852693499904) what is my opinion on Promises. I thought about it while sipping my coffee, then wrote a couple of tweets. Some people thought it would better presented as a blog post, so here we go!

The basic purpose of Promises is to represent a value that will be *eventually* available. It could become available in the next event loop or in the next minutes. There are many primitives that could accomplish this same purpose, e.g. callbacks, C# Tasks, Scala Futures, RxJS Observable, etc. JavaScript Promises are one type of primitive that solve the problem of programming with *eventual values*.

Even though they fulfill their purpose, JavaScript Promises are an opinionated primitive that introduce a lot of weirdness. This weirdness ends up spreading to other corners of the JavaScript language and ecosystem. Basically Promises are *not neutral enough* because they introduce 4 opinions:

- Eager, not lazy
- No cancellation
- Never synchronous
- `then()` is a mix of `map()` and `flatMap()`

## Eager, not lazy

When you create a Promise, it's already busy doing its thing. I mean this:

```js
console.log('before');
const promise = new Promise(function fn(resolve, reject) {
  console.log('hello');
  // ...
});
console.log('after');
```

In the console, you will see `before`, `hello`, `after` in that order. The function given to the Promise constructor was immediately called. You can see that more clearly if I just define the function outside of the call location:

```js
function fn(resolve, reject) {
  console.log('hello');
  // ...
}

console.log('before');
const promise = new Promise(fn); // fn() is called immediately!
console.log('after');
```

So the Promise is *eager* to call its implementation. Note that in the code above, we didn't even use the returned `promise`! There was no `.then()` attached to it, or anything. Just creating a Promise will immediately set it to do its work. This is an important detail for two reasons: (1) sometimes you don't want the promise to start right away, (2) you may want to have a reusable asynchronous task, but a Promise calls `fn()` just once, so no hopes of reusing that Promise after it was created.

The common wisdom in this case is to wrap Promises in a function:

```js
function fn(resolve, reject) {
  console.log('hello');
  // ...
}

console.log('before');
const promiseGetter = () => new Promise(fn); // fn() is NOT called immediately
console.log('after');
```

Functions rescue us in this case because functions are lazy. But now, we can't chain these things with `.then()` anymore. So what people often do is manually write their own `.then()` for Promise Getters, without knowing that they are basically fixing chainability and reusability for Promises. Maybe you've seen something like this:

```js
// this function is a Promise Getter
function getUserAge() {
  // this fetch below is also a Promise Getter
  return fetch('https://my.api.lol/user/295712')
    .then(res => res.json())
    .then(user => user.age);
}
```

So Promise Getters are much better for composition and reusability because Promise Getters are lazy. However, if Promises were designed lazy in the first place, we could do this instead:

```js
const getUserAge = betterFetch('https://my.api.lol/user/295712')
  .then(res => res.json())
  .then(user => user.age);
```

And then to use this thing, we would call `getUserAge.run(cb)`. Call `run` multiple times and you will invoke multiple different executions of that chain of eventual values. Yay! Reusable but still chainable.

Eager is less general than lazy because it sets restrictions: *you cannot reuse eager primitives* means that you are restricted from doing that. But you can use lazy primitives one or multiple times, they don't put any restriction on how many times you can reuse them.

This is why eager is more opinionated than lazy. In C#, Tasks are sort of like Promises because they are lazy, and C# Tasks have `task.start()`, while JS Promises don't.

Do you allow me to make an analogy with food recipes? Promises are food recipes that are also food, so once you eat the food, you also just ate the recipe. Oops.

## No cancellation

Once you create a Promise, we've learned that they will *start* doing their business immediately, due to eagerness, but also you cannot *stop* them from doing their business after that. So you gotta be sure you want to create a Promise, because there's no turning back.

I believe lack of cancellation is related to eagerness. [Yassine Elouafi](https://github.com/yelouafi/avenir) gives a good example:

```js
var promiseA = someAsyncFn();
var promiseB = promiseA.then(/* ... */);
```

If we call `promiseB.cancel()`, should we also cancel `promiseA` too? That would make sense in this particular example, but what about the one below?

```js
var promiseA = someAsyncFn();
var promiseB = promiseA.then(/* ... */);
var promiseC = promiseA.then(/* ... */);
```

If we call `promiseB.cancel()`, maybe we shouldn't cancel `promiseA` because it may be used by `promiseC`.

Because of eagerness, Promises make it complicated to propagate cancellations upwards. One solution, as Yassine pointed out, is reference counting, but that comes with its own jungle of corner cases and bugs.

It would all be much simpler if Promises were lazy and would create an execution upon `.run()`:

```js
var execution = promise.run();

// later...
execution.cancel();
```

The returned `execution` would be the upwards chain of tasks, and each task along that chain was exclusively created for this execution. So if we would do `executionC.cancel()`, then `executionA.cancel()` would be called, but `executionB` has its own internal `executionA` which would stay untouched. So we possibly have multiple executions of task A. That's okay. If you want to avoid multiple executions of A, then we can build a special "share" method for A, so that we can opt-in for reference counting instead of always having reference counting. Try to pay attention to the words "opt-in", "restriction", "always". When a behavior is opt-in, it is neutral. When a behavior is always forced, it is opinionated.

Back to strange food analogies, imagine you order food at a restaurant, but after a few minutes you change your mind and want to cancel that order. The food will be force fed down your throat regardless. Because after all you did order it.

## Never synchronous

One of the design decisions for Promises was to make them resolve earliest at the end of the current event loop, in order to facilitate solving race conditions with multiple promises created together. It means this code:

```js
console.log('before');
Promise.resolve(42).then(x => console.log(x));
console.log('after');
```

Will show `before`, `after`, `42` in the console. No matter how you try to create a Promise, you can't get it to deliver you a value between those two console log calls.

As a practical result, you can convert from synchronous to Promise, but cannot convert from Promise to synchronous. That's just an artificial restriction, because callbacks would be able to convert from sync to callback then from callback to sync, such as through this Array forEach trick:

```js
console.log('before');
[42].forEach(x => console.log(x));
console.log('after');
```

Will show `before`, `42`, `after` in the console.

The impossibility of going back to synchronous once you convert to Promise means that using Promises in a code base will force code around it to be Promise-based *even* when it doesn't make sense. I can understand why async code forces surrounding code to become async too, but Promises make this effect worse by forcing sync code to become async. That's yet another opinion inserted into Promises. A neutral stance would be to have the primitive make no claims whether the data will be delivered synchronously or asynchronously. Promises are what I call a "lossy abstraction", similar to lossy compression, where you can put stuff in that container, but when you take it out of the container, it's not quite the same as it was before.

Imagine you order a hamburger in a fast-food chain restaurant, and the clerk immediately picks a hamburger that was ready, and passes it to you. However, once you grab it with your hand, they are still holding it firmly and don't allow you to take it. They just stare at your face while gripping it firmly. Then, after the clerk counted until 3, they release it. You take your burger and leave, thinking: what a weird place. For no good reason, they just wanted to make you wait, "just in case".

## `then()` is a mix of `map()` and `flatMap()`

When you call `then()` on a Promise, you can either return a normal value or return a Promise. Interestingly, both lead to the same situation:

```js
Promise.resolve(42).then(x => x / 10);
// same as
Promise.resolve(42).then(x => Promise.resolve(x / 10));
```

This is to avoid a Promise of a Promise, so internally `then` will autoconvert returned values to a Promise, and then also automatically flatten it.

To some degree, this makes sense and helps you because it fills in the blanks when you forget some detail, but try to imagine that Promises have the methods `map`, `flatten` and `flatMap` (map then flatten) **internally** but they never exposed those methods publicly. We only have `then` which does all of that. Can you see the restriction? I am restricted to using `then`, a shortcut method that does some automatic conversions, even in cases where I'd like to have more control over what's happening.

A long time ago when Promise was being forged by Sauron in the unyielding fires of Mount Doom, people recommended that Promises have separate methods for `map` and `flatMap`, in [this epic GitHub thread](https://github.com/promises-aplus/promises-spec/issues/94). It was dismissed as fantasy belonging to category theory and functional programming.

I don't want to talk much about functional programming in this blog post other than one remark: it is difficult or impossible to create neutral programming primitives without following Mathematics. So Mathematics aren't involved as some kind of alien intrusion of one science into real-world engineering. Mathematics just defines things that *make sense*, so if you want things to not fall apart under their own weight, maybe you should take a look at some math.

But I can easily summarize to you some concerns raised by functional programmers in that discussion. What if Promises had `map`, `flatMap`, `concat`? There are many other primitives that are also `concat`enable and `map`pable. For instance, arrays have `concat` and `map`, and are [getting `flatMap` soon](https://tc39.github.io/proposal-flatMap/). If you've used [ImmutableJS](http://facebook.github.io/immutable-js/), then you've seen that it has many primitives that have `map`, `flatMap`, `concat`, etc. That's cool! 

So what if I would write code that just calls `map` and `flatMap` and `concat`, but **doesn't care** what that primitive actually is. My code just cares that the input has those methods. That would actually be pretty sweet for testing, because I could just pass an array as mocked data. So my code which uses ImmutableJS and async tasks in production would also work in the same way with basic arrays during testing. Functional programmers use words like "generics", "programming with typeclasses", "monads", etc, but it means we could have common names for all these primitives that share common methods. It would be a bummer if one primitive would have the method `concat` while the other would have `concatenate`, and they would basically do the same thing, but with slightly different APIs and semantics. So it's better to recognize that Promises *can practically be* concatenated, so they should have the `concat` method. Promises can practically be mapped, so let's have the `map` method. Promises can practically be chained, so let's have the `flatMap` method.

But unfortunately that's not the case, and the design of Promise turned out to squash `map` and `flatMap` together with some special autoconversion logic just because mapping and chaining looked so similar that they thought it was pointless to have two methods.

## Conclusion

You know, promises still work, you can get things done and everything is fine. No need to panic. They are just so weird, and unfortunately opinionated. They force some behaviors to always happen even when it doesn't make sense. That's okay because we can work around it. Promises make it hard to reuse, but that's also okay because we can work around it. Promises can't be cancelled, that's okay because we can just be a bit wasteful and just let the execution happen anyway. It's just a bummer that we *have* to work around them. Also a bummer because so many new platform APIs are now Promise-based, and we even have syntax sugar for Promises: `async`/`await`. So we'll have to live with its weirdness for many years to come. They could have been designed differently, though, had some details around laziness been taken into account.

Here are two examples of how Promises would look like if they were designed with Mathematics in mind: [fun-task](https://github.com/rpominov/fun-task) and [avenir](https://github.com/yelouafi/avenir). They share a lot of similarities because they are lazy. They differ only in naming and availability of methods (perhaps?). But both have *less opinions* than Promises because they are: (1) lazy, (2) allow synchronous resolution, (3) allow cancellation. Only *fun-task* separates `map` from `flatMap`, though.

**Promises were invented, not discovered**. The best primitives are discovered, because they are often neutral and we can't argue against them. For instance, the circle is such a simple mathematical concept, that's why people discovered it instead of inventing it. You often can't "disagree" with a circle because there's no opinion embedded in it, and it occurs often in nature and systems.

