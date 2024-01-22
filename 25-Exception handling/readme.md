# Exception handling

## What is an exception?

An exception is an error that happens during the execution of a program. If the error is not handled by the programmer, the program will crash.

## Exception handling in JavaScript

When an exception occurs, JS will display the error message in the console and stop the execution of the script. However, we can handle the exception using the `try...catch` statement.


## Try...catch

The `try...catch` statement allows us to define a block of code to be tested for errors while it is being executed.

The `try` block contains the code that might throw an exception. If an exception occurs, the `try` block will be terminated and the `catch` block will be executed.

The `catch` block defines the code to be executed if an exception occurs in the `try` block.

```js

try {
  // code to try
}
catch(err) {
  // code to handle errors
}

```

## Finally

The `finally` statement lets you execute code, after try and catch, regardless of the result.

```js

try {
  // code to try
}
catch(err) {
  // code to handle errors
}
finally {
  // code to be executed regardless of the try / catch result
}

```

## Throw

The `throw` statement allows you to create a custom error.

```js

throw "Too big";    // throw a text
throw 500;          // throw a number

```

## The Error object

JavaScript has a built in error object that provides error information when an error occurs.

The error object provides two useful properties: `name` and `message`.

```js

try {
  adddlert("Welcome guest!");
}
catch(err) {
  document.getElementById("demo").innerHTML = err.name;
}

```

*(45 min)*