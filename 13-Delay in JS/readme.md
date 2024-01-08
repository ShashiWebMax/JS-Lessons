# Delay in JS

## setTimeout
we can delay the execution of code using the `setTimeout()` function. this runs the code one time after a specified amount of time.

```javascript
setTimeout(function() {
    console.log("Hello");
}, 1000);
```
[Example](index.html#L14)

## setInterval
we can repeat the execution of code using the `setInterval()` function. 

```javascript
setInterval(function() {
    console.log("Hello");
}, 1000);
```
[Example](index.html#L19)

to stop the execution of code we can use the `clearInterval()` function. in order to use this function we need to store the return value of `setInterval()` in a variable. 


```javascript
const intervalId = setInterval(function() {
    console.log("Hello");
}, 1000);

clearInterval(intervalId);
```

[Example](index.html#L24)


*(45 mins)*
