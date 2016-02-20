---
layout: big-tweet
title: "Imperative code is (too) easy to write"
---

I've noticed how *imperative programming* is easier for programmers to write, compared to e.g. *functional programming*. The imperative mental model corresponds naturally to the programmer's intent: "I want the program to do _____". Code written are commands that the computer obeys without complaining (much). A single line of functional code is often harder to code, requiring an understanding of the full relationship between the entities involved.

| Imperative programming | Functional programming  |
|------------------------|-------------------------|
| Easier to code         | Harder to code          |
| Locally understandable | Globally understandable |

However, imperative code quickly becomes very hard to read and extract its meaning, specially the more code there is and if it includes asynchronous or concurrent code.

In imagination only, try to look at each imperative line of code as a military general that shouts orders to a soldier, to solve one particular problem or concern. Locally, it is very easy to understand the command.

However, the entirety of the imperative code is imaginarily many generals shouting orders to a soldier, without much coordination on how to resolve conflicting orders. It becomes hard to achieve a global understanding of what is going on. It looks like a mess. **Imperative code is locally understandable, but not globally understandable.** Functional programming, on the other hand, makes the relationship between all entities explicit, and the whole/global pipeline between input and output obvious.

When you look at imperative code, you only see the "soldiers" and the commands they receive, but you don't see the generals and their intent. The imperative commands are just the shadows of the intent of a general. **Imperative code makes commands explicit, but programmer intent implicit**, unless the command **is** the intent, in very simple cases like `button.hide()`.

Imperative code is not just easy to write, it is *too* easy to write and focuses on getting things done in the very short-term (in the scale of minutes). Functional programming is not necessarily hard, it just often requires thinking or planning, and an awareness of all corner cases (through types, pattern matching, and function outputs).

One of these two is not a sane option for long-term software maintenance.
