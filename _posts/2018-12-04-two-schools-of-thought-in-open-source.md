---
layout: post
title: "The two schools of thought in open source"
tags: [blog]
---

*Open source* means a lot of different things to different people. To big companies, it's a way of generating attention and momentum using their internal infrastructure. To smaller companies, it's a cheap and critical asset for getting things done. To developers, open source can either be a hobby project, a free tool to solve their problems at work, or a source of burnout. Naturally, when talking about open source, it will bring out different connotations depending on who you're talking to.

But there is another dimension to open source that is not often acknowledged: monolithic style versus modular style of open sourcing reusable code. I'll explain the many differences between these two, but this is not an article about code, it's an article about *people* and how they approach programming in different ways.

## Monolithic or Modular

Let's assume you want to open source some utilities you built. Do you put them all in one package (like [Lodash](http://lodash.com/)) or do publish one utility per package (like [Sindre's libraries](https://github.com/sindresorhus/array-uniq))? The first is a monolithic approach, the second is a modular approach. The thought processes that go about defending one style or the other define a school of thought. There is no right or wrong here, these are simply different ways of doing the same thing.

The choice, either monolithic or modular, will heavily influence what people expect from the library. It affects project funding, how people submit issues, how people send pull requests, and how people expect the project to evolve. If politics have the Left and the Right, open source has Modular and Monolithic: two ways of thinking and working with open software, that have different aspirations. It's not a property of software itself, it is *culture built into software*.

## What monolithic thinking looks like

[![A laptop with one sticker, the WordPress sticker](/img/monolithic-laptop.png)](/img/monolithic-laptop.png)

The monolithic school of thought considers **software to be a service** that authors build aiming at solving a large problem or a category of problems. **Examples are**: [WordPress](https://github.com/WordPress/WordPress/), [Linux](https://github.com/torvalds/linux), [React Native](https://github.com/facebook/react-native), [Django](https://github.com/django/django), [Electron](https://github.com/electron/electron), [ReactiveX](https://github.com/ReactiveX/), [Webpack](https://github.com/webpack/webpack), and all kinds of frameworks. These are projects that may have many commits, many lines of code, and may change significantly over time. In fact, large changes are seen as a good thing, often a synonym of evolution as the project better adapts to the goal it aims for. Monolithic thinking takes pride in the depth and breadth of the use cases for the software.

With monolithic open source projects, **people's expectations** are:

- Several and frequent commits indicate project quality
- Issues, when several, indicate project popularity
- There are official and dedicated maintainers working on issues
- The project is named as a brand
- Features will continuously be added

The bulk of the work for a monolithic project is done in the *long tail* of commits.

[![Commits chart for Django](/img/commits-django.png)](/img/commits-django.png)

<small><em>Commits in the <a href="https://github.com/django/django/graphs/contributors">Django</a> framework</em></small>

Therefore, **funding** is aimed at constantly reducing bug count, adding features, making large rewrites, supporting community events and conferences. Funding may only begin many months or years after the project was begun.

The monolithic school of thought is rooted in Silicon Valley's large companies with a development culture of [monorepos](https://en.wikipedia.org/wiki/Monorepo) and *progress through breaking changes*.

## What modular thinking looks like

[![A laptop with many stickers of modular libraries](/img/modular-laptop.png)](/img/modular-laptop.png)

The modular school of thought considers **software to be a cogwheel** that authors build aiming at solving a specific problem interoperating with other cogwheels. Examples are: [Browserify](https://github.com/browserify/) utilities, [Callbag](https://github.com/callbag/callbag), Node.js [LevelDB](https://github.com/Level), [Pull Stream](https://github.com/pull-stream/), [Sindre Sorhus' tiny libraries](https://github.com/sindresorhus?tab=repositories), [React community components](https://github.com/brillout/awesome-react-components). These are projects that are typically small in size, solve a very specific problem, and usually do not significantly change after they are published. In fact, its immutability is often seen as a good thing, a synonym that the project is "done". Modular thinking takes pride in the interoperability with other modules and the fact that it can afford to fully solve one specific problem.

With modular open source projects, **people's expectations** are:

- Several modules around a larger category indicate an active community
- Source code is readable, small, and easy to fork
- Issues, when many, indicate a problem with the module
- The project is named by utility, not brand (e.g. `stream-to-pull-stream`, not Mochaccino)
- The module's usage and API is similar to other modules' APIs

The bulk of the work for a modular project is done in the *genesis* of the repository.

[![Commit chart for pull-ws](/img/commits-pull-ws.png)](/img/commits-pull-ws.png)

<small><em>Commits in the <a href="https://github.com/pull-stream/pull-ws/graphs/contributors">pull-ws</a> library</em></small>

**Funding** is usually aimed at thanking for existing work that will no longer receive updates, or aimed at specific open source authors known to produce many modules.

The modular school of thought traces back to the [Unix philosophy](https://en.wikipedia.org/wiki/Unix_philosophy) and is now championed by open source hackers, particularly in the Node.js community.

## When it gets mixed up

When monolithic adherents look at a modular project, they may think that it's low quality or abandoned simply because commit count is low and rare, new features are not being added, and the project has no funding or community events. Interestingly, these same properties are what modular adherents will perceive as *a good thing*, likely to indicate that the module is complete. Monolithic adherents don't believe a project could ever be "complete".

On the other side of the wall, when modular adherents look at a monolithic project, they may fear using it for being too large to read its source code, evolving a lot over time, bring too many features when they are only looking for one specific feature. These same properties are what monolithic adherents will perceive as *a good thing*. Modular adherents don't believe large software can be secure and performant, or that constantly changing software could be reliable.

A lot of topics can divide programmers, like tabs versus spaces, or semicolons versus no semicolons, but the monolithic versus modular debate is not so obvious when it occurs. Often, it's made harder by the fact that some projects are a bit monolithic in some ways, a bit modular in other ways.

I have had experience with three projects of the same type (reactive stream programming in JavaScript) but on different ends of the monolithic-modular spectrum:

- [RxJS](https://github.com/ReactiveX/rxjs) is monolithic
- [xstream](https://github.com/staltz/xstream) is hybrid monolithic-modular
- [Callbag](https://github.com/callbag/callbag) is modular

A very interesting case is React. When it was published it was quite monolithic, comprising of many responsibilities, but these are lately being factored out as a modules: react, react-dom, prop-types, react-test-renderer, etc. More clearly, React's main achievement – UI encapsulation and reusability – created a common contract that UI components could use. As a result, the community of React components is a strong example of modular thinking.

What I've learned from observing these projects is that modular thinking requires a *small consensus contract* which provides the interoperability, and this consensus interop point should not change over time. For example, in Callbag the core is simply a [spec](https://github.com/callbag/callbag), with no usable code to import. Actual code is left to [individual libraries](https://github.com/callbag/callbag/wiki) that adhere to the small spec, but provide very specific solutions. As another example, old React components written with `createClass(obj)` should still work with newer versions of React, even though new styles and shapes are more common today, showing that React provides a small core that decentralized community components can utilize to interoperate.

Without aiming for interoperability as a priority, monolithic thinking can afford more breaking changes that allow fundamental shifts in the project. An example would be the transition from Angular 1 to Angular 2. This can give the appearance of progressivism to monolithic projects and conservatism to modular projects.

## Conclusion

When we talk about open source in a broad sense, it's important to consider what people mean with it, and what kind of typical project comes to mind. Funding modular open source looks vastly different to funding monolithic open source. "Maintenance" (as a job) may only make sense for monolithic projects. Measurements of quality and maintenance (such as those on npm search results) may be biased toward monolithic projects. The workload that it takes to build a modular project could never cover the necessary effort for a monolithic project.

It's as if there are two completely different ideas out there of what a "good open source project" looks like, and we could be communicating better what we mean with our expectations.
