# Template Literals

Template Literals In JavaScript are a new way to concatenate strings. The ware introduced in ES6. They are enclosed in backticks (`) instead of single quotes (') or double quotes ("). They help us to write cleaner and more readable code.

Let's assume we need to place some variables in a string. In previous lessons we did it like this:

```js
const name = 'John';
const age = 30;

const message = 'My name is ' + name + ' and I am ' + age + ' years old.';
```

With template literals we can do it like this:

```js
const name = 'John';
const age = 30;

const message = `My name is ${name} and I am ${age} years old.`;
```

Template literals can contain placeholders. Placeholders are indicated by the dollar sign and curly braces (${expression}). The expression inside the curly braces is evaluated and the result is inserted into the string.