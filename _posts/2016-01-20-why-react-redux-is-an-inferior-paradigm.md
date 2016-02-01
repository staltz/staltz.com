---
layout: post
title: "Why React/Redux is an inferior paradigm"
---

About two years ago I first tried React in a real application. As I started using it extensively in that application, I found it unwieldy and unnecessarily complicated. After that I decided to build my own solutions using RxJS and virtual-dom and after a year or so I created a framework called [Cycle.js](http://cycle.js.org).

Today after two years, I needed to write a large application using React and Redux, because I was targetting React Native, and [Cycle Native](https://github.com/cyclejs/cycle-react-native) is still experimental and doesn't support things such as navigation/routing. I had hopes Redux would make React not so unwieldy, but now I can confirm React/Redux is an inferior paradigm compared to Cycle or Elm.

[I tweeted about this briefly](https://twitter.com/andrestaltz/status/689748467208560640) but it created confusion, so I'll explain my arguments with facts as much as I can. Sorry for my language in Twitter if it felt wrong to you.

I need to explain what I mean with inferior paradigm. React may be superior in ecosystem, or with feature coverage, but not so as a paradigm. These are three different concerns you should bear in mind when choosing a library/framework. You may need the ecosystem or some specific features, so paradigm may not be important. In other cases, you want to choose the library/framework with the most ergonomic paradigm. That means a good signal-to-noise ratio: each line of code contributes to delivering features, each line of code is "semantic" and reads like a specification. In short, the closer the code is to a description of "what I want the program to do", the better. But the more manual wiring there is, the more "noise" is added to your code, and the more verbose it gets.

To make that claim, I am biased because I have built Cycle.js, but I need to include Elm in this story as well. I have not built Elm and neither am I a strong member in its community. Initially I was skeptic about Elm, but after having used it, talked to Richard Feldman and Evan Czaplicki, and seen coworkers use it, I'm convinced it's a fantastic paradigm to get things done. "Elm" usually comprises two things: the Elm language and the Elm architecture. The Elm language is fantastic to keep developers productive and code with less bugs, since the compiler does a lot to assist you. The Elm architecture is reminiscent to Redux, but is much less verbose when used in the Elm language. It's an architecture made for the language (and sometimes feels like a language made for the architecture), unlike an architecture finding it's own way to "fit" in a language.

In the following sections I'll provide facts, not just opinions.

<h2 id="initial-setup" class="hr"><span class="hr">INITIAL SETUP</span></h2>

With my coworker [Ossi Hanhinen](https://twitter.com/ohanhi/), we initially started building the application with Cycle Native, and we did that with pair programming. Ossi was the main programmer and had not done Cycle.js development so far. Besides installing XCode, it took Ossi about 1h or 2h with my instructions to get the initial setup and have a Hello World delivered. Then, Ossi alone without any support took 1h more to develop an additional feature to fetch JSON from a backend and display that in the app.

Then, we had to port this whole app to React/Redux. In short, it took us 7h to accomplish this same app. We had to combine together multiple libraries following the directory structure in Redux's examples. The list of concepts or moving parts to be aware of in React/Redux is longer than in Cycle or Elm:

- Action types (we used `enumify` to attempt to reduce some boilerplate of repeating action type strings)
- Action creator functions
- Reducers (long switch statements which are syntactically ugly but semantically ok. They are not necessary in Cycle, and in Elm they syntactically look good)
- Store (setting it up does not exist neither in Cycle nor Elm)
- Middleware (not in Cycle nor Elm)
- Piggybacking componentDidMount to start ad-hoc effects
- Provider (not in Cycle nor Elm)
- Containers

All of these are solutions that actually solve problems in the context of React/Redux. However, in other paradigms, we don't need these solutions because the underlying paradigm does not create the respective problems. Overall most of the concepts above are boilerplate or have boilerplate (like action type redundant strings or JavaScript switch case in reducers) that are *noise* to the features (*signal*) that we want to deliver. An ideal framework/paradigm makes you focus on delivering features, not on wiring the machinery. I am not so familiar with Ember in this regard, but I believe their end goal is also to be a framework that helps you focus on features. I can't speak whether they deliver that promise, but at least the end goal is correct: paradigm ergonomy.

One could argue that Redux has higher cost upfront to setup everything while Cycle.js architecture also needs all of those elements eventually, but that's not the case since the Cycle.js architecture is scalable and composable. It's "fractal", read more about it [here](http://staltz.com/unidirectional-user-interface-architectures.html).

Things like using `componentDidMount` to dispatch actions in order to get the app to start an operation are more verbose and less obvious than a simple `startWith()` RxJS operator use in Cycle.js.

Elm also gets out your way by having immutable types built-in, signals built-in, "dispatcher" (Mailbox) built-in, and ADTs for action types built-in. The experience is great for a developer and the initial setup is quicker.

<h2 id="jsx" class="hr"><span class="hr">JSX</span></h2>

I am a proponent of using JavaScript functions instead of JSX for markup, because it is friendlier to any text/code editor, and less verbose than HTML-inspired JSX. Compare the following:

{% highlight text %}
// JSX
<ul id="bestest-menu">
  {items.map( item =>
    <li className=".item" {...attrs(item.id)}>{item.title}</li>
  )}
</ul>
{% endhighlight %}

{% highlight js %}
// hyperscript-helpers
ul('#bestest-menu', items.map( item =>
  li('.item', attrs(item.id), item.title))
);
{% endhighlight %}

Neither of these two are unreadable (as long as you know the language), yet JSX is more verbose. `<` and `>` add no value, they are noise, among other quirks like `{ }` blocks.

That said, React does not have an out-of-the-box easy solution for JS-only markup, leading most developers to choose JSX, unless they find third-party libraries. Here are some examples:

**React.createElement or React.createFactory boilerplate.** To write JS-only markup with React, you have to use either of those two.

{% highlight js %}
React.createElement('ul', null, [
  React.createElement('li', null, 'Foo'),
  React.createElement('li', null, 'Bar'),
])
{% endhighlight %}

or

{% highlight js %}
const h = React.createElement;

h('ul', null, [
  h('li', null, 'Foo'),
  h('li', null, 'Bar'),
])
{% endhighlight %}

or

{% highlight js %}
const ul = React.createFactory('ul');
const li = React.createFactory('li');

ul(null, [
  li(null, 'Foo'),
  li(null, 'Bar'),
])
{% endhighlight %}

With the additional complication that not all factories can be gathered and packaged as a utility, since we might need to make a factory for a custom component:

{% highlight js %}
const MyButton = React.createFactory(MyPackage.MyButton);

ul(null, [
  MyButton({myProp: 123})
])
{% endhighlight %}

Overall, having to handle createFactory or createElement by yourself is boilerplate and not necessarily less verbose than simply JSX.

**Props object always expected**

In Cycle.js you can omit the props object. Since props are always an object and children are always an array, it's obvious which parameter is what:

{% highlight js %}
ul([
  li('Foo'),
  li('Bar'),
])
// the same as
ul(null, [
  li(null, 'Foo'),
  li(null, 'Bar'),
])
{% endhighlight %}

That is not true in React. You always need to provide the properties object. If not needed, then it should be `null` or `{}`. This just adds verbosity/noise.

**Components that expect "onlyChild"**

Some React components have an invariant: "Invariant Violation: onlyChild must be passed a children with exactly one child". Which means this is an error:

{% highlight js %}
SomeComponent(null, [
  Button(null, 'Submit')
])
{% endhighlight %}

And this is correct:

{% highlight js %}
SomeComponent(null,
  Button(null, 'Submit')
)
{% endhighlight %}

This is a gotcha that makes it annoying to develop, whereas with [hyperscript-helpers](https://github.com/ohanhi/hyperscript-helpers) or Elm, children are (intuitively) an array/list.

React authors don't try to support the JS-only React workflow that much. They let you figure it on your own and just recommend JSX. Achieving an ergonomic JS-only markup workflow is easy and has been done in other libraries (see hyperscript-helpers), these problems mentioned above are not inherent to JS-only markup, they are inherent to React's particular API. Either way, with React's JSX or React's JS-only markup, we are writing suboptimal code with regard to signal-to-noise.

<h2 id="functional-but-not-really" class="hr"><span class="hr">FUNCTIONAL BUT NOT REALLY</span></h2>

React's community claims that React uses functional techniques heavily, however that is not true in practice. OOP, classes, callbacks, and `this` are commonplace, as well as imperative method calls such as `dispatch`, `setState`, etc. This also means there is no clear interface/gate for I/O and effects. In Cycle.js, all read effects are inputs into the `main()` function, and all write effects are outputs of `main()`. In Elm, I/O happens through ports or `main`, nowhere else. In React/Redux, we don't have such guideline, you can spread effects anywhere, which makes the "model easy to reason about" claim crumble.

As [Dan Abramov pointed out just today](https://twitter.com/dan_abramov/status/689639582120415232), there is no de-facto standard for I/O, effects, and async in the React/Redux community. The existing solutions are interesting and elegant in themselves, but the problem of I/O is systemic since React does not specify a clear interface/gate for effects coming in or going out. `React.render` for instance is an effect, but it's not typically handled by such redux effects libraries. In Cycle and Elm, even virtual DOM rendering needs to pass through the explicit I/O gate. All of this adds to a "spaghetti effect" in React/Redux: some effects are well separated, others are mixed elsewhere.

Placing async effects also often happens in some component's `componentDidMount`, which is an ad-hoc solution, since components are often meant only for view concerns (markup). It often feels incorrect to mix these concerns since Redux and its async solutions are meant to separate them from markup.

<h2 id="conclusion" class="hr"><span class="hr">CONCLUSION</span></h2>

As a **paradigm** to reason about and get features done, React/Redux adds verbosity and does not provide structures for separating concerns (I am not talking about separation of technologies such as HTML/CSS). React/Redux has a great community/ecosystem, which might be important in making a choice. React/Redux also supports all features you will need, which might be important for a business decision. However in those cases where neither large community nor feature coverage are essential, React/Redux falls short. And those cases are not rare.

Once you learn Elm or Cycle, getting things done will be more productive, less indirect, less verbose, more organized. All of the JavaScript developers who I met that learned and used Elm so far have been extremely positive about their experience. The only Elm users who I've seen disappointed often come from a hard-core functional programming Haskell background, and are therefore more comfortable with PureScript. Elm does not have typeclasses and other features which makes it less appealing for hard-core functional programmers. That said, Elm is a language that appeals to developers with a JavaScript background who only want to get things done, without learning category theory or embracing highly abstract concepts. It makes the core benefits of functional programming much more accessible. Learning it is a worthwhile investment, I have witnessed three developers at work pick it up in a few days and be both productive and happy for the subsequent weeks.

With Cycle.js, I have witnessed two developers understand it in a few days and enjoy it's simplicity, but I'll refrain from speaking much about Cycle.js since I'm biased. The goal of both Elm and Cycle.js is to provide a paradigm to get features delivered in an enjoyable manner with good signal-to-noise. Such paradigm is currently unachievable with React/Redux unless it is reinvented, because a paradigm is the foundation. Elm is known to not properly support server-side rendering, so from a feature coverage perspective, React is better in that regard. However, server-side rendering in Elm can be added and [there is ongoing work to achieve that](https://github.com/NoRedInk/take-home). However, a "good" paradigm cannot be added to React/Redux. It is a foundation, and can only be replaced.

One could argue that paradigms always have tradeoffs, and I have to agree. The React/Redux paradigm might have benefits that the Cycle paradigm or Elm paradigm don't offer. But just like horses and cars have tradeoffs for transporting people, one of them is a clear winner, despite disadvantages (cars can only drive on asphalt, driving cars need more training, etc).

As a reminder, there are multiple aspects to consider when picking a Frontend technology:

- Learning cost
- Paradigm ergonomy
- Community size
- Feature coverage

React/Redux is clearly superior in some, but not in all these aspects. Neither is Cycle great in all aspects. The same can be said for Elm. This post is just to clarify how React/Redux is not the best in the "Paradigm ergonomy" aspect.

As a conclusion, my message to the Frontend community is to continue searching for better solutions. On Twitter, I have seen respectable people claiming "we should declare React/Redux as the winner. We can finally stop evolving" and I fully disagree. *Even with solutions like Elm and Cycle* we can't consider Frontend development solved, we need to continue seeking for improvements to our workflow. I am not saying Cycle.js is perfect either. If you have any feedback or if anything is “inferior”, I am open to feedback. If you want to learn Cycle.js, it takes just [1h 30min to learn through these free Egghead video courses](https://egghead.io/series/cycle-js-fundamentals).

The Frontend community has seen major improvements happening multiple times, first with jQuery et al, then Backbone, then Angular, and now React. Let's not stop there.
