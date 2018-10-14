---
layout: post
title: "Reinvent the Social Web"
tags: [blog]
---

*This is a transcript of a talk I gave at [Full Stack Fest](https://www.youtube.com/watch?v=8GE5C9-RUpg) that acknowledges the success of mobile social platforms, but shows the need to reinvent them with an open and peer-to-peer protocol. I talk about Scuttlebutt, and how to build apps using its tech stack, and I also highlight the importance of its 'humane' stack. Thank you [Alanna Irving](https://twitter.com/alannairving) for writing this transcript.*

<iframe width="600" height="338" src="https://www.youtube-nocookie.com/embed/8GE5C9-RUpg?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<br />

Let's say you have an idea that you want to share with the world. You will take your phone from your pocket, open some social platform app, and publish a post. You will not author an HTML page from scratch, upload it to a server that you own, and wait for people to find it through a search engine.

The web is dying. I could show you a lot of statistics to show you that this is happening. But I've written about that a lot [on my blog already](https://staltz.com/the-web-began-dying-in-2014-heres-how.html), so I'll give you the executive summary instead.

The web today is like the CD in 2005. It's still relevant, but it's not the coolest thing in town. These things die out slowly, but they die. When Apple released the Macbook in 2008 without a CD drive, a lot of people thought that was unacceptable. Today, very few people care about a CD drive on their laptop. Similarly, the web is losing space to the mobile social apps.

In the beginning, the web was created as the hypertext — a graph where where the documents are the nodes and the hyperlinks are the edges. It made a lot of sense for academics, at a time when the desktop had the best user experience. Writing HTML was not that bad for academics already comfortable with markup like LaTeX for papers.

The people authoring these documents were always implicit in the graph. Documents were first class citizens of the web, not people. For academics, this was natural because their careers are often centred around papers.

As the web grew, some people decided to make "document equals person", and the homepage grew in popularity. Then came the blogs, which were homepages that added the idea of diaries or daily posts. Homepages were too static and people wanted something that evolved daily. This would eventually lead to the idea of the social web, where nodes are accounts, and edges are relationships of trust or interest.

The social web makes people, not documents, the first-class citizens. Examples would be the mobile Facebook and Twitter apps, WhatsApp, Messenger, Instagram, SnapChat, Telegram, and others. The social web emphasises posts, which can be short messages or pictures. They don't need to be authored in markup like HTML.

The user experience is comfortable for everyone. The UX of content creation is important, because it means the social web grows faster than hypertext, and eventually will outgrow the web itself. I believe we may have passed this point already.

We could embrace this new era and just forget hypertext. But the problem is that the social web is made out of a handful of closed platforms, whereas the web is open.

<h2 id="the-five-lacks" class="hr"><span class="hr">THE FIVE LACKS</span></h2>

On the closed social web, there are many problems. We lack freedom, innovation, trust, respect, and transparency.

Because they are closed platforms, the tech giants in control suppress our freedom. They can and do ban accounts, even innocent ones. They undermine our privacy.

Innovation on these platforms is dying. Third party apps are taken down, and there is little diversity in the UI choices. We become passive consumers of UX decisions by the tech giants, and we don't have any control over newsfeed algorithms.

There is little authenticity or trust. It's hard to tell a fake account from a real one. Our only choice is to trust the platform to put some kind of 'verified' symbol on it, or to take screenshots of Tweets, but that's easily forgeable. You probably know how to do that in a blink of an eye. A screenshot doesn't guarantee that a person said that thing. So, we're forced to trust the platform.

We see a lot of disrespect on these platforms, like harassment and hate speech.

And there's little transparency. All of the data is locked up or rate limited to a prohibitive degree. It's hard for us to do audits when things go wrong in our online society, and it's hard for legitimate researchers to do science on the social graph.

Centralised platforms discovered the social web, and it works. It's really great. But they are not solving these five problems for us.

So, what if we take this idea that works, and reinvent it with a coherent and open protocol?

<h2 id="scuttlebutt" class="hr"><span class="hr">SCUTTLEBUTT</span></h2>

[Scuttlebutt](https://scuttlebutt.nz) is a peer-to-peer open protocol for social networks. It was created in 2014 by Dominic Tarr and other NodeJS hackers. I joined in 2016.

The basic proposition of Scuttlebutt is simple. Given the social graph, what is the network topology going to look like? In Scuttlebutt, they are the same. A person's account is a local database on their device, and following relationships are network connections.

Alice on her computer can write some posts locally. It doesn't matter if she's online or offline, because it's local. Then she gets on the same local area network as Bob, and they can create a network connection because they trust each other. Bob replicates onto his database everything that Alice said on hers. Locally, Bob can add comments, post, and likes of his own. He could go offline for many days, then come back to the same WiFi, and replicate that back to Alice.

But we should do more than just local area. We should go to the internet. Bob could have other devices, like his phone on a different network. Or he could have a special device called a server, which has a public IP address. Once you have a public IP address, it's much easier to do connections through restrictive nats on the internet.

So, Alice could connect to Bob's server, and get Bob's latest content. But it's important to notice that this is not a random server run by a stranger. It's not a company owned server. Alice trusts Bob, and that's why she's OK with connecting to his server. This is basically a 'mirror-only' server, so if it goes down nothing is lost. Bob can just set up another server and the data replicates again.

We need more connectivity modes beyond LAN and internet: personal area networks like bluetooth, and direct connection lines between Alice and Bob over the internet. This architecture is pretty comparable to the emergent internet of things, except applied to people. On the internet of things, simple devices connect directly to each other and spread data through gossip. Here, people do that.

<h2 id="apps" class="hr"><span class="hr">APPS</span></h2>

There is one full implementation of Scuttlebutt in NodeJS, and alternative implementations in C, Rust, and Go are being built. I'd like to show you some apps that we've built. Most of them are Electron-based.

[Patchwork](https://github.com/ssbc/patchwork) has all the normal social interactions, with infinite scrolling threads, commenting, liking, user profiles, following, blocking, search, etc. Most people on Scuttlebutt use this one.

[Patchbay](https://github.com/ssbc/patchbay) is more for power users. It has Tabs, which means you can navigate through many things at the same time. Each tab can be a specialised mini-app. For instance, a chess game that works entirely through Scuttlebutt messages.

[Tick Tack](https://github.com/ticktackim/ticktack-network) focuses on long-form writing. Sometimes it looks like Medium.

The one I'm working on is a mobile app, [Manyverse](https://manyver.se). This is my main project and I've been working on it for over a year. It runs with React Native, with NodeJS running as a background thread.

<h2 id="tech-stack" class="hr"><span class="hr">TECH STACK</span></h2>

So, let's take a look at the NodeJS stack that powers these apps. How would you build one yourself?

<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill-opacity="1" color-rendering="auto" color-interpolation="auto" text-rendering="auto" stroke="black" stroke-linecap="square" width="600" stroke-miterlimit="10" shape-rendering="auto" stroke-opacity="1" fill="black" stroke-dasharray="none" font-weight="normal" stroke-width="1" height="285" font-family="'Dialog'" font-style="normal" stroke-linejoin="miter" font-size="12px" stroke-dashoffset="0" image-rendering="auto" viewBox="0 0 653 310">
  <defs id="genericDefs"/>
  <g>
    <defs id="defs1">
      <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1">
        <path d="M0 0 L653 0 L653 310 L0 310 L0 0 Z"/>
      </clipPath>
      <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2">
        <path d="M220 871 L873 871 L873 1181 L220 1181 L220 871 Z"/>
      </clipPath>
    </defs>
    <g fill="white" text-rendering="geometricPrecision" shape-rendering="geometricPrecision" transform="translate(-220,-871)" stroke="white">
      <rect x="220" width="653" height="310" y="871" clip-path="url(#clipPath2)" stroke="none"/>
    </g>
    <g fill="rgb(153,204,255)" text-rendering="geometricPrecision" shape-rendering="geometricPrecision" transform="matrix(1,0,0,1,-220,-871)" stroke="rgb(153,204,255)">
      <rect x="235" width="389" height="54" y="1041" clip-path="url(#clipPath2)" stroke="none"/>
    </g>
    <g font-size="14px" stroke-linecap="butt" transform="matrix(1,0,0,1,-220,-871)" text-rendering="geometricPrecision" font-family="'Source Sans Pro'" shape-rendering="geometricPrecision" stroke-miterlimit="1.45">
      <text x="393.9945" xml:space="preserve" y="1071.8618" clip-path="url(#clipPath2)" stroke="none">secret-stack</text>
    </g>
    <g fill="rgb(153,204,255)" text-rendering="geometricPrecision" shape-rendering="geometricPrecision" transform="matrix(1,0,0,1,-220,-871)" stroke="rgb(153,204,255)">
      <rect x="235" width="225.2646" height="30" y="1100.5" clip-path="url(#clipPath2)" stroke="none"/>
    </g>
    <g font-size="14px" stroke-linecap="butt" transform="matrix(1,0,0,1,-220,-871)" text-rendering="geometricPrecision" font-family="'Source Sans Pro'" shape-rendering="geometricPrecision" stroke-miterlimit="1.45">
      <text x="314.1627" xml:space="preserve" y="1119.3618" clip-path="url(#clipPath2)" stroke="none">multiserver</text>
    </g>
    <g fill="rgb(153,204,255)" text-rendering="geometricPrecision" shape-rendering="geometricPrecision" transform="matrix(1,0,0,1,-220,-871)" stroke="rgb(153,204,255)">
      <rect x="466.0071" width="118.6713" height="30" y="1100.5" clip-path="url(#clipPath2)" stroke="none"/>
    </g>
    <g font-size="14px" stroke-linecap="butt" transform="matrix(1,0,0,1,-220,-871)" text-rendering="geometricPrecision" font-family="'Source Sans Pro'" shape-rendering="geometricPrecision" stroke-miterlimit="1.45">
      <text x="503.116" xml:space="preserve" y="1119.3618" clip-path="url(#clipPath2)" stroke="none">muxrpc</text>
    </g>
    <g fill="rgb(153,204,255)" text-rendering="geometricPrecision" shape-rendering="geometricPrecision" transform="matrix(1,0,0,1,-220,-871)" stroke="rgb(153,204,255)">
      <rect x="235" width="36" height="30" y="1136" clip-path="url(#clipPath2)" stroke="none"/>
    </g>
    <g font-size="14px" stroke-linecap="butt" transform="matrix(1,0,0,1,-220,-871)" text-rendering="geometricPrecision" font-family="'Source Sans Pro'" shape-rendering="geometricPrecision" stroke-miterlimit="1.45">
      <text x="243.3383" xml:space="preserve" y="1154.8618" clip-path="url(#clipPath2)" stroke="none">net</text>
    </g>
    <g fill="rgb(153,204,255)" text-rendering="geometricPrecision" shape-rendering="geometricPrecision" transform="matrix(1,0,0,1,-220,-871)" stroke="rgb(153,204,255)">
      <rect x="275.6893" width="141.9322" height="30" y="1136" clip-path="url(#clipPath2)" stroke="none"/>
    </g>
    <g font-size="14px" stroke-linecap="butt" transform="matrix(1,0,0,1,-220,-871)" text-rendering="geometricPrecision" font-family="'Source Sans Pro'" shape-rendering="geometricPrecision" stroke-miterlimit="1.45">
      <text x="294.3871" xml:space="preserve" y="1154.8618" clip-path="url(#clipPath2)" stroke="none">secret-handshake</text>
    </g>
    <g fill="rgb(153,204,255)" text-rendering="geometricPrecision" shape-rendering="geometricPrecision" transform="matrix(1,0,0,1,-220,-871)" stroke="rgb(153,204,255)">
      <rect x="424.2646" width="36" height="30" y="1136" clip-path="url(#clipPath2)" stroke="none"/>
    </g>
    <g font-size="14px" stroke-linecap="butt" transform="matrix(1,0,0,1,-220,-871)" text-rendering="geometricPrecision" font-family="'Source Sans Pro'" shape-rendering="geometricPrecision" stroke-miterlimit="1.45">
      <text x="434.3099" xml:space="preserve" y="1154.8618" clip-path="url(#clipPath2)" stroke="none">ws</text>
    </g>
    <g fill="rgb(153,204,255)" text-rendering="geometricPrecision" shape-rendering="geometricPrecision" transform="matrix(1,0,0,1,-220,-871)" stroke="rgb(153,204,255)">
      <rect x="466.0071" width="118.6713" height="30" y="1136" clip-path="url(#clipPath2)" stroke="none"/>
    </g>
    <g text-rendering="geometricPrecision" stroke-miterlimit="1.45" shape-rendering="geometricPrecision" font-family="'Source Sans Pro'" transform="matrix(1,0,0,1,-220,-871)" stroke-linecap="butt">
      <text x="471.9481" xml:space="preserve" y="1154.3102" clip-path="url(#clipPath2)" stroke="none">packet-stream-codec</text>
    </g>
    <g fill="rgb(126,224,126)" text-rendering="geometricPrecision" shape-rendering="geometricPrecision" transform="matrix(1,0,0,1,-220,-871)" stroke="rgb(126,224,126)">
      <rect x="629.88" width="227.12" height="54" y="1041" clip-path="url(#clipPath2)" stroke="none"/>
    </g>
    <g font-size="14px" stroke-linecap="butt" transform="matrix(1,0,0,1,-220,-871)" text-rendering="geometricPrecision" font-family="'Source Sans Pro'" shape-rendering="geometricPrecision" stroke-miterlimit="1.45">
      <text x="689.6536" xml:space="preserve" y="1071.8618" clip-path="url(#clipPath2)" stroke="none">secure-scuttlebutt</text>
    </g>
    <g fill="rgb(126,224,126)" text-rendering="geometricPrecision" shape-rendering="geometricPrecision" transform="matrix(1,0,0,1,-220,-871)" stroke="rgb(126,224,126)">
      <rect x="675.7552" width="181.2448" height="30" y="1100.5" clip-path="url(#clipPath2)" stroke="none"/>
    </g>
    <g font-size="14px" stroke-linecap="butt" transform="matrix(1,0,0,1,-220,-871)" text-rendering="geometricPrecision" font-family="'Source Sans Pro'" shape-rendering="geometricPrecision" stroke-miterlimit="1.45">
      <text x="741.7231" xml:space="preserve" y="1119.3618" clip-path="url(#clipPath2)" stroke="none">flumedb</text>
    </g>
    <g fill="rgb(126,224,126)" text-rendering="geometricPrecision" shape-rendering="geometricPrecision" transform="matrix(1,0,0,1,-220,-871)" stroke="rgb(126,224,126)">
      <rect x="675.7552" width="87.3392" height="30" y="1136" clip-path="url(#clipPath2)" stroke="none"/>
    </g>
    <g font-size="14px" stroke-linecap="butt" transform="matrix(1,0,0,1,-220,-871)" text-rendering="geometricPrecision" font-family="'Source Sans Pro'" shape-rendering="geometricPrecision" stroke-miterlimit="1.45">
      <text x="688.3199" xml:space="preserve" y="1154.8618" clip-path="url(#clipPath2)" stroke="none">flumelog-*</text>
    </g>
    <g fill="rgb(126,224,126)" text-rendering="geometricPrecision" shape-rendering="geometricPrecision" transform="matrix(1,0,0,1,-220,-871)" stroke="rgb(126,224,126)">
      <rect x="769.6608" width="87.3392" height="30" y="1136" clip-path="url(#clipPath2)" stroke="none"/>
    </g>
    <g font-size="14px" stroke-linecap="butt" transform="matrix(1,0,0,1,-220,-871)" text-rendering="geometricPrecision" font-family="'Source Sans Pro'" shape-rendering="geometricPrecision" stroke-miterlimit="1.45">
      <text x="777.8459" xml:space="preserve" y="1154.8618" clip-path="url(#clipPath2)" stroke="none">flumeview-*</text>
    </g>
    <g fill="rgb(255,153,204)" text-rendering="geometricPrecision" shape-rendering="geometricPrecision" transform="matrix(1,0,0,1,-220,-871)" stroke="rgb(255,153,204)">
      <rect x="235" width="622" height="54" y="886.5" clip-path="url(#clipPath2)" stroke="none"/>
    </g>
    <g font-size="14px" stroke-linecap="butt" transform="matrix(1,0,0,1,-220,-871)" text-rendering="geometricPrecision" font-family="'Source Sans Pro'" shape-rendering="geometricPrecision" stroke-miterlimit="1.45">
      <text x="531.7768" xml:space="preserve" y="917.3619" clip-path="url(#clipPath2)" stroke="none">apps</text>
    </g>
    <g fill="rgb(136,226,216)" text-rendering="geometricPrecision" shape-rendering="geometricPrecision" transform="matrix(1,0,0,1,-220,-871)" stroke="rgb(136,226,216)">
      <rect x="590.0114" width="79.7593" height="65.5" y="1100.5" clip-path="url(#clipPath2)" stroke="none"/>
    </g>
    <g font-size="14px" stroke-linecap="butt" transform="matrix(1,0,0,1,-220,-871)" text-rendering="geometricPrecision" font-family="'Source Sans Pro'" shape-rendering="geometricPrecision" stroke-miterlimit="1.45">
      <text x="604.8517" xml:space="preserve" y="1137.1118" clip-path="url(#clipPath2)" stroke="none">ssb-keys</text>
    </g>
    <g fill="rgb(255,153,153)" text-rendering="geometricPrecision" shape-rendering="geometricPrecision" transform="matrix(1,0,0,1,-220,-871)" stroke="rgb(255,153,153)">
      <rect x="235" width="622" height="54" y="981.5" clip-path="url(#clipPath2)" stroke="none"/>
    </g>
    <g font-size="14px" stroke-linecap="butt" transform="matrix(1,0,0,1,-220,-871)" text-rendering="geometricPrecision" font-family="'Source Sans Pro'" shape-rendering="geometricPrecision" stroke-miterlimit="1.45">
      <text x="516.0635" xml:space="preserve" y="1012.3619" clip-path="url(#clipPath2)" stroke="none">scuttlebot</text>
    </g>
    <g fill="rgb(255,153,153)" text-rendering="geometricPrecision" shape-rendering="geometricPrecision" transform="matrix(1,0,0,1,-220,-871)" stroke="rgb(255,153,153)">
      <rect x="235" width="622" height="30" y="946" clip-path="url(#clipPath2)" stroke="none"/>
    </g>
    <g font-size="14px" stroke-linecap="butt" transform="matrix(1,0,0,1,-220,-871)" text-rendering="geometricPrecision" font-family="'Source Sans Pro'" shape-rendering="geometricPrecision" stroke-miterlimit="1.45">
      <text x="524.5218" xml:space="preserve" y="964.8619" clip-path="url(#clipPath2)" stroke="none">plugins</text>
    </g>
  </g>
</svg>

The big picture is that there is the cryptographic identity in the core, and then there are two parts, one to handle the local database and the other to establish peer connections. In red, we have the background process that supports the frontend.

At the core, there's a [cryptographic key pair](https://github.com/ssbc/ssb-keys/) that represents your identity. This is your account. It's comparable to cryptocurrency accounts. There is no login. It's more like PGP, where you have a public and private key. We use the highly reliable [libsodium](https://download.libsodium.org/doc/) crypto primitives, and the key schema is the asymmetric elliptic curve ed25519. This key pair is stored as a file in your home directory.

The modules related to the local database are in green. They represent you as a node in the social graph. We use the crypto key pair to sign each message that you save, and then store it. There are two parts to the database, the log and the views. The log is basically everything that comes through. It's an append-only log. The indexes, or the views, help to make queries, and we often use [LevelDB](https://github.com/Level/level).

The modules related to network connections are in blue. They represent the edges in the social graph. We have an RPC API so peers can talk to each other. [Multiserver](https://github.com/ssbc/multiserver/) is a module that manages a variety of transports. You can connect to peers through TCP, WebSockets, Tor, and others. It also uses the crypto key pair to create encrypted channels with peers. We use a protocol called [Secret Handshake](https://github.com/auditdrivencrypto/secret-handshake), or SHS, which Dominic created. It allows you to create encrypted channels, given that you know your friend's public key.

On top of that, there is [Scuttlebot](https://github.com/ssbc/scuttlebot), which combines the local databases with the network connection modules. It's a background process like a daemon. On top of that, you can install plugins, which are small pieces of software that do specialised logic. For instance, one of them detects the other peers in the local area network and starts replicating them. Another detects messages of type 'block' and avoids connecting to those peers. These plugins provide a nice API that front-end apps can use.

On top of that, you can build the front-end apps. There's a simple module called [SSB Client](https://github.com/ssbc/ssb-client), which you can connect to the background process over, say, TCP or WebSockets.

To use the whole stack, you first need to install Scuttlebot through NPM. You can start running the background process with "sbot server". Once it's running, you can issue some commands to it. For instance, I can publish a new post to the local database of type 'post' with text 'hi'. I could put any message type I want. There's no predefined message types.

```
npm install --save scuttlebot
```

```
$(npm bin)/sbot server
```

```
$(npm bin)/sbot publish --type post --text "Hi!"
```


Another command could create a new network connection by inserting an invite code from a friend's internet server. Then I'll be connected to that server and it will mirror my content. We're also extending these invites for other modes. For instance, my phone could generate an invite code that you could use, and then we find each other.

```
$(npm bin)/sbot invite.accept $INVITE_CODE
```

So how do we use the client? To build a basic front-end app, you would install two packages: [pull-stream](https://github.com/pull-stream/pull-stream/) and [ssb-client](https://github.com/ssbc/ssb-client). You use ssb-client to get an RPC connection to the background process. Once you have that connection, you can use pull-streams, which have operators like map and filter, to fetch the data from the background process.

Here, I'm asking for 100 messages from the local database. I can filter them by
"message type equals post", and then I can render them however I want. Of course, this is overly simplified. I'm using console log, but the basics are there: how to make a connection to the background process and read data from the database.

```js
const pull = require('pull-stream')
const ssbClient = require('ssb-client')

ssbClient((err, sbot) => {
  if (err) return
  pull(
    sbot.createFeedStream({limit: 100}),
    pull.filter(msg => msg.value.content &&
                       msg.value.content.type === 'post'),
    pull.drain(msg => {
      console.log(`${msg.value.author} said:`)
      console.log(msg.value.content.text)
    })
  )
})
```

You could also write things to the database by using sbot.publish. You can publish any JSON object. Your imagination is the limit. You could put type: 'chess_move' and then it's up to the front-end apps to learn how to interpret it. That's how you'd go about building a [chess app](https://github.com/happy0/ssb-chess).

You'd gather all the chess move messages and make a state of the game and render it. Not all of the apps know how to understand chess move messages. You need to make a decision: does your app hide or show these messages? Some apps show them as a raw message, which you can think of as 'view source' for the social web.

What other kind of things could you publish? There's also message type 'git-update'. You can publish git objects and commits on Scuttlebutt. We've built [Git SSB](https://github.com/clehner/git-ssb), which kind of looks likes GitHub. I think is better described as "Git With Friends", unlike GitHub which involves a lot of strangers.

It supports browsing all of the repos in your social graph, browsing files, issues, pull requests, and listing commits. We use it on a daily basis, actually, to coordinate. It would be a good use case in a company, where you could easy use this on a local area network or through the internet.

Notice that in the corner we have 'digs' instead of GitHub stars. But this choice is not hardcoded. Some apps display likes as digs, others use hearts, thumbs up, upvotes, or checkmarks. Apps can decide. We don't see this as a problem — we see it as a reflection of how humans behave. We all have subjective interpretations.

Remember that time Twitter changed the star icon to a heart icon for the whole human population? That's an objective approach that removes choice of expression and interpretation. We do the opposite.

You too could build a social app with Scuttlebutt, and just the fact that it's an open protocol would solve three of the five lacks.

We've gotten used to closed platforms making decisions for us, but there's a huge opportunity for innovation that's unlocked in an open protocol. I showed you Git SSB and Chess, but you could go way beyond that.

<h2 id="humane-stack" class="hr"><span class="hr">HUMANE STACK</span></h2>

What about the other two issues: lack of trust and lack of respect? In my opinion what sets Scuttlebutt apart form any other decentralised technology that I know of is that we decided to make humanity an essential component in our stack. This is not just a beautiful sentence. Humanity is a technology, too. Primitive homo sapiens took a long time to discover how to do community, and we cannot risk losing that skill for the internet era.

It's easy for people to be anonymous and offensive on the internet, specially in a decentralised, peer to peer system. Scuttlebutt aligns the incentives in a way that humans, not computers or AI, solve the hard community problems. We do that by introducing four properties that incentivise humane behaviour: consequence, locality, pull, and interdependence.

How do you avoid consequence-free behaviour? You add consequences. On Twitter and Facebook there are very few consequences to your actions. You can instantly and globally delete something you regret saying. Maybe someone kept a screenshot, but that's forgeable, so you have plausible deniability. But on Scuttlebutt, everything you publish is cryptographically signed by you, and it may end up in other people's computers, and could stay there for a long time because they may go offline. You can't have instant and global deletes, which makes people a bit more careful with what they say.

Blocking: what does it mean? On Twitter, if you block someone, they can just create a new account and continue to harass you. There are almost no hard consequences for misbehaviour. On Scuttlebutt, if you block someone, it actually reshapes the network topology in such a way that the person you blocked loses one of the bridges to reach your community. The more they are blocked, the fewer bridges they have, and the less their content will be replicated to others.

All of the reads and writes are local-first. So you get full offline support. For instance, in the mobile SSB app on my phone, I'm on airplane mode but there's lots of data there. I used it on the airplane today, liking and posting. I have 2gb of friend data here. I have all these people in my phone.

It's the digital form of hospitality. My computer and my phone are my digital homes. I want to take care how much data I'm using, so I'm only going to store people worth storing. This naturally leads to local moderation. We don't have global moderation or specialised moderators. Everybody has a role in deciding who is worth hosting in our homes.

Pull is the opposite of push. Instead of realtime push notifications, you choose when you want to get updates about new content. Instead of free speech, as in the right to broadcast, we value free listening, which is the right not to be shouted at. Most social networks allow people to basically insert—push—themselves into a community. But Scuttlebutt invites are the other way around: someone in the community has to pull you in.

We are not proponents of total self-reliance. With full independence, you'd just be a lonely node in your social graph. The real value of the social graph is not the amount of nodes, it's the amount of edges. They represent dependence on each other.

Your friend is your backup, literally. If you happen to lose all your data because your computer explodes, all you need is your crypto key pair, your identity, which is a small file. Then you can re-download everything you said and liked and did from a friend nearby. Nothing will be lost. This happened to someone in the community, and we were pleasantly surprised how well it worked.

But let's say you also lost your crypto key pair. One new project, called [Dark Crystal](https://darkcrystal.pw), uses Shamir's key sharding algorithm to split your crypto identity into pieces. You then give one piece to your mom, and one to your friend, and one to your sister. This is our solution for account recovery. if you lose everything, you just ask those people to press a button and return the shards. And that's it! You have nothing else to worry about.

We want to make it possible to have no passwords, no cloud backup, no companies, no captchas. All that you need is your friends. It's a new type of security model built on trusting people, that has the effect of reinforcing trust even more.

Today, we're a community of at least 8,000 people from all around the world. This is a visualisation of the social graph on my computer. Each dot is an account. We have people from Germany, France, Denmark, New Zealand, Egypt, India, Brazil, US, UK, Australia, South Africa, Argentina, Puerto Rico and others. This is also our network topology diagram. We have a couple of mirror servers in the periphery. It's decentralised.

Decentralised systems allow us to build unstoppable apps. So you have to be really careful. What is this thing that cannot be stopped? You don't want to build unstoppable bad things. It would be better if we could build unstoppable good things: hospitality and interdependence. We all want a free internet, outside the reach of corporate social giants. But we also need to restore respect and trust on the internet.
