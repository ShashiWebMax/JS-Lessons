# Loops and iteration

Loops are used to execute a block of code repeatedly. The most common types of loops are `for` and `while` loops.

## for loop
```javascript
for (let i = 0; i < 5; i++) {
  //  block of code to be executed
}
```
the above loop will execute the block of code 5 times.

[Example](index.html#L12-17)

## while loop
```javascript
while (condition) {
  //  block of code to be executed
}
```
the above loop will execute the block of code as long as the condition is true. **!important**, you need to make sure that the condition will eventually become false, otherwise the loop will never end.

[Example](index.html#L20-26)

## do while loop
```javascript
do {
  //  block of code to be executed
} while (condition);
```
the above loop will execute the block of code at least once, then it will execute the block of code as long as the condition is true. **!important**, you need to make sure that the condition will eventually become false, otherwise the loop will never end.
The difference between `while` and `do while` is that `do while` checks the condition after executing the block of code, while `while` checks the condition before executing the block of code.

[Example](index.html#L28-35)

## break statement
The `break` statement is used to exit a loop or a switch statement. This can be used with `for`, `while`, `do while` statements.

[Example](index.html#L38-46)

## continue statement
The `continue` statement is used to skip the current iteration of a loop. This can be used with `for`, `while`, `do while` statements.

[Example](index.html#L49-57)

## for...in loop
The `for...in` statement iterates over all enumerable properties of an object. This takes the index of the property, not the value. 

[Example](index.html#L60-77)

## for...of loop
The `for...of` statement iterates over iterable objects such as arrays, strings, etc. It is not possible to iterate over objects with this loop. this takes the value of the property, not the index.

[Example](index.html#L80-84)

## forEach loop
The `forEach` method executes a provided function once for each array element. This is a method of the array object. the function takes 3 arguments, the value of the current element, the index of the current element, and the array object itself. the index and the array object are optional.
```javascript
array.forEach(function(currentValue, index, array) {
  //  code to be executed
});
```

[Example](index.html#L86-91)

## map loop
The `map` method creates a new array with the results of calling a provided function on every element in the calling array. This is a method of the array object. the function takes 3 arguments, the value of the current element, the index of the current element, and the array object itself. the index and the array object are optional.
```javascript
array.map(function(currentValue, index, array) {
  //  code to be executed
});
```

[Example](index.html#L93-114)

## filter loop
The `filter` method creates a new array with all elements that pass the test implemented by the provided function. This is a method of the array object. the function takes 3 arguments, the value of the current element, the index of the current element, and the array object itself. the index and the array object are optional.
```javascript
array.filter(function(currentValue, index, array) {
  //  code to be executed
});
```

[Example](index.html#L116-130)


***
*(45 mins)*
