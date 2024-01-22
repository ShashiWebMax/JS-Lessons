# Checking Compatibility with browsers

## Introduction
Some latest features of JavaScript are not supported by all browsers. So, we need to check the compatibility of our code with different browsers. We can use [caniuse.com](https://caniuse.com/) to check the compatibility of our code with different browsers.

## Checking compatibility of a feature
Let's check the compatibility of the `for...of` loop with different browsers.

1. Go to [caniuse.com](https://caniuse.com/).
2. Search for `for...of` loop.
3. You will see the compatibility of `for...of` loop with different browsers.
4. You can also see the percentage of users using a browser that supports `for...of` loop.



## Wsing babel to convert code

Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.

## try it out
go to [babeljs.io](https://babeljs.io/repl) and try out the following code

```js
const arr = [1, 2, 3];
const arr2 = [...arr, 4, 5, 6];

console.log(arr2); // [1, 2, 3, 4, 5, 6]
```

