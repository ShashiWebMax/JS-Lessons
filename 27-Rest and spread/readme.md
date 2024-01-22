# Rest and spread

JavaScript has a feature called rest and spread. It is a way to handle multiple arguments in a function. It is also a way to handle multiple elements in an array.

## Rest

Rest is a way to handle multiple arguments in a function. It is also a way to handle multiple elements in an array.

### Rest arguments

Rest arguments are indicated by three dots `...` followed by the name of the array that will contain the rest of the values.

```js
function f(a, b, ...theArgs) {
  // ...
  console.log(theArgs);
}
```

The rest argument must be the last argument in the function.

## Spread

Spread is a way to handle multiple elements in an array. It is indicated by three dots `...` followed by the name of the array that will be spread.

```js

const arr = [1, 2, 3];
const arr2 = [...arr, 4, 5, 6];

console.log(arr2); // [1, 2, 3, 4, 5, 6]
```

## Does it work outside of functions?

Yes, it does.

```js
const arr = [1, 2, 3];
const arr2 = [...arr, 4, 5, 6];

console.log(arr2); // [1, 2, 3, 4, 5, 6]
```

## Does it work with objects?

Yes, it does.

```js
const obj = { a: 1, b: 2 };
const obj2 = { ...obj, c: 3, d: 4 };

console.log(obj2); // { a: 1, b: 2, c: 3, d: 4 }
```

## Does it work with strings?

Yes, it does.

```js
const str = 'Hello';
const str2 = [...str, ' ', 'World'];

console.log(str2); // ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd']
```

## Using it with destructuring

You can use rest and spread with destructuring.

```js
const arr = [1, 2, 3, 4, 5, 6];

const [a, b, ...c] = arr;

console.log(a); // 1
console.log(b); // 2
console.log(c); // [3, 4, 5, 6]
```

*(30 mins)*
