## Functions
functions are used to group a set of statements together to perform a specific task. Functions are used to make code more modular and reusable.They are also used to make code more readable. 

### Declaring functions
There are several ways to declare functions in Javascript. 

This is the most common way to declare functions in Javascript:
```javascript
// function declaration
function myFunction() {
    console.log("Hello World!");
}
```
another way to declare functions in Javascript is using function expressions
```javascript
// function expression
const myFunction = function() {
    console.log("Hello World!");
}
```
another way to declare functions in Javascript is using arrow functions
```javascript
// arrow function
const myFunction = () => {
    console.log("Hello World!");
}
```
[Example](index.html#L10)
### Calling functions
Once a function is declared, it can be called using the function name followed by parentheses. 
```javascript
// function declaration
myFunction();
```
[Example](index.html#L18)


### Parameters/Arguments
Functions can also take parameters. Parameters are variables that are passed into a function. Parameters are declared inside the parentheses of a function. 
```javascript
// function declaration
function myFunction(parameter1, parameter2) {
    console.log(parameter1);
    console.log(parameter2);
}

```
[Example](index.html#L30)

### Return values
Functions can also return values. The return keyword is used to return a value from a function. 
```javascript
// function declaration
function myFunction(parameter1, parameter2) {
    return parameter1 + parameter2;
}

```

[Example](index.html#L45)






