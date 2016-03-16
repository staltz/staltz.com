---
layout: post
title: "All JS libraries should be authored in TypeScript"
---

I am a JavaScript programmer, and I make some libraries. Recently, however, I've been writing [TypeScript](http://www.typescriptlang.org/) for [RxJS version 5](https://github.com/ReactiveX/RxJS) (used in [Angular 2](https://angular.io/) which is also authored in TypeScript), and I'm in the process of rewriting [Cycle.js](http://cycle.js.org) in TypeScript.

Typed vs dynamic is a rather controversial topic, so I'm not trying to spark that discussion all over again. But I believe all JavaScript libraries which are **intended to be used by thousands of developers** should be written in TypeScript. It's not about applications or websites written in TypeScript. It's about libraries. They should be written in TypeScript and here's a couple reasons why.

<h2 id="better-documentation" class="hr"><span class="hr">BETTER DOCUMENTATION</span></h2>

By building the library from the ground up with types, you make clear what are the constraints and preconditions of your API.

Often in JS libraries, the types are vaguely defined as an afterthought when writing docs. Each function is described as "*we expect the argument to be X*" but this is not always thoroughly thought, and sometimes leaves holes. Either the function can accept more types than what was documented or the function has invisible constraints that were not communicated in the docs, which leads to runtime errors.

Immutable.js actually is a [good example](http://facebook.github.io/immutable-js/docs/#/List) of thoroughly considering the types of its API, written in TypeScript. Also React's documentation carefully considers the types in its API, e.g. [here](http://facebook.github.io/react/docs/glossary.html#nodes-and-elements).

<h2 id="more-reliable-libraries" class="hr"><span class="hr">MORE RELIABLE LIBRARIES</span></h2>

Types are there whether you like it or not. APIs never accept "whatever" and output "whatever". There are always preconditions and postconditions. Good library APIs have good contracts.

Usually, a method accepts either a string or a number or a function or an object, etc.
Even if the method accepts objects with varied structure, you always have some assumptions of what is a valid object or not. For instance, maybe all the properties are optional and some of them are `payload`, `port`, `ignore`, `host`, but these are usually a limited amount of predefined properties, and e.g. the typo `paload` would be an invalid property.

The types are there. Instead of leaving them implicit, you can just make them explicit. Interfaces are a good way of defining the structure of valid objects.

Type checking at compile time is essentially a stronger linting tool. Most of the serious and modern JS libs nowadays use some form of linting anyway. Type checking is just a better one. You provide constraints in the form of types to help the "*type checking linter*" figure out what is valid and invalid code. This is a very unorthodox way of explaining what compile-time type checking is, but perhaps it makes more sense to the JavaScript-minded who are already accustomed to using linters.

<h2 id="better-support-for-typescript-users" class="hr"><span class="hr">BETTER SUPPORT FOR TYPESCRIPT USERS</span></h2>

Even if a library is authored in TypeScript, it will still be consumed as a JavaScript library for most people. I admit I myself will probably still use JS here and there on a daily basis even though libs may be written in TypeScript.

But some people may choose to build their project in TypeScript, and for those, you will be making their life much easier if your types are built from bottom up, instead of stamped on top as an afterthought `.d.ts` type definition file. By building the library from ground up in TypeScript, it is more likely your `.d.ts` files will be reliably reflecting the actual type constraints.

**Why not build libraries in [Flow](http://flowtype.org/)?** Flow is good and very similar to TypeScript. There is nothing wrong with Flow, and in some aspects it has advantages over TypeScript with its nullable vs non-nullable type annotations. At the time of writing, TypeScript does not support that feature.

I would argue that while nullable and non-nullable annotations are great, both Flow and TypeScript provide compile-time type checking for most of your type constraints, and TypeScript is slightly ahead since it had the benefit of a head start. I hope TypeScript one day gets nullable and non-nullable annotations. In the meanwhile, I like to compare TypeScript vs Flow as Git vs Mercurial. Both of the competing technologies are very similar, they may have their minor pros and cons, but one of them is considerably ahead in adoption and quickly gaining the status of a solid foundation on which to build software.

<h2 id="a-foundation-for-the-future" class="hr"><span class="hr">A FOUNDATION FOR THE FUTURE</span></h2>

There are other ways of declaring types, like with [rtype](https://github.com/ericelliott/rtype), FlowType or [PureScript](http://www.purescript.org/). I can't say if TypeScript will be the de facto type definition standard for JavaScript, but at least right now it's the most popular one.

And some type definitions are better than none. It may be quite feasible to build conversions from `.d.ts` to FlowType type definitions or other languages type definitions, so whatever the *Future of Typed JavaScript* will be, having `.d.ts` files today will help us in the future to migrate towards it.

<h2 id="typed-programming-matters" class="hr"><span class="hr">TYPED PROGRAMMING MATTERS</span></h2>

There is a culture in the JavaScript community that "*types don't matter*", but I'd like to conclude this by reminding that *types are practically always there*, there is no such thing as entirely dynamic JS code. In JavaScript they are implicit and agreed with documentation. Making them explicit and using them as rules has benefits to make our code more robust.

I'm not from the "typed programming camp". By far JavaScript (dynamic) is my most used programming language. Python (dynamic) is one of my favorite languages. But types help us and the pseudo down side they bring are lint-like warnings which at worst just "annoy" some developers. We are already linting because we believe it makes better code. Types are stronger. Types matter.
