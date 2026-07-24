---
layout: post
title: "I am 7x more productive with AI"
tags: [blog]
---

I have *felt* a lot more productive since getting into agentic coding with tools like Cursor, Claude, Grok Build, and Kimi. Beyond getting a lot more done at work and keeping my coworkers busy reviewing PRs, I've [revamped my personal blog](https://staltz.com/from-coder-to-curator), made games for my kids, started building the [spreadsheet app of my dreams](https://x.com/andrestaltz/status/2065170439077265904), [made my own clockface](https://staltz.com/one-handed-clock), and more.

<div style="display:grid;grid-template-columns:1fr 1fr;gap:0.75rem;margin:var(--space-8,2rem) 0">
  <a href="/img/20260724-lintupeli.png"><img src="/img/20260724-lintupeli.png" alt="Lintupeli, a rollercoaster game" style="margin:0;width:100%"></a>
  <a href="/img/20260724-prinsessa.png"><img src="/img/20260724-prinsessa.png" alt="Prinsessa, a castle adventure game" style="margin:0;width:100%"></a>
</div>

<small><em>Lintupeli and Prinsessa, games I made for my kids</em></small>

I got curious, though, whether I could measure exactly how much more productive I am. This may be a useful benchmark for folks wondering the same thing.

Quantifying productivity is hard. But as long as we don't fall into the trap of [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart's_law) ("When a measure becomes a target, it ceases to be a good measure"), and if we're comparing the same person's output on comparable projects, then counting lines of code per day is a pretty good measurement. Merely spewing out lines of code doesn't make you productive, but it is true that more features require more code. Features must be specified and their corner cases accounted for, and that costs lines of code. I also *delete* code regularly when refactoring. So net lines of code is a decent measure of productivity.

So I measured how many lines of code I produced, both in my pre-AI era and now with AI.

## The data

I ran a script that looked at all contributions I made on GitHub from 2017 to 2023, a productive period when I was focused on building [Manyverse](https://manyver.se) and the SSB ecosystem. During those years, AI usage was limited to GitHub Copilot autocomplete in VSCode, which was negligible and only used in 2022 and 2023.

The second period I measured is the last 49 days, from June 5th to July 24th of this year, during which I've been working almost exclusively through agents.

|               | 2017-2023 | Jun-Jul 2026 |
| ------------- | --------: | -----------: |
| Days          |    2556   |           49 |
| Lines added   | 1570543   |       179231 |
| Lines deleted |  679152   |        48702 |
| Lines net     |  891391   |       130529 |
| Commits       |   11198   |          457 |

Note that "days" here means calendar days, including weekends, holidays, sick days, and the weeks when I did nothing but attend meetings. I'm dividing by the same kind of day in both periods, so the comparison holds.

One may question whether 49 days are actually comparable against 6 years, but I can at least guarantee the reader that these 49 days included normal working hours, plus some vacation and leaves.

The verdict is: 349 net LOC/day in the old era, and 2664 LOC/day nowadays. **That is 7.63x.**

## Nuance

My initial hunch, before running the numbers, was 6x compared to 2017–2023. I think some fluctuation is natural, because productivity can easily change depending on how much automation I have, how much slack or slop I allow, and which projects I measured. It's not hard to crank up productivity by adding more automations, which could push me to 9x or 10x. It's also easy to not push the token machine to its limits by doing other things in life, and thus drop to 5x or less.

So it's safe to say that my "real productivity" is probably somewhere between 5x and 8x relative to my previous manual coding era.

## Tradeoffs

My goal isn't maximum productivity, either. I believe agentic coding involves a simple tradeoff between control and productivity. It is very easy nowadays to "be more productive" by simply delegating more decisions to automated LLM loops. But that is also how you stop following what is happening and stop being in charge. I tend to care a lot about software quality, and gladly take a hit in productivity if it means I can make UIs that don't look like [Claude Slop](https://x.com/andrestaltz/status/2078464344103235728).

Thus the 7x number surprised me. It means that even while prioritizing quality, I still upgraded myself to a "team of 2019-era Andrés", which is really exciting. Back then, even having a team of two part-time developers on Manyverse felt exciting and efficient. Having seven full-time me-equivalents is just awesome. It has made it possible for various ideas and side projects to come alive.
