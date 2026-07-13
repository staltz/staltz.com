---
layout: post
title: "From coder to curator"
tags: [blog]
---

Last year I was vocally against LLM-produced code. It felt frankly counterproductive. Before Opus 4 arrived in the middle of the year, the models were weak, the code was low quality and buggy, and fixing it through the model was frustrating because it often couldn't understand my instructions either. It was faster to fix things by hand than to chat and wait.

By the end of the year, I had to fix the output less often. Fast forward to today, and in most cases I no longer have to fix the AI pull request. The change has happened very fast.

There is now a lot of talk about AI coding, and it is certain that it has made its way into most companies producing software. Developers everywhere can see that there is no turning back. If you were still coding by hand in 2024, that was probably the last full year that you did it professionally. Going forward, everything will be different.

For some, this is a cause for concern, or nostalgia. Something feels wrong, you miss how things used to work, or you're worried about what your job will become. Writing software was the core part of the job for many engineers. When that core is taken away, what is left?

I want to share a few thoughts that may give you hope. This post is specially for younger developers who are a little confused or terrified.

## The genie in a lamp

I feel energized. I can finally revive projects that I never had time for, and take on endeavors I never thought I could. Renewing this blog was one of those projects. As I work on these side projects, I am starting to see the same pattern:

**The AI does the building. I am the curator.**

The best analogy for AI is not a sentient robot, it is a genie in a lamp. It is magically capable of almost anything, but **subordinate by design**. Companies such as Anthropic and OpenAI are incentivized to build agents that do precisely what the user asks them to do. The genie can build both your great ideas and your mediocre ideas, and it is not going to stand in your way.

This means that AI tools delegate quality to you. Not because they cannot produce high quality software, but because people want different things. Now that all sorts of things can be easily built, the difficulty is no longer in building in itself.

So the real question is what should get built? **What do you want?** And the even more important question which will define the careers of many of us is: "What is worth building?"

## Bundling of roles

My mother used to work as a typer for programmers. She did not understand what she was typing. She received code from someone else and typed it into a mainframe.

That job disappeared because typing became bundled into the programmer's responsibilities. A programmer should design their algorithms and also type them out. We did not need one person to design the program and another person to press the keys.

Now the role of the coder is disappearing, and I think that is totally fine. We are bundling that responsibility into another role. That role may be product designer, solutions architect, cloud architect, founder, or something that does not yet have a common name. We no longer need such a clear separation between the architect and the builder, because the building can be bundled into the architect's tools.

To be clear, understanding code is still important, and will remain so. The managers and the designers today who never knew how to code have the opportunity of finally independently giving their ideas life. However, they will inevitably compromise on software quality if they don't get this one thing right: understanding and shaping the code and architecture internally.

Quality is complex. I remember the CEO of a consultancy where I worked saying that quality is a combination of many factors. It is not enough that software is fast. It also has to be user-friendly, reliable, correct, and internally maintainable. Improvements to one of these can even make another worse. There is no single benchmark that tells the genie "make it good".

## The quality imperative

At the moment, in 2026, **I see my job as filling my software with as many AI tokens as possible and as much quality as possible**.

Why is quality now an imperative? Because low-quality software can be built by anyone. If all I do is copy-paste user requirements into an LLM prompt, then I truly add no value and there is no job left for me.

So I have shifted my thinking to: how can I make this *really good*?

And I believe we also have a responsibility to add value between the needs expressed by people and the software that gets built. If you just copy-paste what people say they want and feed it to an AI, you don't get good software. You may short-term address a local issue, but in the process it is easy to add confusion elsewhere, present incorrect information, or give too much emphasis to something irrelevant.

Programmers have always been prone to fixing problems that they themselves experience. We rant about little annoyances in our IDE, our favorite terminal shell, code syntax, or shaving a few milliseconds off something. Those problems exist, but in the big picture they simply don't matter. The true value of our profession lies in fixing problems that *other people* experience, with great user experience, performance, and reliability.

## In practice

Of course you can't just ask the AI to simply make it high quality. Before you prompt something, do a little research. What is the best way to do that thing? If you are building UIs, study other interfaces that solve the same problem. Find the best examples that exist, try them out, notice their details, and understand why they work. Only then you are ready to prompt.

Once you get an outcome, don't take it as is. Look at the details. Question them. Imagine the entire thing differently, then make a list of changes.

I think one of the biggest dangers of writing software in 2026 is getting used to the outcome that the LLM gave you. Your first experiences with the software are precious. They illuminate all the little bugs and quirks that need follow-up work. After a while you start navigating around them without noticing, and the bad behavior becomes normal. Quality is tricky because it lives in a lot of details.

The same applies internally. Read the source code with a grain of salt. Ask why a variable has that name, why a dependency was chosen, or why one module knows about another. Recently an LLM named something an "apron" in my project. I had never seen that kind of naming in programming. After questioning it, I realized it was a pretty stupid name.

Sometimes the AI sounds smarter than you, and people typically tend to concede to smarter people. The same dynamics should occur with AIs. Do not let it get ahead of you. Seek to learn what it is doing and why, so that you remain above it. Gladly, we also have learning tools nowadays, which unsurprisingly are powered by AI. If you don't know how to learn with AI, just ask AI how you can learn with it.

## What to learn

This is not an exhaustive or final list. It is just my two cents on what is becoming more valuable.

- *An eye for quality.* Get familiar with the best software that exists, as well as the worst. Think critically and look at the details. Read about how the good examples were built. You cannot curate something of quality if you don't know what quality looks like.

- *Communicating clearly.* You need this when talking with people, and you need it when talking with AI. When users ask for features, take a step back and listen to their problems, not their asks. The [Five Whys](https://en.wikipedia.org/wiki/Five_whys) may help. Writing on a blog can help. Giving conference or meetup talks can help. Reading good books can help. If English is not your native language, get good at English, because most of the software world and most LLM training material uses it.

- *Prioritizing.* I am grateful that I was a founder a couple of times, because it is very different from being a developer. I noticed that perhaps the majority of developers I know are terrible at prioritizing. Once you have to take care of all aspects of a software business, you see what actually matters to make a living for yourself and create value for users. Most of the time it has nothing to do with the things programmers have been ranting about for the past ten years. Maybe the best way to learn is out in the wild. Try to make a startup just for fun. This is the easiest time ever to do it.

- *Bullshit detection.* AI is not human, and I'm happy it is not. It also doesn't have feelings, so you should never feel restrained from calling bullshit on it. I don't know if there is a course for improving your bullshit detector. In the meantime, be inquisitive, curious, suspicious, and skeptic about LLM output. And get comfortable at closing AI pull requests or undoing something the agent built.

- *Designer, product manager, founder, and architect skills.* If you are a software engineer, now is the time to learn the skills involved in these other roles. Ask an LLM to guide you and recommend good books, then read those books. You will inevitably need some combination of these skills.

- *The code still matters.* Look into the code regularly. You don't need to read all of it, but keep trying to understand what is going on. Ask the LLM to refactor things, preferably as an automation. Learn which refactors are good and which are bad. Ask it to rename variables for consistency and readability, then question those renamings. Make diagrams of the architecture. Poke around and ask why things exist. Tiny code details usually do not translate into better software for users, but many aspects of the code do. A clean internal structure and consistent naming make the LLM less likely to get confused. If future models become smart enough to understand bad code, then at least *you* will not get confused when reading it.

## The new job

There will still be people who write code by hand, just like there are people who grow (all) their own food. But it will no longer define the mainstream profession.

This is not the end of software development. We have more software to make than ever, including projects that were never economically possible before. What is ending is a particular arrangement of responsibilities, where a person was paid mostly to translate decisions into code.

The genie can build almost anything. Our job is to want something worth building, and to care enough to make it actually good.
