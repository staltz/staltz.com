---
layout: post
title: "Cold and hot callbacks"
tags: [blog]
---

Once you start your journey learning RxJS (or any Rx for that matter), you will soon enough encounter the issue of [cold and hot Observables](https://egghead.io/lessons/rxjs-demystifying-cold-and-hot-observables-in-rxjs). Most likely you had a mental model of how Observables worked, until things started behaving strangely: an Observable emitting twice because down the chain somewhere there were two separate subscriptions. Then you discover that Observables are by default "cold" and in order to get what you want, you need to make them "hot" by using an operator like `share()`.

It's possible that you rant about how annoying this is and that hot should be the default since it matches your mental model better. It is possible that you complain that Rx had poor design. It's normal to temporarily think like this, I've been there too. But ultimately, learning about the matter carefully, you will discover that there was indeed no fundamental design flaw in Rx. It is simply an inevitable issue that exists in nature, and is not just an "Rx thing".

To prove that, I'll demonstrate how JavaScript has always had "cold and hot", through callbacks.

First, let's remind ourselves what is the purpose of callbacks. Because JavaScript is single-threaded with an event loop, sometimes to get results you will need to wait, and the way of getting those results is through a function, called a "callback". It's a way of asking some code in part A to deliver data to a function in part B. Let's call A the "Producer" and B the "Consumer". Here's a typical example:

```javascript
function cb() {
  console.log('beep')
}

setInterval(cb, 1000)
```

The producer is a timer internal to the browser's implementation and the consumer is our callback function `cb`. The timer producer is **created** when we call `setInterval`. Without that call, the timer does not exist. If we call `setInterval` again, we will create a new timer, even if we use the same consumer `cb`.

Now check this different type of callback system in JavaScript:

```javascript
function handler(ev) {
  console.log(ev.clientX)
}

document.addEventListener('click', handler)
```

The producer is the event system and the mouse module internal to the browser, and the consumer is a callback function `handler`. This time, when we call `addEventListener`, we're not creating a new producer. The event system in the DOM is there no matter if we added an event listener or not. If we call `addEventListener` again, there won't be a second event system in place.

With `setInterval`, **registering the callback will trigger the creation of a producer**. This is a side effect. With `addEventListener`, registering the callback will not trigger any creation, nor will cause any side effect.

- **setInterval** is cold
- **addEventListener** is hot

These are very old APIs in JavaScript (technically addEventListener is a bit recent, but similar API existed before). Is there a fundamental flaw in callbacks that led to this difference in behavior? Not really, callbacks as consumers are very simple and exist in many other languages. Like the mathematical circle, callbacks were discovered, not invented. Callback-based producers, such as `addEventListener` or `setInterval`, behave differently simply depending on how and when data is produced.

In the case of `setInterval`, we want to **spawn the execution of a new timer**, and get informed of the timer ticks. In the case of `addEventListener`, we don't want to spawn an execution, we simply want to observe what's already being produced.

So, there you go, cold and hot is an issue surfacing in callbacks too, not just with RxJS Observables. When you need to convert from cold to hot, you need to decide when is the execution spawned and how to inform multiple consumers. Let's make `setInterval` hot, for instance.

```javascript
var handlers = []

setInterval(function () {
  handlers.forEach(handler => handler())
}, 1000)

function addIntervalListener(handler) {
  handlers.push(handler)
}
```

Line-by-line, this means: (1) we have a list of many consumers (*handler callbacks*), (2) we spawn a new timer producer with delay 1000 ms, (3) we have an API for adding an observer to this ongoing producer.

Adding an interval listener in this case will have no effect whatsoever on the execution of the timer. We can change that if we want, so that the timer producer is only spawned when the first handler is added.

```javascript
var handlers = []

function addIntervalListener(handler) {
  handlers.push(handler)

  if (handlers.length === 1) {
    setInterval(function () {
      handlers.forEach(handler => handler())
    }, 1000)
  }
}
```

Now, when our program executes, there will be no timer producer. Only when we do the first `addIntervalListener`, the timer will be spawned. We can take this further and stop the timer producer when the last listener is removed:

```javascript
var handlers = []
var interval

function addIntervalListener(handler) {
  handlers.push(handler)

  if (handlers.length === 1) {
    interval = setInterval(function () {
      handlers.forEach(handler => handler())
    }, 1000)
  }
}

function removeIntervalListener(handler) {
  if (handlers.indexOf(handler) === -1) return
  handlers.splice(handler)

  if (handlers.length === 0) {
    clearInterval(interval)
  }
}
```

Fun fact: this above matches precisely the concept of a ConnectableObservable with `refCount` to transform a cold Observable to a hot Observable.

Rx did not introduce cold and hot as a design decision, it simply highlighted a pattern and gave it a name. Cold and hot will not go away if you use callbacks. Cold and hot will not go away if you use Promises (they are by the way hot by default, the producer is spawned when you call a Promise constructor. The common wisdom of putting Promises in a factory function makes them cold). Cold and hot will not go away with async/await (under the hood it's Promises). Cold and hot just exists.

If you are not convinced and would still prefer hot Observables to be the default, try building a hot-only Observable library. [I've done that](https://github.com/staltz/xstream/) and got to the conclusion that cold by default is better for the general case. It's easy to go from cold to hot, but not always obvious to do the other way (how do you "spawn a new execution" of user clicks? Do you record all the clicks and replay them? Do you ask the user to repeat their clicks?). And if something is already hot, making it hot again is harmless and transparent. If you want to learn more, please read [this blog post by Dave Sexton](http://davesexton.com/blog/post/Hot-and-Cold-Observables.aspx), it's the Definitive Guide for Rx Cold and Hot.

Asynchronous programming is hard, but it can be made a bit easier by identifying common issues and providing tools to compose async patterns together in a way that feels like playing with Legos. RxJS does just that. If you would *by hand* compose callbacks of all sorts together, you would eventually hit the same subtle cold and hot issues, but without a common terminology and toolkit to solve them.
