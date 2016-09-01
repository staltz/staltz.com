---
layout: post
title: "React could love Web Components"
---

Recently Web Components have been punched in the face in the Twittersphere. It doesn't need to be like that. Web Components are nice and easy-going and humble and friendly. Web Components love you. Do you love them back?

React is a very popular library/framework at the moment, and React advocates make it sound like Web Components are doomed. And that the React component model is superior. Comments like these are often raised:

- Web Components don't support objects or functions in their attributes, React components do
- Web Components often have (unwanted) imperative methods like `toggle()`, React components don't
- Web Components are cumbersome for building a deep component tree, React isn't
- Web Components are not suitable for a Flux-like top-down data flow, React is

The golden use case for WCs would be as primitive leaf components, like third party UI component libraries such as [Material UI](http://www.material-ui.com/#/) or [Elemental UI](elemental-ui.com/). These are not intermediate components in your component hierarchy.

Leaf components rarely (or never) need attributes that accept objects nor functions. Even in cases where the leaf component expects an object, you could serialize it, because the object probably shouldn't contain functions nor circular references.

Some Web Components have imperative methods like `toggle()`, which are obstacles to the "declarative" programming style in React, based on props. But WCs don't need to be built with imperative methods. That was just a choice of the developer who made the component. They could also be fully declarative, controlled only through attributes. In fact, even in React Native we have components with imperative methods like [`TextInput.clear()`](https://facebook.github.io/react-native/docs/textinput.html), which deviates from the "fully declarative" style too. Does that make React Native doomed? No, not at all.

Are Web Components unsuitable for Flux/Redux dispatching on user events?

<blockquote class="twitter-tweet" data-conversation="none" data-lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/csuwildcat">@csuwildcat</a> I still have no idea how to build a WC app with top-down data flow and without stuff like Polymer. Same for many people.</p>&mdash; Dan Abramov (@dan_abramov) <a href="https://twitter.com/dan_abramov/status/770642705298972673">August 30, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Not really. We don't need to build the whole app with Web Components. We can use them just as leaf components, and then hook them up with a Redux-like architecture. [Here is an example](http://jsbin.com/pudecikelo/edit?js,output) (runs only in Chrome, it's just a proof of concept quickly built) of how you could use a Web Component inside a React app, and the Web Component's `flipend` event would trigger a dispatch of an action:

```js
window.addEventListener('WebComponentsReady', function () {
  class HelloMessage extends React.Component {
    handleHelloClick() {
      this.refs['foo'].toggle()
    }

    handleFlipend() {
      console.log('here we should do store.dispatch(action)')
    }

    componentDidMount() {
      // hack to add user event handler for the
      // brick-flipbox 'flipend' event
      // Ideally, React would support doing this
      // as <brick-flipbox onFlipend={}> instead,
      // since it anyway has a synthetic event system.
      // Cycle.js wouldn't see any difference between
      // domSource.select('div').events('click')
      // or domSource.select('brick-flipbox').events('flipend')
      this.refs['foo'].addEventListener('flipend', ev => this.handleFlipend())
    }

    render() {
      return (
        <div>
          <div onClick={ev => this.handleHelloClick()}>
            Hello {this.props.name}, click me!
          </div>
          <brick-flipbox class="demo" ref="foo">
            <div>front</div>
            <div>back</div>
          </brick-flipbox>
        </div>
      )
    }
  }

  ReactDOM.render(
    <HelloMessage name={'world'} />,
    document.querySelector('#app')
  )
})
```

- Can you use Web Components in React/Redux today? Yes. (example above)
- Can you publish React components as Web Components today? [Yes](https://github.com/PixelsCommander/ReactiveElements).
- Will people face obstacles with Web Components? Yes, probably a few minor obstacles, but we have a lot of smart minds out there who could fix many of these problems in a neat way.

What do we benefit by using Web Components? Framework interoperability. We could use neatly use jQuery plugins in Vue.js, React components in Angular apps, Cycle.js components in React/Redux apps. If you're satisfied with the React bubble where there's a vast collection of ready-made React-only components, then this might not sound appealing to you. But if you're working on an application built in another framework, you don't want to limit your options of ready-made components to only those built in that other framework. You want the full menu of everything the open source community can provide you.

You know why [Facebook won't be built on Web Components](https://github.com/facebook/react/issues/5052#issuecomment-145594782)? Because Facebook builds all their leaf components. It's all custom. It's the same reason why Facebook won't have any use for Material UI components, probably ever. Same reason why Facebook won't use your average jQuery plugin.

Does that mean you should not use Material UI nor jQuery plugins nor Web Components? No. Facebook is not a regular site. A lot of things and technologies and choices that impact Facebook are completely different to what most web developers have to face in their jobs. This is not science, but I assume that 90%+ of websites in the world have less than 1% of the amount of active users that Facebook has. The type of websites we build are different, and the way of building is also different. We need: quick reusability, ready made components, and just getting it done. Often it doesn't need to be ultra fast, it doesn't need to be ultra tiny. Often we just need to get it done, and neatly.

Web Components are for you and me, the mere mortal web developers. They are useful like Material UI is. Love them back and you'll make the web a place with more exchange of reusable code. A place with more sharing.