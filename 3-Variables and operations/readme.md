# Variables and Operations
## Variables
variables are used to store data in memory. In Javascript, you can declare variables using the `var`, `let`, or `const` keywords. 
The `var` keyword is the old way of declaring variables, and the `let` and `const` keywords are the new way (ES6) of declaring variables. 

The `let` keyword is used to declare variables that can be reassigned. 

The `const` keyword is used to declare variables that cannot be reassigned.

Javascript is a dynamically typed language. This means that you do not need to specify the type of the variable when declaring it. The type of the variable is determined at runtime.
[Example](index.html#L10)

Spaces are not allowed in variable names. If you want to use multiple words in a variable name, you can use **camelCase** or **snake_case**. Names are case sensitive. This means that `myVariable` and `myvariable` are 2 different variables. 

**First character** of a variable name must be a letter, underscore, or dollar sign. The rest of the characters can be letters, numbers, underscores, or dollar signs. You cannot use reserved words as variable names. (see below)

### Types of variables
You can store different types of data in variables. The following are the some of the most common types that you can store in variables:
* String
* Number
* Boolean
* Null
* Undefined
* Object
* Array
* Function

You can use the `typeof` operator to determine the type of a variable.

[Example](index.html#L36)

## Reserved words
There are some words that are reserved by Javascript and cannot be used as variable names. These words are called reserved words. Some of the most common reserved words are:
`break`, `case`, `catch`, `class`, `const`, `continue`, `debugger`, `default`, `delete`, `do`, `else`, `export`, `extends`, `finally`, `for`, `function`, `if`, `import`, `in`, `instanceof`, `new`, `return`, `super`, `switch`, `this`, `throw`, `try`, `typeof`, `var`, `void`, `while`, `with`, `yield`, `enum`, `implements`, `interface`, `let`, `package`, `private`, `protected`, `public`, `static`, `await`, `abstract`, `boolean`, `byte`, `char`, `double`, `final`, `float`, `goto`, `int`, `long`, `native`, `short`, `synchronized`, `throws`, `transient`, `volatile`, `null`, `true`, `false`, `undefined`, `NaN`, `Infinity`, `undefined`
Reserved words reference: [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords)

## Operations on variables
we can perform operation on variables. if we attempt to perform an operation on a variable that is not of the correct type, Javascript will attempt to convert the variable to the correct type.

### Arithmetic operations
Some of the most common arithmetic operations are:
* Addition `+`
* Subtraction `-`
* Division `/`
* Multiplication `*`
* Modulus `%`
* Increment `++`
* Decrement `--`

### Assignment operations
Some of the most common assignment operations are:
* Assignment `=`
* Addition assignment `+=`
* Subtraction assignment `-=`
* Multiplication assignment `*=`
* Division assignment `/=`

### Comparison operations
Some of the most common comparison operations are:
* Equal `==`
* Not equal `!=`
* Greater than `>`
* Greater than or equal `>=`
* Less than `<`
* Less than or equal `<=`
* Strict equal `===`
* Strict not equal `!==`
* Ternary `? :`
* Logical AND `&&`
* Logical OR `||`
* Logical NOT `!`



### converting variables
there are two ways to convert variables in Javascript:
* Implicit conversion
* Explicit conversion

### Implicit conversion
Javascript will implicitly convert variables when performing operations on them. For example, if you try to add a number and a string, Javascript will convert the number to a string and concatenate the two strings together.
[Example](index.html#L60)

### Explicit conversion
Javascript provides functions that can be used to explicitly convert variables. For example, the `parseInt()` function can be used to convert a string to a number. below are some of the most common functions used to convert variables:
* `parseInt()`
* `parseFloat()`
* `toString()`  
* `Number()`
* `Boolean()` 
* `String()`

[Example](index.html#L93)

***
*(45 min)*





