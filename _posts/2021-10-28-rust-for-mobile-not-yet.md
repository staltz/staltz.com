---
layout: post
title: "Rust for Mobile? Not yet"
tags: [blog]
---

It's been 1 year and 1 month since [I announced ssb-neon on SSB](https://viewer.scuttlebot.io/%25ce80ayDLE4rDCdVHER8KzAEC3QoQZApUoGho9uAY69o%3D.sha256) as an effort to gradually migrate the [SSB](https://github.com/ssbc) tech stack from JS to Rust. I learned a lot about the technical details of actually doing this in production (in [Manyverse](https://manyver.se)) and have some lessons to share.

## Summary

Since Manyverse version 0.2110.5, all Rust libraries have been removed. This was a sad decision that I had to take, for various technical reasons that I'll explain below.

[ssb-neon, renamed to ssb-rsjs](https://github.com/ssb-rsjs/ssb-rsjs) (to decouple ourselves from the [Neon](https://neon-bindings.com/) library in specific), was also supposed to be a community effort. I thought people would spontaneously contribute a Rust variant of simple libraries like [ssb-ref](https://github.com/ssbc/ssb-ref), [ssb-serve-blobs](https://github.com/ssbc/ssb-serve-blobs), etc, because I trusted in the spontaneous and modular contribution model that powered the [pull-stream community](pull-stream.github.io/) and the [callbag community](https://github.com/callbag/callbag/wiki). To my surprise, apart from the two initial ones I built, no one else made an ssb-rsjs library. [@Daan](https://viewer.scuttlebot.io/@MRiJ+CvDnD9ZjqunY1oy6tsk0IdbMDC4Q3tTC8riS3s=.ed25519) (if I remember correctly) tried to start one, and [@glyph built one for ssb-validate2](https://github.com/ssb-ngi-pointer/ssb-validate2-rsjs) under the SSB NGI Pointer project, but there wasn't any new module from the original ssb-rsjs list.

## The good

There were some concerns expressed that the frequent back-and-forth between JS (V8) and Rust would be a problem for performance, but that didn't turn out to be a measurable problem, at all. In most cases, there was a measurable speed up (10% – 25%).

Programming in Rust has been relatively (in my experience) straightforward and translation from JS concepts to Rust not too hard to do. It seemed like a matter of "just doing it". And as far as I see with glyph's work, [node-bindgen](https://github.com/infinyon/node-bindgen) was even more dev friendly than Neon. It felt like we just needed to do that for all components in SSB and we'd be done.

## The bad

- Large compilation times
- Large binary sizes
- Non-shared binary dependencies

From the beginning, it's obvious that the Rust compiler spends a lot of time spinning your fans, and it may take ~3 min to get one simple library (such as [ssb-keys-neon](https://github.com/staltz/ssb-keys-neon)) to compile. Multiply that duration with the number of different architectures supported (at least armv7 and armv8) and number of ssb-rsjs libraries, and suddenly it becomes a big deal to wait for Manyverse to fully compile. This sometimes affected development speed because some coding required re-compiling. Most coding didn't require re-compiling, but when it did, it felt really slow. I understand that the Rust compiler can cache most built dependencies in the compilation, but when you're dealing with esoteric dev environments such as [nodejs-mobile](https://github.com/nodejs-mobile/), Android Gradle, and XCode, I really have no idea how to enable caching.

The binary sizes turned out to be quite concerning as well. Here are some example sizes of binary dependencies shipped in Manyverse 0.2108.2 (in bold are the ssb-rsjs dependencies):

- bufferutil: 10 kB
- sodium-native: 568 kB
- leveldown: 450 kB
- **ssb-keys-neon: 3,11 MB**
- **ssb-keys-mnemonic-neon: 2,96 MB**

All things considered, shipping extra 6 MB is not a big deal. The problem is if you consider all the modules we wanted to convert from JS to Rust, it becomes many modules. For example, according to the original list on the ssb-neon repo, there would be 22 modules. If you count that each one would be 3 MB, then the total would be 66 MB. It would probably mean that the APK size for Manyverse would be greater than 100 MB, which for some users begins to be a no no.

The underlying problem there is that these binaries have a bunch of dependencies, but they don't share the dependencies. For instance, it's common for Rust crates to have dependencies such as `base64`, `byteorder`, `cfg-if`, `libc`, `memchr`, `rand`, `serde`, `thread_local`, etc, which means that **each ssb-rsjs binary** would ship their own copy of these dependencies. Ideally they would be deduplicated. Maybe this is possible, maybe the dependencies can be compiled as dynamic libraries, but I have no idea how to configure that, and tie all of that together. (Reminder: I do all this through nodejs-mobile, Android Gradle, and XCode) If you're reading this and you know the solution, please help.

Even if dependencies would be shared, one would have to take into account different versions of those dependencies, because library A may need dependency X at 1.1.0 while library B needs X at 2.3.0. I am not sure what would the total binary dependency tree add up in storage costs, but let's say that above 30 MB total would be bad.

According to the [ssb-rsjs plan](https://github.com/ssb-rsjs/ssb-rsjs/blob/master/PLAN.md) split into four "horizons", this means that executing Horizon 2 is prohibitive and we would need to skip directly from Horizon 1 to Horizon 3, which means a full rewrite that comes with a lot of to-be-polished corner cases and probably would show up to end-users as bugs and crashes. In essence, it's hard to execute a *gradual migration* from Node.js to Rust.

## The ugly

The above were not the real deal breakers though. The worst seemed to be that Rust hasn't matured as a choice for *mobile development*. I'm sure it's a great choice for embedded, for servers and desktops, but the mobile support is quite experimental.

- Unreliable iOS support
- Deal-breaker changes from Apple
- No support for Android 5.0

For iOS, the Rust ecosystem went back and forth whether to support dynamic linking on iOS (see [73516](https://github.com/rust-lang/rust/pull/73516) and [77716](https://github.com/rust-lang/rust/pull/77716)), and it's still not resolved (see [cargo 4881](https://github.com/rust-lang/cargo/issues/4881)).

Worse was when [Apple introduced breaking changes to library linkage on macOS Big Sur](https://developer.apple.com/forums/thread/655588?answerId=665804022#665804022), essentially replacing `dylib` files in the SDK with `tbd` stub libraries, making it impossible (we have not found a solution) to build ssb-rsjs libraries on Big Sur. Apple, as usual, puts the burden on third-party tool developers (i.e. Rust and Cargo devs) to "adapt to this new reality". In practice this meant that I had to avoid at all costs updating my macOS to Big Sur, otherwise [I wouldn't be capable of compiling ssb-rsjs libraries for Manyverse iOS](https://gitlab.com/staltz/manyverse/-/issues/1371).

Another deal breaker was on the Android side. All users with Android 5.0 and 5.1 (e.g. many in Myanmar) experienced [crashes](https://gitlab.com/staltz/manyverse/-/issues/1400) when trying to open Manyverse containing ssb-rsjs libraries. The crash is related to the Rust compiler, the Android NDK, and how Node.js Mobile ties all this together, and I wish I had the (C++, NDK, Rust, linkers) competence to fix it, but I don't. And this is not your average StackOverflow-answerable issue, it requires knowledge of a lot of different technologies working in concert. Android was never meant to support Node.js Mobile and Google only announced official support for Rust in the NDK this year, so it's early stages for Rust on Android. Put all these three together and you get headaches.

## Conclusion

Removing Rust libraries from Manyverse dropped the total size of the app, increased its support across OS versions, improved compilation times, and I haven't heard of any user complaining that it got slower.

It's a shame, really, I would love to have a highly-efficient backend for the app, and I think performance is a big deal. But I think the road to get there is not gradual, and it's not Rust. Maybe Rust will have first-class support on iOS and Android, but 2021 is not the year to place all your bets on that, yet.

If I were to start from scratch, and assuming unlimited budget I would probably build the mobile tech stack in ObjectiveC for iOS and Kotlin (or Java) for Android, because those are guaranteed to have first-class support by Apple and Google, and they have great performance too (I have a hard time believing that Rust on mobile would be, all things considered from an end-user perspective, faster than the 1st-class mobile languages, given all the optimizations and tight integration for the 1st-class languages).
