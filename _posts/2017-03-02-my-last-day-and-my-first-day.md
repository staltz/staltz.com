---
layout: post
title: "My last day and my first day"
tags: [blog]
---

It is the last day of my employment at Futurice, and my first day as a self-employed open source hacker with a mission to build a new social network project.

I joined Futurice in 2013 as a Web and Mobile Developer. At that time, I had less than a hundred Twitter followers and had never heard of reactive programming. Gradually, I started being exposed to RxJava for Android development, and began my journey learning Rx Observables. I learned a lot at Futurice, and had absolutely brilliant peers who inspired and challenged me.

As I learned, I started teaching others my findings. I wrote [The introduction to reactive programming](https://gist.github.com/staltz/868e7e9bc2a7b8c1f754), then built [RxMarbles](http://rxmarbles.com/) to help visualize how some RxJS APIs worked. In the subsequent months and years, I built [Cycle.js](http://cycle.js.org/) and spoke at many conferences, all the while basing my open source developments on insights gathered at work in Futurice. It is easy to get lost in open source development as an end instead of a mean, that's why I find it very important that time and time again I deliver real software to real customers. It helps to validate the reliability of my open source libraries, and helps to stay connected to real problems that users experience.

I was ready to indefinitely continue this recipe of splitting my time between open source and customer projects, until I was woken up by a pressing problem.

<h2 id="the-problem" class="hr"><span class="hr">THE PROBLEM</span></h2>

We are running out of time before all our interpersonal communications are monopolized without choice. The current trend is that tech giants like Facebook, Google and Twitter are making their communication tools more indispensable and unavoidable. They are acquiring broader access to our communications (e.g. Facebook acquiring different channels like WhatsApp, and developing new channels like social virtual reality), deepening our dependency to their channels (e.g. through addiction-inducing algorithms and [centralizing identity in their platforms](https://techcrunch.com/2017/01/30/facebook-challenges-email-for-control-of-your-online-identity/)), and gathering more data from our personal lives than ever before. Meanwhile, the mere mention of [ending net neutrality](http://www.networkworld.com/article/3166611/internet/the-end-of-net-neutrality-is-nighheres-whats-likely-to-happen.html) is a chilling warning. Net neutrality is a right I've always considered obvious and unlikely to be shaken.

We do not yet live in a dark future where all our online communications are owned by one company whose business is to use your personal life as commodity for advertisers and governments. We are not quite there yet. We still have net neutrality, we can visit any website we wish. We can still host a website from any computer and anyone else can visit it. We don't yet visit our friends through a 3D virtual world where every eye movement and hand wave is logged for analytics. We do not yet get personalized and intelligent answers from Google for those questions we only reserve for our closest friends and family who know us so well. We don't live in such world.

But we're accelerating towards it. Maybe it's a matter of ten years. Maybe three. Far from being conspiracy, those companies are reportedly pursuing such future, and they aren't even shy about it.

<h2 id="whats-next" class="hr"><span class="hr">WHAT'S NEXT</span></h2>

I want to do something to revert that trend, using the freedom I still possess as an internet user. Recently I discovered multiple peer-to-peer projects that could have a role in avoiding that future from happening. Projects such as [IPFS](http://ipfs.io/), [Matrix](http://matrix.org), and [Scuttlebutt](http://scuttlebutt.nz/) are decentralized systems where a monopoly of (server, resource, data) power is difficult or unlikely.

In particular, Scuttlebutt is ideal as the infrastructure for a social network, and it already has a sizeable community of users through the client app [Patchwork](https://github.com/mmckegg/patchwork-next). Scuttlebutt provides many exciting possibilities, such as offline-first usage, syncing data over ad-hoc methods independent from ISPs or corporations, as well as acting as a general database (e.g. for [git](https://github.com/clehner/git-ssb)).

Scuttlebutt is not a promise, it is already working software used on a daily basis by a few dozen enthusiasts (as far as I know). However, it could be much more. There is a lot that can be done to improve its usability for users unfamiliar with programming.

I'm going to help the Scuttlebutt project. Online communication with a focus on decentralization is close to my heart. Prior to Futurice, I had a startup for an adminless forum platform. Also, I have worked on an open-source peer-to-peer web platform called [Avatar](https://news.ycombinator.com/item?id=7138437). I have some plans on how Scuttlebutt's adoption and user experience can be improved, and already started building [some tools towards that goal](https://github.com/staltz/easy-ssb-pub/). What I did so far is quite small, and in the following months I'm looking forward to dedicating most of my weeks towards building the peer-to-peer social network with good usability.

For a living, I will continue doing trainings, contract work, workshops, [Egghead](http://egghead.io/) lessons, [mentoring](https://www.codementor.io/staltz), and open source through [OpenCollective](https://opencollective.com/cyclejs). See this [page](http://staltz.com/hire.html) if you are interested in hiring me.

As for Cycle.js and other open source libraries, I will continue maintaining them as usual. Cycle.js is my primary paradigm for building UIs, and I will most likely use it for building Scuttlebutt client apps as well. Next month there is also [CycleConf](http://cycleconf.com/) in Stockholm and I'm looking forward to meeting people and discussing future developments for the framework.

I thank my peers at Futurice for providing an environment where developers improve their craft. Even if my efforts for Scuttlebutt don't turn out to reach mainstream, I won't regret the decision of fully pursuing what I believe in.
