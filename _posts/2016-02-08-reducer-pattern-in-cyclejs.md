---
layout: big-tweet
title: "The reducer pattern in Cycle.js"
tags: [bigtweet]
---

The “reducer” pattern from [Redux](https://github.com/rackt/redux) (or the “update” pattern from the [Elm architecture](https://github.com/evancz/elm-architecture-tutorial)) is common also in Cycle.js, except there is no `switch`-`case` (or pattern matching block) because each reducer corresponds to one (and only one) action.

See this [example code](https://github.com/cyclejs/cyclejs/blob/198c3079584a17d2fd3cadcac87d5aa3ee330098/examples/autocomplete-search/src/app.js#L144-L182) where each action stream is being mapped to a “reducer” function.

{% highlight js %}
const setHighlightReducer$ = actions.setHighlight$
  .map(highlighted => function setHighlightReducer(state) {
    return state.set('highlighted', highlighted)
  })
{% endhighlight %}

This produces a stream of reducer functions, which we can then [merge all together](https://github.com/cyclejs/cyclejs/blob/198c3079584a17d2fd3cadcac87d5aa3ee330098/examples/autocomplete-search/src/app.js#L184-L189) to get just one stream of reducer functions.

The stream of reducer functions is then “reduced” with the [fold operator](https://github.com/cyclejs/cyclejs/blob/198c3079584a17d2fd3cadcac87d5aa3ee330098/examples/autocomplete-search/src/app.js#L204). This is how state is accumulated over time.

{% highlight js %}
reducer$.fold((acc, reducer) => reducer(acc), state)
{% endhighlight %}

The benefit is freedom from switch-case blocks, and a good semantic connection between reducer and action.
