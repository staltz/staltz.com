---
layout: big-tweet
title: "Code style in Cycle.js"
tags: [bigtweet]
---

Here are a few tips for projects written with Cycle.js.

**For top-level functions, don't use arrow functions.**

```javascript
// Good
function view(state$) {
  // ...
}

// Bad
const view = state$ => {
  // ...
};
```

Why? Because (1) it's not shorter (observe the total amount of characters), (2) it's not clearer, (3) the `view` function (UPDATE: used to be) ~~is~~ nameless and would appear in the call stack as an anonymous function.

**Don't destructure sources.**

```javascript
// Good
function main(sources) {
  const click$ = sources.DOM.select('.btn').events('click');
  // ...
}

// Bad
function main({DOM}) {
  const click$ = DOM.select('.btn').events('click');
  // ...
}
```

Why? Because (1) you can pass sources to children more easily and (2) naming helps create an intuition about the nature of each entity. I've often heard people assuming that `DOM` is a stream or the actual DOM itself. In reality, it is a `DOMSource`, a complex object that can be queried with `select` and `events` to yield streams. This is often true for other drivers too, like HTTP. The nature of `sources.DOM` is: it is a DOMSource, something that helps you *read* from the DOM.

For a similar reason, I suggest people to explicitly name the sinks object:

```javascript
function main(sources) {
  // ...
  const sinks = {
    DOM: vdom$,
    HTTP: request$,
  };
  return sinks;
}
```

This makes it extra helpful for beginners. But feel free to drop this suggestion for `sinks`. However, I find it important to name `sources`. I also recommend reading this [part of the docs](https://cycle.js.org/components.html#how-to-name-sources-and-sinks).

**Isolate manually.**

```javascript
// Good
function Parent(sources) {
  const childSinks = isolate(Child, 'foo')(sources);
  // ...
}
```

```js
// Bad
function Child(sources) {
  // ...
}

export default sources => isolate(Child)(sources);
```

I know I have written about the [possibility to automatically isolate each component](https://cycle.js.org/components.html#Should-I-always-call-isolate-manually) before exporting it. However, it can look confusing and specially behave in an unexpected way given that it's isolated with an implicit scope. Nowadays I prefer explicit code with least amount of surprises. This is specially true if you use [onionify](https://github.com/staltz/cycle-onionify) since you'll need to call `isolate` manually with a specific scope anyway.

**Explore alternatives**

The above were just suggestions. Feel free to keep on using whatever code style you wish. I just wanted to provide reasons why to write code in one way, specially to keep it digestible for beginners.
