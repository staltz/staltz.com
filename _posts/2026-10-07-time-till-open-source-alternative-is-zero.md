---
layout: post
title: "Time Till Open Source Alternative is now zero"
tags: [blog]
---

I wrote a blog post four years ago called [Time Till Open Source Alternative](/time-till-open-source-alternative.html) (TTOSA). The thesis there was that it is becoming quicker and quicker to see an open source alternative to established products. Back then, AI was not on my radar, as it wasn't for everyone else in the industry, but I knew the downward TTOSA trend was going to persist.

My assumption would have been that it would take a few weeks, or a few days, to make an open source alternative to a proprietary product, but the new numbers say it has gone to zero. As the latest example, it took zero days for Grok Bot to get an open source alternative called [OpenMausBot](https://github.com/milind-soni/OpenMausBot). (See the original definition of TTOSA if you're curious.)

This time it was a lot quicker to update the dataset of proprietary software releases and open source software releases. I just used Claude Opus 5.5 to scrape examples from the internet, and then curated the output list myself. Here's how the chart looks today:

[![Time Till Open Source Alternative](/img/ttosa-chart-2026.png)](/img/ttosa-chart-2026.png)

The chart makes it hard to see numbers in the single digits, so you can [open the CSV](https://github.com/staltz/ttosa) if you're curious. **In other words, Time Till Open Source Alternative is now zero.**

It is also realistic to assume that this trend won't revert. We are now solidly operating under the assumption that any proprietary software release will be nearly instantly copied as an open source alternative. Frankly, this process itself can also be made automatic. People on the internet can just have bots that listen to product announcements and kickstart an open source alternative as soon as possible. That is all viable and feasible today with the tools we have. And the tools themselves are just going to get better and better.

I want to talk a little bit about the implications of this for us. What does it mean when any (popular) proprietary software launches under the assumption that it will compete with an open source alternative?

## Demonetization

The first implication is demonetization. When I was building Manyverse and the Scuttlebutt ecosystem, I was explicitly aiming to demonetize social networks, in particular Facebook, Instagram, and the like. My motivation was that some software is so foundational and so essential for modern life that it becomes unjust to charge for such software when it can be trivially offered as open source.

The other perspective to the same issue is economic. When supply explodes and demand is kept constant, then prices go down. That is another argument for demonetization of software. Guillermo Rauch, the CEO of Vercel, recently tweeted that all software in the future will become free. I think this also hints at the trend of demonetization.

https://x.com/rauchg/status/2106503460384538793

## Remixable and personalized

The other implication from zero TTOSA is that software is becoming remixable, personalized, and customized. This can be seen clearly in the recompilation and decompilation gaming communities, where people blend source code from different games to remix them. Something similar can happen with productivity software and other kinds of software, where you can more fluidly configure software, or customize it to how you like. You can pick ideas from other software and fluidly adapt them to your needs.

While that is going to be true, it won't be universally true. Only a niche will create personalized software. We must remember that outside of the techie circles, people are not creating their own personalized software, and that is still not going to happen. Vibe coding has certainly introduced a lot of new people to software development, and those are also creating personalized software. But there is a large portion of the world population that will not. It simply demands a certain level of interest to build software, no matter how easy.

That said, simply due to more people being able to build software, we will see more niche software being created. Inside enterprises, internal vibe coded applications (and even *internal alternatives* to vendor software!) will become more and more common. That too saves costs and compels vendors to lower prices.

## Software as content

At the end of the day, software is just a type of content. It's not much different from images or videos or text. Sure, it has its peculiarities (software can consume third-party software), but it's still content. So the same dynamics that AI forces on the economics of content production will be seen in the software industry as well. Software will become more mundane, more abundant, cheaper, and in many ways, unsurprising.

I say this not as a prediction of the future. I'm just describing the implications of the trend that we already have. Back in my 2022 article, this was a wild prediction of the future:

> All software will be open source, and no one will make money with software.

Now, with all of the evidence we are see, this is just the new normal. Software will still make some money this year and the next, but the trend is downward. Someday, that trend will also hit zero.
