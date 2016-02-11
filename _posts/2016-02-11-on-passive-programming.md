---
layout: big-tweet
title: "On the pains of Passive Programming"
---

Having done a lot of Reactive Programming lately, I went back to doing a bit of Passive Programming in a React/Redux codebase. (Read what [Reactive vs Passive](http://cycle.js.org/observables.html#reactive-programming) means).

I had forgotten how confusing Passive Programming can be. The symptoms are common: I often feel lost and ask myself "*when is that certain (Redux) action dispatched?*", to which I can only get an answer by doing a search throughout the whole codebase for that specific action type.

It gets harder when actions need to be orchestrated, weaving through components, reducers, and sagas. You easily lose track of the flow of data.

It isn't particularly *hard* to work with. It is just misleading. Instead of being able to read the entire flow of data of a certain concern in a few lines of code, the definition of the flow of data is sprinkled around in the codebase.

I had forgotten how much event spaghetti comes with real-world Passive programming.
