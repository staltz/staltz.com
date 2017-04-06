---
layout: post
title: "An off-grid social network"
tags: [blog]
---

*Scuttlebutt* is slang for gossip, particularly among sailors. It is also the name of a peer-to-peer system ideal for social graphs, identity and messaging. [Scuttlebutt](http://scuttlebutt.nz/) was created by Dominic Tarr, a Node.js developer with more than [600 modules](https://www.npmjs.com/~dominictarr) published on npm, who lives on a self-steering sailboat in New Zealand.

[![Dominic Tarr](/img/dominic2.jpg)](/img/dominic2.jpg)

Dominic is often offline, but he's still able to use a social network to communicate with his friends such as James Halliday (a.k.a. *substack*), who is also often offline. James has also [authored hundreds](https://www.npmjs.com/~substack) of npm modules, such as [Browserify](https://www.npmjs.com/package/browserify), and is building a shack with his partnes Marina on top of 300-year old lava flows in Hawaii.

[![James Halliday](/img/substack.jpg)](/img/substack.jpg)

Dominic and James are a few key figures in a community of eccentric open source hackers gathering in a social network independent from mainstream internet. The unique properties of Secure Scuttlebutt (SSB) make it possible for digital information to spread easily even in the absence of Internet Service Providers (ISP) and the internet's backbone. What makes that possible is a *decentralized protocol* based on the mechanics of *word of mouth*.

Scuttlebutt is decentralized in a similar way that [Bitcoin](https://en.wikipedia.org/wiki/Bitcoin) or [BitTorrent](https://en.wikipedia.org/wiki/Bittorrent) are. Unlike centralized systems like PayPal or Dropbox, there is no single website or server to connect when using decentralized services. Which in turn means there is no single company with control over the network.

However, Scuttlebutt differs from Bitcoin and BitTorrent because there are no "singleton components" in the network. When accessing the BitTorrent network, for instance, you need to connect to a Distributed Hash Table (DHT, think of it as a huge round table where anyone can come and take a seat). However, to get access to the DHT in the first place, you need to connect to a bootstrapping server, such as router.bittorrent.com:6881 or router.utorrent.com:6881. These are very lightweight servers which simply introduce you to the DHT. They still depend on the existence of ISPs and the internet backbone. Also, those systems are concerned about public information. For instance, with Bitcoin, each peer stores the entire log of all transactions ever sent by anyone.

Secure Scuttlebutt is also different to federated social networks like [Mastodon](https://github.com/tootsuite/mastodon), [Diaspora](https://joindiaspora.com/), [GNU social](https://gnu.io/social/), OStatus. Those technologies are not peer-to-peer, because each component is either a server or a client, but not both. Federated social networks are slightly better than centralized services like Facebook because they provide some degree of choice where your data should be hosted. However, there is still trust and dependency on third-party servers and ISPs, which makes it possible for admistrators of those to abuse their power, through content policies, privacy violations or censorship.

[![Patchwork](/img/patchwork.jpg)](/img/patchwork.jpg)

In Scuttlebutt, the "mesh" suffices. With simply two computers, a local router, and electricity, you can exchange messages between the computers with minimal effort and no technical skills. Each account in Scuttlebutt is a diary (or "log") of what a person has publicly and digitally said. As those people move around between different WiFi / LAN networks, their log gets copy-pasted to different computers, and so digital information spreads.

What word of mouth is for humans, Scuttlebutt is for social news feeds. It is unstoppable and spreads fast. Once the word is out (just an arbitrary example) that Apple is releasing a new iPhone model, there is no way to restrict that information from spreading. A person may tell that piece of information to any of their friends, and those friends may in turn spread that information onwards.

With typical gossip, however, information deteriorates as it spreads and eventually becomes harmful rumor. Scuttlebutt on the other hand makes word of mouth *secure* with cryptography. Each Scuttlebutt account is comprised of simply two things: an append-only diary and private/public asymmetric crypto keys. An account's identity is its public key. There are no unique usernames, because you can't guarantee two people in separate places from choosing the same username, much like you cannot forbid the name "John Smith" to be given to a newborn in Canada if it is already taken by another person in Australia.

All information a person has published is registered in their diary.
Public messages (like in Twitter) are the most common type of message in a diary, but you'll also see "I am friends with that person" type of messages.
To 'send' a private message to someone, I simply record a message in my diary, but encrypt it first, so the message isn't plainly readable by anyone who gets their hands on a copy of the diary. Authenticity of diaries is preserved in that all diary entries reference the message that was written before, and then is signed. This prevents tampering and makes replication easier.

[![ssb-account](/img/ssb-account.svg)](/img/ssb-account.svg)

Every time two Scuttlebutt friends connect to the same WiFi, their computers will synchronize the latest messages in their diaries. Another way of synchronizing information is to connect to a common Scuttlebutt server, known as "[pub](https://github.com/staltz/easy-ssb-pub)", set up by any member in the community. Pubs make information spread faster, and globally, but are totally dispensable. It's even feasible to exchange latest news through [sneakernet](https://en.wikipedia.org/wiki/Sneakernet), using e.g. USB sticks.

This architecture is built so that network connections accurately represent the social graph and word of mouth. Typically with social networks like Facebook or Twitter, the network connections are centralized with their servers. The network architecture looks completely different to social architecture. Most users don't care about this because the network architecture is invisible to them. However, it becomes a real problem once an authoritarian government or even the host company itself takes control over the network architecture in ways that disrupt the social architecture. It is not uncommon for a government to shut down a social network in a country for days/weeks, affecting how people communicate with each other. This has happened in [Egypt](http://www.reuters.com/article/us-facebook-egypt-idUSKCN0WY3JZ), [Cameroon](http://www.bbc.co.uk/programmes/p04w0b36), and [Brazil](https://en.wikipedia.org/wiki/WhatsApp#Brazilian_court_orders).

With Scuttlebutt, the social graph *is* the network architecture, with peer-to-peer infrastructure accurately matching peer-to-peer interactions. It makes communication and the spread of information highly resilient, bringing improvements to freedom of speech with modern information technologies.

This peer-to-peer system has existed for more than two years and brought unique challenges and possibilities. For instance, unique usernames are impossible without a centralized username registry. On the other hand, this questions the need for a login system in the first place: why do you need to "enter" into the service? Scuttlebutt will not have a user registration flow, because such thing makes no sense in that world.

So far, the network has received a dedicated [social network desktop app](https://github.com/ssbc/patchwork), a [Soundcloud alternative](https://github.com/mmckegg/ferment), a [Viewer webapp](http://viewer.scuttlebot.io/%b6nlgiAu3ZWkLqKnvkU1T/9PZCfiqSU/Ujg1xRmD/64=.sha256), and a [git layer](https://github.com/clehner/git-ssb) (putting "distributed" back into "distributed version control"). These work seemlessly together: a person using the git layer to push a commit will record that on their diary, which is visible also in the social network app, for their friends. Currently, the community is using this to "eat their own dog food", coordinating team work and contributing code all on the same platform, without any intermediate company. GitHub being down will rarely be a problem for them.

The platform is being improved constantly, in areas such as: mobile support, an NPM alternative, WebRTC support for browser peers, and even legal transactions in New Zealand. It has proved to work as a platform setting the requirements and examples for a human-centered social network, as Dominic [well described](https://www.scuttlebutt.nz/stories/scuttlebutt-genesis.html):

> I wanted an open platform that anyone could build things on. (...) Also, we couldn't realistically plan to just sit down and create an app that everyone wants to use, we need many experiments so that one can succeed, therefore we need a decentralized application platform more than we need any given a decentralized application.

To use Scuttlebutt, I recommend reading the [ssb handbook](http://scuttlebutt.nz/).
