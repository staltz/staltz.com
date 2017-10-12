---
layout: post
title: "Primer on RxJS Schedulers"
tags: [blog]
---

Schedulers in RxJS are things that control the order of event emissions (to Observers) and the speed of those event emissions. It also controls the order of subscriptions. Without getting too theoretical, consider this example:

```js
const a$ = Rx.Observable.of(1, 2);
const b$ = Rx.Observable.of(10);

const c$ = Rx.Observable.combineLatest(a$, b$, (a, b) => a + b);

c$.subscribe(c => console.log(c));
```

What do you expect to see in the console? Most people would guess:

```
11
12
```

Because the first `1` from `a$` would be matched with the first `10` from `b$`, and only after that would `2` from `a$` be matched with `10` from `b$`.

In reality, this is what appears in the console:

```
12
```

The `1 + 10` combination never took place. The reason why this happens is because both Observables `a$` and `b$` are "synchronous", they happen as quick as possible. What should the order of emissions be? It's ambiguous, it could be either one of these:

- `1`, `2`, `10`
- `1`, `10`, `2`
- `10`, `1`, `2`

In the case of ambiguity, we should be able to describe how order the emission of events should go. That's what schedulers are for. By default, RxJS uses the so-called *recursive scheduler*. Here is how it would work under the hood:

1. `c$` is subscribed
2. combineLatest's output Observable is subscribed
3. combineLatest's first input, `a$`, is subscribed
4. `a$` emits `1`
5. combineLatest stores `1` as the latest value for `a$`
6. `a$` emits `2`
7. combineLatest stores `2` as the latest value for `a$`
8. combineLatest's second input, `b$`, is subscribed
9. `b$` emits `10`
10. combineLatest stores `10` as the latest value for `b$`
11. combineLatest now has values from `a$` and `b$`, so it emits `2 + 10`

Notice that the order of emissions was `1`, `2`, `10`. The interesting part is that `a$` events are sent as quickly as possible, before `b$` got subscribed to. RxJS uses this scheduler by default for two reasons:

- Performance is overall better with this strategy
- Stack traces are simpler to follow in the debugger

However, we can customize the order and the speed of these event emissions by using a different scheduler. We can use the `asap` scheduler on `a$` to "slow it down":

```diff
-const a$ = Rx.Observable.of(1, 2);
+const a$ = Rx.Observable.from([1, 2], Rx.Scheduler.asap);
 const b$ = Rx.Observable.of(10);

 const c$ = Rx.Observable.combineLatest(a$, b$, (a, b) => a + b);

 c$.subscribe(c => console.log(c));
```

The second argument for `from` is a scheduler to customize the emission of events. The `asap` scheduler uses [setImmediate](http://github.com/YuzuJS/setImmediate) to schedule tasks to run as soon as possible, but not synchronously. After this change, the console will show:

```
11
12
```

Because this is the ordering:

1. `c$` is subscribed
2. combineLatest's output Observable is subscribed
3. combineLatest's first input, `a$`, is subscribed
4. **combineLatest's second input, `b$`, is subscribed**
5. `b$` emits `10`
6. combineLatest stores `10` as the latest value for `b$`
7. `a$` emits `1`
8. combineLatest stores `1` as the latest value for `a$`
9. combineLatest now has values from `a$` and `b$`, so it emits `1 + 10`
10. `a$` emits `2`
11. combineLatest stores `2` as the latest value for `a$`
12. combineLatest emits `2 + 10`

The order of emissions was `10`, `1`, `2`. To get a different ordering of emissions, we can customize the scheduler for `b$` too:

```diff
 const a$ = Rx.Observable.from([1, 2], Rx.Scheduler.asap);
-const b$ = Rx.Observable.of(10);
+const b$ = Rx.Observable.from([10], Rx.Scheduler.asap);

 const c$ = Rx.Observable.combineLatest(a$, b$, (a, b) => a + b);

 c$.subscribe(c => console.log(c));
```

Now the order of emissions is `1`, `10`, `2` because this happened:

1. `c$` is subscribed
2. combineLatest's output Observable is subscribed
3. combineLatest's first input, `a$`, is subscribed
4. combineLatest's second input, `b$`, is subscribed
7. `a$` emits `1`
8. combineLatest stores `1` as the latest value for `a$`
5. `b$` emits `10`
6. combineLatest stores `10` as the latest value for `b$`
9. combineLatest now has values from `a$` and `b$`, so it emits `1 + 10`
10. `a$` emits `2`
11. combineLatest stores `2` as the latest value for `a$`
12. combineLatest emits `2 + 10`

Schedulers are also used for making emissions happen faster, while maintaining the same ordering. For instance, there is a TestScheduler in RxJS which allows `Observable.interval(1000).take(10)` to run synchronously when subscribed, instead of taking 10 seconds to complete:

```js
Rx.Observable.interval(1000, new Rx.TestScheduler()).take(10)
```

The TestScheduler is used internally in RxJS ([see `filter` example](https://github.com/ReactiveX/rxjs/blob/a44d8e5d610fa2c419d0515c456bc924aa1fa095/spec/operators/filter-spec.ts#L37-L44)) to make thousands of time-related tests run very fast, but there are tools like [Rx Sandbox](https://github.com/kwonoj/rx-sandbox/) and active discussions to improve the usage of this scheduler outside of RxJS internals.