---
layout: post
title: "Why we built xstream"
---

For the past two years I have been using [RxJS](http://reactivex.io/rxjs/) extensively, in [Cycle.js](http://cycle.js.org/) and in other contexts. Recently, [TylorS](https://github.com/tylors) and I have decided to build a new reactive streams library comparable to RxJS, called [xstream](http://github.com/staltz/xstream).

**TL;DR**: we needed a reactive stream library tailored for Cycle.js. It needs to be "hot" only, so users don't need to think about subscription semantics hidden in drivers. It should have only a few and intuitive operators, those that are relevant to Cycle.js apps. Also, it needs to be really small in kB size in order to keep the size of drivers small.

<h2 id="reasoning-about-subscribe" class="hr"><span class="hr">REASONING ABOUT SUBSCRIBE</span></h2>

RxJS Observables are generally cold. This means that two different calls to `subscribe()` will generate two separate side effect free executions of the Observable. Hot, on the other hand, is when different calls to `subscribe()` may share the same execution of the Observable.

Hot and cold is an issue that is only noticed when subscribing. On the other hand, in Cycle.js, we only allow `subscribe()` to happen inside *drivers* (think "plugins"). This means that application code is unaware of subscriptions. It becomes hard to understand and debug an application when developers make the assumption that there is only one execution for each of the Observables coming from drivers. In reality, it's a hidden source of problems that they need to be aware of.

The natural expectation of developers using Cycle.js is that the Observables they are handling are hot. Our goal should be to free developers from thinking about what happens inside a driver with regards to subscriptions. They should be focusing on the contents of the `main()` function. We have seen developers, both beginners and experts, trip over Observable "temperature" in Cycle.js. Example: [this issue](https://github.com/cyclejs/core/issues/238#issuecomment-197304094).

In *xstream*, all streams are hot. They are a hybrid between RxJS's Subject and a publish-refCount cold Observable. All streams keep a list of listeners, and have operators to create new streams dependent on the source stream. Stream execution is lazy through reference counting, with a synchronous start ("connect") and an asynchronous and cancelable stop ("disconnect"). This is built to allow for those cases where we synchronously swap the single listener of a stream but we don't want to restart the stream's execution. The goal is to have a smart default behavior that "just works" transparently in Cycle.js apps. But we want to keep laziness, to avoid wasting resources.

In general, *xstream* is more suitable than RxJS when the number of `subscribe()` calls in an application is very small, and most of the logic is in the operator chain. On the other side, RxJS is more suitable than *xstream* when there are multiple calls to `subscribe()` of multiple Observables, or when RxJS is mixed with imperative programming, object-oriented programming and other diverse settings.

<h2 id="a-few-operators" class="hr"><span class="hr">A FEW OPERATORS</span></h2>

We made a quick survey in the Cycle.js community to check what are the most common operators used on a daily basis. We even ran a small script to gather a histogram of operators used in a codebase. It turns out, out of all the 175+ operators in RxJS, only about 20 of them are commonly used in Cycle.js apps, such as: map, filter, startWith, combineLatest, merge, of, take, scan, skip, flatMap, flatMapLatest, interval, let, distinctUntilChanged, withLatestFrom, takeUntil, concat, last, debounce.

The presence of all the other 155+ operators in RxJS creates noise when choosing operators. While glancing the list, developers are not sure if a particular operator is commonly used or relevant for their problem at hand.

By limiting the amount of operators to choose from, we essentially focus the programmer's attention on those operators that are highly likely to be useful for their current problem. In xstream there are only 26 core operators. In case more operators are needed there are more in the `extra` module, but those few in `core` are the default menu to choose from.

<h2 id="intuitive-naming" class="hr"><span class="hr">INTUITIVE NAMING</span></h2>

A lot of names of operators in RxJS are legacy from Rx.NET and Haskell. In some ways, this is a very good feature if you do cross-platform development, because once you know Rx.NET, you also immediately know RxJava, RxJS, RxSwift, and others. Rx has been even been called a cross-language "DSL" for asynchronous programming.

Since we were starting from scratch building a library for JavaScript, we had the chance to name the operators in a way that would make sense for beginners that don't carry any previous experience in Rx.NET nor Haskell. We wanted to give names that made sense for an average JavaScript programmer and Cycle.js beginner.

Our guideline was that a name should be a really strong hint towards the behavior of the operator. For instance the *xstream* operator `remember()` hints that the operator has some memory, it remembers something. In fact, it keeps in memory the most recently emitted event, and broadcasts that stored event to any newly added listener.

*xstream* has `fold` which works like RxJS's `scan`. We took inspiration from Elm's Signal `foldp`, dropping the `p` for "past" since we would rather choose the explicit name `foldPast` or simply `fold` since there is no other direction to fold from ("foldFuture"?). RxJS's equivalent of `reduce` is `fold` plus `last` in *xstream*. Our guideline is to make each operator in the chain easy to grok and read, even if it costs more characters to type.

We also noticed how people without a functional programming background had difficulties understanding `flatMap`. It usually becomes clear once it is explained as a `map` (a value to a stream) plus `flatten`. *xstream* has `map` and `flatten`, no `flatMap`. Also, `flatten` is equivalent to RxJS's `switch`, while `flattenConcurrently` is equivalent to RxJS's `mergeAll`. We believe switching is a safer default with regard to resources consumed and expected behavior, that's why it deserved the `flatten` name. We also apply an optimization to blend together operators `map` and `flatten` as a hidden "switchMap" operator, so there is no additional cost to having *two* operators when compared to one operator.

When we need to choose between terseness and readability, we choose the latter. For experienced programmers, the cost of typing a few more characters is at worst a first-world problem. If developers can understand code in *xstream* without reading the documentation, we will have accomplished our goals. Of course, we will test-drive the API with the community. So far we just have a good guess on what is an intuitive API.

<h2 id="extra-small" class="hr"><span class="hr">EXTRA SMALL</span></h2>

*xstream*'s shorthand as `xs` is a convenient pun, because this is a very small library.

When building the next big version of Cycle.js, called Cycle Diversity, we made it possible to build a driver in one stream library while consuming in in an application built with another stream library.

For instance this would enable one to use the Cycle DOM driver written in RxJS v4 with a Cycle.js app written in RxJS v5. However, the off-the-shelf packages for these libraries are quite large (200+ kB each). Including both of them would be 400+ kB, before any user code is added. There are ways of customizing them to have only what is needed, but there is still some common large boilerplate to bring along, and it is quite common for developers not to customize their consumed variant of RxJS.

We wanted to provide a smart default. *xstream* is under 30 kB in size, and it is ideal for using as a stream library in a driver. Cycle applications can still be written in RxJS v5, for instance, while utilizing a driver written in *xstream*.

<h2 id="conclusion" class="hr"><span class="hr">CONCLUSION</span></h2>

I am still a core contributor and advocate of RxJS and will remain to be so. RxJS is a better option than *xstream* as a general-purpose library for reactive programming in the browser and in Node.js. In many ways it is more powerful than *xstream*, providing access to cold Observables (which are more generic than hot ones), schedulers (which *xstream* has none so far), marble diagram testing, and dozens of battle-proven operators. It is the ideal library to integrate with conventional imperative code and JavaScript.

*xstream* is not a competitor to RxJS in those cases. It is instead a complementary library, that distills the best of RxJS in the most appropriate API for Cycle.js apps.
