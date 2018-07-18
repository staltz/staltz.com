## Getting started with Scuttlebutt for social feeds

[Scuttlebutt](https://www.scuttlebutt.nz) is a free and open source social network with unique offline-first and peer-to-peer properties. As a JavaScript open source programmer, I discovered Scuttlebutt two years ago as a promising foundation for a new "social web" that provides an alternative to proprietary platforms. The social metaphor of mainstream platforms is now a more popular way of creating and consuming content than the Web is. Instead of attempting to adapt existing Web technologies for the mobile social era, Scuttlebutt allows us to start from scratch the construction of a new ecosystem.

## A local database, shared with friends

The central idea of the Secure Scuttlebutt (SSB) protocol is simple: your social account is just a cryptographic keypair (your *Identity*) plus a log of messages (your *Feed*) stored in a local database. So far, this has no relation to the Internet, it is just a local database where your posts are stored in an append-only sequence, and allows you to write status updates like you would with a personal diary. SSB becomes a *social network* when those local feeds are shared among computers through the internet or through local networks. The protocol supports peer-to-peer replication of feeds, so that you can have local (and full) copies of your friends' feeds, and update them whenever you are online. One implementation of SSB, [*Scuttlebot*](https://github.com/ssbc/scuttlebot), uses Node.js and allows UI applications to interact with the local database and the network stack.

<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill-opacity="1" color-rendering="auto" color-interpolation="auto" text-rendering="auto" stroke="black" stroke-linecap="square" width="653" stroke-miterlimit="10" shape-rendering="auto" stroke-opacity="1" fill="black" stroke-dasharray="none" font-weight="normal" stroke-width="1" height="298" font-family="'Dialog'" font-style="normal" stroke-linejoin="miter" font-size="12px" stroke-dashoffset="0" image-rendering="auto">
  <defs id="genericDefs"/>
  <g>
    <defs id="defs1">
      <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1">
        <path d="M0 0 L653 0 L653 298 L0 298 L0 0 Z"/>
      </clipPath>
      <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2">
        <path d="M220 883 L873 883 L873 1181 L220 1181 L220 883 Z"/>
      </clipPath>
    </defs>
    <g fill="white" text-rendering="geometricPrecision" shape-rendering="geometricPrecision" transform="translate(-220,-883)" stroke="white">
      <rect x="220" width="653" height="298" y="883" clip-path="url(#clipPath2)" stroke="none"/>
    </g>
    <g fill="rgb(153,204,255)" text-rendering="geometricPrecision" shape-rendering="geometricPrecision" transform="matrix(1,0,0,1,-220,-883)" stroke="rgb(153,204,255)">
      <rect x="235" width="389" height="54" y="1041" clip-path="url(#clipPath2)" stroke="none"/>
    </g>
    <g font-size="14px" stroke-linecap="butt" transform="matrix(1,0,0,1,-220,-883)" text-rendering="geometricPrecision" font-family="'Source Sans Pro'" shape-rendering="geometricPrecision" stroke-miterlimit="1.45">
      <text x="393.9945" xml:space="preserve" y="1071.8618" clip-path="url(#clipPath2)" stroke="none">secret-stack</text>
    </g>
    <g fill="rgb(153,204,255)" text-rendering="geometricPrecision" shape-rendering="geometricPrecision" transform="matrix(1,0,0,1,-220,-883)" stroke="rgb(153,204,255)">
      <rect x="235" width="225.2646" height="30" y="1100.5" clip-path="url(#clipPath2)" stroke="none"/>
    </g>
    <g font-size="14px" stroke-linecap="butt" transform="matrix(1,0,0,1,-220,-883)" text-rendering="geometricPrecision" font-family="'Source Sans Pro'" shape-rendering="geometricPrecision" stroke-miterlimit="1.45">
      <text x="314.1627" xml:space="preserve" y="1119.3618" clip-path="url(#clipPath2)" stroke="none">multiserver</text>
    </g>
    <g fill="rgb(153,204,255)" text-rendering="geometricPrecision" shape-rendering="geometricPrecision" transform="matrix(1,0,0,1,-220,-883)" stroke="rgb(153,204,255)">
      <rect x="466.0071" width="157.9929" height="30" y="1100.5" clip-path="url(#clipPath2)" stroke="none"/>
    </g>
    <g font-size="14px" stroke-linecap="butt" transform="matrix(1,0,0,1,-220,-883)" text-rendering="geometricPrecision" font-family="'Source Sans Pro'" shape-rendering="geometricPrecision" stroke-miterlimit="1.45">
      <text x="522.7768" xml:space="preserve" y="1119.3618" clip-path="url(#clipPath2)" stroke="none">muxrpc</text>
    </g>
    <g fill="rgb(153,204,255)" text-rendering="geometricPrecision" shape-rendering="geometricPrecision" transform="matrix(1,0,0,1,-220,-883)" stroke="rgb(153,204,255)">
      <rect x="235" width="36" height="30" y="1136" clip-path="url(#clipPath2)" stroke="none"/>
    </g>
    <g font-size="14px" stroke-linecap="butt" transform="matrix(1,0,0,1,-220,-883)" text-rendering="geometricPrecision" font-family="'Source Sans Pro'" shape-rendering="geometricPrecision" stroke-miterlimit="1.45">
      <text x="243.3383" xml:space="preserve" y="1154.8618" clip-path="url(#clipPath2)" stroke="none">net</text>
    </g>
    <g fill="rgb(153,204,255)" text-rendering="geometricPrecision" shape-rendering="geometricPrecision" transform="matrix(1,0,0,1,-220,-883)" stroke="rgb(153,204,255)">
      <rect x="275.6893" width="141.9322" height="30" y="1136" clip-path="url(#clipPath2)" stroke="none"/>
    </g>
    <g font-size="14px" stroke-linecap="butt" transform="matrix(1,0,0,1,-220,-883)" text-rendering="geometricPrecision" font-family="'Source Sans Pro'" shape-rendering="geometricPrecision" stroke-miterlimit="1.45">
      <text x="294.3871" xml:space="preserve" y="1154.8618" clip-path="url(#clipPath2)" stroke="none">secret-handshake</text>
    </g>
    <g fill="rgb(153,204,255)" text-rendering="geometricPrecision" shape-rendering="geometricPrecision" transform="matrix(1,0,0,1,-220,-883)" stroke="rgb(153,204,255)">
      <rect x="424.2646" width="36" height="30" y="1136" clip-path="url(#clipPath2)" stroke="none"/>
    </g>
    <g font-size="14px" stroke-linecap="butt" transform="matrix(1,0,0,1,-220,-883)" text-rendering="geometricPrecision" font-family="'Source Sans Pro'" shape-rendering="geometricPrecision" stroke-miterlimit="1.45">
      <text x="434.3099" xml:space="preserve" y="1154.8618" clip-path="url(#clipPath2)" stroke="none">ws</text>
    </g>
    <g fill="rgb(153,204,255)" text-rendering="geometricPrecision" shape-rendering="geometricPrecision" transform="matrix(1,0,0,1,-220,-883)" stroke="rgb(153,204,255)">
      <rect x="466.0071" width="157.9929" height="30" y="1136" clip-path="url(#clipPath2)" stroke="none"/>
    </g>
    <g font-size="14px" stroke-linecap="butt" transform="matrix(1,0,0,1,-220,-883)" text-rendering="geometricPrecision" font-family="'Source Sans Pro'" shape-rendering="geometricPrecision" stroke-miterlimit="1.45">
      <text x="482.7098" xml:space="preserve" y="1154.8618" clip-path="url(#clipPath2)" stroke="none">packet-stream-codec</text>
    </g>
    <g fill="rgb(126,224,126)" text-rendering="geometricPrecision" shape-rendering="geometricPrecision" transform="matrix(1,0,0,1,-220,-883)" stroke="rgb(126,224,126)">
      <rect x="629.88" width="227.12" height="54" y="1041" clip-path="url(#clipPath2)" stroke="none"/>
    </g>
    <g font-size="14px" stroke-linecap="butt" transform="matrix(1,0,0,1,-220,-883)" text-rendering="geometricPrecision" font-family="'Source Sans Pro'" shape-rendering="geometricPrecision" stroke-miterlimit="1.45">
      <text x="689.6536" xml:space="preserve" y="1071.8618" clip-path="url(#clipPath2)" stroke="none">secure-scuttlebutt</text>
    </g>
    <g fill="rgb(153,153,255)" text-rendering="geometricPrecision" shape-rendering="geometricPrecision" transform="matrix(1,0,0,1,-220,-883)" stroke="rgb(153,153,255)">
      <rect x="235" width="622" height="76.9289" y="958.5711" clip-path="url(#clipPath2)" stroke="none"/>
      <rect x="235" width="622" height="16.9289" y="958.5711" clip-path="url(#clipPath2)" stroke="none"/>
    </g>
    <g font-size="14px" stroke-linecap="butt" transform="matrix(1,0,0,1,-220,-883)" text-rendering="geometricPrecision" font-family="'Source Sans Pro'" shape-rendering="geometricPrecision" font-weight="bold" stroke-miterlimit="1.45">
      <text x="514.1046" xml:space="preserve" y="971.0793" clip-path="url(#clipPath2)" stroke="none">scuttlebot</text>
    </g>
    <g fill="rgb(231,224,251)" text-rendering="geometricPrecision" shape-rendering="geometricPrecision" transform="matrix(1,0,0,1,-220,-883)" stroke="rgb(231,224,251)">
      <rect x="259" width="138" height="30" y="990.5" clip-path="url(#clipPath2)" stroke="none"/>
    </g>
    <g font-size="14px" stroke-linecap="butt" transform="matrix(1,0,0,1,-220,-883)" text-rendering="geometricPrecision" font-family="'Source Sans Pro'" shape-rendering="geometricPrecision" stroke-miterlimit="1.45">
      <text x="304.248" xml:space="preserve" y="1009.3619" clip-path="url(#clipPath2)" stroke="none">plugin A</text>
    </g>
    <g fill="rgb(231,224,251)" text-rendering="geometricPrecision" shape-rendering="geometricPrecision" transform="matrix(1,0,0,1,-220,-883)" stroke="rgb(231,224,251)">
      <rect x="477.5" width="138" height="30" y="990.5" clip-path="url(#clipPath2)" stroke="none"/>
    </g>
    <g font-size="14px" stroke-linecap="butt" transform="matrix(1,0,0,1,-220,-883)" text-rendering="geometricPrecision" font-family="'Source Sans Pro'" shape-rendering="geometricPrecision" stroke-miterlimit="1.45">
      <text x="522.4402" xml:space="preserve" y="1009.3619" clip-path="url(#clipPath2)" stroke="none">plugin B</text>
    </g>
    <g fill="rgb(231,224,251)" text-rendering="geometricPrecision" shape-rendering="geometricPrecision" transform="matrix(1,0,0,1,-220,-883)" stroke="rgb(231,224,251)">
      <rect x="696" width="138" height="30" y="990.5" clip-path="url(#clipPath2)" stroke="none"/>
    </g>
    <g font-size="14px" stroke-linecap="butt" transform="matrix(1,0,0,1,-220,-883)" text-rendering="geometricPrecision" font-family="'Source Sans Pro'" shape-rendering="geometricPrecision" stroke-miterlimit="1.45">
      <text x="741.0591" xml:space="preserve" y="1009.3619" clip-path="url(#clipPath2)" stroke="none">plugin C</text>
    </g>
    <g fill="rgb(126,224,126)" text-rendering="geometricPrecision" shape-rendering="geometricPrecision" transform="matrix(1,0,0,1,-220,-883)" stroke="rgb(126,224,126)">
      <rect x="629.88" width="227.12" height="30" y="1100.5" clip-path="url(#clipPath2)" stroke="none"/>
    </g>
    <g font-size="14px" stroke-linecap="butt" transform="matrix(1,0,0,1,-220,-883)" text-rendering="geometricPrecision" font-family="'Source Sans Pro'" shape-rendering="geometricPrecision" stroke-miterlimit="1.45">
      <text x="718.7855" xml:space="preserve" y="1119.3618" clip-path="url(#clipPath2)" stroke="none">flumedb</text>
    </g>
    <g fill="rgb(126,224,126)" text-rendering="geometricPrecision" shape-rendering="geometricPrecision" transform="matrix(1,0,0,1,-220,-883)" stroke="rgb(126,224,126)">
      <rect x="629.88" width="111.096" height="30" y="1136" clip-path="url(#clipPath2)" stroke="none"/>
    </g>
    <g font-size="14px" stroke-linecap="butt" transform="matrix(1,0,0,1,-220,-883)" text-rendering="geometricPrecision" font-family="'Source Sans Pro'" shape-rendering="geometricPrecision" stroke-miterlimit="1.45">
      <text x="654.3231" xml:space="preserve" y="1154.8618" clip-path="url(#clipPath2)" stroke="none">flumelog-*</text>
    </g>
    <g fill="rgb(126,224,126)" text-rendering="geometricPrecision" shape-rendering="geometricPrecision" transform="matrix(1,0,0,1,-220,-883)" stroke="rgb(126,224,126)">
      <rect x="745.904" width="111.096" height="30" y="1136" clip-path="url(#clipPath2)" stroke="none"/>
    </g>
    <g font-size="14px" stroke-linecap="butt" transform="matrix(1,0,0,1,-220,-883)" text-rendering="geometricPrecision" font-family="'Source Sans Pro'" shape-rendering="geometricPrecision" stroke-miterlimit="1.45">
      <text x="765.9675" xml:space="preserve" y="1154.8618" clip-path="url(#clipPath2)" stroke="none">flumeview-*</text>
    </g>
    <g fill="rgb(255,204,255)" text-rendering="geometricPrecision" shape-rendering="geometricPrecision" transform="matrix(1,0,0,1,-220,-883)" stroke="rgb(255,204,255)">
      <rect x="235" width="622" height="54" y="898.7353" clip-path="url(#clipPath2)" stroke="none"/>
    </g>
    <g font-size="14px" stroke-linecap="butt" transform="matrix(1,0,0,1,-220,-883)" text-rendering="geometricPrecision" font-family="'Source Sans Pro'" shape-rendering="geometricPrecision" stroke-miterlimit="1.45">
      <text x="502.0991" xml:space="preserve" y="929.5972" clip-path="url(#clipPath2)" stroke="none">UI applications</text>
    </g>
  </g>
</svg>

## Using Scuttlebot

While SSB is being implemented in multiple languages ([Go](https://github.com/cryptoscope/secretstream), [Rust](https://github.com/ssbc/ssb-client-rs), [C](https://git.scuttlebot.io/%25133ulDgs%2FoC1DXjoK04vDFy6DgVBB%2FZok15YJmuhD5Q%3D.sha256/blob/fd953a1e72b4b16e6e5a74bcf2f893dbf1407ce4/sbotc.c)), its main implementation at the moment is the npm package [`scuttlebot`](https://github.com/ssbc/scuttlebot) and [Electron desktop apps](https://www.scuttlebutt.nz/applications.html) that use Scuttlebot. To build your own UI application from scratch, you can setup Scuttlebot plus a localhost HTTP server to render the UI in your browser.

Run the following `npm` command to add Scuttlebot to your Node.js project:

```
npm install --save scuttlebot
```

You can test Scuttlebot locally using the command line interface, to post messages, view messages, connect with friends. First, the server should be started:

```bash
$(npm bin)/sbot server
```

In another terminal you can use the server to publish a message in your local feed:

```bash
$(npm bin)/sbot publish --type post --text "Hello world"
```

You can also consume invite codes to connect with friends and replicate their feeds:

```bash
$(npm bin)/sbot invite.accept $INSERT_INVITE_CODE_HERE
```

To create a simple web app to render your local feed, you can start the scuttlebot server in a Node.js script (with dependencies [`ssb-config`](https://github.com/ssbc/ssb-config) and [`pull-stream`](https://github.com/pull-stream/pull-stream)), and serve the feed through an HTTP server:

```js
// server.js
const fs = require('fs');
const http = require('http');
const pull = require('pull-stream');
const sbot = require('scuttlebot/index').call(null, require('ssb-config'));

http
  .createServer((request, response) => {
    if (request.url.endsWith('/feed')) {
      pull(
        sbot.createFeedStream({live: false, limit: 100}),
        pull.collect((err, messages) => {
          response.end(JSON.stringify(messages));
        }),
      );
    } else {
      response.end(fs.readFileSync('./index.html'));
    }
  })
  .listen(9000);
```

Start the server with `node server.js`, and upon opening `localhost:9000` in your browser, it should serve the index.html:

```html
<html>

<body>
  <script>
    fetch('/feed')
      .then(res => res.json())
      .then(messages => {
        document.body.innerHTML = `
          <h1>Feed</h1>
          <ul>${messages
            .filter(msg => msg.value.content.type === 'post')
            .map(msg =>
              `<li>${msg.value.author} said: ${msg.value.content.text}</li>`
            )
          }</ul>
        `;
      });
  </script>
</body>

</html>
```

## Learn more

Actual SSB applications can accomplish more than messaging, for instance there exists [Git collaboration over SSB](https://github.com/clehner/git-ssb), [Chess games](https://github.com/happy0/ssb-chess), and [managing gatherings and their attendance](https://github.com/pietgeursen/patch-gatherings).

There are multiple Scuttlebot plugins that provide specialized APIs or different ways of querying the database. See [secret-stack](https://github.com/ssbc/secret-stack) for details on how to build custom plugins. See [flumedb](https://github.com/flumedb/flumedb) for details on how to create custom indexes in the database. Also there are many useful [repositories in our GitHub org](https://github.com/ssbc/).

To learn about the cross-language protocol, see the [protocol guide](https://ssbc.github.io/scuttlebutt-protocol-guide/) that explains the cryptographic primitives used, and data formats agreed on.

Finally, don't miss the frontpage [Scuttlebutt.nz](https://www.scuttlebutt.nz/), which explains the design decisions and principles we value. We highlight the important role that humans have in internet communities which should not be delegated to computers.

