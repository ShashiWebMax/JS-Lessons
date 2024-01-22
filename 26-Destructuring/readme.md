# Destructuring

Destructuring is a convenient way of extracting multiple values from data stored in (possibly nested) objects and Arrays. It can be used in locations that receive data (such as the left-hand side of an assignment).

## Array destructuring

### Basic variable assignment

```js
const foo = ["one", "two", "three"];

const [red, yellow, green] = foo;
console.log(red); // "one"
```

### Assignment separate from declaration

A variable can be assigned its value via destructuring separate from the variable's declaration.

```js
let a, b;

[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2
```

### Default values

A variable can be assigned a default, in the case that the value unpacked from the array is `undefined`.

```js
let a, b;

[a = 5, b = 7] = [1];
console.log(a); // 1
console.log(b); // 7
```

### Swapping variables

Two variables values can be swapped in one destructuring expression.

```js
let a = 1;
let b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1
```

### Parsing an array returned from a function

It's always been possible to return an array from a function. Destructuring can make working with an array return value more concise.

```js
function f() {
  return [1, 2];
}

let a, b;
[a, b] = f();
console.log(a); // 1
console.log(b); // 2
```

### Ignoring some returned values

You can ignore return values that you're not interested in:

```js
function f() {
  return [1, 2, 3];
}

const [a, , b] = f();
console.log(a); // 1

console.log(b); // 3
```

### Assigning the rest of an array to a variable

When destructuring an array, you can unpack and assign the remaining part of it to a variable using the rest pattern:

```js
const [a, ...b] = [1, 2, 3];
console.log(a); // 1
console.log(b); // [2, 3]
```

## Object destructuring

### Basic assignment

```js
const o = { p: 42, q: true };
const { p, q } = o;

console.log(p); // 42
console.log(q); // true
```

### Assignment without declaration

A variable can be assigned its value with destructuring separate from its declaration.

```js
let a, b;

({ a, b } = { a: 1, b: 2 });

console.log(a); // 1
console.log(b); // 2
```

- It is necessary to wrap the whole assignment in parentheses, because otherwise JavaScript treats the `{` on the first line as the beginning of a block.
- **It is Important to note that we need to use the use the same name of the property as the variable we want to assign to.**

### Assigning to new variable names

A property can be unpacked from an object and assigned to a variable with a different name than the object property.

```js
const o = { p: 42, q: true };
const { p: foo, q: bar } = o;

console.log(foo); // 42
console.log(bar); // true
```

### Default values

A variable can be assigned a default, in the case that the value unpacked from the object is `undefined`.

```js
const { a = 10, b = 5 } = { a: 3 };

console.log(a); // 3
console.log(b); // 5
```

### Assigning to new variables names and providing default values

A property can be both

- Unpacked from an object and assigned to a variable with a different name.
- Assigned a default value in case the unpacked value is `undefined`.

```js
const { a: aa = 10, b: bb = 5 } = { a: 3 };

console.log(aa); // 3
console.log(bb); // 5
```

### Nested object and array destructuring

```js
const person = {
  name: "Kusum",
  age: 30,
  address: "Kandy",
  education: {
    degree: "BSc",
    school: "Royal College",
  },
};

//take the name and age from the person object
const { name, age } = person;

//take the degree and school from the education object
const {  education: { degree, school }} = person;
```

### For of iteration and destructuring

```js
const people = [
  {
    name: "Kusum",
    age: 30,
    address: "Kandy",
    education: {
      degree: "BSc",
      school: "Royal College",
    },
  },
  {
    name: "Kamal",
    age: 40,
    address: "Colombo",
    education: {
      degree: "BSc",
      school: "Royal College",
    },
  },
];

for (const { name, age } of people) {
  console.log(`${name} is ${age} years old.`);
}
```


*(30 mins)*