---
layout: post
title: "Lessons learned running a Software Factory"
tags: [blog]
---

I gave a talk recently about lessons learned running a Software Factory. This post is a write-up of the best parts of that talk.

## What is a software factory?

Let's start with a definition. A software factory is *a system of agents that build software, with humans occasionally in the loop.* It's a higher layer of abstraction, where your engineering craft gets poured into agents' instructions and infrastructure, as opposed to into software code.

In practice, a software factory is made of four things:

- **On-demand agents.** This is the familiar part: you ask an agent to do something, and it does it.
- **Scheduled agents.** These are underutilized by many. They are agents that wake up on their own and do work without you asking.
- **The correct instructions.** Skills, rules, the knowledge your agents carry with them.
- **The correct environment.** Cloud, infra, connectors, the world your agents operate in.

The first two are the agents themselves. The last two are where most of your effort goes.

## Why build one (and why not)

There are good motivations to make a software factory, and poor ones.

The good motivations: you want to do less tedious work, less mindless nudging of agents. You want to eliminate slop. And you want to increase trust in how your agents can build software.

The poor motivations: to automate everything as soon as possible, to just "vibe", to stop looking at code.

Notice that the good motivations are about quality and trust, while the poor ones are about speed and not caring. That difference shows up again in the lessons later in this post.

## It's still programming

A software factory is simply programming, but now at a higher layer of abstraction. Instead of debugging stack traces, you'll be debugging (really!) agent runs, their reasoning, and tool calls. Instructions in natural language are code. Agent misbehavior is a bug, and your responsibility to fix.

If you think that is not programming, it's not the first time the industry has said so! When Assembly came out, John von Neumann disliked it, because machine code was the real deal. When PASCAL came out, it was not considered "real programming", FORTRAN was. And for many years, JavaScript was not considered a real programming language.

Every time we move up a layer of abstraction, someone says the new layer isn't real programming. Agent instructions are just the latest layer.

## Teach agents to review like you do

Code review is where I'd invest first. Begin by *first* analyzing and introspecting what *you* do when you're reviewing a PR, then teach agents to review like you do.

Don't just send a dozen different LLMs to search for whatever. Make a list of the things you care about, then teach an agent to look for those during review. Make it systematic and invest in the reports it makes.

Once I did this, something surprising happened. I've learned that I trust bot reviews now more than my own review, because they're *objective*, *systematic*, and *auditable*. Whereas my own human review is subjective, ad hoc and opaque. Weeks from now, I won't know what my thought processes were when I approved some PR. The bot's review, on the other hand, is written down and follows the same checklist every time.

## Write and read English

You should WRITE and READ English, not source code (except occasionally).

Just like 4 years ago you AUTHORED JavaScript and REVIEWED JavaScript, without going down into the bytecode, you should remain in the same layer of abstraction. Authoring in a higher layer of abstraction but reviewing in a lower layer is bound to create a bottleneck in reviews, because the lower layers are inevitably more verbose.

This means you should invest in a reporting process by which your agents abide when describing PRs. If the PR description is good, you can review at the level of English, the same level you wrote the instructions in.

## Things that were previously not feasible

Once the factory is running, it opens up work that used to never get done. A software factory makes it feasible to do things that were previously not, such as regularly deleting dead code, updating dependencies, eliminating patterns of tech debt.

This is exactly the kind of tedious work that a scheduled agent is good at, and the kind of work humans tend to postpone forever.

## Narrow your agents, and fail closed

NARROW your agents with guardrails (rules, linting) and especially make them FAIL CLOSED.

Give instructions to your agents such that they should not be allowed to significantly deviate from the narrow direction you gave them. Agents should not try to hack around the constraints.

You should give them a pristine and correct environment in which they operate. When they lack that environment, it's a bug, and agents should fail. Then you should fix the environment, rather than letting the agent improvise its way around it.

## Premature automation is the root of all evil

The last lesson, and maybe the most important one: premature automation is the root of all evil.

Software factories give a lot of power, and you must put effort into pointing them in the right direction before you scale up automation. Focus on getting agents to behave correctly in a correct environment, with well constrained goals per agent. Then scale it up little by little, monitor, and monitor.

Excessive speed can make you crash into a million obstacles, sometimes with consequences.
