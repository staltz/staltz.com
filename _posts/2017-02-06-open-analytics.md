---
layout: post
title: "The web needs OpenWebTraffic"
tags: [blog]
---

Google Analytics currently dominates the web analytics service space, because it is free by default, very easy to set up in a few minutes, and has advanced analytics capabilities. Almost no other service comes close.

As with any other Google service, however, there are severe privacy violations, to the point it has been [considered illegal](https://web.archive.org/web/20091128154234/http://www.techcrunch.com/2009/11/24/google-analytics-illegal-germany) in some countries.

The open source alternatives are mainly [Open Web Analytics](http://www.openwebanalytics.com/) and [Piwik](https://piwik.org/). However, these tools are either not free when hosted in the cloud, or cumbersome and antiquated when self hosted. For instance, they may require setting up your own server with PHP and MySQL and following manual installation steps.

More importantly, these tools may still track users beyond respectable limits. They are "open" in the sense that the source code is simply open. They do not necessarily embrace openness and transparency. Why can't a website visitor freely access analytics data for that website?

One might counter-argue that it would be dangerous for the privacy of visitors to openly publish website traffic data. That is true for the type of data that is collected by Google Analytics. But not necessarily true for anonymized traffic.

Like with distributed ledgers such as Bitcoin, one of its strongest features is bringing transparency of data. Anyone can see every Bitcoin transaction ever sent. This property can be used to bring transparency to sectors that desperately need it, like in [supply chain](http://www.coindesk.com/bhp-billiton-blockchain-mining-company-supply-chain/).

Traffic in the real world is also transparent. If a store or a public venue receives many visitors, this can be openly verified by any person in public. It can also be openly compared to other venues, and this transparent and (to some extent) anonymous information can even be used by the public itself. For instance, a consumer might choose to visit a store because of its large amount of visitors.

The world needs a web analytics tool that creates transparent traffic data co-owned by the public. No single entity should own data about traffic, it is by nature public data.

The world needs *OpenWebTraffic*.

**NB: this does not exist yet.**

[![OpenWebTraffic](/img/openwebtraffic.png)](/img/openwebtraffic.png)

This service should:

- Answer the question "was the crowd interested in this website?"
- Provide only lightweight and anonymous data (page views, average visit duration, time of visit, etc)
- Be transparent
- Require no self-hosting
- Be quick to setup (maximum 5 minutes)

It should NOT:

- Answer the question "what kinds of persons are in crowd?"
- Track geographical locations of visitors
- Give ownership of traffic data to the owner of the website

Bonus points if it:

- Uses some peer-to-peer technology such as [Scuttlebot](https://scuttlebot.io), [IPFS](https://ipfs.io/), [WebTorrent](https://webtorrent.io/), blockchain, or [Hyperdrive](https://github.com/mafintosh/hyperdrive)
- Has a slick and uncluttered design
- Is easy to access for any given website (as easy as viewing the SSL certificate for HTTPS pages)

I understand it is in the interest of website owners to extract as much detailed information as possible from its visitors, and therefore OpenWebTraffic would be less attractive than Google Analytics. Tools like Google Analytics are best-case scenario for website owners and worst-case scenario for website visitors. Hence, they will eventually be blocked out by privacy-aware visitors.

However, full anonymity and blocking analytics tracking is best-case scenario for website visitors, and worst-case scenarion for website owners. One could argue that a website can best serve a visitor if it has more detailed data on them, but this is often done without the visitor's consent. If a visitor wants a personalized experience, the provision of personal data should always be obvious and explicit.

A middle ground can be achieved, where both website owners and visitors can extract useful information from co-owned traffic data. Peer-to-peer architecture is a good candidate for this task since no single entity owns the data. Technologically, append-only logs in peer-to-peer also fulfil basic analytics requirements, such as page view count.

If I ever have the time necessary for this project, I will build OpenWebTraffic under these guidelines. For the time being, this article can serve as inspiration for those seeking meaningful web services to build.
