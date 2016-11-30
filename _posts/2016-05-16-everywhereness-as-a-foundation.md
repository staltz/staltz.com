---
layout: post
title: "Everywhereness as a foundation"
tags: [blog]
---

I have been building and using reactive programming tools for JavaScript, such as [Cycle.js](http://cycle.js.org/), [xstream](http://staltz.com/xstream/), and [RxJS](http://reactivex.io/rxjs/). I believe and teach that Observables or streams should be ubiquitous in a codebase.

I often hear as a counter argument that "*When all you have is a hammer, all problems look like nails.*" Even from Rx experts, they say you should not or need not use Observables or streams everywhere. Use the right tool for each job.

While I understand that reasoning, I choose "Observables everywhere" because I want to reap the benefits that *Everywhereness* brings. Also, while the Hammer and Nails proverb is true for many libraries, it's not actually sincere when judging very general tools.

For instance, in a functional programming language, functions control everything. In this context we could say that a function is a hammer. But that is not a sincere claim because functions are very general. They would be more accurately described as simply tools. A hammer is a very specific instance of a tool and hence functions are not limited in purpose as hammers are.

I view observables in a similar way. They are very general tools that can solve a multitude of problems. They can be used for synchronous values or asynchronous values. They can be used for single or multiple values. And using them for all of these different use cases is convenient. If something can be observed &mdash; which means virtually anything in an application &mdash; then it can be modeled as an observable.

However even in cases where observables are not as convenient as other techniques (say imperative programming with `for` loops) there is another benefit in pursuing *everywhereness*: using a tool or technique everywhere can provide useful guarantees. This applies not just to observables but too many other techniques, like reducers in Redux or strongly typed functional programming or 100% serializable and explicit state.

When you apply a pattern everywhere it ends up becoming a guarantee: that 100% of your code will follow that pattern. Once you have that guarantee you can build powerful developer tools or cross module features.

<h2 id="everywhereness-in-redux" class="hr"><span class="hr">EVERYWHERENESS IN REDUX</span></h2>

For instance when [Dan Abramov wanted to build hot reloading tools for React](https://www.youtube.com/watch?v=xsSnOQynTHs), he ended up building his own [Flux](https://facebook.github.io/flux/) variant called [Redux](http://redux.js.org/). The Redux pattern is more important than the Redux Library. Which is: **all** state is explicit and serializable and **every** update to state happens through a reducer in an immutable style. When 100% of state behaved in this manner, Dan was able to build powerful hot reloading tools. Notice how without that guarantee he would not be able to reliably build those tools. *Everywhereness* of immutable and serializable state updates served as a foundation on which the developer experience was made great.

> The *whole* state of your app is stored in an object tree inside a single store.
> ...
> It also enables very powerful developer tools, because it is possible to trace *every* mutation to the action that caused it.
&mdash; [Redux docs](http://redux.js.org/index.html)

<h2 id="everywhereness-in-elm" class="hr"><span class="hr">EVERYWHERENESS IN ELM</span></h2>

Another example is [Elm](http://elm-lang.org/), a strongly typed functional programming language for frontend. Elm compiles down to JavaScript, but unlike JavaScript, the compiler plays a crucial role in the main features of Elm. The compiler will make sure the programmer has covered every corner case before the program is valid and compiles to JavaScript.

This means for instance that you cannot have an `if` statement without an `else` block, because otherwise you would have a corner case unspecified. The Elm compiler make sure that 100% of your code is thoroughly checked against corner cases and error cases. This *everywhereness* becomes a guarantee. And it is only because of this guarantee that Elm programs have virtually no runtime errors. This is known to be the strongest benefit in adopting Elm and many developers praise it. It also makes codebases extremely reliable and clearly help achieving business goals.

<h2 id="everywhereness-in-cycle-js" class="hr"><span class="hr">EVERYWHERENESS IN CYCLE.JS</span></h2>

It is not different with streams everywhere, as we have with [Cycle.js](http://cycle.js.org/). The goal of the framework and pattern is to model every inter-module interaction as functional reactive streams, and every impure interaction with the real world with streams as well. Even control flow is converted to data flow through streams. This *everywhereness* becomes a foundation. We know that all code will execute in the context of a stream of events in a network of streams.

Given that guarantee, we are able to visualize all your application code as a network of streams. This is what we call the *dataflow graph*. Given any Cycle.js code, you can trivially build the dataflow graph with the streams involved. This property made it possible to build a [Chrome DevTool](https://github.com/cyclejs/devtool) (early version) to visualize the dataflow graph in run time.

[![Cycle.js dataflow graph DevTool](/img/dataflow-devtool.gif)](/img/dataflow-devtool.gif)

Had any significant part of your Cycle.js application been built outside of the network of streams, the dataflow graph in the DevTool would not have been so useful. To be useful, the graph must give an accurate and *complete* macro-perspective to your code.

The dataflow graph visualization is not the only goal of pursuing *everywhereness* of streams, but it is an easy benefit to explain. Once the mental model of your application is actually visualizable in a DevTool, it stops being a *mental* model and becomes a *tangible* model. Instead of *imagining* the interconnection and concurrency between your modules, you *see* it. This way, a team of programmers can more easily share a common understanding of the behavior of the application, because an accurate macro-level map of it is available.

<h2 id="choosing-everywhereness" class="hr"><span class="hr">CHOOSING EVERYWHERENESS</span></h2>

Choosing to use the same pattern or technique everywhere can serve as a foundation on which you can build additional features that impact the entire application.

This does not mean any pattern, when applied everywhere, will bring an interesting property. For instance, I haven't yet discovered what beneficial property does using `for` loops everywhere provide us, compared to using e.g. `array.forEach()` in JavaScript.

Instead, it means: look for the macro property you want for your codebase, and then choose the pattern which will give you that property once applied everywhere.

For instance, if you know you want to achieve accurate and complete bug reports, with optional replaying/rewinding, you most likely need an architecture that keeps all state serializable. If you want to keep code highly maintainable and reliable by a team of developers and minimize the feedback loop when it comes to trivial mistakes in code, you most likely need a strongly typed functional programming language. If you want to have your team of developers share the same exact macro understanding of a large application (which accrues to quicker debugging and less bugs produced), while being able to deliver features related to complex interconnected requirements, you most likely need an architecture with explicit dataflow and reactive streams.

Choose the pattern-applied-everywhere that delivers the guarantees you need to achieve your goals.
