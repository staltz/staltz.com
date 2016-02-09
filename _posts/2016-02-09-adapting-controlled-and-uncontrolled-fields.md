---
layout: big-tweet
title: "Adapting Controlled and Uncontrolled fields in Cycle.js"
---

Virtual DOM libraries like [React](http://facebook.github.io/react) and [virtual-dom](https://github.com/Matt-Esch/virtual-dom) provide a declarative API for describing elements as the output of a system. This API may be limited when it comes to form fields where you may want to *set* the value of an input field as an *assignment*, not as an attribute. This led to solutions like [“Controlled/Uncontrolled”](http://facebook.github.io/react/docs/forms.html#controlled-components) components, which can be done also in Cycle.js.

In FRP there is a classical distinction between **Signals** (“values over time”, e.g. your age) and **Event Streams** (“occurrences” with no notion of current value, e.g. your birthdays).

The Virtual DOM interface allows us to **describe element attributes only as Signals**, not as Event Streams. This is why some use cases like assigning values to the input field are cumbersome with the Virtual DOM interface, because the round peg does not fit the square hole.

With RxJS in Cycle.js, we can create a component that takes an Event Stream of assignment events and solve this API problem, abstracting away the controlled/uncontrolled mechanism.

We make an `Input(sources)` component which takes some props for its corresponding `<input>`, and an `Assign` Event Stream. The output/sink is just the `vtree$` for that `<input>`. It can then be used like this:

{% highlight js %}
function main(sources) {
  // Intent
  const add$ = sources.DOM.select('.add')
    .events('click').map(null);
  const type$ = sources.DOM.select('.field')
    .events('input').map(ev => ev.target.value);

  // Model
  const list$ = add$.withLatestFrom(type$, (_, text) => text)
    .startWith([])
    .scan((acc, curr) => acc.concat(curr));

  // View
  const input = Input({
    Props: Observable.of({className: 'field', style: {}}),
    // Clear the <input> when the Add button is clicked:
    Assign: add$.map(() => ''),
  });

  const vtree$ = list$.combineLatest(input.DOM,
    (list, inputDOM) =>
      div([
        inputDOM,
        button('.add', 'Add'),
        ul(list.map(item => li(item)))
      ])
    );

  return {
    DOM: vtree$,
  };
}
{% endhighlight %}

Now we have a square peg (Event Stream) for a square hole (assigning values). See a [JSBin example](https://jsbin.com/vacuzo/edit?js,output) of this here.
