# Scope
each variable has a scope, which determines its visibility to the rest of the program, and lifetime, which determines how long the variable exists in memory. There are three types of scope in Javascript:
* Global scope
* Function scope
* Block scope
  

## Global scope
Variables declared outside of a function are in the global scope. Global variables are accessible from anywhere in the program.
[Example](index.html#L10)

## Function scope
Variables declared inside of a function are in the function scope. Function scope variables are only accessible from inside the function.
[Example](index.html#L27)

## Block scope
Variables declared inside of a block are in the block scope. Block scope variables are only accessible from inside the block.
[Example](index.html#L41)

## Shadowing
Shadowing is when a variable in a local scope has the same name as a variable in a higher scope. The local variable shadows the higher scoped variable.
[Example](index.html#L54)

## Hoisting
Hoisting is a Javascript mechanism where variables and function declarations are moved to the top of their scope before code execution. This means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.
[Example](index.html#L65)
