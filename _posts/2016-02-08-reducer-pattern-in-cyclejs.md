---
layout: big-tweet
title: "The reducer pattern in Cycle.js"
---

The “reducer” pattern from [Redux](https://github.com/rackt/redux) (or the “update” pattern from the [Elm architecture](https://github.com/evancz/elm-architecture-tutorial)) is common also in Cycle.js, except there is no `switch`-`case` (or pattern matching block) because each reducer corresponds to one (and only one) action.

See this [example code](https://github.com/cyclejs/cycle-examples/blob/master/autocomplete-search/src/app.js#L153-L156) where each action stream is being mapped to a “modifier” function (which is another name for “reducer”).

{% highlight js %}
const setHighlightMod$ = actions.setHighlight$
  .map(highlighted => function (state) {
    return state.set('highlighted', highlighted)
  })
{% endhighlight %}

This produces a stream of modifier functions, which we can then [merge all together](https://github.com/cyclejs/cycle-examples/blob/master/autocomplete-search/src/app.js#L179-L181) to get just one stream of modifier functions.

The stream of modifier functions is then “reduced” with the [scan operator](https://github.com/cyclejs/cycle-examples/blob/master/autocomplete-search/src/app.js#L195). This is how state is accumulated over time.

{% highlight js %}
mod$.startWith(state).scan((acc, mod) => mod(acc))
{% endhighlight %}

The benefit is freedom from switch-case blocks, and a good semantic connection between reducer and action.
