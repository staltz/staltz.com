---
layout: post
title: "Is your JavaScript function actually pure?"
---

What does "pure function" mean in the context of JavaScript? In programming in general, purity is also known as "referential transparency", a fancy way of saying "*replacing an expression or function call with its result will never change the behavior of the program*" or a way of saying "*every time you pass the same inputs, you always get the same outputs*".

That sounds intuitive, and a function like `x => x * 10` looks pure because every single time you pass it the number `3` as argument you will get `30` as output. So how can we tell that one function is pure and the other isn't? Is it enough that we just read the code?

Let's see what people think. Yesterday I launched a [Twitter poll](https://twitter.com/andrestaltz/status/768833714990309376) with the question "Is this pure or impure?" with three options:

- Pure
- Impure
- Not sure

For the following code.

```js
function sum(arr) {
  var z = 0;
  for (var i = 0; i < arr.length; i++) {
    z += arr[i];
  }
  return z;
}
```

The results of the poll were:

- A massive 74% of people think it's pure
- 18% consider it impure
- 8% are not sure

It's understandable why most people think it's pure: even though it uses mutation internally, given an array with values `[1, 2, 3]` as argument, you will always get `6` as output. Every. Single. Time.

But it's also understandable why 18% of people thought it was impure: the body of the function uses impure expressions and statements with side effects. After all, I asked "Pure or impure?", not "is this **function** pure?".

What's surprising is that both camps are wrong. Those unsure 8% were correct: it depends on runtime behavior. Just by reading the function, we cannot be sure. In fact, the 18% who think it's impure are "more correct" than the 74% percent that think it's pure, because there are cases where `sum` is impure.

The code is deceitfully simple, and while we read it, as humans we naturally make assumptions. Here are a couple of assumptions that you made without probably realizing:

- `sum` means this function will actually sum numbers (why couldn't it stand for Suppress Universal Macro?)
- `arr` means "array" (why couldn't it mean "arrow" or "arrivals"?)
- `arr` is actually an array
- `arr` is non-null, non-undefined
- The elements in the array are numbers
- The elements in the array don't have their `valueOf` functions tampered with

Here's the problem: all these assumptions may be broken, but the code above doesn't tell you that. Here are a couple of ways we can break our function and make it impure:

```js
sum(); // TypeError: Cannot read property 'length' of undefined
```

```js
var arr = [{}, {}, {}];
arr[0].valueOf = arr[1].valueOf = arr[2].valueOf = Math.random;
sum(arr); // 2.393660612848899
sum(arr); // 2.3418339292845998
sum(arr); // 2.15048094452324
// Same input, different outputs!
```

Ok, so `sum` is impure.

Not so fast! All JavaScript `function`s are actually "procedures". A pure `function` is just a "procedure" that **behaves** Mathematical Function, the only true pure functions. So there is a difference between a `function` and a "function". We can only say that "my JavaScript function is behaving like a Mathematical Function in this case".

I'm kind of assuming you know what I'm talking about, but just to give a hint: a Mathematical Function is a relation defined over a set, mapping to another set. For instance we could say `sum` has to work only on arrays of numbers. Arrays of objects are not allowed.

So, back to JavaScript, `function sum` will behave like a Mathematical Function depending on how you use it. If this is your entire program:

```js
function sum(arr) {
  var z = 0;
  for (var i = 0; i < arr.length; i++) {
    z += arr[i];
  }
  return z;
}

var arr = [1, 2, 3];
var x = sum(arr);
var y = sum(arr);
var z = sum(arr);

console.log(x, y, z);
```

Then, well, of course `sum` is pure! It **behaved** like a Mathematical Function. Put it in another situation and it won't behave like a Mathematical Function.

So, the answer is: it depends. Which means: given any JavaScript function, most of the times you cannot know if it is pure or impure just by reading the code. You need to know how that function is called and what are its arguments.

Remember our innocent `x => x * 10`? Poor fellow. We can't even say that this one is pure either. Look at it behaving impurely:

```js
var a = {}; a.valueOf = Math.random;
var fn = x => x * 10;
fn(a); // 5.107926817373938
fn(a); // 3.4100775757245416
fn(a); // 5.1903831613695095
// Same input, different outputs!
```

Gosh! Is there anything pure at all in JavaScript? Another comment you could toss at me is: "*it doesn't matter because in practice we won't hit these funky corner cases you just made up*". Indeed, we won't have `valueOf` tampered to be `Math.random`.

Until... one day we do. You know those very hairy bugs you fight against sometimes? You even consider that maybe this JavaScript has black magic behind it. It's cursed. Something mystical is going on. Those mystical cases usually occur because something very corner-casey happened, which you didn't predict could happen. Yeah, now it feels familiar, right?

So, are we cursed? `x => x * 10` is so cute and easy to use, but it's also not pure always. Is there anything pure in JavaScript? Is purity in JavaScript even possible? Is JavaScript entirely impure?

Well, no. Here's how we can make `sum` *behave like* a Mathematical Function every single time:

```js
function sum(arr) {
  if (!arr) return void 0;
  if (typeof arr !== 'object') return void 0;
  if (!Array.isArray(arr)) return void 0;
  var z = 0;
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') {
      return void 0;
    }
    z += arr[i];
  }
  return z;
}
```

What if someone tampered with `Array.isArray`?

```js
Array.isArray = (arr) => Math.random() < 0.5;
```

Ok, wait a minute:

```diff
 function sum(arr) {
   if (!arr) return void 0;
   if (typeof arr !== 'object') return void 0;
+  if (Array.isArray.toString() !== 'function isArray() { [native code] }') {
+    return void 0;
+  }
   if (!Array.isArray(arr)) return void 0;
   var z = 0;
   for (var i = 0; i < arr.length; i++) {
     if (typeof arr[i] !== 'number') {
       return void 0;
     }
     z += arr[i];
   }
   return z;
 }
```

To make it pure, we basically listed all the assumptions we had about the input. By the way, I still feel uneasy that someone will find a clever way to break my "pure" `sum`. Listing the assumptions is tedious and makes the code harder to read. Probably you have written code like this for common inputs that are invalid. But just like I felt uneasy, so should you. Are you sure you covered all corner cases and possible situations? Does it always behave like a Mathematical Function?

Here's how functional programming languages are pure: they make it easy to list the assumptions about your function.

In TypeScript, we can write our assumptions in the signature:

```typescript
function sum(arr: Array<number>): number
```

The function body is the same as in JavaScript:

```typescript
function sum(arr: Array<number>): number {
  var z = 0;
  for (var i = 0; i < arr.length; i++) {
    z += arr[i];
  }
  return z;
}
```

If you try to use that function with:

```js
sum();
```

It won't even compile! So it means your program won't even "behave" in the first place. Also this won't compile:

```js
var arr = [{}, {}, {}];
arr[0].valueOf = arr[1].valueOf = arr[2].valueOf = Math.random;
sum(arr);
sum(arr);
sum(arr);
```

However, the clever readers will see that my TypeScript `sum` can break too:

```typescript
sum(null);
```

Compiles with success, but gives the runtime error "TypeError: Cannot read property 'length' of null". That's because TypeScript pre-v2.0 accepts that `Array<number>` includes `null` too. Even if we use TypeScript v2.1, we can trick TypeScript with type casting:

```typescript
var arr = [{}, {}, {}] as Array<number>; // trust me, compiler!
arr[0].valueOf = arr[1].valueOf = arr[2].valueOf = Math.random;
sum(arr); // 2.393660612848899
sum(arr); // 2.3418339292845998
sum(arr); // 2.15048094452324
```

Which compiles but gives different outputs for `sum(arr)`.

So, is TypeScript doomed too? Well, kind of yes, but much less doomed than JavaScript is. TypeScript typings add assumptions to your code so it will catch more corner cases than you would typically catch when writing naive code. So, I like TypeScript. It helps me feel a bit less uneasy.

Can we really be sure if a function is pure just by reading it? Well, in an actual functional programming language like PureScript or Haskell we can:

```haskell
sum :: [Int] -> Int
sum = foldl (+) 0
```

If you don't understand the syntax, here's the important part: `[Int] -> Int`. It means it's a function that takes a list of `Int` and returns just an `Int`. The list cannot be undefined, cannot be null. And I don't think you can tamper with the numbers like you can in JavaScript. And there's a whole lot of assumptions embedded into `Int`. It's a type that satisfies many typeclasses: `Num` (it's a number), `Ord` (the integers can be ordered), `Eq` (the integers can be `===` compared), `Show` (we can make a human readable format for integers), etc. All those assumptions catch a lot of corner cases. Maybe there are a few runtime errors and unsafe operations in Haskell, but the point is it's damn good at making code behave like a Mathematical Function.

<h2 id="conclusion" class="hr"><span class="hr">CONCLUSION</span></h2>

Ok, so Haskell functions are pure, and you can know that just by reading the code. But isn't the title of this article about JavaScript?

I've been thinking about purity in JavaScript for a while, because recently I've had a discussion with people about "is RxJS [`scan`](http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-scan) operator pure?" and I was defending that it is pure. I was wrong. Actually, I wasn't. It depends. If used outside of the context of higher-order Observables, like it ~~is~~ [was](http://elm-lang.org/blog/farewell-to-frp) in Elm (an actual functional programming language, in the league of Haskell and PureScript), then it is pure. It **behaves** like a Mathematical Function. But, if you use `scan` in higher-order Observables, there is a lot of possibility it won't behave like a Mathematical Function.

Why does this all matter? Because I hope we can start shifting our discussions from "is this pure?" to

> "Does this `function` behave like a Mathematical Function in all the situations I will encounter in **my** code?"

I know it's a longer sentence. I know it's hard to find the answer in most cases. However it's the only thing we can do about purity in JavaScript. We cannot look at code and declare that it's pure. We would miss a lot of unchecked assumptions. Let's talk about "*behaves like Math in this particular situation*" instead.

My mother tongue Portuguese would be very convenient right now to express two different flavors of "is": *a função não é pura, a função **está** pura*. English: "the function is not pure, the function is [currently being] pure".