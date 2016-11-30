---
layout: post
title: "Rx glitches aren't actually a problem"
tags: [blog]
---

Once in a while someone points out how [ReactiveX (Rx)](http://reactivex.io/) does not have means to avoid glitches. [[1]](http://stackoverflow.com/questions/22332407/how-to-avoid-glitches-in-rx?rq=1) [[2]](https://social.msdn.microsoft.com/Forums/en-US/bc2c4b71-c97b-428e-ad71-324055a3cd03/another-discussion-on-glitches-and-rx?forum=rx)

Glitches are temporary inconsistencies emitted by Observables. Consider this example:

{% highlight text %}
--a------b------c------d--------e--------
--1-------------2---------------3--------
           combineLatest
--a1-----b1-----(c1c2)-d2-------(e2e3)---
{% endhighlight %}

Events in parentheses happen "simultaneously". In practice they happen at slightly different times, but separated by only a couple of nanoseconds, so people understand them to be simultaneous. Events `(c1c2)` are called *glitches* and sometimes considered a problem because one would expect only `c2` to happen.

The emphasis people put on glitches and their problems is usually exaggerated.

There is a style of writing Rx code that allows you to be sure that glitches either don't happen or don't create problems in your real-world application.

**When do glitches happen?** Usually glitches are demonstrated by giving the classical diamond case. An Observable A is transformed into Observables B and C, then those are combined to create Observable D:

{% highlight js %}
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const a = Observable.timer(0, 1000);  // 0-----1-----2-----3-----4------
const b = a.map(i => alphabet[i]);    // a-----b-----c-----d-----e------
const c = a.map(i => i * i);          // 0-----1-----4-----9-----16-----
const concat = (_1, _2) => String(_1).concat(String(_2));
const d = b.combineLatest(c, concat); // a0-----(b0b1)(c1c4)(d4d9)(e9e16)
                         // desired was: a0-----b1----c4----d9----e16---
{% endhighlight %}

Usually the complaint revolves around the lack of operators to support the desired outcome. `combineLatest` falls short. `zip` has its problems, too. There actually isn't any operator that we can use to replace combineLatest in the example above. That would require, under the hood, a transaction manager. This is what libraries like [derivablejs](https://github.com/ds300/derivablejs) and [menrva](https://github.com/phadej/menrva) do.

However, the diamond example is contrived. If you know you want to produce Observable `d` out of `b` and `c`, you can just build `d` directly based on `a`, instead of going through `b` and `c`:

{% highlight js %}
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const a = Observable.timer(0, 1000); // 0-----1-----2-----3-----4----
const calculate = i => String(alphabet[i]).concat(String(i * i));
const d = a.map(calculate);          // a0----b1----c4----d9----e16--
{% endhighlight %}

That said, there are non-contrived cases in real applications where glitches do appear and it doesn't make sense to refactor code like we did above. For instance, maybe `b` and `c` depend on other Observables than just `a`. Take the case where we want to send an analytics report whenever an error happens, reporting also what was the last action the user took before that error occurred.

{% highlight js %}
const errors = // Observable of system errors
const userActions = // Observable of the user's actions
const analyticsMessages = Observable.combineLatest(errors, userActions,
  (error, action) =>
    'Error ' + error + ' happened after the user did ' + action
);
{% endhighlight %}

The combineLatest we used for this creates glitches and also other undesired analytics messages as result. For example:

{% highlight text %}
errors            ---e1----e2------------------
userActions       -u1------u2------------u3----
analyticsMessages ---e1u1--(e1u2 e2u2)---e2u3--
{% endhighlight %}

The error `e2` was immediately caused by `u2`, yet the combineLatest produced an undesired event `e1u2`. Also, `e2u3` is caused by `u3` alone, which is semantically wrong for `analyticsMessages` because error `e2` did not happen after user action `u3`.

What we should have done instead is ask ourselves these questions about two orthogonal concerns: **what does analyticsMessages depend on** and **when does analyticsMessages emit events**? Both `errors` and `userActions` are the answer to the **what** question, but only `errors` is the answer to the **when** question. So we need an operator that combines the values of multiple Observables only when a specific Observable emits. That one is `withLatestFrom`:

{% highlight js %}
const errors = // Observable of system errors
const userActions = // Observable of the user's actions
const analyticsMessages = errors.withLatestFrom(userActions,
  (error, action) =>
    'Error ' + error + ' happened after the user did ' + action
);
{% endhighlight %}

Which behaves as:

{% highlight text %}
errors            ---e1----e2------------------
userActions       -u1------u2------------u3----
analyticsMessages ---e1u1--e2u2----------------
{% endhighlight %}

There was no inherent problem with `combineLatest`. It simply does what it promises to do and it has its legitimate use cases. It defers from `withLatestFrom` simply with regards to **when** the result should emit.

- `a.combineLatest(b, c, fn)`: emits when any one of `a`, `b`, or `c` emit.
- `a.withLatestFrom(b, c, fn)`: emits only when `a` emits.

Over time, I have developed two rules of thumb to help me choose which combination operator I want:

- If I want to combine Observables that seem completely independent to each other, then I need **combineLatest**.
- If I want to just *map* a certain Observable while using information from other Observables, then I need **withLatestFrom**.

With `combineLatest`, people sometimes complain about coincidental events being joined. For instance look at this case:

{% highlight text %}
height --------176----------177------
weight ---70---------74-----78-------
               combineLatest
bmi    --------22----23-----(23,25)--
{% endhighlight %}

The events `height = 177` and `weight = 78` happen "at the same time", yet, `combineLatest` produces two events: `bmi = 23` and `bmi = 25`. We followed our rule of thumb because height and weight are usually completely independent concepts or values evolving over time. Typically, this case is considered a glitch, but I contend it's a harmless glitch.

For UI purposes, if we are displaying the evolving BMI value, we won't see `23` because it will be immediately replaced by `25`. For calculations and logging, it is harmless to report `bmi = 23` and `bmi = 25` consecutively. To us, those events happened "at the same time", but for the computer and for calculations, they actually happened sequentially. If any other part of your application which depends on the `bmi` Observable happens to be faulty because of this harmless glitch, then that's a symptom of buggy implementation elsewhere, not with `bmi`. As far as `bmi` Observable is concerned, it is completely correct.

Programming with Rx is peculiar in that we do not see glitches or the problems of glitches as long as we solve problems in an idiomatic Rx style. For instance, using an imperative API like `set()` is frowned upon for Rx code. Libraries that support `set()` for observables such as [derivablejs](https://github.com/ds300/derivablejs) and [menrva](https://github.com/phadej/menrva) need to have a transaction manager. Because transactions are able to control **when** do changes from `set()` calls get committed, they provide a way of imperatively controlling the **when** concern. In Rx code, we reactively control the **when** concern by choosing the appropriate operator.

Imperative techniques in Rx such as usage of `Subject` and its `onNext()` calls are frowned upon because you cannot separately control **when** the Subject emits. A second downside of imperative updates is they make the **what** concern implicit: it depends on what is the context or module containing the code for the imperative `set()` call. Reactive techniques make both **when** and **what** explicit and declared in a single statement. This reason is just one among many which makes me believe the reactive paradigm should be our default choice.
