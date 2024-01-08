# Solving Common JS Interview Questions

#### What is the difference between `undefined` and `not defined` in JavaScript?

`undefined` means a variable has been declared but has not yet been assigned a value. On the other hand, `not defined` means that the variable itself has not been declared.

```js
let x; //declared but not defined
console.log(x); //undefined
console.log(y); //ReferenceError: y is not defined
```

#### What is the difference between `==` and `===`?

`==` checks for equality of value without paying attention to type. `===` checks for equality of value AND type.

```js
console.log(1 == '1'); //true
console.log(1 === '1'); //false
```

#### Copy the following array `['a', 'b', 'c', 'd', 'e']` into another array without modifying the original array. use non es6 and es6 syntax.

OLD WAY

```js
const arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = Array.from(arr);
const arr3 = arr.slice();
```

NEW WAY

```js
const arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = [...arr];
```
This is called the spread operator. It takes an iterable and expands it into individual elements. It's commonly used to make shallow copies of arrays.

#### Change color of the text of the paragraph to red when the mouse hovers over it.

```js
const p = document.querySelector('p');
p.addEventListener('mouseover', () => {
  p.style.color = 'red';
});
```

#### Copy the students that that have a score of 90 or above into a new array.

```js
const students = [
  {name: 'John', score: 90, school: 'East'},
  {name: 'Susan', score: 85, school: 'East'},
  {name: 'Bob', score: 85, school: 'West'},
  {name: 'Jane', score: 95, school: 'East'},
];

const newStudents = students.filter(student => student.score >= 90);
```

#### Convert the following for loop to a forEach loop.

```js
const colors = ['red', 'green', 'blue'];
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
```

```js
const colors = ['red', 'green', 'blue'];
colors.forEach(function(color) {
  console.log(color);
});
```

#### What is the short way to create a function that takes two parameters `param1` and `param2` and returns the object `{param1, param2}`?

```js
const createObject = (param1, param2) => ({param1, param2});
```
##### Note:
**Arrow Function** - Arrow functions are a new way to write anonymous function expressions. They have a shorter syntax than function expressions. `() => {}` is the syntax for an arrow function. Arrow functions do not have their own `this` value. The value of `this` inside an arrow function is always inherited from the enclosing scope. if you have only one parameter, you can omit the parentheses around the parameter list. 

**Omit return** - If the function body consists of only a return statement, you can omit the return keyword and the curly brackets.

#### What is the difference between `let` and `var`?

- `let` is block scoped and `var` is function scoped.
- `let` is a new keyword introduced in ES6. 
- `let` is preferred over `var` because it is block scoped. 
  

#### Add List Item to html list

```js
const ul = document.querySelector('ul');
const li = document.createElement('li');
li.textContent = 'four';
ul.appendChild(li);
```
#### are there any differences between the two ways of creating objects below?

```js
const obj1 = {a: 1, b: 2};
const obj2 = new Object({a: 1, b: 2});
```
There is no difference between the two ways of creating objects. The second way is just a longer way of doing the same thing.



*(45 mins)*



