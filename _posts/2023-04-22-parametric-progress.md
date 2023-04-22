---
layout: post
title: "Parametric Progress"
tags: [blog]
---

It's been some 10 years since I started my career as a developer, and one of the most important habits I have learned is something I call "Parametric Progress". I would have told younger me about this, if I could.

When you're working on changing a system (and codebases are systems), it is extremely tempting to change more aspects than you're originally planned to. Say you wanted to just fix a bug. You found the culprit, but you also saw a badly named variable, a function that could be split into two, some code style changes to make, some libraries to be updated, and something else that *seemed* like a bug. So you fixed all of those things, and you committed it.

This may seem efficient, because you are doing more work in one go, but it's not. It's actually the opposite. It is more efficient to fix only one thing per git commit. Choose one aspect, or one "parameter", and change only that. Then, see what happens, learn about the effects of your change, and then move on to the next parameter. Thus "Parametric Progress".

The diagram below illustrates how this may seem counter-intuitive. If you change many things at once (left side in the diagram), it may seem like you are taking shortcuts, and thus arriving at the goal faster. And Parametric Progress (right side) may seem like making detours.

[![Parametric Progress](/img/parametric-progress.jpg)](/img/parametric-progress.jpg)

The obvious reason why you should avoid changing many things at once is lack of focus. Don't go yak shaving, don't allow feature creep. Just do the thing you were meant to do, and nothing else. But I have another reason, which is more subtle.

Systems are sensitive things. Once you change one aspect, there is always a chance that other parts of the system will be affected by your change in ways that surprise you. So it's best to change only one aspect, and then learn how the system reacts to that change. If you notice a new bug arise, you can be sure that it was caused by that specific change, and you can more easily learn the cause and effect relationship. However, if you change many aspects at once and a new bug arises, you don't know which of the changes caused it. It is often quite possible that even a code style change causes a bug.

Programmers sometimes talk about spooky black magic whenever they are completely baffled by a bug. The feeling of black magic happens when your mental model of the system is not in sync with reality of the system. And changing many things at once does not easily allow you to learn about the system. Developers talk too much about writing code. Learning code is far more important. Be in sync with your system, and you'll fix bugs easier, not to mention preventing bugs in the first place. Use something such as parametric progress to improve your learning of the system.
