# JSON

JSON stands for JavaScript Object Notation. It is a lightweight format for storing and transporting data. JSON is often used when data is sent from a server to a web page.

JSON is "self-describing" and easy to understand.

## JSON Syntax Rules

JSON syntax is derived from JavaScript object notation syntax:

* Data is in name/value pairs
* Data is separated by commas
* Curly braces hold objects
* Square brackets hold arrays
* JSON data is written as name/value pairs.
* A name/value pair consists of a field name (in double quotes), followed by a colon, followed by a value:

### Example

```json
{
  "name": "John"
}
```

**Note**
JSON names require double quotes. JavaScript names don't. and single quotes are not allowed.

## Using with JavaScript

JSON can be used as a data format by any programming language that supports object or associative arrays.

## JSON in JavaScript

JSON.parse() method parses a JSON string, constructing the JavaScript value or object described by the string.

```js
const obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');

console.log(obj.name); // John

console.log(obj.age); // 30

console.log(obj.city); // New York
```

JSON.stringify() method converts a JavaScript object or value to a JSON string.

```js
const obj = { name: 'John', age: 30, city: 'New York' };

const myJSON = JSON.stringify(obj);

console.log(myJSON); // {"name":"John","age":30,"city":"New York"}
```

## JSON Data Types

The following table shows the data types that are allowed in JSON.

| Data Type | Description |
| --------- | ----------- |
| string    | A sequence of zero or more Unicode characters, wrapped in double quotes, using backslash escapes. |
| number    | An integer or floating-point number, wrapped in double quotes, using backslash escapes. |
| object    | An unordered set of name/value pairs. An object begins with { (left brace) and ends with } (right brace). |
| array     | An ordered collection of values, comma-separated and wrapped in square brackets. |
| true      | false | true or false |
| null      | An empty value, using the word null |

## JSON Objects

JSON objects are written inside curly braces.

Just like in JavaScript, objects can contain multiple name/value pairs:

```json
{
  "name": "John",
  "age": 30,
  "cars": ["Ford", "BMW", "Fiat"]
}
```

## JSON Arrays

JSON arrays are written inside square brackets.

Just like in JavaScript, an array can contain objects:

```json
{
  "name": "John",
  "age": 30,
  "cars": [
    { "name": "Ford", "models": ["Fiesta", "Focus", "Mustang"] },
    { "name": "BMW", "models": ["320", "X3", "X5"] },
    { "name": "Fiat", "models": ["500", "Panda"] }
  ]
}
```

*(45 mins)*

