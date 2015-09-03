---
layout: post
title: "Random namespacing in Cycle.js"
---

Regarding the new architecture for Cycle.js I've been promoting, Nested Dialogues, [Frederik Krautwald told me something](https://github.com/cyclejs/cycle-core/issues/167#issuecomment-136864542) that left me pondering:

> Namespacing dialogues quickly becomes a nightmare. This is true when you need to place several dialogues of the same type in/on the same view/page. You need to come up with namespace after namespace. Definitely not a good solution IMO.

Namespacing of Nested Dialogues is a technique where each component is given a unique namespace which describes its complete ancestry. For instance, if I have a toggle button in a list in a tab, its namespace would be `['.tab-foo', '.list', '.toggle-button1']`, and its DOM selector `.tab-foo .list .toggle-button1` should always match only one element when given to `document.querySelector()`.

In theory, namespacing solves all problems related to ambiguity of selectors and global name collision, but as Frederik said, it becomes a tedious task to write and manually maintain them.

This is a problem fairly similar to global classnames used for CSS styling. Inspired by [CSS Modules](http://glenmaddern.com/articles/css-modules) and how it allows you to work as if each component had its own scoped classnames (while under the hood converting each *local* classname to a global unique classname appended with a hash), I thought it might be useful to experiment with the same approach also for Cycle.js selectors.

<h2 id="naive" class="hr"><span class="hr">NAIVE RANDOM NAMESPACES</span></h2>

Consider the Nested Dialogues [example of a BMI calculator](https://github.com/cyclejs/cycle-examples/tree/master/bmi-nested). It has labeled slider components, which take a name as argument:

{% highlight js %}
function labeledSlider({DOM, props$}, name = '') {
  let initialValue$ = props$.map(props => props.initial).first();
  let newValue$ = DOM.select(name + '.labeled-slider .slider')
    .events('input')
    .map(ev => ev.target.value);
  let value$ = initialValue$.concat(newValue$);
  let vtree$ = Rx.Observable.combineLatest(props$, value$, (props, value) =>
    h('div.labeled-slider' + name, [
      h('span.label', [
        props.label + ' ' + value + props.unit
      ]),
      h('input.slider', {
        type: 'range',
        min: props.min,
        max: props.max,
        value: value
      })
    ])
  );

  return {
    DOM: vtree$,
    value$
  };
}
{% endhighlight %}

The relevant parts are:

{% highlight js %}
function labeledSlider({DOM, props$}, name = '') {
{% endhighlight %}

{% highlight js %}
let newValue$ = DOM.select(name + '.labeled-slider .slider')
{% endhighlight %}

{% highlight js %}
h('div.labeled-slider' + name, [
{% endhighlight %}

The default name is empty, which means you always need to give a name if you have more than one instance of this component in the application. For instance, in this BMI example, the BMI calculator uses two labeled sliders, one for weight and another for height:

{% highlight js %}
let weightSlider = labeledSlider({DOM, props$: weightProps$}, '.weight');
let heightSlider = labeledSlider({DOM, props$: heightProps$}, '.height');
{% endhighlight %}

Names `'.weight'` and `'.height'` are given.

- - -

It occured to me that we could use a randomly generated name instead of the empty string by default.

{% highlight js %}
function randomName() {
  return '.x' + Math.round(Math.random()*1000);
}

function labeledSlider({DOM, props$}, name = randomName()) {
{% endhighlight %}

The default parameter is a new randomly generated name whenever the labeled slider component function is called. This way, we can use the labeled sliders in the BMI parent without specifying the namespace:

{% highlight js %}
let weightSlider = labeledSlider({DOM, props$: weightProps$});
let heightSlider = labeledSlider({DOM, props$: heightProps$});
{% endhighlight %}

And it works.

<h2 id="naive" class="hr"><span class="hr">ALTERNATIVE NAMESPACING GENERATION</span></h2>

The first problem that arises with that approach, though, it name collision possibilities. There are a couple of ways around that, though. One is through **incremental ids**:

{% highlight js %}
let c = 0;

function randomName() {
  return '.' + (c++);
}

function labeledSlider({DOM, props$}, name = randomName()) {
{% endhighlight %}

And the other is using collision-resistant ids such as from [`cuid`](https://www.npmjs.com/package/cuid):

{% highlight js %}
import cuid from 'cuid';

function randomName() {
  return '.' + cuid();
}

function labeledSlider({DOM, props$}, name = randomName()) {
{% endhighlight %}

Either way, the random name is optional. You can still explicitly provide the name, in case the parent component needs the child's name. This use case often happens when the parent component has a list of components of the same type, and the parent needs to extract information about its state from the child's id, such as in [this advanced list example](https://github.com/cyclejs/cycle-examples/tree/master/advanced-list-nest).

I'll keep looking for patterns that simplify workflow in Cycle.js, while not sacrificing its explicitness (contrasted to "magic").
