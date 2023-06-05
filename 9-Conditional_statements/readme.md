# Conditional statements
## if statement
we can use conditional statements to make decisions in our code. The simplest form is the if statement:

```javascript
if (condition) {
  //  block of code to be executed if the condition is true
}
```

The condition is a boolean expression that evaluates to either true or false. We can use comparison operators and logical operators discussed in the previous section to create boolean expressions.

[Example](index.html#L20-36)

## if else statement

we can also use the else keyword to add a block of code that will be executed if the condition is false:

```javascript
if (condition) {
  //  block of code to be executed if the condition is true
} else {
  //  block of code to be executed if the condition is false
}
```

[Example](index.html#L49-64)

we can also use the else if keyword to add more conditions:

```javascript
if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
}
```

[Example](index.html#L84-111)

## switch statement
If we have one value to check against multiple conditions, we can use the switch statement:

```javascript
switch (expression) {
  case value1:
    //  block of code to be executed if expression is equal to value1
    break;
  case value2:
    //  block of code to be executed if expression is equal to value2
    break;
  default:
    //  block of code to be executed if expression is different from both value1 and value2
}
```

[Example](index.html#L130-162)

