---
layout: post
title: "Lessons learned running a Software Factory"
tags: [blog]
---

I gave a talk recently about lessons learned running a Software Factory. Here are the best parts.

## What is a software factory?

"A system of agents that build software, with humans occasionally in the loop." It's a higher layer of abstraction, where your engineering craft gets poured into agents' instructions and infrastructure, as opposed to into software code.

Software factories are made of:

- on-demand agents (the familiar),
- scheduled agents (underutilized by many),
- the correct instructions (skills, rules),
- and the correct environment (cloud, infra, connectors).

## Why make one

Good motivations to make a software factory:

1. you want to do less tedious work, less mindless nudging of agents,
2. you want to eliminate slop,
3. you want to increase trust in how your agents can build software.

Poor motivations: to automate everything as soon as possible, to just "vibe", to stop looking at code.

## It's still programming

A software factory is simply programming, but now at a higher layer of abstraction. Instead of debugging stack traces, you'll be debugging (really!) agent runs, their reasoning, and tool calls. Instructions in natural language are code. Agent misbehavior is a bug, and your responsibility to fix.

If you think that is not programming, it's not the first time the industry has said so! When Assembly came out, John von Neumann disliked it, because machine code was the real deal. When PASCAL came out, it was not considered "real programming", FORTRAN was. And for many years, JavaScript was not considered a real programming language.

## Code reviews

Invest in code reviews by *first* analyzing and introspecting what *you* do when you're reviewing a PR, then teach agents to review like you do. Don't just send a dozen different LLMs to search for whatever. Make a list of the things you care about, then teach an agent to look for those during review. Make it systematic and invest in the reports it makes.

I've learned that I trust bot reviews now more than my own review, because they're *objective*, *systematic*, and *auditable*. Whereas my own human review is subjective, ad hoc and opaque (weeks from now, I won't know what my thought processes were when I approved some PR).

## Write and read English

You should WRITE and READ English, not source code (except occasionally). Just like 4 years ago you AUTHORED JavaScript and REVIEWED JavaScript, without going down into the bytecode, you should remain in the same layer of abstraction. Authoring in a higher layer of abstraction but reviewing in a lower layer is bound to create a bottleneck in reviews, because the lower layers are inevitably more verbose. This means you should invest in a reporting process by which your agents abide when describing PRs.

A software factory makes it feasible to do things that were previously not, such as regularly deleting dead code, updating dependencies, eliminating patterns of tech debt.

## Narrow your agents and fail closed

NARROW your agents with guardrails (rules, linting) and especially to FAIL CLOSED. Give instructions to your agents such that they should not be allowed to significantly deviate from the narrow direction you gave them. Agents should not try to hack around the constraints. You should give them a pristine and correct environment in which they operate. When they lack that environment, it's a bug and agents should fail, you should fix the environment.

## Premature automation is the root of all evil

Software factories give a lot of power, and you must put effort into pointing them in the right direction before you scale up automation. Focus on getting agents to behave correctly in a correct environment, with well constrained goals per agent, then scale it up little by little, monitor, and monitor.

Excessive speed can make you crash into a million obstacles, sometimes with consequences.
