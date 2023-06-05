# Objects in JS
Javascript is an object-oriented programming language. Objects are a way to store data and functions together. They have properties and methods.
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


## Object methods
Objects have several methods that can be used to manipulate them. below is a list of some of the most common object methods.
* `Object.keys()` - returns an array of the keys of an object
* `Object.values()` - returns an array of the values of an object
* `Object.entries()` - returns an array of the key/value pairs of an object
* `Object.assign()` - copies the properties of one object to another object
* `Object.freeze()` - prevents an object from being changed
* `Object.seal()` - prevents new properties from being added to an object


