---
layout: post
title: "JavaScript Getter-Setter Pyramid"
tags: [blog]
---

The cornerstone of JavaScript is the function. It is a flexible abstraction that works as the basis for other abstractions, such as Promises, Iterables, Observables, and others. I have been teaching these concepts in conferences and workshops, and over time I have found an elegant summary of these abstractions, layed out in a pyramid. In this blog post I'll provide a tour through these layers in the pyramid.

<h2 id="functions" class="hr"><span class="hr">FUNCTIONS</span></h2>

<h3 style="text-align:center"><code>X => Y</code></h3>

<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   width="100%"
   height="200"
   viewBox="0 0 158.74999 50"
   version="1.1"
   >
  <g transform="translate(0,-250.58345)">
    <path
       style="opacity:1;fill:#dfebfa;fill-opacity:1;stroke:#accbf2;stroke-width:0.26;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:17.20000076;stroke-dasharray:none;stroke-dashoffset:9.99999905;stroke-opacity:1"
       d="M 15.393816,254.60231 H 143.99905 l 4.90616,15.59154 H 10.491946 Z"
       id="function-bg"
       />
    <text
       xml:space="preserve"
       x="67.759735"
       y="264.60794"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:6px;font-family:'Roboto';fill:#34506c;fill-opacity:1;stroke-width:0.26"
       ><tspan>Function</tspan></text>
    <path
       style="opacity:0.6;fill:#dfebfa;fill-opacity:1;stroke:#accbf2;stroke-width:0.26;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:17.20000076;stroke-dasharray:none;stroke-dashoffset:9.99999905;stroke-opacity:1"
       d="M 10.104156,271.46572 H 149.2976 l 4.90616,15.59154 H 5.2022871 Z"
       id="values-bg"
       />
    <text
       xml:space="preserve"
       x="72"
       y="281.44595"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:6px;font-family:'Roboto';fill:#34506c;fill-opacity:1;stroke-width:0.26;opacity:0.6"
       ><tspan>Value</tspan></text>
  </g>
</svg>

The very base of JavaScript are the first-class values such as numbers, strings, objects, booleans, etc. Although you could still write a program that uses just values and control flow, very soon you would need to write a function to improve your program.

Functions are unavoidable abstractions in JavaScript, they are often required for async I/O via callbacks. The word "function" in JavaScript does not refer to "pure functions" like in functional programming. It's better to understand these as simply "procedures", because they are just lazy reusable chunks of code, with optional input (the arguments), and optional output (the return).

Compared to hard coded chunks of code, functions provide a couple important benefits:

- Laziness / reusability
  - The code inside a function must be lazy (i.e. not executed unless called) for it to be reusable
- Implementation flexibility
  - Consumers of the function don't care how the function is internally implemented, so this means there is flexibility to implement the function in various ways


<h2 id="getters" class="hr"><span class="hr">GETTERS</span></h2>

<h3 style="text-align:center"><code>() => X</code></h3>
<h4 style="text-align:center">A getter is a function with no input arguments and X as output</h4>

<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   width="100%"
   height="280"
   viewBox="0 0 158.74999 70"
   version="1.1"
   >
  <g transform="translate(0,-225)">
    <path
       style="opacity:0.6;fill:#dfebfa;fill-opacity:1;stroke:#accbf2;stroke-width:0.26;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:17.20000076;stroke-dasharray:none;stroke-dashoffset:9.99999905;stroke-opacity:1"
       d="M 15.393816,254.60231 H 143.99905 l 4.90616,15.59154 H 10.491946 Z"
       id="function-bg"
       />
    <path
       style="opacity:1;fill:#dfebfa;fill-opacity:1;stroke:#accbf2;stroke-width:0.26;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:17.20000076;stroke-dasharray:none;stroke-dashoffset:9.99999905;stroke-opacity:1"
       d="m 20.703206,237.7389 h 46.26576 l -10e-6,15.59154 h -51.16762 z"
       id="getter-bg"
       />
    <text
       xml:space="preserve"
       x="34.422062"
       y="247.7571"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:6px;font-family:'Roboto';fill:#34506c;fill-opacity:1;stroke-width:0.26"
       ><tspan>Getter</tspan></text>
    <text
       xml:space="preserve"
       x="67.759735"
       y="264.60794"
         style="font-style:normal;opacity:0.6;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:6px;font-family:'Roboto';fill:#34506c;fill-opacity:1;stroke-width:0.26"
       ><tspan>Function</tspan></text>
    <path
       style="opacity:0.6;fill:#dfebfa;fill-opacity:1;stroke:#accbf2;stroke-width:0.26;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:17.20000076;stroke-dasharray:none;stroke-dashoffset:9.99999905;stroke-opacity:1"
       d="M 10.104156,271.46572 H 149.2976 l 4.90616,15.59154 H 5.2022871 Z"
       id="values-bg"
       />
    <text
       xml:space="preserve"
       x="72"
       y="281.44595"
         style="font-style:normal;opacity:0.6;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:6px;font-family:'Roboto';fill:#34506c;fill-opacity:1;stroke-width:0.26"
       ><tspan>Value</tspan></text>
  </g>
</svg>

Getters are one kind of function, where no arguments are passed but a return value is expected. There are many such getters in the JavaScript runtime, such as `Math.random()`, `Date.now()`, and others. Getters are also useful as abstractions for values. Compare `user` with `getUser` below:

```js
const user = {name: 'Alice', age: 30};
console.log(user.name); // Alice


function getUser() {
  return {name: 'Alice', age: 30};
}
console.log(getUser().name); // Alice
```

By using a getter to represent a value, we inherit the benefits of functions, such as laziness: if we don't call `getUser()`, then the user object will not be created in vain.

We also gain implementation flexibility, because we can calculate the return object in multiple different ways, either by creating a plain object, or by returning an instance of a class, or by using properties on the prototype, etc. With hard-coded values we wouldn't have this flexibility.

Getters also allow us to have a hook for side effects. Whenever the getter is executed we can trigger a useful side effect, like a `console.log` or the triggering of an Analytics event, for instance:

```js
function getUser() {
  Analytics.sendEvent('User object is now being accessed');
  return {name: 'Alice', age: 30};
}
```

Computations on getters can also be abstract, because functions can be passed around as first-class value in JavaScript. For instance, consider this addition function which takes getters as arguments, and returns a getter of a number, not a number directly:

```js
function add(getX, getY) {
  return function getZ() {
    const x = getX();
    const y = getY();
    return x + y;
  }
}
```

The benefit of such abstract computation is clearer when the getters return unpredictable values, such as adding with the getter `Math.random`:

```js
const getTen = () => 10;
const getTenPlusRandom = add(getTen, Math.random);

console.log(getTenPlusRandom()); // 10.948117215055046
console.log(getTenPlusRandom()); // 10.796721274448556
console.log(getTenPlusRandom()); // 10.15350303918338
console.log(getTenPlusRandom()); // 10.829703269933633
```

It's also common to see getters being used with Promises, since Promises are known to not be reusable computations, so that wrapping a Promise constructor in a getter (also known as "factory" or "thunk") makes it reusable.

<h2 id="setters" class="hr"><span class="hr">SETTERS</span></h2>

<h3 style="text-align:center"><code>X => ()</code></h3>
<h4 style="text-align:center">A setter is a function with X as input and no output</h4>

<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   width="100%"
   height="280"
   viewBox="0 0 158.74999 70"
   version="1.1"
   >
  <g transform="translate(0,-225)">
    <path
       style="opacity:0.6;fill:#dfebfa;fill-opacity:1;stroke:#accbf2;stroke-width:0.26;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:17.20000076;stroke-dasharray:none;stroke-dashoffset:9.99999905;stroke-opacity:1"
       d="M 15.393816,254.60231 H 143.99905 l 4.90616,15.59154 H 10.491946 Z"
       id="function-bg"
       />
    <path
       style="opacity:0.6;fill:#dfebfa;fill-opacity:1;stroke:#accbf2;stroke-width:0.26;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:17.20000076;stroke-dasharray:none;stroke-dashoffset:9.99999905;stroke-opacity:1"
       d="m 20.703206,237.7389 h 46.26576 l -10e-6,15.59154 h -51.16762 z"
       id="getter-bg"
       />
    <text
       xml:space="preserve"
       x="34.422062"
       y="247.7571"
         style="opacity:0.6;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:6px;font-family:'Roboto';fill:#34506c;fill-opacity:1;stroke-width:0.26"
       ><tspan>Getter</tspan></text>
    <path
       style="opacity:1;fill:#dfebfa;fill-opacity:1;stroke:#accbf2;stroke-width:0.26;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:17.20000076;stroke-dasharray:none;stroke-dashoffset:9.99999905;stroke-opacity:1"
       d="m 68.118406,237.73893 h 70.603814 l 4.90616,15.59154 H 68.117526 Z"
       id="setter-bg"
       />
    <text
       xml:space="preserve"
       x="96.157547"
       y="247.75713"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:6px;font-family:'Roboto';fill:#34506c;fill-opacity:1;stroke-width:0.26"
       ><tspan>Setter</tspan></text>
    <text
       xml:space="preserve"
       x="67.759735"
       y="264.60794"
         style="opacity:0.6;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:6px;font-family:'Roboto';fill:#34506c;fill-opacity:1;stroke-width:0.26"
       ><tspan>Function</tspan></text>
    <path
       style="opacity:0.6;fill:#dfebfa;fill-opacity:1;stroke:#accbf2;stroke-width:0.26;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:17.20000076;stroke-dasharray:none;stroke-dashoffset:9.99999905;stroke-opacity:1"
       d="M 10.104156,271.46572 H 149.2976 l 4.90616,15.59154 H 5.2022871 Z"
       id="values-bg"
       />
    <text
       xml:space="preserve"
       x="72"
       y="281.44595"
         style="opacity:0.6;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:6px;font-family:'Roboto';fill:#34506c;fill-opacity:1;stroke-width:0.26"
       ><tspan>Value</tspan></text>
  </g>
</svg>

Setters are one kind of function, where an argument is provided, but no output value is returned. There are many setters natively in the JavaScript runtime and in the DOM, such as `console.log(x)`, `document.write(x)`, and others.

Unlike getters, setters are often not abstractions, because if no value comes out of the function, it means the function is only meant for sending data or commanding the JavaScript runtime. For instance, while the getter `getTen` is an abstraction for the number ten and we can pass that getter around as a value, it does not make sense to pass the function `setTen` around as a value, because you will not be able to *retrieve* any number by calling it.

That said, setters can be simple wrappers of other setters. Consider this wrapper for the `console.log` setter:

```js
function fancyConsoleLog(str) {
  console.log('⭐ ' + str + ' ⭐');
}
```

<h2 id="getter-getters" class="hr"><span class="hr">GETTER GETTERS</span></h2>

<h3 style="text-align:center"><code>() => (() => X)</code></h3>
<h4 style="text-align:center">A getter-getter is a function with no input arguments and a getter as output</h4>

<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   width="100%"
   height="310"
   viewBox="0 0 158.74999 60"
   version="1.1"
   >
  <g transform="translate(0,-225)">
    <path
       style="opacity:0.6;fill:#dfebfa;fill-opacity:1;stroke:#accbf2;stroke-width:0.26;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:17.20000076;stroke-dasharray:none;stroke-dashoffset:9.99999905;stroke-opacity:1"
       d="M 15.393816,254.60231 H 143.99905 l 4.90616,15.59154 H 10.491946 Z"
       id="function-bg"
       />
    <path
       style="opacity:1;fill:#dfebfa;fill-opacity:1;stroke:#accbf2;stroke-width:0.26;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:17.20000076;stroke-dasharray:none;stroke-dashoffset:9.99999905;stroke-opacity:1"
       d="m 26.011436,220.87593 h 40.95695 l -10e-6,15.59154 h -45.85881 z"
       id="gettergetter-bg"
       />
    <text xml:space="preserve" x="28" y="230.8" style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:6px;font-family:'Roboto';fill:#34506c;fill-opacity:1;stroke-width:0.26"
       ><tspan>Getter-getter</tspan></text>
    <path
       style="opacity:0.6;fill:#dfebfa;fill-opacity:1;stroke:#accbf2;stroke-width:0.26;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:17.20000076;stroke-dasharray:none;stroke-dashoffset:9.99999905;stroke-opacity:1"
       d="m 20.703206,237.7389 h 46.26576 l -10e-6,15.59154 h -51.16762 z"
       id="getter-bg"
       />
    <text
       xml:space="preserve"
       x="34.422062"
       y="247.7571"
         style="opacity:0.6;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:6px;font-family:'Roboto';fill:#34506c;fill-opacity:1;stroke-width:0.26"
       ><tspan>Getter</tspan></text>
    <path
       style="opacity:0.6;fill:#dfebfa;fill-opacity:1;stroke:#accbf2;stroke-width:0.26;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:17.20000076;stroke-dasharray:none;stroke-dashoffset:9.99999905;stroke-opacity:1"
       d="m 68.118406,237.73893 h 70.603814 l 4.90616,15.59154 H 68.117526 Z"
       id="setter-bg"
       />
    <text
       xml:space="preserve"
       x="96.157547"
       y="247.75713"
         style="opacity:0.6;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:6px;font-family:'Roboto';fill:#34506c;fill-opacity:1;stroke-width:0.26"
       ><tspan>Setter</tspan></text>
    <text
       xml:space="preserve"
       x="67.759735"
       y="264.60794"
         style="opacity:0.6;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:6px;font-family:'Roboto';fill:#34506c;fill-opacity:1;stroke-width:0.26"
       ><tspan>Function</tspan></text>
    <path
       style="opacity:0.6;fill:#dfebfa;fill-opacity:1;stroke:#accbf2;stroke-width:0.26;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:17.20000076;stroke-dasharray:none;stroke-dashoffset:9.99999905;stroke-opacity:1"
       d="M 10.104156,271.46572 H 149.2976 l 4.90616,15.59154 H 5.2022871 Z"
       id="values-bg"
       />
    <text
       xml:space="preserve"
       x="72"
       y="281.44595"
         style="opacity:0.6;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:6px;font-family:'Roboto';fill:#34506c;fill-opacity:1;stroke-width:0.26"
       ><tspan>Value</tspan></text>
  </g>
</svg>

A special type of a getter is one that returns another getter, so it's a "getter of getters". The need for getter-getters arises from using getters to iterate over sequences. For instance, if we want to show the sequence of numbers that are a power of two, we could use the getter `getNextPowerOfTwo()`:

```js
let i = 2;
function getNextPowerOfTwo() {
  const next = i;
  i = i * 2;
  return next;
}

console.log(getNextPowerOfTwo()); // 2
console.log(getNextPowerOfTwo()); // 4
console.log(getNextPowerOfTwo()); // 8
console.log(getNextPowerOfTwo()); // 16
console.log(getNextPowerOfTwo()); // 32
console.log(getNextPowerOfTwo()); // 64
console.log(getNextPowerOfTwo()); // 128
```

The problem with the code above is that the variable `i` is declared globally, and if we would want to restart the sequence, we would have to manipulate this variable in the correct way, leaking implementation details of the getter.

What needs to be done to make the code above reusable and free of globals is to wrap the getter in another function. And this wrapper function is also a getter.

```js
function getGetNext() {
  let i = 2;
  return function getNext() {
    const next = i;
    i = i * 2;
    return next;
  }
}

let getNext = getGetNext();
console.log(getNext()); // 2
console.log(getNext()); // 4
console.log(getNext()); // 8
getNext = getGetNext(); // 🔷 restart!
console.log(getNext()); // 2
console.log(getNext()); // 4
console.log(getNext()); // 8
console.log(getNext()); // 16
console.log(getNext()); // 32
```

Because getter-getters are just a special type of getter, they inherit all the benefits of getters, such as: (1) implementation flexibility, (2) hook for side effects, (3) laziness. The laziness this time is reflected in the initialization step. The outer function enables lazy initialization, while the inner function enables lazy iteration of values:

```js
function getGetNext() {
  // 🔷 LAZY INITIALIZATION
  let i = 2;

  return function getNext() {
    // 🔷 LAZY ITERATION
    const next = i;
    i = i * 2;
    return next;
  }
}
```

<h2 id="setter-setters" class="hr"><span class="hr">SETTER SETTERS</span></h2>

<h3 style="text-align:center"><code>(X => ()) => ()</code></h3>
<h4 style="text-align:center">A setter-setter is a function with a setter as input and no output</h4>

<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   width="100%"
   height="310"
   viewBox="0 0 158.74999 60"
   version="1.1"
   >
  <g transform="translate(0,-225)">
    <path
       style="opacity:0.6;fill:#dfebfa;fill-opacity:1;stroke:#accbf2;stroke-width:0.26;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:17.20000076;stroke-dasharray:none;stroke-dashoffset:9.99999905;stroke-opacity:1"
       d="M 15.393816,254.60231 H 143.99905 l 4.90616,15.59154 H 10.491946 Z"
       id="function-bg"
       />
    <path
       style="opacity:0.6;fill:#dfebfa;fill-opacity:1;stroke:#accbf2;stroke-width:0.26;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:17.20000076;stroke-dasharray:none;stroke-dashoffset:9.99999905;stroke-opacity:1"
       d="m 26.011436,220.87593 h 40.95695 l -10e-6,15.59154 h -45.85881 z"
       id="gettergetter-bg"
       />
    <text xml:space="preserve" x="28" y="230.8" style="opacity:0.6;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:6px;font-family:'Roboto';fill:#34506c;fill-opacity:1;stroke-width:0.26"
       ><tspan>Getter-getter</tspan></text>
    <path
       style="opacity:1;fill:#dfebfa;fill-opacity:1;stroke:#accbf2;stroke-width:0.26;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:17.20000076;stroke-dasharray:none;stroke-dashoffset:9.99999905;stroke-opacity:1"
       d="m 68.131956,220.87593 h 65.297924 l 4.90616,15.59154 H 68.131086 Z"
       id="settersetter-bg"
       />
    <text
       xml:space="preserve"
       x="85.400581"
       y="230.89413"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:6px;font-family:'Roboto';fill:#34506c;fill-opacity:1;stroke-width:0.26"
       ><tspan>Setter-setter</tspan></text>
    <path
       style="opacity:0.6;fill:#dfebfa;fill-opacity:1;stroke:#accbf2;stroke-width:0.26;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:17.20000076;stroke-dasharray:none;stroke-dashoffset:9.99999905;stroke-opacity:1"
       d="m 20.703206,237.7389 h 46.26576 l -10e-6,15.59154 h -51.16762 z"
       id="getter-bg"
       />
    <text
       xml:space="preserve"
       x="34.422062"
       y="247.7571"
         style="opacity:0.6;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:6px;font-family:'Roboto';fill:#34506c;fill-opacity:1;stroke-width:0.26"
       ><tspan>Getter</tspan></text>
    <path
       style="opacity:0.6;fill:#dfebfa;fill-opacity:1;stroke:#accbf2;stroke-width:0.26;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:17.20000076;stroke-dasharray:none;stroke-dashoffset:9.99999905;stroke-opacity:1"
       d="m 68.118406,237.73893 h 70.603814 l 4.90616,15.59154 H 68.117526 Z"
       id="setter-bg"
       />
    <text
       xml:space="preserve"
       x="96.157547"
       y="247.75713"
         style="opacity:0.6;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:6px;font-family:'Roboto';fill:#34506c;fill-opacity:1;stroke-width:0.26"
       ><tspan>Setter</tspan></text>
    <text
       xml:space="preserve"
       x="67.759735"
       y="264.60794"
         style="opacity:0.6;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:6px;font-family:'Roboto';fill:#34506c;fill-opacity:1;stroke-width:0.26"
       ><tspan>Function</tspan></text>
    <path
       style="opacity:0.6;fill:#dfebfa;fill-opacity:1;stroke:#accbf2;stroke-width:0.26;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:17.20000076;stroke-dasharray:none;stroke-dashoffset:9.99999905;stroke-opacity:1"
       d="M 10.104156,271.46572 H 149.2976 l 4.90616,15.59154 H 5.2022871 Z"
       id="values-bg"
       />
    <text
       xml:space="preserve"
       x="72"
       y="281.44595"
         style="opacity:0.6;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:6px;font-family:'Roboto';fill:#34506c;fill-opacity:1;stroke-width:0.26"
       ><tspan>Value</tspan></text>
  </g>
</svg>

A setter-setter is a particular kind of setter functions, where the argument passed is also a setter.
While basic setters are not abstractions, setter-setters are abstractions capable of representing values that can be passed around the codebase.

For instance, consider how it's possible to represent the number ten through this setter-setter:

```js
function setSetTen(setTen) {
  setTen(10)
}
```

Notice the lack of a return, because setters never return. The example above might be more readable by simply renaming some arguments:

```js
function setTenListener(cb) {
  cb(10)
}
```

As the name indicates, `cb` stands for "callback", and illustrates how setter-setters are common in JavaScript, given an abundant amount of use cases for callbacks. Consuming the abstract value represented by a setter-setter in the opposite way you would consume a getter. These two examples below are functionally equivalent, but have very different call styles.

```js
setSetTen(console.log);

// compare with...

console.log(getTen());
```

The benefits of setter-setters are the same as with getters – laziness, implementation flexibility, hook for side effects – but with two new properties that getters don't have: inversion of control and asynchronicity.

In the example above, the code that uses the getter dictates when the getter is consumed with `console.log`. However, when using a setter-setter, it's the setter-setter itself which dictates when to call `console.log`. This inversion of responsibility allows the setter-setter to have more power than getters, for instance by sending many values to consuming code:

```js
function setSetTen(setTen) {
  setTen(10)
  setTen(10)
  setTen(10)
  setTen(10)
}
```

Inversion of control also allows the setter-setter to decide *when* to deliver a value to the callback, for example asynchronously. Recall that another name for `setSetTen` could be `setTenListener`:

```js
function setTenListener(cb) {
  setTimeout(() => { cb(10); }, 1000);
}
```

While setter-setters are common in JavaScript for asynchronous programming, callback-driven code is not necessarily asynchronous. In the `setSetTen` example below, it is as synchronous as a getter is:

```js
function setSetTen(setTen) {
  setTen(10)
}

console.log('before');
setSetTen(console.log);
console.log('after');

// (Log shows:)
// before
// 10
// after
```

<h2 id="iterables" class="hr"><span class="hr">ITERABLES</span></h2>

<h3 style="text-align:center"><code>() => (() => ({done, value}))</code></h3>
<h4 style="text-align:center">An iterable is (with some details omitted:)<br />a getter-getter of an object that describes either a value or completion</h4>

<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   width="100%"
   height="400"
   viewBox="0 0 158.74999 57"
   version="1.1"
   >
  <g transform="translate(0,-220)">
    <path
       style="opacity:0.6;fill:#dfebfa;fill-opacity:1;stroke:#accbf2;stroke-width:0.26;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:17.20000076;stroke-dasharray:none;stroke-dashoffset:9.99999905;stroke-opacity:1"
       d="M 15.393816,254.60231 H 143.99905 l 4.90616,15.59154 H 10.491946 Z"
       id="function-bg"
       />
    <path
       style="opacity:1;fill:#dfebfa;fill-opacity:1;stroke:#accbf2;stroke-width:0.26;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:17.20000076;stroke-dasharray:none;stroke-dashoffset:9.99999905;stroke-opacity:1"
       d="m 31.306206,204.01193 h 35.60154 l -1e-5,15.59154 h -40.5034 z"
       id="iterable-bg"
       />
    <text
       xml:space="preserve"
       x="37.299671"
       y="213.99203"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:6px;font-family:'Roboto';fill:#34506c;fill-opacity:1;stroke-width:0.26"
       ><tspan>Iterable</tspan></text>
    <path
       style="opacity:0.6;fill:#dfebfa;fill-opacity:1;stroke:#accbf2;stroke-width:0.26;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:17.20000076;stroke-dasharray:none;stroke-dashoffset:9.99999905;stroke-opacity:1"
       d="m 26.011436,220.87593 h 40.95695 l -10e-6,15.59154 h -45.85881 z"
       id="gettergetter-bg"
       />
    <text xml:space="preserve" x="28" y="230.8" style="opacity:0.6;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:6px;font-family:'Roboto';fill:#34506c;fill-opacity:1;stroke-width:0.26"
       ><tspan>Getter-getter</tspan></text>
    <path
       style="opacity:0.6;fill:#dfebfa;fill-opacity:1;stroke:#accbf2;stroke-width:0.26;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:17.20000076;stroke-dasharray:none;stroke-dashoffset:9.99999905;stroke-opacity:1"
       d="m 68.131956,220.87593 h 65.297924 l 4.90616,15.59154 H 68.131086 Z"
       id="settersetter-bg"
       />
    <text
       xml:space="preserve"
       x="85.400581"
       y="230.89413"
         style="opacity:0.6;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:6px;font-family:'Roboto';fill:#34506c;fill-opacity:1;stroke-width:0.26"
       ><tspan>Setter-setter</tspan></text>
    <path
       style="opacity:0.6;fill:#dfebfa;fill-opacity:1;stroke:#accbf2;stroke-width:0.26;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:17.20000076;stroke-dasharray:none;stroke-dashoffset:9.99999905;stroke-opacity:1"
       d="m 20.703206,237.7389 h 46.26576 l -10e-6,15.59154 h -51.16762 z"
       id="getter-bg"
       />
    <text
       xml:space="preserve"
       x="34.422062"
       y="247.7571"
         style="opacity:0.6;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:6px;font-family:'Roboto';fill:#34506c;fill-opacity:1;stroke-width:0.26"
       ><tspan>Getter</tspan></text>
    <path
       style="opacity:0.6;fill:#dfebfa;fill-opacity:1;stroke:#accbf2;stroke-width:0.26;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:17.20000076;stroke-dasharray:none;stroke-dashoffset:9.99999905;stroke-opacity:1"
       d="m 68.118406,237.73893 h 70.603814 l 4.90616,15.59154 H 68.117526 Z"
       id="setter-bg"
       />
    <text
       xml:space="preserve"
       x="96.157547"
       y="247.75713"
         style="opacity:0.6;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:6px;font-family:'Roboto';fill:#34506c;fill-opacity:1;stroke-width:0.26"
       ><tspan>Setter</tspan></text>
    <text
       xml:space="preserve"
       x="67.759735"
       y="264.60794"
         style="opacity:0.6;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:6px;font-family:'Roboto';fill:#34506c;fill-opacity:1;stroke-width:0.26"
       ><tspan>Function</tspan></text>
    <path
       style="opacity:0.6;fill:#dfebfa;fill-opacity:1;stroke:#accbf2;stroke-width:0.26;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:17.20000076;stroke-dasharray:none;stroke-dashoffset:9.99999905;stroke-opacity:1"
       d="M 10.104156,271.46572 H 149.2976 l 4.90616,15.59154 H 5.2022871 Z"
       id="values-bg"
       />
    <text
       xml:space="preserve"
       x="72"
       y="281.44595"
         style="opacity:0.6;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:6px;font-family:'Roboto';fill:#34506c;fill-opacity:1;stroke-width:0.26"
       ><tspan>Value</tspan></text>
  </g>
</svg>

Getter-getters are capable of representing restartable sequences of values, but they have no convention to signal the *end* of a sequence. Iterables are a particular kind of getter-getter where the value is always an object with two properties: `done` (boolean indicating completion), and `value` (the actual delivered value unless `done` is true).

The completion indicator allows the code that consumes an iterable to know that subsequent Gets will return invalid data, so the consuming code can know when to stop iterating.

In the example below, we can produce a *finite* getter-getter of even numbers in the range 40 to 48, by respecting the completion indicator:

```js
function getGetNext() {
  let i = 40;
  return function getNext() {
    if (i <= 48) {
      const next = i;
      i += 2;
      return {done: false, value: next};
    } else {
      return {done: true};
    }
  }
}

let getNext = getGetNext();
for (let result = getNext(); !result.done; result = getNext()) {
  console.log(result.value);
}
```

*ES6 Iterables* have further conventions beyond the simple `() => (() => ({done, value}))` pattern, they add a wrapper object on each getter:

- The outer getter `f` becomes the object `{[Symbol.iterator]: f}`
- The inner getter `g` becomes the object `{next: g}`

Here is the code that matches the previous example, but as a valid ES6 Iterable:

```js
const oddNums = {
  [Symbol.iterator]: () => {
    let i = 40;
    return {
      next: () => {
        if (i <= 48) {
          const next = i;
          i += 2;
          return {done: false, value: next};
        } else {
          return {done: true};
        }
      }
    }
  }
}

let iterator = oddNums[Symbol.iterator]();
for (let result = iterator.next(); !result.done; result = iterator.next()) {
  console.log(result.value);
}
```

Notice the difference between those examples:

```diff
-function getGetNext() {
+const oddNums = {
+  [Symbol.iterator]: () => {
     let i = 40;
-  return function getNext() {
+    return {
+      next: () => {
         if (i <= 48) {
           const next = i;
           i += 2;
           return {done: false, value: next};
         } else {
           return {done: true};
         }
       }
+    }
   }
+}

-let getNext = getGetNext();
-for (let result = getNext(); !result.done; result = getNext()) {
+let iterator = oddNums[Symbol.iterator]();
+for (let result = iterator.next(); !result.done; result = iterator.next()) {
  console.log(result.value);
}
```

ES6 provides the syntax sugar `for-let-of` to consume Iterables in a convenient way:

```js
for (let x of oddNums) {
  console.log(x);
}
```

For easily creating Iterables, ES6 also provides the generator function syntax sugar `function*`:

```js
function* oddNums() {
  let i = 40;
  while (true) {
    if (i <= 48) {
      const next = i;
      i += 2;
      yield next;
    } else {
      return;
    }
  }
}
```

With **production-side syntax sugar** and **consumption-side syntax sugar**, iterables are easy-to-use abstractions for completable sequences of values in JavaScript since 2015. Note that *calling a generator function* will return an Iterable, the generator function itself is not an Iterable:

```js
function* oddNums() {
  let i = 40;
  while (true) {
    if (i <= 48) {
      yield i;
      i += 2;
    } else {
      return;
    }
  }
}

for (let x of oddNums()) {
  console.log(x);
}
```

<h2 id="promises" class="hr"><span class="hr">PROMISES</span></h2>

<h3 style="text-align:center"><code>(X => (), Err => ()) => ()</code></h3>
<h4 style="text-align:center">A promise is (with some details omitted:)<br />a setter of two setters, with additional guarantees</h4>

<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   width="100%"
   height="400"
   viewBox="0 0 158.74999 57"
   version="1.1"
   >
  <g transform="translate(0,-220)">
    <path
       style="opacity:0.6;fill:#dfebfa;fill-opacity:1;stroke:#accbf2;stroke-width:0.26;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:17.20000076;stroke-dasharray:none;stroke-dashoffset:9.99999905;stroke-opacity:1"
       d="M 15.393816,254.60231 H 143.99905 l 4.90616,15.59154 H 10.491946 Z"
       id="function-bg"
       />
    <path
       style="opacity:0.6;fill:#dfebfa;fill-opacity:1;stroke:#accbf2;stroke-width:0.26;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:17.20000076;stroke-dasharray:none;stroke-dashoffset:9.99999905;stroke-opacity:1"
       d="m 31.306206,204.01193 h 35.60154 l -1e-5,15.59154 h -40.5034 z"
       id="iterable-bg"
       />
    <text
       xml:space="preserve"
       x="37.299671"
       y="213.99203"
         style="opacity:0.6;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:6px;font-family:'Roboto';fill:#34506c;fill-opacity:1;stroke-width:0.26"
       ><tspan>Iterable</tspan></text>
    <path
       style="opacity:1;fill:#dfebfa;fill-opacity:1;stroke:#accbf2;stroke-width:0.26;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:17.20000076;stroke-dasharray:none;stroke-dashoffset:9.99999905;stroke-opacity:1"
       d="m 68.151916,204.01193 h 24.68811 l 3e-4,15.59154 h -24.68874 z"
       id="promise-bg"
       />
    <text
       xml:space="preserve"
       x="69.284836"
       y="214.01372"
       style="opacity:1;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:6px;font-family:'Roboto';fill:#34506c;fill-opacity:1;stroke-width:0.26"
       ><tspan>Promise</tspan></text>
    <path
       style="opacity:0.6;fill:#dfebfa;fill-opacity:1;stroke:#accbf2;stroke-width:0.26;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:17.20000076;stroke-dasharray:none;stroke-dashoffset:9.99999905;stroke-opacity:1"
       d="m 26.011436,220.87593 h 40.95695 l -10e-6,15.59154 h -45.85881 z"
       id="gettergetter-bg"
       />
    <text xml:space="preserve" x="28" y="230.8" style="opacity:0.6;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:6px;font-family:'Roboto';fill:#34506c;fill-opacity:1;stroke-width:0.26"
       ><tspan>Getter-getter</tspan></text>
    <path
       style="opacity:0.6;fill:#dfebfa;fill-opacity:1;stroke:#accbf2;stroke-width:0.26;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:17.20000076;stroke-dasharray:none;stroke-dashoffset:9.99999905;stroke-opacity:1"
       d="m 68.131956,220.87593 h 65.297924 l 4.90616,15.59154 H 68.131086 Z"
       id="settersetter-bg"
       />
    <text
       xml:space="preserve"
       x="85.400581"
       y="230.89413"
         style="opacity:0.6;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:6px;font-family:'Roboto';fill:#34506c;fill-opacity:1;stroke-width:0.26"
       ><tspan>Setter-setter</tspan></text>
    <path
       style="opacity:0.6;fill:#dfebfa;fill-opacity:1;stroke:#accbf2;stroke-width:0.26;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:17.20000076;stroke-dasharray:none;stroke-dashoffset:9.99999905;stroke-opacity:1"
       d="m 20.703206,237.7389 h 46.26576 l -10e-6,15.59154 h -51.16762 z"
       id="getter-bg"
       />
    <text
       xml:space="preserve"
       x="34.422062"
       y="247.7571"
         style="opacity:0.6;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:6px;font-family:'Roboto';fill:#34506c;fill-opacity:1;stroke-width:0.26"
       ><tspan>Getter</tspan></text>
    <path
       style="opacity:0.6;fill:#dfebfa;fill-opacity:1;stroke:#accbf2;stroke-width:0.26;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:17.20000076;stroke-dasharray:none;stroke-dashoffset:9.99999905;stroke-opacity:1"
       d="m 68.118406,237.73893 h 70.603814 l 4.90616,15.59154 H 68.117526 Z"
       id="setter-bg"
       />
    <text
       xml:space="preserve"
       x="96.157547"
       y="247.75713"
         style="opacity:0.6;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:6px;font-family:'Roboto';fill:#34506c;fill-opacity:1;stroke-width:0.26"
       ><tspan>Setter</tspan></text>
    <text
       xml:space="preserve"
       x="67.759735"
       y="264.60794"
         style="opacity:0.6;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:6px;font-family:'Roboto';fill:#34506c;fill-opacity:1;stroke-width:0.26"
       ><tspan>Function</tspan></text>
    <path
       style="opacity:0.6;fill:#dfebfa;fill-opacity:1;stroke:#accbf2;stroke-width:0.26;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:17.20000076;stroke-dasharray:none;stroke-dashoffset:9.99999905;stroke-opacity:1"
       d="M 10.104156,271.46572 H 149.2976 l 4.90616,15.59154 H 5.2022871 Z"
       id="values-bg"
       />
    <text
       xml:space="preserve"
       x="72"
       y="281.44595"
         style="opacity:0.6;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:6px;font-family:'Roboto';fill:#34506c;fill-opacity:1;stroke-width:0.26"
       ><tspan>Value</tspan></text>
  </g>
</svg>

While setter-setters are powerful, they can be very unpredictable due to inversion of control. They can be synchronous or asynchronous, and can deliver zero or one or multiple values over time. Promises are a special kind of setter-setters that provide some guarantees on the delivery of values:

- The inner setter (the "callback") is never called synchronously
- The inner setter is called at most once
- An optional second setter is provided for delivering error values

Compare the setter-setter below with an equivalent Promise. The Promise will deliver the value only once, and not between the two console.log calls because the value delivery is asynchronous:

```js
function setSetTen(setTen) {
  setTen(10)
  setTen(10)
}

console.log('before setSetTen');
setSetTen(console.log);
console.log('after setSetTen');

// (Log shows:)
// before setSetTen
// 10
// 10
// after setSetTen
```

Compared with:

```js
const tenPromise = new Promise(function setSetTen(setTen) {
  setTen(10);
  setTen(10);
});

console.log('before Promise.then');
tenPromise.then(console.log);
console.log('after Promise.then');

// (Log shows:)
// before Promise.then
// after Promise.then
// 10
```

Promises conveniently represent *one asynchronous and non-reusable value*, and since ES2017 have a syntax sugar for production and consumption: `async`–`await`. To consume the value within a Promise, use `await` only in functions prefixed with the keyword `async`:

```js
async function main() {
  console.log('before await');
  const ten = await new Promise(function setSetTen(setTen) {
    setTen(10);
  });
  console.log(ten);
  console.log('after await');
}

main();

// (Log shows:)
// before await
// 10
// after await
```

The syntax sugar `async`–`await` can also be used to create a Promise, because the `async function` returns a Promise which delivers the value that was `return`'d in the function.

```js
async function getTenPromise() {
  return 10;
}
const tenPromise = getTenPromise();

console.log('before Promise.then');
tenPromise.then(console.log);
console.log('after Promise.then');

// (Log shows:)
// before Promise.then
// after Promise.then
// 10
```

<h2 id="observables" class="hr"><span class="hr">OBSERVABLES</span></h2>

<h3 style="text-align:center"><code>(X => (), Err => (), () => ()) => ()</code></h3>
<h4 style="text-align:center">An observable is (with some details omitted:)<br />a setter of three setters, with additional guarantees</h4>

<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   width="100%"
   height="400"
   viewBox="0 0 158.74999 57"
   version="1.1"
   >
  <g transform="translate(0,-220)">
    <path
       style="opacity:0.6;fill:#dfebfa;fill-opacity:1;stroke:#accbf2;stroke-width:0.26;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:17.20000076;stroke-dasharray:none;stroke-dashoffset:9.99999905;stroke-opacity:1"
       d="M 15.393816,254.60231 H 143.99905 l 4.90616,15.59154 H 10.491946 Z"
       id="function-bg"
       />
    <path
       style="opacity:0.6;fill:#dfebfa;fill-opacity:1;stroke:#accbf2;stroke-width:0.26;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:17.20000076;stroke-dasharray:none;stroke-dashoffset:9.99999905;stroke-opacity:1"
       d="m 31.306206,204.01193 h 35.60154 l -1e-5,15.59154 h -40.5034 z"
       id="iterable-bg"
       />
    <text
       xml:space="preserve"
       x="37.299671"
       y="213.99203"
         style="opacity:0.6;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:6px;font-family:'Roboto';fill:#34506c;fill-opacity:1;stroke-width:0.26"
       ><tspan>Iterable</tspan></text>
    <path
       style="opacity:0.6;fill:#dfebfa;fill-opacity:1;stroke:#accbf2;stroke-width:0.26;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:17.20000076;stroke-dasharray:none;stroke-dashoffset:9.99999905;stroke-opacity:1"
       d="m 68.151916,204.01193 h 24.68811 l 3e-4,15.59154 h -24.68874 z"
       id="promise-bg"
       />
    <text
       xml:space="preserve"
       x="69.284836"
       y="214.01372"
       style="opacity:0.6;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:6px;font-family:'Roboto';fill:#34506c;fill-opacity:1;stroke-width:0.26"
       ><tspan>Promise</tspan></text>
    <path
       style="opacity:1;fill:#dfebfa;fill-opacity:1;stroke:#accbf2;stroke-width:0.26;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:17.20000076;stroke-dasharray:none;stroke-dashoffset:9.99999905;stroke-opacity:1"
       d="m 94.097966,204.01193 h 34.014774 l 4.90616,15.59154 H 94.097096 Z"
       id="observable-bg"
       />
    <text
       xml:space="preserve"
       x="96.429359"
       y="214.01372"
         style="opacity:1;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:6px;font-family:'Roboto';fill:#34506c;fill-opacity:1;stroke-width:0.26"
       ><tspan>Observable</tspan></text>
    <path
       style="opacity:0.6;fill:#dfebfa;fill-opacity:1;stroke:#accbf2;stroke-width:0.26;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:17.20000076;stroke-dasharray:none;stroke-dashoffset:9.99999905;stroke-opacity:1"
       d="m 26.011436,220.87593 h 40.95695 l -10e-6,15.59154 h -45.85881 z"
       id="gettergetter-bg"
       />
    <text xml:space="preserve" x="28" y="230.8" style="opacity:0.6;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:6px;font-family:'Roboto';fill:#34506c;fill-opacity:1;stroke-width:0.26"
       ><tspan>Getter-getter</tspan></text>
    <path
       style="opacity:0.6;fill:#dfebfa;fill-opacity:1;stroke:#accbf2;stroke-width:0.26;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:17.20000076;stroke-dasharray:none;stroke-dashoffset:9.99999905;stroke-opacity:1"
       d="m 68.131956,220.87593 h 65.297924 l 4.90616,15.59154 H 68.131086 Z"
       id="settersetter-bg"
       />
    <text
       xml:space="preserve"
       x="85.400581"
       y="230.89413"
         style="opacity:0.6;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:6px;font-family:'Roboto';fill:#34506c;fill-opacity:1;stroke-width:0.26"
       ><tspan>Setter-setter</tspan></text>
    <path
       style="opacity:0.6;fill:#dfebfa;fill-opacity:1;stroke:#accbf2;stroke-width:0.26;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:17.20000076;stroke-dasharray:none;stroke-dashoffset:9.99999905;stroke-opacity:1"
       d="m 20.703206,237.7389 h 46.26576 l -10e-6,15.59154 h -51.16762 z"
       id="getter-bg"
       />
    <text
       xml:space="preserve"
       x="34.422062"
       y="247.7571"
         style="opacity:0.6;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:6px;font-family:'Roboto';fill:#34506c;fill-opacity:1;stroke-width:0.26"
       ><tspan>Getter</tspan></text>
    <path
       style="opacity:0.6;fill:#dfebfa;fill-opacity:1;stroke:#accbf2;stroke-width:0.26;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:17.20000076;stroke-dasharray:none;stroke-dashoffset:9.99999905;stroke-opacity:1"
       d="m 68.118406,237.73893 h 70.603814 l 4.90616,15.59154 H 68.117526 Z"
       id="setter-bg"
       />
    <text
       xml:space="preserve"
       x="96.157547"
       y="247.75713"
         style="opacity:0.6;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:6px;font-family:'Roboto';fill:#34506c;fill-opacity:1;stroke-width:0.26"
       ><tspan>Setter</tspan></text>
    <text
       xml:space="preserve"
       x="67.759735"
       y="264.60794"
         style="opacity:0.6;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:6px;font-family:'Roboto';fill:#34506c;fill-opacity:1;stroke-width:0.26"
       ><tspan>Function</tspan></text>
    <path
       style="opacity:0.6;fill:#dfebfa;fill-opacity:1;stroke:#accbf2;stroke-width:0.26;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:17.20000076;stroke-dasharray:none;stroke-dashoffset:9.99999905;stroke-opacity:1"
       d="M 10.104156,271.46572 H 149.2976 l 4.90616,15.59154 H 5.2022871 Z"
       id="values-bg"
       />
    <text
       xml:space="preserve"
       x="72"
       y="281.44595"
         style="opacity:0.6;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:6px;font-family:'Roboto';fill:#34506c;fill-opacity:1;stroke-width:0.26"
       ><tspan>Value</tspan></text>
  </g>
</svg>

Like Iterables were a special type of getter-getter with the added capability of signalling completion, Observables are a type of setter-setter that add completion capability too. Typical setter-setters in JavaScript, like `element.addEventListener`, don't notify whether the stream of events is done, so this makes it difficult to concatenate event streams or do other completion-related logic.

Unlike Iterables, which are standardized in the JavaScript specification, Observables are loosely-agreed conventions found among several libraries such as [RxJS](https://github.com/ReactiveX/rxjs), [most.js](https://github.com/cujojs/most), [xstream](https://github.com/staltz/xstream/), [Bacon.js](https://baconjs.github.io/), etc. Although [Observables are being considered](https://github.com/tc39/proposal-observable) as a TC39 proposal, the proposal is in flux, so in this article let us assume the [Fantasy Observable](https://github.com/staltz/fantasy-observable) specification, which libraries like RxJS, most.js and xstream have traditionally followed.

Observables are [the dual of Iterables](http://csl.stanford.edu/~christos/pldi2010.fit/meijer.duality.pdf), and this can be seen through some symmetries:

- **Iterable**
  - Is an object
  - Has the "iterate" method, a.k.a. `Symbol.iterator`
  - "iterate" method is a **getter** of an Iterator object
  - Iterator object has a `next` method as a **getter**
- **Observable**
  - Is an object
  - Has the "observe" method, a.k.a. `subscribe`
  - "observe" method is a **setter** of an Observer object
  - Observer object has a `next` method as a **setter**

The observer object also can contain two other methods, `complete` and `error`, to indicate successful completion and failed completion, respectively. The `complete` setter is equivalent to the `done` indicator in Iterables, and the `error` setter is equivalent to throwing an exception from the iterator getter.

Like Promises, Observables add some guarantees on the delivery of values:

- Once the `complete` setter is called, the `error` setter will not be called
- Once the `error` setter is called, the `complete` setter will not be called
- Once the `complete` setter or the `error` setter were called, the `next` setter will not be called

In the example below, the Observable represents an asynchronous and *finite* sequence of numbers:

```js
const oddNums = {
  subscribe: (observer) => {
    let x = 40;
    let clock = setInterval(() => {
      if (x <= 48) {
        observer.next(x);
        x += 2;
      } else {
        observer.complete();
        clearInterval(clock);
      }
    }, 1000);
  }
};

oddNums.subscribe({
  next: x => console.log(x),
  complete: () => console.log('done'),
});

// (Log shows:)
// 40
// 42
// 44
// 46
// 48
// done
```

Like with setter-setters, Observables cause inversion of control, so the consumption side (`oddNums.subscribe`) has no way of pausing or cancelling the incoming flow of data. Most Observable implementations add one important detail to allow cancellation to be transmitted from consumer to producer: Subscriptions.

The `subscribe` function can return an object – the subscription – with one method: `unsubscribe`, which the consumer side can use to abort the incoming flow of data. Thus, the `subscribe` is not anymore a setter, because it's a function with both input (observer) and output (subscription). Below, we add a subscription object to our previous example:

```js
const oddNums = {
  subscribe: (observer) => {
    let x = 40;
    let clock = setInterval(() => {
      if (x <= 48) {
        observer.next(x);
        x += 2;
      } else {
        observer.complete();
        clearInterval(clock);
      }
    }, 1000);
    // 🔷 Subscription:
    return {
      unsubscribe: () => {
        clearInterval(clock);
      }
    };
  }
};

const subscription = oddNums.subscribe({
  next: x => console.log(x),
  complete: () => console.log('done'),
});

// 🔷 Cancel the incoming flow of data after 2.5 seconds
setTimeout(() => {
  subscription.unsubscribe();
}, 2500);

// (Log shows:)
// 40
// 42
```

<h2 id="async-iterables" class="hr"><span class="hr">ASYNC ITERABLES</span></h2>

<h3 style="text-align:center"><code>() => (() => Promise<{done, value}>)</code></h3>
<h4 style="text-align:center">An async iterable is (with some details omitted:)<br />like an iterable that yields promises of values</h4>

<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   width="100%"
   height="440"
   viewBox="0 0 158.74999 116.41654"
   version="1.1"
   >
  <g transform="translate(0,-180.58345)">
    <path
       style="opacity:0.6;fill:#dfebfa;fill-opacity:1;stroke:#accbf2;stroke-width:0.26;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:17.20000076;stroke-dasharray:none;stroke-dashoffset:9.99999905;stroke-opacity:1"
       d="M 15.393816,254.60231 H 143.99905 l 4.90616,15.59154 H 10.491946 Z"
       id="function-bg"
       />
    <path
       style="opacity:0.6;fill:#dfebfa;fill-opacity:1;stroke:#accbf2;stroke-width:0.26;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:17.20000076;stroke-dasharray:none;stroke-dashoffset:9.99999905;stroke-opacity:1"
       d="m 31.306206,204.01193 h 35.60154 l -1e-5,15.59154 h -40.5034 z"
       id="iterable-bg"
       />
    <text
       xml:space="preserve"
       x="37.299671"
       y="213.99203"
         style="opacity:0.6;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:6px;font-family:'Roboto';fill:#34506c;fill-opacity:1;stroke-width:0.26"
       ><tspan>Iterable</tspan></text>
    <path
       style="opacity:0.6;fill:#dfebfa;fill-opacity:1;stroke:#accbf2;stroke-width:0.26;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:17.20000076;stroke-dasharray:none;stroke-dashoffset:9.99999905;stroke-opacity:1"
       d="m 68.151916,204.01193 h 24.68811 l 3e-4,15.59154 h -24.68874 z"
       id="promise-bg"
       />
    <text
       xml:space="preserve"
       x="69.284836"
       y="214.01372"
       style="opacity:0.6;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:6px;font-family:'Roboto';fill:#34506c;fill-opacity:1;stroke-width:0.26"
       ><tspan>Promise</tspan></text>
    <path
       style="opacity:0.6;fill:#dfebfa;fill-opacity:1;stroke:#accbf2;stroke-width:0.26;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:17.20000076;stroke-dasharray:none;stroke-dashoffset:9.99999905;stroke-opacity:1"
       d="m 94.097966,204.01193 h 34.014774 l 4.90616,15.59154 H 94.097096 Z"
       id="observable-bg"
       />
    <text
       xml:space="preserve"
       x="96.429359"
       y="214.01372"
         style="opacity:0.6;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:6px;font-family:'Roboto';fill:#34506c;fill-opacity:1;stroke-width:0.26"
       ><tspan>Observable</tspan></text>
    <path
       style="opacity:1;fill:#dfebfa;fill-opacity:1;stroke:#accbf2;stroke-width:0.26;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:17.20000076;stroke-dasharray:none;stroke-dashoffset:9.99999905;stroke-opacity:1"
       d="m 36.603636,187.14867 h 51.097575 l 4.90616,15.59154 H 31.701766 Z"
       id="asynciterable-bg"
       />
    <text
       xml:space="preserve"
       x="43.947285"
       y="197"
         style="opacity:1;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:6px;font-family:'Roboto';fill:#34506c;fill-opacity:1;stroke-width:0.26"
       ><tspan>AsyncIterable</tspan></text>
    <path
       style="opacity:0.6;fill:#dfebfa;fill-opacity:1;stroke:#accbf2;stroke-width:0.26;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:17.20000076;stroke-dasharray:none;stroke-dashoffset:9.99999905;stroke-opacity:1"
       d="m 26.011436,220.87593 h 40.95695 l -10e-6,15.59154 h -45.85881 z"
       id="gettergetter-bg"
       />
    <text xml:space="preserve" x="28" y="230.8" style="opacity:0.6;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:6px;font-family:'Roboto';fill:#34506c;fill-opacity:1;stroke-width:0.26"
       ><tspan>Getter-getter</tspan></text>
    <path
       style="opacity:0.6;fill:#dfebfa;fill-opacity:1;stroke:#accbf2;stroke-width:0.26;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:17.20000076;stroke-dasharray:none;stroke-dashoffset:9.99999905;stroke-opacity:1"
       d="m 68.131956,220.87593 h 65.297924 l 4.90616,15.59154 H 68.131086 Z"
       id="settersetter-bg"
       />
    <text
       xml:space="preserve"
       x="85.400581"
       y="230.89413"
         style="opacity:0.6;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:6px;font-family:'Roboto';fill:#34506c;fill-opacity:1;stroke-width:0.26"
       ><tspan>Setter-setter</tspan></text>
    <path
       style="opacity:0.6;fill:#dfebfa;fill-opacity:1;stroke:#accbf2;stroke-width:0.26;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:17.20000076;stroke-dasharray:none;stroke-dashoffset:9.99999905;stroke-opacity:1"
       d="m 20.703206,237.7389 h 46.26576 l -10e-6,15.59154 h -51.16762 z"
       id="getter-bg"
       />
    <text
       xml:space="preserve"
       x="34.422062"
       y="247.7571"
         style="opacity:0.6;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:6px;font-family:'Roboto';fill:#34506c;fill-opacity:1;stroke-width:0.26"
       ><tspan>Getter</tspan></text>
    <path
       style="opacity:0.6;fill:#dfebfa;fill-opacity:1;stroke:#accbf2;stroke-width:0.26;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:17.20000076;stroke-dasharray:none;stroke-dashoffset:9.99999905;stroke-opacity:1"
       d="m 68.118406,237.73893 h 70.603814 l 4.90616,15.59154 H 68.117526 Z"
       id="setter-bg"
       />
    <text
       xml:space="preserve"
       x="96.157547"
       y="247.75713"
         style="opacity:0.6;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:6px;font-family:'Roboto';fill:#34506c;fill-opacity:1;stroke-width:0.26"
       ><tspan>Setter</tspan></text>
    <text
       xml:space="preserve"
       x="67.759735"
       y="264.60794"
         style="opacity:0.6;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:6px;font-family:'Roboto';fill:#34506c;fill-opacity:1;stroke-width:0.26"
       ><tspan>Function</tspan></text>
    <path
       style="opacity:0.6;fill:#dfebfa;fill-opacity:1;stroke:#accbf2;stroke-width:0.26;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:17.20000076;stroke-dasharray:none;stroke-dashoffset:9.99999905;stroke-opacity:1"
       d="M 10.104156,271.46572 H 149.2976 l 4.90616,15.59154 H 5.2022871 Z"
       id="values-bg"
       />
    <text
       xml:space="preserve"
       x="72"
       y="281.44595"
         style="opacity:0.6;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:6px;font-family:'Roboto';fill:#34506c;fill-opacity:1;stroke-width:0.26"
       ><tspan>Value</tspan></text>
  </g>
</svg>

Iterables can represent any infinite or finite sequence of values, but they have one limitation: the value must be synchronously available as soon as the consumer calls the `next()` method. AsyncIterables extend the power of Iterables by allowing values to be delivered "later", not immediately when requested.

AsyncIterables implement asynchronous delivery of values by using Promises, because a Promise represents a single asynchronous value. Every time the iterator's `next()` (the inner getter function) is called, a Promise is created and returned.

In the example below, we take the `oddNums` Iterable example and make it yield Promises of values that resolve after a delay:

```js
function slowResolve(val) {
  return new Promise(resolve => {
    setTimeout(() => resolve(val), 1000);
  });
}

function* oddNums() {
  let i = 40;
  while (true) {
    if (i <= 48) {
      yield slowResolve(i); // 🔷 yield a Promise
      i += 2;
    } else {
      return;
    }
  }
}
```

To consume an AsyncIterable, we can just *await* each yielded Promise before requesting the next Promise:

```js
async function main() {
  for (let promise of oddNums()) {
    const x = await promise;
    console.log(x);
  }
  console.log('done');
}

main();

// (Log shows:)
// 40
// 42
// 44
// 46
// 48
// done
```

The example above creates a good intuition for AsyncIterables, but it is actually not a valid ES2018 AsyncIterable. What we did above was an ES6 Iterable of Promises, but ES2018 AsyncIterables are a getter-getter of a Promise of `{done, value}` objects. Compare these two:

- Iterable of Promises: `() => (() => {done, value: Promise<X>})`
- ES2018 AsyncIterable: `() => (() => Promise<{done, value}>)`

It is counterintuitive that ES2018 AsyncIterables are *not Iterables*, they are simply getter-getters of Promises, that resemble Iterables in many ways. The reason for this detail is that AsyncIterables also need to allow completion (the `done` boolean) to be sent asynchronously, so the Promise must *wrap the whole* `{done, value}` object.

Because AsyncIterables are not Iterables, they use different Symbols. While Iterables rely on `Symbol.iterator`, AsyncIterables use `Symbol.asyncIterator` instead. In the example below, we implement a valid ES2018 AsyncIterable that is similar to the previous example:

```js
const oddNums = {
  [Symbol.asyncIterator]: () => {
    let i = 40;
    return {
      next: () => {
        if (i <= 48) {
          const next = i;
          i += 2;
          return slowResolve({done: false, value: next});
        } else {
          return slowResolve({done: true});
        }
      }
    };
  }
};

async function main() {
  let iter = oddNums[Symbol.asyncIterator]();
  let done = false;
  for (let promise = iter.next(); !done; promise = iter.next()) {
    const result = await promise;
    done = result.done;
    if (!done) console.log(result.value);
  }
  console.log('done');
}

main();
```

Like Iterables have the syntax sugars `function*` and `for`–`let`–`of`, and like Promises have the `async`–`await` syntax sugar, AsyncIterables in ES2018 come with two syntax sugar features:

- Production side: `async function*`
- Consumption side: `for`–`await`–`let`–`of`

In the example below, we use both features to create an asynchronous sequence of numbers, and consume them with a for-await loop:

```js
function sleep(period) {
  return new Promise(resolve => {
    setTimeout(() => resolve(true), period);
  });
}

// 🔷 Production side can use both `await` and `yield`
async function* oddNums() {
  let i = 40;
  while (true) {
    if (i <= 48) {
      await sleep(1000);
      yield i;
      i += 2;
    } else {
      await sleep(1000);
      return;
    }
  }
}

async function main() {
  // 🔷 Consumption side uses the new syntax `for await`
  for await (let x of oddNums()) {
    console.log(x);
  }
  console.log('done');
}

main();
```

Although they are new features, syntax sugars for AsyncIterables are already supported in Babel, TypeScript, Firefox, Chrome, Safari, and Node.js. AsyncIterables are convenient to combine Promise-based APIs (e.g. `fetch`) to create asynchronous sequences, such as listing the users in a database, requesting one user at a time:

```js
async function* users(from, to) {
  for (let x = from; x <= to; x++) {
    const res = await fetch('http://jsonplaceholder.typicode.com/users/' + x);
    const json = await res.json();
    yield json;
  }
}

async function main() {
  for await (let x of users(1, 10)) {
    console.log(x);
  }
}

main();
```

<h2 id="operators" class="hr"><span class="hr">OPERATORS</span></h2>

The abstractions listed in this article are simply special cases of the JavaScript function. By definition, they cannot have more power than functions have, so this makes functions the most powerful and flexible abstraction. The downside of full flexibility is unpredictability. What these abstractions provide are *guarantees*, and based on guarantees you can write code that is more organized and more predictable.

Functions, on the other hand, are simply JavaScript values, and this allows them to be passed around and manipulated. This capability – passing functions as values – can also be used for the abstractions we saw in this article. We can pass Iterables or Observables or AsyncIterables around as values, and manipulate them along the way.

One of the most common manipulations is `map`, popular in Arrays, but relevant also for other abstractions. In the example below, we create the `map` operator for AsyncIterables, and use it to create an AsyncIterable of names of users in a database.

```js
async function* users(from, to) {
  for (let i = from; i <= to; i++) {
    const res = await fetch('http://jsonplaceholder.typicode.com/users/' + i);
    const json = await res.json();
    yield json;
  }
}

// 🔷 Map operator for AsyncIterables
async function* map(inputAsyncIter, f) {
  for await (let x of inputAsyncIter) {
    yield f(x);
  }
}

async function main() {
  const allUsers = users(1, 10);
  // 🔷 Pass `allUsers` around, create a new AsyncIterable `names`
  const names = map(allUsers, user => user.name);
  for await (let name of names) {
    console.log(name);
  }
}

main();
```

Writing the above code example with none of the abstractions in the Getter-Setter Pyramid requires more amount of code, which is also harder to read. Using operators and new syntax sugar features is how you can take advantage of these special cases of the function to do more with less code, without sacrificing readability.

<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   width="100%"
   height="440"
   viewBox="0 0 158.74999 116.41654"
   version="1.1"
   >
  <g transform="translate(0,-180.58345)">
    <path
       style="opacity:1;fill:#dfebfa;fill-opacity:1;stroke:#accbf2;stroke-width:0.26;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:17.20000076;stroke-dasharray:none;stroke-dashoffset:9.99999905;stroke-opacity:1"
       d="M 15.393816,254.60231 H 143.99905 l 4.90616,15.59154 H 10.491946 Z"
       id="function-bg"
       />
    <path
       style="opacity:1;fill:#dfebfa;fill-opacity:1;stroke:#accbf2;stroke-width:0.26;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:17.20000076;stroke-dasharray:none;stroke-dashoffset:9.99999905;stroke-opacity:1"
       d="m 31.306206,204.01193 h 35.60154 l -1e-5,15.59154 h -40.5034 z"
       id="iterable-bg"
       />
    <text
       xml:space="preserve"
       x="37.299671"
       y="213.99203"
         style="opacity:1;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:6px;font-family:'Roboto';fill:#34506c;fill-opacity:1;stroke-width:0.26"
       ><tspan>Iterable</tspan></text>
    <path
       style="opacity:1;fill:#dfebfa;fill-opacity:1;stroke:#accbf2;stroke-width:0.26;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:17.20000076;stroke-dasharray:none;stroke-dashoffset:9.99999905;stroke-opacity:1"
       d="m 68.151916,204.01193 h 24.68811 l 3e-4,15.59154 h -24.68874 z"
       id="promise-bg"
       />
    <text
       xml:space="preserve"
       x="69.284836"
       y="214.01372"
       style="opacity:1;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:6px;font-family:'Roboto';fill:#34506c;fill-opacity:1;stroke-width:0.26"
       ><tspan>Promise</tspan></text>
    <path
       style="opacity:1;fill:#dfebfa;fill-opacity:1;stroke:#accbf2;stroke-width:0.26;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:17.20000076;stroke-dasharray:none;stroke-dashoffset:9.99999905;stroke-opacity:1"
       d="m 94.097966,204.01193 h 34.014774 l 4.90616,15.59154 H 94.097096 Z"
       id="observable-bg"
       />
    <text
       xml:space="preserve"
       x="96.429359"
       y="214.01372"
         style="opacity:1;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:6px;font-family:'Roboto';fill:#34506c;fill-opacity:1;stroke-width:0.26"
       ><tspan>Observable</tspan></text>
    <path
       style="opacity:1;fill:#dfebfa;fill-opacity:1;stroke:#accbf2;stroke-width:0.26;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:17.20000076;stroke-dasharray:none;stroke-dashoffset:9.99999905;stroke-opacity:1"
       d="m 36.603636,187.14867 h 51.097575 l 4.90616,15.59154 H 31.701766 Z"
       id="asynciterable-bg"
       />
    <text
       xml:space="preserve"
       x="43.947285"
       y="197"
         style="opacity:1;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:6px;font-family:'Roboto';fill:#34506c;fill-opacity:1;stroke-width:0.26"
       ><tspan>AsyncIterable</tspan></text>
    <path
       style="opacity:1;fill:#dfebfa;fill-opacity:1;stroke:#accbf2;stroke-width:0.26;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:17.20000076;stroke-dasharray:none;stroke-dashoffset:9.99999905;stroke-opacity:1"
       d="m 26.011436,220.87593 h 40.95695 l -10e-6,15.59154 h -45.85881 z"
       id="gettergetter-bg"
       />
    <text xml:space="preserve" x="28" y="230.8" style="opacity:1;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:6px;font-family:'Roboto';fill:#34506c;fill-opacity:1;stroke-width:0.26"
       ><tspan>Getter-getter</tspan></text>
    <path
       style="opacity:1;fill:#dfebfa;fill-opacity:1;stroke:#accbf2;stroke-width:0.26;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:17.20000076;stroke-dasharray:none;stroke-dashoffset:9.99999905;stroke-opacity:1"
       d="m 68.131956,220.87593 h 65.297924 l 4.90616,15.59154 H 68.131086 Z"
       id="settersetter-bg"
       />
    <text
       xml:space="preserve"
       x="85.400581"
       y="230.89413"
         style="opacity:1;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:6px;font-family:'Roboto';fill:#34506c;fill-opacity:1;stroke-width:0.26"
       ><tspan>Setter-setter</tspan></text>
    <path
       style="opacity:1;fill:#dfebfa;fill-opacity:1;stroke:#accbf2;stroke-width:0.26;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:17.20000076;stroke-dasharray:none;stroke-dashoffset:9.99999905;stroke-opacity:1"
       d="m 20.703206,237.7389 h 46.26576 l -10e-6,15.59154 h -51.16762 z"
       id="getter-bg"
       />
    <text
       xml:space="preserve"
       x="34.422062"
       y="247.7571"
         style="opacity:1;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:6px;font-family:'Roboto';fill:#34506c;fill-opacity:1;stroke-width:0.26"
       ><tspan>Getter</tspan></text>
    <path
       style="opacity:1;fill:#dfebfa;fill-opacity:1;stroke:#accbf2;stroke-width:0.26;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:17.20000076;stroke-dasharray:none;stroke-dashoffset:9.99999905;stroke-opacity:1"
       d="m 68.118406,237.73893 h 70.603814 l 4.90616,15.59154 H 68.117526 Z"
       id="setter-bg"
       />
    <text
       xml:space="preserve"
       x="96.157547"
       y="247.75713"
         style="opacity:1;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:6px;font-family:'Roboto';fill:#34506c;fill-opacity:1;stroke-width:0.26"
       ><tspan>Setter</tspan></text>
    <text
       xml:space="preserve"
       x="67.759735"
       y="264.60794"
         style="opacity:1;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:6px;font-family:'Roboto';fill:#34506c;fill-opacity:1;stroke-width:0.26"
       ><tspan>Function</tspan></text>
    <path
       style="opacity:1;fill:#dfebfa;fill-opacity:1;stroke:#accbf2;stroke-width:0.26;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:17.20000076;stroke-dasharray:none;stroke-dashoffset:9.99999905;stroke-opacity:1"
       d="M 10.104156,271.46572 H 149.2976 l 4.90616,15.59154 H 5.2022871 Z"
       id="values-bg"
       />
    <text
       xml:space="preserve"
       x="72"
       y="281.44595"
         style="opacity:1;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:6px;font-family:'Roboto';fill:#34506c;fill-opacity:1;stroke-width:0.26"
       ><tspan>Value</tspan></text>
  </g>
</svg>
