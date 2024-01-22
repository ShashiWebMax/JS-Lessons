# String Object 

In javascript, a string is a sequence of characters enclosed in single or double quotes.

```js
const str = 'Hello World';
```

## String methods

Every string in js is an object and automatically has access to these methods. These methods can be used to manipulate strings. Here are some commonly used methods and properties.

### length

The length property returns the length of a string.

```js
const str = 'Hello World';
console.log(str.length); // 11
```

### uppercase and lowercase

The `toUpperCase()` method returns the calling string value converted to uppercase.

```js
const str = 'Hello World';
console.log(str.toUpperCase()); // HELLO WORLD
```

The `toLowerCase()` method returns the calling string value converted to lowercase.

```js
const str = 'Hello World';
console.log(str.toLowerCase()); // hello world
```

### indexOf

The `indexOf()` method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.

```js
const str = 'Hello World';
console.log(str.indexOf('World')); // 6
```

### slice

The `slice()` method extracts a section of a string and returns it as a new string, without modifying the original string.

```js
const str = 'Hello World';
console.log(str.slice(0, 5)); // Hello
```

### substring 

The `substring()` method returns the part of the string between the start and end indexes, or to the end of the string.

```js
const str = 'Hello World';
console.log(str.substring(0, 5)); // Hello
```
slice and substring are very similar. The main difference is that slice can take negative indexes.


### split

The `split()` method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.  The division is done by searching for a pattern; where the pattern is provided as the first parameter in the method's call.

```js
const str = 'Hello World';
console.log(str.split(' ')); // ['Hello', 'World']
```

### trim

The `trim()` method removes whitespace from both ends of a string. Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.).

```js
const str = '   Hello World   ';
console.log(str.trim()); // 'Hello World'
```

### replace

The `replace()` method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match.

```js
const str = 'Hello World';
console.log(str.replace('World', 'JavaScript')); // Hello JavaScript
```

### includes

The `includes()` method determines whether one string may be found within another string, returning true or false as appropriate.

```js
const str = 'Hello World';
console.log(str.includes('World')); // true
```

### search

The `search()` method executes a search for a match between a regular expression and this String object.

```js
const str = 'Hello World';
console.log(str.search('World')); // 6
```

*(45 mins)*


