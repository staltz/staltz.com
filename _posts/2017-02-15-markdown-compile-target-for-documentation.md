---
layout: big-tweet
title: "Markdown: compile target for documentation"
tags: [bigtweet]
---

As I started porting the Cycle.js documentation site to a different "site renderer" ([Jekyll](http://jekyllrb.com/) to [Flatdoc](http://ricostacruz.com/flatdoc/)), I noticed how valuable Markdown was. Because I had written all the content in Markdown, it was extremely easy to port the site from one system to the other. This would probably not have been easy if the content was in HTML, because it would most likely mix layout concerns with content.

For instance, in Markdown, a header can be written simply as content:

```
## How to install
```

While in HTML, you most likely need to include other concerns such as permalinks:

```html
<h2 id="how-to-install">How to install</h2>
```

This is just the tip of the iceberg, because there are tougher issues with HTML such as porting code snippets or basic tables.

This led me to realize how **Markdown is the ideal compile-target for software documentation**. There should two classes of libraries that handle different concerns:

**Reporters**: libraries that convert inline doc comments (such as JSDoc) to Markdown. **From source code to Markdown**.

**Renderers**: libraries that convert a collection of Markdown documents to a full website. **From Markdown to HTML/CSS/JS**.

Currently there are tools that convert source code to HTML/CSS/JS, such as [ESDoc](https://esdoc.org/) (for ES2015+) or [TSDoc](http://typedoc.org) (for TypeScript). While I have been reasonably satisfied with these tools (for instance with the [RxJS site](https://reactivex.io/rxjs)), I now see how it would have been better to choose a tool that converts source code to Markdown, and another tool to convert Markdown to a website.

This would allow developers to easily evolve their websites without having to touch the content. Currently this isn't possible with a tool such as ESDoc.

I hope we can develop **reporter** libraries *specialized* for each language (think `TypeScript2Markdown`, `Elm2Markdown`, etc), so we can easily parameterize with **renderer** libraries to evolve doc sites over time (Flatdoc and GitBook are good examples of this).
