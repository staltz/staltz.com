---
layout: post
title: "Some people want to run their own servers"
tags: [blog]
---

This post is a reply to Moxie's recent article ["My first impressions on web3"](https://moxie.org/2022/01/07/web3-first-impressions.html). Although I am writing a criticism, I am grateful for Moxie's post because it exposes several truths that underlie web3, which most people are not willing to see. There is a surprising amount of centralization actively brewing in the "decentralized" space and most of its advocates don't seem concerned. I think money (especially loads of money) blinds people to the uncomfortable truths that Moxie made explicit.

At the same time, Moxie referred to *other* uncomfortable truths but somehow didn't address them directly. This is why I felt compelled to write. I liked the honesty of his post but I want an even more honest discussion. Some claims he wrote are factually wrong and sound like mere ideology. Let's begin with the first one:

> People don’t want to run their own servers, and never will.

This cannot be factually true, *some people want to run their own servers*. What is the [thriving self-hosted open source community](https://github.com/awesome-selfhosted/awesome-selfhosted) doing, other than running their own servers? Are the people running [Mastodon instances](https://instances.social), [Yunohost apps](https://github.com/YunoHost/yunohost) etc not people?

To be fair, perhaps what Moxie meant is that a system cannot work if it requires **all users** to run their **own** servers. But that's not what he meant, because he subsequently stated "Even nerds do not want to run their own servers", and I know that many nerds do.

As a general truth when dealing with the internet audience, you can't homogenize them, because there is always *someone* interested in the weirdest and most niche topic. "People don't want X on the internet" is *never* a true statement. What you *can* talk about are **percentages at scale**.

I assume Moxie is familiar with the Pareto principle or internet's [90-9-1 rule](https://en.wikipedia.org/wiki/1%25_rule_(Internet_culture)), which is a simple rule of thumb to approximate the number of contributors in internet societies. It basically says that 90% of users in a system are passive consumers of content and don't post or write almost at all, 9% are sporadic contributors, while 1% are power users and creators. There are some empirical studies that confirm it, give or take a few percentage points. I also did my own empirical sample and shared it in a [Twitter thread](https://twitter.com/andrestaltz/status/1291091805740699654).

To summarize:

- On YouTube, 2 billion MAUs but only 15 million (0.75%) active creators
- On Wikipedia, 39 million registered users but only 128 thousand (0.3%) active contributors
- On Mastodon, 1 million active users but only 2 thousand (0.2%) instances
- On Tor, 2.5 millions users but only 6 thousand (0.24%) relay servers

The last two examples are the most pertinent to Moxie's take. Hosting a server is firmly a very rare decision that users take, yet the whole system depends entirely on that minority of rare individuals. It's compelling to look at the non-hosting users, conclude that they are a smashing majority (99.8% !!!!), and make a sweeping conclusion that **no one** wants to host their own servers. Yet it's precisely because of those 0.2% that the system is capable of existing. Take them away, and the whole system dies.

Thus saying "*People don't want to run their own servers*" is akin to saying "*People don't want to start their own YouTube channel*". Both sentences contain the same amount of statistical bullshit.

Now, there are certainly varying *degrees* of how much people *want* to become active contributors in a system, and it's apparent from the list above: it's easier for a YouTube user to become an active creator (0.75%) than it is for a Mastodon user to host their own instance (0.2%), almost 4x easier. I'd like to see the numbers for email hosting too, because I believe that hosting emails is much harder than hosting a Mastodon instance.

And that's precisely the type of conversation we **can** honestly have: how to make systems more compelling for participation and how to help more users become active contributors. (Spoilers: the answer is typically improving user experience and ease of use) But in nearly all these systems the number of active contributors remains at 1% or lower, yet we still can't dismiss them as a *meaningless minority*. Quite the contrary, they are the minority that imbue the system with **all** of its meaning.

So it's fair to say that some people actually want to host their own servers.

> A protocol moves much more slowly than a platform

This I can agree with. I work with/on a protocol, and it's significantly slower. But it's an ideological take — and patently a Silicon Valley take that smells like Zuckerberg's "move fast and break things" — where change is synonymous to progress and where immutability is considered problematic and failure. This is quite clear from Moxie's post as he says "That is a problem for technology" and "if you don’t keep up you will fail".

As you can see, I disagree, but I'll back it up with examples. Immutability creates dependability, while moving fast creates flexibility. There are systems that should be dependable, and there are systems that should be flexible. To dismiss dependable systems as problematic is hypocritic, especially when such Silicon Valley companies (and now non-profits like Signal Foundation too!) are building their systems *on top of dependable and immutable protocols* such as TCP/IP and even the bullied and battle-scarred email (when most login systems are email-driven). Signal depends on slow-moving telephone number standards and for the social graph they rely on the slow-moving not-centralized local-first address book. This is not that different from the use of open source libraries to create proprietary software. The tech world critically depends on immutable protocols and open source software, yet centralized fast-moving proprietary systems accumulate all the power and glory.

Immutable systems aren't necessarily only in the lower layers. End-user software should sometimes be immutable too. A concrete example is that a close friend of mine was actively using the Calendar app on iOS until one day a forced update changed the app's user interface significantly so that my friend was forced to develop new habits and workflows. This bummed them out so much that they ended up quiting using the Calendar app entirely. They couldn't trust it anymore **because** it changed. Change is not synonymous to progress, and if you lose users due to it, you might as well admit that moving fast "is a problem for technology" and "if you change it you will fail".

In this aspect, the crypto community needs to be heard. One of the reasons why people put things on the blockchain is because they want it to be a dependable database.

> After a few days, without warning or explanation, the NFT I made was removed from OpenSea

Moxie's reaction to OpenSea's abuse of power as a centralized platform is the paradox in his blog post. He described the takedown as a negative event, yet at the same time he says:

> This isn’t a complaint about OpenSea or an indictment of what they’ve built. Just the opposite, they’re trying to build something that works.

So which one is it? Is "something that works" by definition also a force for censorship? Or is there actually a problem and a deep discomfort when your content is unilaterally taken down by the platform gods, no reason given and no right to dispute it?

I find this paradox fascinating, because it simultaneously tells us that the crypto community isn't that serious about censorship resistance in cases like OpenSea, while it tells us that Moxie (who works for privacy and censorship resistance) admits that centralization is bad for censorship resistance.

There are lots of other things I could point out from his blog post, such as the opinion that the smartphones cannot become servers (my project, [Manyverse](https://manyver.se), is precisely that, and people are increasingly using it), or that "distributing trust" is somehow incompatible with "distributing infrastructure" (why not both?), but I don't want to bore the reader.

Finally, one of Moxie's points which I firmly agreed with, and I think needs to be heard with self-honesty by crypto proponents was:

> The people at the end of the line who are flipping NFTs do not fundamentally care about distributed trust models or payment mechanics, but they care about where the money is.

The crypto community has to ask themselves whether they want decentralization or money. Sometimes they can have both, but at some point, they'll be forced to make a critical choice between one or the other, and that's how we can know what is the primary value upheld by the community. Similarly, to Moxie and the Signal team, you have to ask yourselves whether you want privacy / censorship resistance or centralization. You too will be forced by circumstances to make a choice.
