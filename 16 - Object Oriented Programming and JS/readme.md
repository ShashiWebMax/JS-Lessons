# Object Oriented Programming and JS - Part 1

## Object Oriented Programming
Object-oriented programming (OOP) is a programming paradigm based on the concept of "objects", which can contain data and code. OOP is a programming paradigm that provides a means of structuring programs so that properties and behaviors are bundled into individual objects. OOP allows us to create objects that model real world objects.

### Object Creation
There are two ways to create objects in JS: object literals and constructor functions.

#### Object Literals
We can create an object using object literals. An object literal is a comma-separated list of name-value pairs wrapped in curly braces. Object literals encapsulate data, enclosing it in a tidy package. This minimizes the use of global variables which can cause problems when combining code.

```js
const person = {
  name: 'John Doe',
  age: 30,
  hobbies: ['reading', 'music', 'movies'],
  address: {
    street: '123 Main St',
    city: 'New York',
    state: 'NY'
  }
};
```

#### Constructor Functions

We can also create an object using constructor functions. A constructor function is a function that is used to create an object. Tt is used to initialize the object. The constructor function is called using the `new` keyword. 

```js
function Person(name, age, hobbies) {
  this.name = name;
  this.age = age;
  this.hobbies = hobbies;
}

const person = new Person('John Doe', 30, ['reading', 'music', 'movies']);
```

### Inheritance
Inheritance is a mechanism that allows us to create new classes from existing classes. The new classes inherit the properties and methods of the existing classes. Inheritance allows us to reuse code, and also allows us to create more specialized classes from more general classes.

We will learn about classes and inheritance in more detail in an upcoming lesson.


## Prototypes
JS is a prototype-based language. Which means every object in JS has a prototype. A prototype is an object that is associated with every function and object by default in JS, where function's prototype property is accessible and modifiable and object's prototype property (aka attribute) is not visible. 

We can access an object's prototype using the `__proto__` property. We can also access an object's prototype using the `Object.getPrototypeOf()` function.

```js
function Person(name, age, hobbies) {
  this.name = name;
  this.age = age;
  this.hobbies = hobbies;
}

const person = new Person('John Doe', 30, ['reading', 'music', 'movies']);

//see the prototype of person
console.log(person.__proto__);
```
We know the we can add methods and properties to an object. **But in order to add methods and properties to all instances of an object we need to add them to the object's prototype.**. We can add methods and properties to an object's prototype using the `prototype` property.

```js
function Person(name, age, hobbies) {
  this.name = name;
  this.age = age;
  this.hobbies = hobbies;
}

Person.prototype.getBio = function() {
  return `${this.name} is ${this.age} years old.`;
}
```


### Prototype Chain
When we try to access a property or method on an object, JS will first look for that property or method on the object itself. If it doesn't find it, it will look for it on the object's prototype. If it doesn't find it there, it will look for it on the prototype's prototype, and so on. This is called the prototype chain.


### Prototype Methods
We can add methods to an object's prototype. This allows us to add methods to all instances of an object. This is more efficient than adding methods to the object itself, because the methods are shared between all instances of the object.

```js
function Person(name, age, hobbies) {
  this.name = name;
  this.age = age;
  this.hobbies = hobbies;
}

Person.prototype.getBio = function() {
  return `${this.name} is ${this.age} years old.`;
}

const person = new Person('John Doe', 30, ['reading', 'music', 'movies']);

console.log(person.getBio());
```


### Call 

The `call()` method is a predefined JavaScript method. It can be used to invoke (call) a method with an owner object as an argument (parameter).

```js
const person1 = {
  fullName: function(param1, param2) {
    return this.firstName + " " + this.lastName;
  }
}

const person2 = {
  firstName:"John",
  lastName: "Doe",
}

person1.fullName.call(person2, param1, param2);  // Will return "John Doe"
```

### Apply

The `apply()` method is a predefined JavaScript method. It can be used to invoke (call) a method with an owner object as an argument (parameter).

```js
const person1 = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

const person2 = {
  firstName:"John",
  lastName: "Doe",
}

person1.fullName.apply(person2, [param1, param2]);  // Will return "John Doe"

```

### Bind

The `bind()` method is a predefined JavaScript method. It can be used to create a new function. The new function will have its `this` keyword set to the value of the argument passed to `bind()`.

```js
const person1 = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

const person2 = {
  firstName:"John",
  lastName: "Doe",
}

let newFunction = person1.fullName.bind(person2, param1, param2); 
newFunction();  // Will return "John Doe"

```



*(60 mins)*





