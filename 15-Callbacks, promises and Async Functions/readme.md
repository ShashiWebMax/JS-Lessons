# Callbacks, Promises and Async Functions

## Callbacks
In JS functions are objects. So we can pass them as arguments to other functions.
When a function is passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action we call it a callback function. 

We can use callback functions to make our code more modular. **It can also be used to run asynchronous code.** 

For example, lest say we have a function that take some time to complete. We can pass a callback function to that function, and the callback function will be run when the first function is done.
 

```javascript
function greeting(name) {
  alert('Hello ' + name);
}

function processUserInput(callback) {
  var name = prompt('Please enter your name.');
  callback(name);
}

processUserInput(greeting);
```
**We already used callback functions in the previous lesson when we used the `addEventListener` function. The `addEventListener` function takes a callback function as an argument, and runs that function when the event occurs.**


## Promises
Not all functions are synchronous. Some functions take a long time to complete, and the program will continue to run while they are running. For example, if you make an AJAX request to a server to get some data, the program will continue to run while the request is being made, and the response will be handled when it is received.

In JS we can use promises to handle asynchronous functions. A promise is an object that represents the eventual completion or failure of an asynchronous operation. A promise can be in one of three states: pending, fulfilled, or rejected. When a promise is pending, it means that the asynchronous operation has not yet completed. When a promise is fulfilled, it means that the asynchronous operation has completed successfully. When a promise is rejected, it means that the asynchronous operation has failed.

### Creating a promise
We can create a promise using the `Promise` constructor. The `Promise` constructor takes a callback function as an argument. The callback function takes two arguments: a callback function to run if the promise is fulfilled, and a callback function to run if the promise is rejected. The callback function is run immediately when the promise is created.

```javascript

const promise = new Promise(function(resolve, reject) {
  // do something
  if(true /* everything turned out fine */) {
    resolve('Stuff worked!');
  }
  else {
    reject(Error('It broke'));
  }
});
```

We can use the `then` method on a promise to handle the result of the asynchronous operation. The `then` method takes two arguments: a callback function to run if the promise is fulfilled, and a callback function to run if the promise is rejected.

```javascript

promise.then(
  function(response) {
    // handle success
  }
).catch(
  function(error) {
    // handle error
  }
);
```


## Async Functions
Async functions are a special kind of function that can be used to simplify asynchronous programming. Async functions are created using the `async` keyword. Async functions always return a promise, and the value of the promise will be the return value of the async function. We can use the `await` keyword inside an async function to wait for a promise to be fulfilled, and then get the value of the promise. The `await` keyword can only be used inside an async function.

```javascript
//normal function
function getData(){
    fetch('some-url')
        .then(response => response.json())
        .then(data => console.log(data));    
}

//async function
async function getData(){
    const response = await fetch('some-url');
    const data = await response.json();
    console.log(data);
}
```

*(60 mins)*