---
layout: post
title: "Libraries shouldn't support everything"
tags: [blog]
---

As soon as you open source a library, the more popular it is, the more requests for "can we support ___?" you will see. In fact, this is a natural course for software in general: to always grow its coverage of features. These happen often with digital products: "can it support export-as-spreadsheet?", "can it support login with social media?", "can it support other operating systems?", etc.

Let's call that "Software Entropy", a natural tendency of software to become monoliths, more and more complex and internally inconsistent.

Back to our subject: programming libraries. Great libraries often follow the [Unix philosophy](https://en.wikipedia.org/wiki/Unix_philosophy): *do one thing and do it well*. I could mention numerous popular examples of this, but I'll pick an unconventional one this time: [deePool](https://github.com/getify/deePool) by @getify. It only does recycling of objects in an object pool, and does it well.

Libraries provide a layer of *reusable* software which we *compose* into our programs. Libraries may be thin or thick. An example of a thin library is [is-svg](https://github.com/sindresorhus/is-svg), which has a very narrow and specific use case. An example of a thick (somewhere between a small utility and a framework) library is the [Ava](https://github.com/avajs/ava) test runner. Both are written by the same person and both can be used for testing JavaScript applications. It is easy to define the "one thing" that a small utility library does, like with **is-svg**: it only answers a simple question. With thicker libraries, however, it becomes much harder to recognize the boundaries of that "one thing". While thin libraries are concrete, thick libraries are abstract in purpose. One could say the one thing that Ava does well is provide a foundation on which to run your tests concurrently.

**Thick libraries are in constant tension with Software Entropy.**

As a maintainer of a couple thick libraries myself, I experience that weekly. I built [xstream](https://github.com/staltz/xstream) as a thick reactive library, and while in my mind I know precisely the one thing that it does, it is hard to convey that to users. As a result, users expect this library to support more and more features, which I believe have no place in the library. Like Lodash or Ramda, xstream is a library containing many (not one) helper functions.

Still, xstream has a single purpose, which I would say is "to provide a beginner-friendly foundation for reactive programming". It may sound too vague, but in reality each word in that statement is significant. As a *foundation*, it should be fast enough so utilities and frameworks can be built on top of it. As *beginner-friendly*, it should match most people's intuition, should avoid decision paralysis (happens when there are too many operators), and should have smart defaults. Finally, it's for reactive programming only, enabling programming with reactive streams.

Because thick libraries are abstract in purpose, it becomes harder to detect their single purpose. Their purpose needs to be communicated carefully. Thin libraries don't need a slogan to communicate their purpose, because it is often self evident. But thick libraries should make use of slogans and contributor guidelines.

The natural tendency in open source is to build more and support more. It is hard to say no to pull requests. But it is necessary to clearly delineate the purpose of a library so it becomes obvious why pull requests are accepted or dropped. I think Rich Hickey has mastered the art of establishing the abstract purpose of Clojure's core (thick) library, clearly expressed in his various talks. We need more of that type of thinking to push back the creep of Software Entropy into open source libraries.
