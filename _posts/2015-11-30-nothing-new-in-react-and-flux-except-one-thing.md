---
layout: post
title: "Nothing new in React and Flux except one thing"
---

What is it that makes React so innovative and compelling? What is so revolutionary in React and Flux? Is it JSX that makes React unique? Is it components? Perhaps Flux with its Dispatcher, Stores, and Actions? Or is it something else?

<h2 id="jsx" class="hr"><span class="hr">JSX?</span></h2>

When React was released, [a lot of people focused their attention on JSX](https://news.ycombinator.com/item?id=5789055). JSX allows developers to write "HTML" primitives directly inside JavaScript, without escaping them in strings.

{% highlight html %}
// Using JSX to express UI components.
var dropdown =
  <Dropdown>
    A dropdown list
    <Menu>
      <MenuItem>Do Something</MenuItem>
      <MenuItem>Do Something Fun!</MenuItem>
      <MenuItem>Do Something Else</MenuItem>
    </Menu>
  </Dropdown>;

render(dropdown);
{% endhighlight %}

The idea of embedding markup in real code is an old one. Facebook took some inspiration from PHP in this regards. Extensively writing markup in PHP code led them to create [XHP](https://www.facebook.com/notes/facebook-engineering/xhp-a-new-way-to-write-php/294003943919) to ease the pain of escaping, among other reasons. Inspired by XHP, [JSX itself was used internally in Facebook](https://twitter.com/sebmarkbage/status/599805631382552576) before React was invented.

JSX is also very similar to [E4X](https://en.wikipedia.org/wiki/E4X), an Ecma standard for "XML in ECMAScript". It never had the wide success that JSX has, but still, the idea of embedding XML syntax in JavaScript existed since 2002.

<h2 id="components" class="hr"><span class="hr">COMPONENTS?</span></h2>

There are tons of reusable React components published as open source which makes it seem it's what React is all about. [Sebastian Markbåge often emphasizes Components](https://twitter.com/sebmarkbage/status/530393349069750272) as the core idea, not the Virtual DOM. Are they the core of React's revolutionary idea too?

Reusable and composable UI components are definitely not a new idea. In the Web, they've been present in [Knockout](http://knockoutjs.com/documentation/component-overview.html) and in [Angular as directives](https://docs.angularjs.org/guide/directive). Beyond the Web, [Android custom Views](https://developer.android.com/training/custom-views/create-view.html) are also reusable UI components. React has its peculiar **way** of achieving components, but the **idea** of components and their declarative usage in HTML templates or JSX is actually fairly old.

<h2 id="dispatcher" class="hr"><span class="hr">DISPATCHER?</span></h2>

At the core of Flux lives the [Dispatcher](http://facebook.github.io/flux/docs/dispatcher.html#content). The Flux architectures introduces a lot of new terminology that makes it look like all the concepts are new, but most of its ideas are well established techniques.

The Dispatcher is an [Event Bus](https://en.wikipedia.org/wiki/Event_monitoring). An Event Bus is a centralized "hub" of *events* (in Flux, *Actions*), broadcasting them from "sources" (in Flux, *Action Creators*) to "subscribers" (in Flux, *Stores*).

The Flux Dispatcher adds a small variation to Event busses with the `waitFor` API, allowing a subscriber (Store) to receive an event (Action) only after other subscribers have received it.

The `waitFor` is not a big enough of an addition to justify a new name. Many Flux implementations and variations like Redux don't have a `waitFor` method. Even if `waitFor` would be essential, they could still have named the Dispatcher as "Waitable Event Bus".

<h2 id="stores" class="hr"><span class="hr">STORES?</span></h2>

When Flux was introduced, they made sure to contrast it with MVC, and how Flux Stores are different from Models. In particular, Stores are very different to Models in Backbone Models, an MVC framework.

However, MVC goes way back. [Originally from 1970s](http://heim.ifi.uio.no/~trygver/1979/mvc-2/1979-12-MVC.pdf) and evolving over the last decades, MVC is vaguely defined with words, not precisely specified. MVC just expresses a general approach. A lot of frameworks are labeled as MVC but they might have diverging definitions for what a Model means.

A Flux Store is just a Model from the wider definition of MVC, not from the pool of so-called "Frontend MVC frameworks" from early 2010s. [Store was defined](http://facebook.github.io/flux/docs/overview.html#stores) as:

> Stores contain the application state and logic. (...) stores manage the application state for a particular domain within the application.

While [Model from Wikipedia](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) is:

> The central component of MVC, the model, captures the behavior of the application in terms of its problem domain, independent of the user interface. The model directly manages the data, logic and rules of the application.

The main difference between Flux's Model and Model in MVC is in the way they are updated. A Flux Model cannot be updated directly, instead, it performs self-updates through Actions, which leads us to the next point...

<h2 id="actions" class="hr"><span class="hr">ACTIONS?</span></h2>

Actions are events in Flux sent (mostly) from components to the Flux Event Bus. Eventually they arrive at Flux Models, which in turn use the payloads to update state.

The core idea of Flux Actions is the core idea of [Event Sourcing](http://www.martinfowler.com/eaaDev/EventSourcing.html). The definition of Event Sourcing applies well to Flux Actions and Stores:

> The fundamental idea of Event Sourcing is that of ensuring every change to the state of an application is captured in an event object, and that these event objects are themselves stored in the sequence they were applied for the same lifetime as the application state itself.

Even Time Traveling and Snapshots, which are often attributed as novelties from Flux and its variants, are traditionally properties of Event Sourcing:

> This leads to a number of facilities that can be built on top of the event log:
>
> - **Event Replay**: If we find a past event was incorrect, we can compute the consequences by reversing it and later events and then replaying the new event and later events.
> - **Complete Rebuild**: We can discard the application state completely and rebuild it by re-running the events from the event log on an empty application.

<h2 id="whats-actually-new" class="hr"><span class="hr">WHAT'S ACTUALLY NEW</span></h2>

So what revolutionary technique does React bring?

We can say it's the successful combination of all of those existing ideas into a coherent API for creating Components with one-day flow of data. But there is actually one thing which is entirely new to UI development (as least as far as my investigation could uncover).

It's a **functional and reactive user interface API to wrap a mutable stateful UI API**. In other words, the Virtual DOM API to wrap the DOM's API.

The Virtual DOM is a unique use of the well-known diff and patch technique for interfacing with an imperative API. The point of the Virtual DOM is not to make performance fast, it's to make a functional interface possible:

<blockquote class="twitter-tweet" lang="en"><p lang="en" dir="ltr">It&#39;s a misconception that React needs the virtual DOM for performance. It&#39;s foremost an immutable shim over an inherently mutable DOM API.</p>&mdash; Sebastian Markbåge (@sebmarkbage) <a href="https://twitter.com/sebmarkbage/status/431310261740257280">February 6, 2014</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

The purpose of the Virtual DOM is to enable UI as a pure function of state. In some environments like [Direct2D](https://msdn.microsoft.com/en-us/library/windows/desktop/ff684178), UIs can be built by rerendering the whole graphics output on every frame. This is called [Immediate Mode Rendering](https://en.wikipedia.org/wiki/Immediate_mode_(computer_graphics)). Rerendering the whole DOM tree for an application would be expensive, because the DOM API is [Retained Mode Graphics](https://en.wikipedia.org/wiki/Retained_mode).

The Virtual DOM allows us to convert a mutable retained mode graphics API to an immutable functional immediate mode API. As React starts supporting different types of rendering targets, the Virtual DOM loses spotlight:

<blockquote class="twitter-tweet" lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/natebirdman">@natebirdman</a> <a href="https://twitter.com/swannodette">@swannodette</a> 2016. The year React stops using Virtual DOM because we don&#39;t need to bridge to legacy imperative APIs anymore.</p>&mdash; Sebastian Markbåge (@sebmarkbage) <a href="https://twitter.com/sebmarkbage/status/558336596001308673">January 22, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

[React may target the underlying browser's Box Tree, the Graphics Layer, WebGL, and also mobile platforms like Android's View system or iOS's UIKit](https://www.youtube.com/watch?v=Zemce4Y1Y-A). Sebastian made it clear DOM diffing is just a necessary hack for the time being.

React's focus remains on its **Component API** for immediate mode graphics. The end-goal is to have APIs with [immediate mode functional programming techniques](https://www.youtube.com/watch?v=tlJ6TT0iW88).

Its API, however, is heavily OOP-based. Meanwhile, you can choose entirely functional and reactive immediate mode APIs with [Elm HTML](http://elm-lang.org/blog/blazing-fast-html), [Cycle.js](http://cycle.js.org/), [Yolk](https://github.com/yolkjs/yolk), and others. As an industry, we are still figuring out how to get a sane API for functional and reactive user interface rendering. Most of the ideas are old, but there is a lot of innovation coming out of combining old ideas into new ones.

