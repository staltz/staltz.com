---
layout: post
title: "Open source without maintainers"
tags: [blog]
---

Why is maintenance such a big hurdle in many open source projects? It is often the primary reason for burnouts among maintainers.

I recently realized that many open source projects have the opportunity of progressing independently from their original authors if there is the right culture in the community. Not all projects can do this, though. What I'll describe here mostly applies to small open source libraries, not large libraries neither end-user software.

## Publishing forks

So. A year ago, I stumbled upon this tool for JavaScript projects called [patch-package](https://github.com/ds300/patch-package/), by [David Sheldrick](https://twitter.com/djsheldrick). It allowed me to create small patches to apply on dependencies, that persist throughout [npm](http://npmjs.com/) installations and deletions. I used it to customize small aspects of some of my dependencies to work properly with my software project. It allowed *me* to "maintain" a third-party library without bothering its original authors.

The tool, however, is only convenient for small and temporary patches. Some of those patches in my project were getting big, so I made a fork of the third-party library. The interesting part, though, is that I didn't bother to make a pull request. My reason was primarily laziness, but secondarily, I didn't want to disturb the original author. Maybe they were on the brink of burnout, I thought. Also, I didn't consider my patch that important. I would have liked to create a dismissable and friendly "pull suggestion", not a demanding and entitled "pull request".

Next time I made a fork of another package, `jsondown`, I took a slightly different approach. Like before, I published my own fork on npm, but then I also created a [pull request](https://github.com/toolness/jsondown/pull/5). I wasn't demanding, I just left the PR there and didn't bother to see whether it would be merged. To my surprise, after a few days, they merged it and published a new version on npm. It didn't change my project in any way, except that I was able to rename one of my dependencies, from [`@staltz/jsondown`](https://www.npmjs.com/package/@staltz/jsondown) to [`jsondown`](https://www.npmjs.com/package/jsondown). Any perceived benefit was just aesthetic.

That experience left me intrigued. On one hand, it was like a typical pull request experience. On the other hand, it was entirely different in intent and interaction. I noticed that pull requests can be much less demanding, merging can be less of a responsibility, and closing pull requests can occur without hard feelings from either side. I felt that maybe open source projects could progress without that *responsibility burden*. And so I applied this type of contribution to a couple of other packages, like [leveldown](https://github.com/staltz/leveldown-android-prebuilt), [medeadown](https://github.com/medea/medeadown/pull/8), [react-native-os](https://github.com/staltz/react-native-os), [react-native-workers](https://github.com/staltz/react-native-workers/) (which is, by the way, a fork of a fork).

## Githubness

The word I want to put on spotlight here is 'responsibility'. The perceived duty to keep open source packages up-to-date is often due to "githubness", not due to openness. Many open source consumers often don't take advantage of the fact that the source *is open*. They submit issues, feature requests, and bug reports, then wait for a new version to be released. It makes little difference, to them, whether the project is open source or proprietary. The source code is often a scary place to visit, so it feels safer to avoid it.

There could be several reasons why the GitHub-driven community has become demanding and scared of the source. The reasons I want to highlight are due to subtleties in the user interface which focus our attention on the wrong things. Issues and README are usually the targets of our attention. It doesn't need to be like that, though. In another corner of the web, people share "open source" photography on [unsplash](https://unsplash.com/), and it's an undemanding place with a culture of gifting. In a not too distant neighborhood of the web, on [GitHub Gist](http://gist.github.com/) the source is also open, but there are no issues, no pull requests, and the code is made immediately visible. As a result, sharing code through gists is as "open source" as GitHub public repositories, but it's a space much less likely to cause burnout, because it favors code that is *gifted* over code that is *demanded*.

A gift is not a responsibility. Open source authors have already "contributed" to the world by simply making the source open. Before it sounds like I'm suggesting a division between authors and consumers, these are situational roles, not permanent titles. A programmer can change hats throughout the day, but to keep open source constantly maintained, it requires a crucial skill: willingness to read third-party source code. It does *not*, fundamentally, require the author or an official maintainer. It simply requires someone willing to read and understand the code in order to fix it. Once the fix is ready, a *fork* can be published, not the official/original one. Ideally, an open source project can progress as follows:

- Alice shares the code
- Alice willingly does some updates to the code
- Bob is interested in feature X or fix X
- Bob reads the source, does a patch, and releases his own fork
- Charles is interested in feature Y or fix Y
- Charles uses Bob's code like Bob used Alice's code
- Alice is herself *interested* in X and Y, so Alice takes the initiative to merge those

There are two important caveats with that idealized approach, though. First, it assumes that programmers are willing to and allowed to spend time reading and understanding third-party code. Second, it wouldn't work well for large projects. It makes less sense to release our own tweaked forks of, for instance, [TypeScript](http://www.typescriptlang.org/) or [React Native](http://facebook.github.io/react-native/), because large projects are harder to customize, but specially because forking them would disrupt the very foundation of "code" and our ability to share ideas through that well-agreed-upon foundation.

## Read small libraries, write small libraries

Those two caveats, on the other hand, highlight what we could improve as a community of programmers:

- Practice reading and understanding third-party code
- Author smaller open source libraries

Reading the source code of libraries is scary in the beginning because it looks different than application code. If you've only written code that builds end-user software, then you have been building first-order features. Library code is different because it builds higher-order features. You could say, library code is more abstract. To make it a bit scarier, the code style used is often quite alien to the code style you are used to. Every library looks different because authors are different. If your employer doesn't understand the ethos of open source, you might be even directly discouraged to "work on other people's code" during worktime, a common but sad practice in our industry.

That said, I can't emphasize enough how healthy it is as a programmer to be constantly reading different codebases. You start looking at code patterns more than code style. You learn a trick or two. And you actually end up understanding the library, so then it's not hard to fix it or even take inspiration to write your own library from scratch. If you haven't yet written a library, I recommend you try it out, even if it's not going to be popular at first.

Small libraries are easier to read and understand. There are plenty of JavaScript libraries that aim to be tiny, so reading their source isn't going to cost you more than a few dozen minutes of uninterrupted attention. Small libraries are easy to abandon and easy to fork. So these libraries seem to fit well as open source without maintainers.

There are actually several large projects that could be split into multiple small ones. For instance, React Native comes with a dozen built-in components and native APIs, all in one library. Each one could be made as their own library, not in a monorepo, but in a dedicated repository. This is just a concrete example, not a criticism towards React Native, which I use and appreciate. There are other projects that fall in the category of "bag of utilities" where it would be possible to split those into many small libraries.

## Supportive disagreement

The partition into small libraries has to do with *minimizing consensus*. Sebastian Markbage once [spoke about minimizing API surface](https://2014.jsconf.eu/speakers/sebastian-markbage-minimal-api-surface-area-learning-patterns-instead-of-frameworks.html). I'll remix that idea and propose: what if we would **minimize the consensus surface** of open source project? If we agree to only a few things, then we are free to disagree in other aspects. Disagreements are painful when we have to choose one winner, because someone will end up disappointed. But disagreement means freedom when we don't have to agree, because diversity of opinions on how and what to build are a great thing. I don't like the English word for disagreement, it has negative connotations ("A failure or refusal to agree", "a conflict or difference of opinion", [according to the dictionary](https://www.thefreedictionary.com/disagreement)). In Finnish, we just say "to have a different mind" ("olla eri mieltä"). Language molds our social interactions so much that it sometimes forbids us to see the positive side of traditionally negative concepts.

This kind of freedom to disagree gives green light to creative and wild ideas, and sometimes those wild ideas lead to an amazing discovery. Maybe that discovery ends up becoming the new foundation on which everyone agrees belongs to the minimal surface of consensus, and thus promoting disagreement can actually accelerate us towards agreement and progress. On a more meta-level, I'm talking about culture, the definition of collective intelligence, and tangentially also about individual intelligence. But before I digress, let's go back to open source libraries.

I've seen a community of small libraries with minimal consensus surface among the [pull-stream](https://www.npmjs.com/package/pull-stream) community. The agreed API is simple and small, and there are [hundreds of npm packages](https://www.npmjs.com/search?q=pull-stream) for pull-stream that were *gifted* by authors who sometimes are also consumers of pull-stream libraries. As an example, I'm often just a consumer of pull-stream libraries, but I wrote at least one small package, [pull-workers](https://github.com/staltz/pull-worker).

I decided to take this approach even more radically when I published [Callbags](https://github.com/callbag/callbag). The consensus surface contains zero code, actually, it's just a specification. This is the only thing I expect people to agree upon. The rest, it's all up to the community.

I made some initial packages just to get things started and provide examples, as well as proofs that things work: [callbag-basics](https://github.com/staltz/callbag-basics). But these utilities are far from being "official" packages. They are also very tiny, each one is implemented in often [less than 30 lines of code](https://github.com/staltz/callbag-scan/blob/76e052066d1b24191c24b4d26e55d470ebe82ce5/index.js), inviting people to read it without fear. I paid careful attention to host them under my own GitHub account, not under the official [callbag org](https://github.com/callbag).

As a goal, I want callbags to be an open source project without maintainers. If you send me an issue or a pull request, I'll try to politely inform that... I don't really care. That's because, from experience building [two stream libraries](https://staltz.com/why-we-need-callbags.html), there are many aspects that we don't need to agree upon. If the project makes it easy to disagree and fork, then the community can reduce the effects of inflicted maintenance burden. I call this "supportive disagreement", where I don't try to undermine your opinion, but instead I acknowledge that we disagree and then support and encourage you to express your own opinions.

To my surprise, in the first week I already saw [other callbag packages published on npm](https://www.npmjs.com/search?q=callbag). The one that made me smile the most was [callbag-subscribe](https://www.npmjs.com/package/callbag-subscribe). It started as a [PR that disagreed with the original package's purpose](https://github.com/staltz/callbag-observe/pull/1), then after supporting the disagreement as a fork, it became its own package. As a result, an open source consumer became, in hours, an open source author.

Open source without maintainers is probably an utopian goal that for now applies to only some types of libraries. I couldn't apply it to [Cycle.js](https://cycle.js.org/), for instance, where a core team of [3 maintainers are responsible](https://opencollective.com/cyclejs) for keeping the framework up-to-date. But I hope I have showed how open source without maintainers can be a healthy target to aim for. Overall, we need to decrease burnouts, we need more open source authors, more support for diverse opinions, less agreement, less demands, more gifting, more gratitude.
