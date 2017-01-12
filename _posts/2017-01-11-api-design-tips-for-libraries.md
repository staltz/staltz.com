---
layout: post
title: "API design tips for libraries"
tags: [blog]
---

If you are making a JavaScript library, then this blog post is for you. Other languages probably apply too. I wrote down a few thoughts on how I design the interface of my libraries. These are not truths, these are just one person's opinions on what makes a good library.

**1. Look at the API from the eyes of a naive user**

The most important thing is to have empathy with your primary target audience and constantly ask yourself what makes most sense for them in their perspective. This applies to everything, from the first moments reading the README.md examples to the corner-case use cases of the API. The [Principle of Least Surprise](https://en.wikipedia.org/wiki/Principle_of_least_astonishment) applies strongly here. Designing a library API is quite similar to designing a physical product or anything else in the real world.

**2. Define the purpose and level of abstraction of your library**

First, define the purpose of your library: what problem does it solve? Note, however, that problems may cover different levels of abstraction. "We need to format currency numbers for different locales" is a problem, but so is "we need to build neatly-organized web apps" and so is "our company needs to be efficient". Notice that the first problem is low level, while the others are progressively higher.

It is perfectly valid to have a library that covers a higher-level problem. But usually tools that solve high-level programming problems are frameworks or languages. Once the level of abstraction is chosen, the goal is to solve **that problem in that particular level of abstraction** and solve it well. For instance, if the level of abstraction is low and you are solving formatting of currency numbers, then you shouldn't go into the realm of providing solutions for formatting dates and time. If the level of abstraction is high and the problem is to make frontend development easy, don't attempt to make backend development easy with the same tool.

As a corollary, don't support everything. Keep the purpose and the level of abstraction in mind and don't be shy to reject feature requests. Just politely reply. I'm kind of repeating myself from [this other blog post](http://staltz.com/libraries-shouldnt-support-everything.html), so if you want to dive deeper into this aspect, read that.

**3. Tradeoffs always exist, but unimportant disadvantages also exist**

After your library is built, you can describe its tradeoffs: the pros and cons. Pros should outweigh Cons for the specific purpose you set for the library. Otherwise, it doesn't make sense to adopt the library.

People often use the fact that "tradeoffs always exist" to defend how all tools are equal. This doesn't make sense. You need to keep a close eye on the Cons of your library, and make sure that these Cons are irrelevant or harmless for the original purpose.

For instance, RxJS Observables do not have good backpressure properties (a disadvantage), but offer a composable and declarative API for events and asynchronous programming (an advantage). There is a tradeoff, but the disadvantage doesn't matter for frontend programming use cases. Backpressure concerns are an artificial problem and don't affect UI programming much. The Pros outweigh the Cons.

Without a clear and defined purpose, you cannot be sure that the disadvantages are irrelevant for that purpose. Don't make everything important (because you cannot).

**4. Make the correct way easy, make the wrong way possible**

When it comes to naming of the functions/methods, make the correct way simple and easy, while making the wrong way possible, cumbersome, and explicit. As a rule of thumb, library users are more comfortable using functions with short and familiar names like `render`, `fetch`, `push`, etc, and are cautious to use functions with long names like `sortedLastIndexBy`, `allocUnsafeSlow`, `replacePreviousAndPop`. Your goal, with naming, should be to keep the library user comfortable in using your library in the right way, while making him cautious in using the library in the wrong way. Short names are comfortable, long names are cumbersome.

The wrong way can also be made more explicit with names like [`dangerouslySetInnerHTML`](https://facebook.github.io/react/docs/dom-elements.html#dangerouslysetinnerhtml) or [`shamefullySendNext`](https://github.com/staltz/xstream#shamefullySendNext). It's useful to make the wrong way explicit because (1) it teaches that it is the wrong way, (2) it makes it easy to spot the wrong way in code reviews. Imagine if the wrong way would be complex yet possible, then detecting wrong usage would be hard in code review. Also, library users will eventually try to optimize for code elegance, and an explicitly bad name is an obstacle for that.

A counterexample of this is the RxJS operator `zip`. Even though it is a perfectly valid operator with valid use cases, it is frequently the wrong choice when combining two source Observables in many use cases. I suspect people are drawn to `zip` because it has a short and mnemonic name, alluding to how zippers work. However, since it is rarely applicable, it would have been better to name it `sequentialCombine` or something similar, while naming `combineLatest` as just `combine`, since its use is very common and important.

- `zip` (rare) `-->` `sequentialCombine` (cumbersome)
- `combineLatest` (common) `-->` `combine` (comfortable)

That said, "the wrong way" is usually a property of thick libraries or frameworks. Small libraries usually export one or a handful of functions, and there isn't usually a wrong function. The "wrong way" for those libraries usually pertains to the types of the arguments of functions, which leads us to the next point.

**5. Be always mindful of the types**

You don't need to write your library in TypeScript or Flow or PureScript ([even though you should](http://staltz.com/all-js-libraries-should-be-authored-in-typescript.html)), but you must carefully consider the types involved in your library's API. The reason is that the types are there anyway. A function that expects a string probably won't work at all when given a number. Eventually, you will have to declare the type signature, at least in the docs when explaining how the API works for your users. In other cases, you throw a warning exception that shows wrong types in the browser's developer tools.

So, write the type signatures. This process will make it more explicit to you and to everyone what is "going on". It will help show possibly redundant functions, with overlapping purposes. It will help show potentially confusing APIs. Type signatures are metadata for your API, and give you more information about the API, which means more support information when making decisions about the interface.

Composability may express itself in many ways, and type signatures help show what kind of composability strategy you are using. Maybe the return type of one function can be the input type of another, which is a typical choice in Functional Programming. Maybe there are OOP classes that share some traits in common, which can be expressed as TypeScript interfaces.

Maybe an OOP class has many methods that return the `this` instance, such as in jQuery, allowing a chainable usage. For instance `.before()` returns the `this` object; other functions, though, like `.html()` return a primitive such as a String. Clearly, while some functions are transformative and stay in the realm of the instance (`.before()`), other functions "exit" the instance by returning another type (`.html()`).

Mixing the composability strategy is usually accidental (not intentional) API design. Writing the type signatures makes it easier to track which composability strategy is used, and consistently apply them throughout the library. Consistency is desireable because of the Principle of Least Surprise.

Even if you ignore type signatures, designing an API will anyway relate to types. You can't escape the real existence of types **as contracts**.

**6. Cooperate with the host language**

Don't let your library look alien. It should be easy for your library to interoperate easily with existing code and other libraries. For that, try keeping your library idiomatic with the language and the community. Reuse the standard library, follow the code style, use the language's power instead of reinventing the wheel. Again, the Principle of Least Surprise applies to this aspect as well.

A disclaimer for JavaScript, however: it's a wild and diverse ecosystem, so there isn't always a notion of what is standard. JavaScript was also badly designed from its birth, so it often makes sense to be opionated on how to make the ecosystem better with bold ideas, but don't overdo it. Innovate one thing at a time.

For example, don't build your own linked list data structure if you can use Array (unless your library is exactly just a linked list). "Increment" the ecosystem, don't attempt to replace it.

**7. Be open to feedback**

If your library is somewhat popular, eventually people will come with feedback on how to improve, augment, and sometimes, deprecate your library. It takes some mental effort to categorize received feedback into buckets:

- Are they asking for more supported features?
- Are they using the API in the wrong way and need help to use it in the right way?
- Are they suggesting how the API can be simplified?
- Are they suggesting how the API is flawed?

It's rarely obvious which case it is. I suggest using knowledge of the [XY Problem](http://meta.stackexchange.com/questions/66377/what-is-the-xy-problem) and my heuristic for [accurate diagnosis in layers of abstractions (6:30)](https://youtu.be/1ToJ7cxb1R8?t=393). If users are asking for more features, then you either need to support more features or [reject them as out of scope](http://staltz.com/libraries-shouldnt-support-everything.html).

If the API can be simplified or has fundamental flaws, don't exclude rewriting your library with an entirely different API. Just don't forget to make a breaking change for that. If it's very different, you can even just release an entirely separate library.

- - -

To conclude, go back to the first point I mentioned. It's all about having empathy with the user of your library and giving them a good experience with an interface that frequently "makes sense".
