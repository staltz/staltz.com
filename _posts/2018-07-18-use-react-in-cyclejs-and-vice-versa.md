---
layout: post
title: "Use React in Cycle.js and vice-versa"
tags: [blog]
---

I have been critical of [React](https://github.com/facebook/react), but that's a normal thing as a framework author: you have different opinions on how frontend should be done. I've always been very positive about React Native, though, because it's a game changer. It allows us to bring the JavaScript ecosystem to mobile development, without compromising (that much) on user experience.

Since React Native came out in March 2015, I have been trying to integrate it with [Cycle.js](https://cycle.js.org). The first version came out in [September that year](https://github.com/cyclejs/react-native/commit/9f114d482e3845229500d901363ead1a9690819a), then with the [help of other people](https://github.com/cyclejs/react-native/blob/cb5e1916a90142002040c13970fa25f58307961f/README.md) in CycleConf 2016 we polished it further. The integration so far has been basically usable for real projects, but still had some unresolved corner cases. The goal so far has been supporting React Native first, because a hacky React (DOM) integration with Cycle.js would have been unattractive in comparison to the well built official Cycle.js DOM driver.

React 16.4 introduced two important APIs, Context and forwardRef, that now allow supporting React components very well in Cycle.js. As a result, it's now possible to use React components in a Cycle.js app, or convert that Cycle.js app to a single React component that can be integrated in a larger React app. Additionally, both React DOM and React Native are supported as renderers. Introducing:

- **[`@cycle/react`](https://github.com/cyclejs/react)**
- **[`@cycle/react-dom`](https://github.com/cyclejs/react-dom)**
- **[`@cycle/react-native`](https://github.com/cyclejs/react-native)**

This article explains how these work, and the opportunities they unlock.

## Supporting model-view-intent

[Model-view-intent](https://www.futurice.com/blog/reactive-mvc-and-the-virtual-dom/) is the architecture that Cycle.js aims to support, which is built on top of two assumptions: when creating the virtual DOM you do not specify `onEvent`-style handlers, and you can get a stream of events that match an event type and an identifier for the owner element. This approach is a radical departure from other frameworks, but it's fundamental for the reactive streams programming style that is core to Cycle.js.

Until now, it has been hard to support this kind of programming style when using React, for numerous reasons: (1) React Native doesn't provide an API similar in purpose to `document.querySelector()`, (2) hacks we used so far to inject event handlers into ReactElements have suffered from race conditions sensitive to ordering of stream declarations, (3) lack of a way of supporting isolation scopes meant that selectors had to be globally unique.

React *Contexts* have existed for a while, but with the recent React 16.4.0 it seems to have settled on the `ContextProvider` higher-order component API. Also the new `forwardRef` API is a robust way of transparently preserving refs when composing React components. With these two improvements to React, I have found a way of supporting model-view-intent and streams with React.

In a nutshell, `@cycle/react` provides a hyperscript function `h` which should be used instead of JSX or `createElement`. When you pass the special prop `sel` (special like `ref` or `key`), internally `h` will wrap your ReactElement with a higher-order component that knows how to incorporate event handler functions for the events that were (or will be!) queried in the intent function.

The event handlers are defined in a "scope" context, and through the context API we can change the scope. This allows us to support isolation scopes as typically exist in Cycle.js apps, so that selector strings don't need to be globally unique. For more details on the implementation, see the [source code](https://github.com/cyclejs/react/blob/master/src).

## React in Cycle.js apps

With `@cycle/react` you can use its hyperscript function `h` to send ReactElements into a `react` sink, and use the `ReactSource` to query for event streams. Here is how you would build a greeting app in Cycle.js that uses React components:

```js
import {h} from '@cycle/react';

function greeter(sources) {
  const input$ = sources.react
    .select('name')
    .events('input')
    .map(ev => ev.target.value);

  const name$ = input$.startWith("");

  const elem$ = name$.map(name => (
    h('div', [
      h('h1', name ? 'Welcome, ' + name : 'What\'s your name?'),
      h('input', {sel: 'name', type:'text'}),
    ])
  ));

  return { react: elem$ };
}
```

To render this app on the DOM, you can import `@cycle/react-dom` which provides a driver factory:

```js
import React from 'react';
import {run} from '@cycle/run';
import {h} from '@cycle/react';
import {makeDOMDriver} from '@cycle/react-dom';

function greeter(sources) {
  // ...
}

run(greeter, {
  react: makeDOMDriver(document.getElementById('app'))
});
```

`@cycle/react-dom` also comes with hyperscript helpers that you can use instead of `h`:

```js
function greeter(sources) {
  const input$ = sources.react
    .select('name')
    .events('input')
    .map(ev => ev.target.value);

  const name$ = input$.startWith("");

  const elem$ = name$.map(name => (
    div([
      h1(name ? 'Welcome, ' + name : 'What\'s your name?'),
      input({sel: 'name', type:'text'}),
    ])
  ));

  return { react: elem$ };
}
```

Note that JSX would also work, *except* the `sel` special prop would not work. It is probably possible to fully support JSX in the future, but like the rest of Cycle.js, there is primary support for hyperscript and secondary support for JSX, whereas React has primary support for JSX and secondary support for `createElement`. See the example greeter app working in the following sandbox:

<iframe src="https://codesandbox.io/embed/4zqply47nw?view=preview" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

Similarly, `@cycle/react-native` comes with `makeReactNativeDriver` and hyperscript helper functions, see [example here](https://www.npmjs.com/package/@cycle/react-native#example).

Other Cycle.js drivers work normally with `@cycle/react-dom` or `@cycle/react-native`, so you can easily take your existing Cycle.js app and replace [Snabbdom](https://github.com/snabbdom/snabbdom) (and the [DOM driver](https://github.com/cyclejs/cyclejs/tree/master/dom)) with this. However, you cannot mix Snabbdom VNodes with React elements, as React does not understand Snabbdom and vice-versa. That said, migration of the hyperscript helpers should be rather easy. Hyperscript helpers follow the same API as in the official DOM driver, except a few details:

- The second argument now does not need `attrs` or `props`, just pass props
- Snabbdom hooks should be replaced with custom React components that use lifecycle hooks
- If the first argument is a Symbol, it will serve as the intent selector

Notice `@cycle/dom` is still the official DOM manipulation library for Cycle.js, and has more features and tests than `@cycle/react`. Migrate to `@cycle/react` only if you want to benefit from the React ecosystem.

## Cycle.js in React apps

Given any React app, you can embed a Cycle.js component into it. `@cycle/react` comes with the function `makeComponent` that takes a Cycle.js component and outputs a React component. The example below shows how to reuse that greeter app to takes props from the React app and use it inside the interactive Cycle.js component.

```js
import {makeComponent} from '@cycle/react';

function greeter(sources) {
  const input$ = sources.react
    .select('name')
    .events('input')
    .map(ev => ev.target.value);

  const name$ = xs.merge(
    sources.react.props().map(p => p.initial),
    input$
  );

  const elem$ = name$.map(name =>
    div([
      h1(name ? 'Welcome, ' + name : 'What\'s your name?'),
      input({ sel: 'name', type: 'text' })
    ])
  );

  return { react: elem$ };
}

const Greeter = makeComponent(greeter);

function App(props) {
  return (
    <div className="app">
      <Greeter initial={"person"} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
```

## Possibilities

**What this means for React developers.** There is now a way of using the Cycle.js architecture in your app, with its [state management tools](https://github.com/staltz/cycle-onionify/) and [effects management libraries](https://github.com/cyclejs-community/awesome-cyclejs#drivers). `@cycle/react` provides a way of writing individual components in a `this`less style, with no classes, less code overall, only `const` declarations, and reactive stream programming.

The example below shows a React component written with Cycle.js that uses [a driver](https://github.com/helmoski/cycle-selection-driver) to handle effectful interaction with the [DOM's Selection API](https://developer.mozilla.org/en-US/docs/Web/API/Selection).

<iframe src="https://codesandbox.io/embed/6xzrv29963?view=preview" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

**What this means for Cycle.js developers.** It unlocks thousands of React community components and libraries to use in your Cycle.js app. Also, it is a way of using React's component model to package your Cycle.js component, useful for the broader frontend community. Alternatively, once you package your app as a React component, you can compose it together with the React tree of components without `xs.combine`ing virtual DOM streams. React Native support is now reliable, meaning: without known buggy corner cases and supporting isolation scopes.

Overall, this is the best of React with the best of Cycle.js and it excites me.

