# Solving Common JS Interview Questions

#### 1. What is the difference between `undefined` and `not defined` in JavaScript?

`undefined` means a variable has been declared but has not yet been assigned a value. On the other hand, `not defined` means that the variable itself has not been declared.

```js
let x; //declared but not defined
console.log(x); //undefined
console.log(y); //ReferenceError: y is not defined
```

#### 2. What is the difference between `==` and `===`?

`==` checks for equality of value without paying attention to type. `===` checks for equality of value AND type.

```js
console.log(1 == '1'); //true
console.log(1 === '1'); //false
```

#### 3. Copy the following array `['a', 'b', 'c', 'd', 'e']` into another array without modifying the original array. use non es6 and es6 syntax.

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

#### 4. Change color of the text of the paragraph to red when the mouse hovers over it.

```js
const p = document.querySelector('p');
p.addEventListener('mouseover', () => {
  p.style.color = 'red';
});
```

#### 5. Copy the students that that have a score of 90 or above into a new array.

```js
const students = [
  {name: 'John', score: 90, school: 'East'},
  {name: 'Susan', score: 85, school: 'East'},
  {name: 'Bob', score: 85, school: 'West'},
  {name: 'Jane', score: 95, school: 'East'},
];

const newStudents = students.filter(student => student.score >= 90);
```

#### 6. Convert the following for loop to a forEach loop.

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

#### 7. What is the short way to create a function that takes two parameters `param1` and `param2` and returns the object `{param1, param2}`?

```js
const createObject = (param1, param2) => ({param1, param2});
```
##### Note:
**Arrow Function** - Arrow functions are a new way to write anonymous function expressions. They have a shorter syntax than function expressions. `() => {}` is the syntax for an arrow function. Arrow functions do not have their own `this` value. The value of `this` inside an arrow function is always inherited from the enclosing scope. if you have only one parameter, you can omit the parentheses around the parameter list. 

**Omit return** - If the function body consists of only a return statement, you can omit the return keyword and the curly brackets.


#### 8. Add List Item to html list

```js
const ul = document.querySelector('ul');
const li = document.createElement('li');
li.textContent = 'four';
ul.appendChild(li);
```
#### 9. Show different methods you can use to select the button element below and attach a click event listener to it.

```html
<button id="btn" class="btn">Click Me</button>
```

```js
//selecting

//it is the first button on the page
const button = document.querySelector('button');

//it has an id of "btn"
const button = document.getElementById('btn');

//it has a class of "btn" and it is the first button with that class on the page
const button = document.getElementsByClassName('btn')[0];

//it has a class of button and it is only button on the page
const button = document.querySelector('.button'); 

//adding event listener

button.addEventListener('click', () => {
  console.log('clicked');
});
//or
button.onclick = () => {
  console.log('clicked');
};

```


*(45 mins)*



