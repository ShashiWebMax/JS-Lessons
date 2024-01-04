# Objects in JS

## Why use objects?
Objects are used to store data and functions together. They are useful for storing data that is related to each other. they help us in many ways, including:
1. Easier Organizing data.
2. Abstraction and Encapsulation
3. Increase Code reusability
4. Increase Modularity


JavaScript is a prototype based object oriented language. Objects are a way to store data and functions together. They have properties and methods.
* Properties are variables that are attached to objects. 
* Methods are functions that are attached to objects. 

below is an example of an object with properties and methods: 
```javascript
const person = {
    name: "John",
    age: 30,
    sayHi: function() {
        console.log("Hi!");
    }
}
```
## Accessing properties and methods
Properties and methods are accessed using dot notation. 
```javascript
console.log(person.name);   //John
console.log(person.age);    //30
person.sayHi();             //Hi!
```
[Example](index.html#L10)

## Adding properties and methods
Properties and methods can be added to an object after it has been created. 
```javascript
//add a property
person.hairColor = "brown";
console.log(person.hairColor);  //brown
```
[Example](index.html#L26)

## Removing properties and methods
Properties and methods can be removed from an object using the delete keyword. 
```javascript
//remove a property
delete person.age;
console.log(person.hairColor);  //undefined
```
[Example](index.html#L29)


## Methods
Objects can have custom methods. Custom methods are functions that are attached to an object. 
```javascript
const person = {
    name: "John",
    age: 30,
    sayHi: function() {
        console.log("Hi!");
    }
}
```
[Example](index.html#L10)

### Accessing properties and methods from within a method
Properties and methods can be accessed from within a method using the `this` keyword. 
```javascript
const person = {
    name: "John",
    age: 30,
    sayHi: function() {
        console.log("Hi! My name is " + this.name + ".");
    }
}
```
[Example](index.html#L36)

## Useful methods that can be used on objects
Objects have several methods that can be used to manipulate them. below is a list of some of the most common object methods.
* `Object.keys()` - returns an array of the keys of an object
* `Object.values()` - returns an array of the values of an object
* `Object.entries()` - returns an array of the key/value pairs of an object
* `Object.assign()` - copies the properties of one object to another object
* `Object.freeze()` - prevents an object from being changed
* `Object.seal()` - prevents new properties from being added to an object

***

*(45 min)*


