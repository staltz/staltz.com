---
layout: post
title: "The single tip that made me a better programmer"
tags: [blog]
---

I'll be straight to the point, this is the tip:

> **Gain a deeper understanding of the system.**

Programming can be hard, but what exactly is it that makes it hard? A lot of people compare programming to building, since you get to write code and features get delivered. But that's the happy path. It would be awesome if programming would be mostly about building.

On the contrary, we spend a lot of time just *struggling*, trying to make things *work*. We use our time solving bugs, making slow code faster, browsing StackOverflow, trying to understand error messages or bug reports, testing hypothesis, and whatnot. This part of programming makes us feel like scientists doing experiments in a laboratory, not like construction workers.

Maybe you recognize that once you have "the whole system in your head", you enter a state of flow and are able to stay productive, building features. That's what I want to talk about, getting the system in your head.

Some time ago I wrote about how [understanding is a prerequisite to debugging](http://futurice.com/blog/why-debugging-is-all-about-understanding). Recently I have been experiencing how understanding is a prerequisite for programming in general, not just debugging. How many "modes" are there while programming? I can think of:

- Writing code to deliver features
- Solving bugs
- Learning something (a language, a library, a framework, a codebase)

Gaining deep understanding is a prerequisite for all of these modes. Being productive when writing code requires you to have the whole system in your head, debugging requires understanding exactly why the bug occurs, and "learning" is just another word for gaining understanding.

As a programmer, you must become one with the machine, thinking how the machine thinks, to a level that you will no longer be surprised by any behavior or corner case. There should be no dissonance between your mind and the computer's activities. To become fully conscious of the runtime realm in the computer is, basically, programming utopia.

Of course, the obstacle for that is our limited minds. The computer thinks so much faster than us, and stores so many more variables than we do. Well, that's a pity. But, in a smaller scope, we can still achieve harmony of thinking with the computer, as long as you reduce: (1) the speed of runtime execution to match your brain's speed, (2) the amount of exposed information which can still fit in your mental working memory.

So get comfortable with a step-through debugger (or an equivalent tool), it will be your best friend to reduce speed and information so your brain can think like the computer. Often, we feel lazy to gain a deeper understanding of the system. Sometimes we are afraid, because the debugger might go into library code. You shouldn't treat library code much different to your application code. After all, both are bundled together in your application, so both become *effective* application code. That's what it means to "include a library" into your project.

Fear, laziness, or simply the pressure of a deadline or a grumpy project manager are obstacles to going deeper and hunting the system understanding from the underlying code. No bug is mystical, there is never black magic. There is only the uneasiness of getting your hands dirty to dive into the computer's internals and speak the idiom of the machine.

To give an example, I've been fighting the [same bug](http://viewer.scuttlebot.io/%b6nlgiAu3ZWkLqKnvkU1T/9PZCfiqSU/Ujg1xRmD/64=.sha256) for more than 2 weeks already. I need to get a bunch of unrelated parts working together, and there were never meant to be together. The computers are constantly telling me "something is invalid". I still don't know exactly the reason, but I know it's not mystical. The reason is hidden somewhere deep inside all those libraries and network connections between different devices with different operating systems. I'm still too dumb to understand the computers, but I can do it. All I need is a bit deeper understanding of what is actually going on. I need to study more, experiment more, make better and different hypothesis.

Programming is not about putting bricks together, it's about persuading a beast.