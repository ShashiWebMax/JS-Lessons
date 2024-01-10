
# Object Oriented Programming and JS - Part 2


### Objects
We already learned about objects and object literals in the previous lessons. An object is a collection of properties, and each property has a name and a value. The value of a property can be a string, a number, a boolean, an array, or even another object. We can access the properties of an object using dot notation or bracket notation.
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
  showInfo: function() {
    console.log(`${this.name} is ${this.age} years old`);
  }
};

person.showInfo();
```


#### Class
Instead of using object literals or constructor functions to create objects, we can use classes. A class is a blueprint for creating objects. A class defines the properties and methods that an object will have, but it does not create the object. We can create an object from a class using the `new` keyword. The `new` keyword creates a new object from the class, and calls the constructor method of the class to initialize the object.


```js
class Person {
  constructor(name, age, hobbies) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
  }

  showInfo() {
    console.log(`${this.name} is ${this.age} years old`);
  }
}

const person = new Person('John Doe', 30, ['reading', 'music', 'movies']);
person.showInfo();
```

### Inheritance
Inheritance is a way to create a new class from an existing class. The new class will inherit the properties and methods of the existing class, and can also have its own properties and methods. We can use inheritance to create a class hierarchy, where a class inherits from another class, which inherits from another class, and so on.

```js
class Person {
  constructor(name, age, hobbies) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
  }

  showInfo() {
    console.log(`${this.name} is ${this.age} years old`);
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

class Student extends Person {
  constructor(name, age, hobbies, school) {
    super(name, age, hobbies);
    this.school = school;
  }

  showInfo() {
    super.showInfo();
    console.log(`${this.name} goes to ${this.school}`);
  }
}

const student = new Student('John Doe', 30, ['reading', 'music', 'movies'], 'Harvard');
student.showInfo();
student.greet();
```

### Static Methods
In order to call a method on an object, we need to create an instance of the class. But what if we want to call a method without creating an instance of the class? We can use static methods for this. A static method is a method that is called on the class itself, not on an instance of the class. We can use static methods to create utility functions that are not tied to a specific instance of a class.

Limitations of static methods:
- Static methods cannot access instance methods or properties
- Static methods cannot access the `this` keyword

```js
class Person {
  constructor(name, age, hobbies) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
  }

  showInfo() {
    console.log(`${this.name} is ${this.age} years old`);
  }

  static greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

Person.greet();
```

### Getters and Setters
We can use getters and setters to get and set the values of an object's properties. A getter is a method that gets the value of a property. A setter is a method that sets the value of a property. We can use getters and setters to control access to an object's properties. We can also use getters and setters to perform validation on an object's properties.

```js
class Person {
  constructor(name, age, hobbies) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
  }

  get name() {
    return "Name is "+this._name;
  }

  set name(name) {
    //you can add validation here
    this._name = name;
  }
}

const person = new Person('John Doe', 30, ['reading', 'music', 'movies']);

console.log(person.name);
//set name
person.name = 'Jane Doe';
console.log(person.name);
```

### Object.create
We can use the `Object.create` method to create an object from a prototype. The `Object.create` method takes an object as an argument, and returns a new object that inherits from that object. We can use the `Object.create` method to create an object from a prototype.

Basically, it allows us to use an object as a constructor function. It is similar to coping an object, but it also copies the prototype of the object.


```js
const person = {
  name: 'John Doe',
  age: 30,
  showInfo: function() {
    console.log(`${this.name} is ${this.age} years old`);
  }
};

const person = Object.create(personPrototype);
person.showInfo();
```

### Object.assign
We can use the `Object.assign` method to copy the properties of one object to another object. The `Object.assign` method takes two or more objects as arguments, and copies the properties of the second object to the first object. The `Object.assign` method does not copy the prototype of the second object to the first object.

```js
const person = {
  name: 'John Doe',
  age: 30,
  showInfo: function() {
    console.log(`${this.name} is ${this.age} years old`);
  }
};

const person2 = {
  name: 'Jane Doe',
  age: 25
};

Object.assign(person, person2);

person.showInfo();
``` 


*(60 mins)*





