# Using Libraries with JS

## What an Why?
A library is a collection of code that we can use in our own programs. Libraries are useful because they save us time and effort. Instead of writing code from scratch, we can use a library that already has the code we need. Libraries are also useful because they are written by experts, so we can be sure that the code is well-written and tested.

## How?
We can use a library in our program by importing it. We can use a script tag to import a library from a CDN or from a local file. The the library must be imported before any other JavaScript code.

### Local File
You can download the library and save it in your project folder. Then you can import it using a script tag.

```html
<script src="path/to/library.js"></script>
```
### CDN
You can import the library from a CDN using a script tag. 

We are going to use the lodash library in this lesson. Lodash is a JavaScript library that provides utility functions for common programming tasks. You can find the documentation for lodash [here](https://lodash.com/docs/4.17.15).

You can import lodash from a CDN using a script tag.

```html
<script src="
https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js
"></script>
```

## Using a Library Example

### Lodash
Lodash is a simple JS library that provides utility functions for common programming tasks. It adds a global variable `_` to our program. We can use this variable to access the functions provided by the library. You can use the [documentation](https://lodash.com/docs/4.17.15) to find the functions you need.

#### here are some examples:
##### get the sum of an array of numbers
```js

const numbers = [1, 2, 3, 4, 5];
const sum = _.sum(numbers);
console.log(sum); //15
```

##### get a random number between 1 and 10
```js
const random = _.random(1, 10);
console.log(random); //7
```

##### get a random element from an array
```js
const numbers = [1, 2, 3, 4, 5];
const random = _.sample(numbers);
console.log(random); //3
```

## Build your own library
Yes, you can build your own library. You can write a collection of functions that you use often, and put them in a file. Then you can import that file in your projects. You can also create a documentation for your library and share it with others.
See [mySimpleLib.js](mySimpleLib.js) for an example.

## Dependencies
A library can have dependencies on other libraries. That means that the library needs other libraries to work. In that case, you need to import the dependencies before you import the library. 

*(40 mins)*