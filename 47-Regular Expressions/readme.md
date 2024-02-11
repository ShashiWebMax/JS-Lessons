# Regular Expressions

## Introduction

Regular expressions are a powerful tool for matching patterns in text. In this lesson, we'll learn how to use regular expressions to match text. First, we will use an online tool to test regular expressions. Then, we will use js to match text with regular expressions.

# online tool
https://regex101.com/

## JS Regular Expressions

### Test Method

In js, we can use the `test` method to test a regular expression. The `test` method returns `true` if the regular expression matches the text, and `false` otherwise.

```js
let text = "Hello, world!";
let regex = /world/;
let result = regex.test(text);
console.log(result); // true
```

### Exec Method

In js, we can use the `exec` method to execute a regular expression. The `exec` method returns an array of matches if the regular expression matches the text, and `null` otherwise.

```js
let text = "Hello, world!";
let regex = /world/;
let result = regex.exec(text);
console.log(result); // [ 'world', index: 7, input: 'Hello, world!', groups: undefined ]
```


### Match Method (string method)

In js, we can use the `match` method to match a regular expression. The `match` method returns an array of matches if the regular expression matches the text, and `null` otherwise.

```js
let text = "Hello, world!";
let regex = /world/;
let result = text.match(regex);
console.log(result); // [ 'world' ]
```

### Match All Method (string method)

In js, we can use the `matchAll` method to match all occurrences of a regular expression. The `matchAll` method returns an iterator of matches if the regular expression matches the text, and `null` otherwise.

```js
let text = "Hello, world!";
let regex = /o/g;
let result = text.matchAll(regex);
for (let match of result) {
  console.log(match); // [ 'o', index: 4, input: 'Hello, world!', groups: undefined ]
}
```
It is important to note that the `matchAll` method is not supported in all browsers. If you are using a browser that does not support the `matchAll` method, you can use the `match` method with the `g` flag to match all occurrences of a regular expression.

### Search Method (string method)

In js, we can use the `search` method to search for a regular expression. The `search` method returns the index of the first match if the regular expression matches the text, and `-1` otherwise.

```js
let text = "Hello, world!";
let regex = /world/;
let result = text.search(regex);
console.log(result); // 7
```

### Replace Method (string method)

In js, we can use the `replace` method to replace a regular expression. The `replace` method returns a new string with the first match replaced if the regular expression matches the text, and the original string otherwise.

```js
let text = "Hello, world!";
let regex = /world/;
let result = text.replace(regex, "universe");
console.log(result); // Hello, universe!
```

### Split Method (string method)

In js, we can use the `split` method to split a string by a regular expression. The `split` method returns an array of strings split by the regular expression.

```js
let text = "Hello, world!";
let regex = /,/;
let result = text.split(regex);
console.log(result); // [ 'Hello', ' world!' ]
```


### Regular Expression Syntax

## Flags

Regular expressions can have flags that affect the matching. The `i` flag makes the regular expression case-insensitive.

```js
let text = "Hello, world!";
let regex = /WORLD/i;
let result = regex.test(text);
console.log(result); // true
```

The `g` flag makes the regular expression global, which, instead of stopping at the first match, continues to search for all matches.

```js
let text = "Hello, world!";
let regex = /o/g;
let result = text.match(regex);
console.log(result); // [ 'o', 'o' ]
```

## Special Characters

Regular expressions can use special characters to match text. The `.` character matches any character.

```js
let text = "Hello, world!";
let regex = /.../;
let result = text.match(regex);
console.log(result); // ['Hel', index: 0, input: 'Hello, world!', groups: undefined]
```

The `^` character matches the start of the text.

```js
let text = "Hello, world!";
let regex = /^Hello/;
let result = regex.test(text);
console.log(result); // true
```

The `$` character matches the end of the text.

```js
let text = "Hello, world!";
let regex = /world!$/;
let result = regex.test(text);
console.log(result); // true
```

The `*` character matches zero or more of the preceding character.

```js
let text = "Hello, world!";
let regex = /o*/;
let result = text.match(regex);
console.log(result); // ['', index: 0, input: 'Hello, world!', groups: undefined] 
```

The `+` character matches one or more of the preceding character.

```js
let text = "Hello, world!";
let regex = /o+/;
let result = text.match(regex);
console.log(result); // ['o', index: 4, input: 'Hello, world!', groups: undefined]

```

The `?` character matches zero or one of the preceding character.

```js
let text = "Hello, world!";
let regex = /o?/;
let result = text.match(regex);
console.log(result); // ['o', index: 4, input: 'Hello, world!', groups: undefined]
```

The `[]` characters match any of the characters inside the brackets.

```js
let text = "Hello, world!";
let regex = /[aeiou]/;
let result = text.match(regex);
console.log(result); // ['e', index: 1, input: 'Hello, world!', groups: undefined]
```

The `[^]` characters match any of the characters not inside the brackets.

```js
let text = "Hello, world!";
let regex = /[^aeiou]/;
let result = text.match(regex);
console.log(result); // ['H', index: 0, input: 'Hello, world!', groups: undefined]
```

The `-` character matches a range of characters.

```js
let text = "Hello, world!";
let regex = /[a-z]/;
let result = text.match(regex);
console.log(result); // ['e', index: 1, input: 'Hello, world!', groups: undefined]
```

The `()` characters group the regular expression.

```js
let text = "Hello, world!";
let regex = /(world)/;
let result = text.match(regex);
console.log(result); // ['world', 'world', index: 7, input: 'Hello, world!', groups: undefined]
```

The `|` character matches either the regular expression before or after the `|`.

```js
let text = "Hello, world!";
let regex = /Hello|world/;
let result = text.match(regex);
console.log(result); // ['Hello', index: 0, input: 'Hello, world!', groups: undefined]
```

The `\` character escapes a special character.

```js
let text = "Hello, world!";
let regex = /\./;
let result = text.match(regex);
console.log(result); // ['.']
```

## Quantifiers

Regular expressions can use quantifiers to match text. The `*` character matches zero or more of the preceding character.

```js
let text = "Hello, world!";
let regex = /o*/;
let result = text.match(regex);
console.log(result); // ['', index: 0, input: 'Hello, world!', groups: undefined] this gives an empty string because it matches zero or more of the preceding character
```

The `+` character matches one or more of the preceding character.

```js
let text = "Hello, world!";
let regex = /o+/;
let result = text.match(regex);
console.log(result); // ['o', index: 4, input: 'Hello, world!', groups: undefined]
```

The `?` character matches zero or one of the preceding character.

```js
let text = "Hello, world!";
let regex = /o?/;
let result = text.match(regex);
console.log(result); // ['o', index: 4, input: 'Hello, world!', groups: undefined]
```

The `{n}` character matches exactly `n` of the preceding character.

```js
let text = "Hello, world!";
let regex = /o{2}/;
let result = text.match(regex);
console.log(result); // ['oo', index: 4, input: 'Hello, world!', groups: undefined]
```

The `{n,}` character matches at least `n` of the preceding character.

```js
let text = "Hello, world!";
let regex = /o{2,}/;
let result = text.match(regex);
console.log(result); // ['oo', index: 4, input: 'Hello, world!', groups: undefined]
```

The `{n,m}` character matches at least `n` and at most `m` of the preceding character.

```js
let text = "Hello, world!";
let regex = /o{1,2}/;
let result = text.match(regex);
console.log(result); // ['o', index: 4, input: 'Hello, world!', groups: undefined]
```

## Shorthand Character Classes

Regular expressions can use shorthand character classes to match text. The `\d` character matches a digit character.

```js
let text = "Hello, world!5";
let regex = /\d/;
let result = text.match(regex);
console.log(result); // ['5', index: 13, input: 'Hello, world!5', groups: undefined]
```

The `\D` character matches a non-digit character.

```js
let text = "Hello, world!5";
let regex = /\D/;
let result = text.match(regex);
console.log(result); // ['H', index: 0, input: 'Hello, world!5', groups: undefined]
```

The `\w` character matches a word character.

```js
let text = "Hello, world!5";
let regex = /\w/;
let result = text.match(regex);
console.log(result); // ['H', index: 0, input: 'Hello, world!5', groups: undefined]
```

The `\W` character matches a non-word character.

```js
let text = "Hello, world!5";
let regex = /\W/;
let result = text.match(regex);
console.log(result); // [',', index: 5, input: 'Hello, world!5', groups: undefined]
```

The `\s` character matches a whitespace character.

```js
let text = "Hello, world!5";
let regex = /\s/;
let result = text.match(regex);
console.log(result); // [',', index: 5, input: 'Hello, world!5', groups: undefined]
```

The `\S` character matches a non-whitespace character.

```js
let text = "Hello, world!5";
let regex = /\S/;
let result = text.match(regex);
console.log(result); // ['H', index: 0, input: 'Hello, world!5', groups: undefined]
```

## Lookahead and Lookbehind Assertions

Regular expressions can use lookahead and lookbehind assertions to match text. The `(?=)` character matches a group after the main expression without including it in the result.

```js
let text = "Hello, world!";
let regex = /Hello(?=,)/;
let result = regex.match(text);
console.log(result); // ['Hello', index: 0, input: 'Hello, world!', groups: undefined]
```

The `(?!)` character matches a group after the main expression without including it in the result.

```js
let text = "Hello, world!";
let regex = /Hello(?! world)/;
let result = regex.match(text);
console.log(result); // ['Hello', index: 0, input: 'Hello, world!', groups: undefined]
```

The `(?<=)` character matches a group before the main expression without including it in the result.

```js
let text = "Hello, world!";
let regex = /(?<=Hello, )world/;
let result = regex.match(text);
console.log(result); // ['world', index: 7, input: 'Hello, world!', groups: undefined]
```

The `(?<!)` character matches a group before the main expression without including it in the result.

```js
let text = "Hello, world!";
let regex = /(?<!Hello, )world/;
let result = regex.match(text);
console.log(result); // ['world', index: 7, input: 'Hello, world!', groups: undefined]
```

## Conclusion

Regular expressions are a powerful tool for matching patterns in text. In this lesson, we learned how to use regular expressions to match text. We learned how to use the `test`, `exec`, `match`, `matchAll`, `search`, `replace`, and `split` methods to match text with regular expressions. We also learned about the regular expression syntax, including flags, special characters, quantifiers, shorthand character classes, and lookahead and lookbehind assertions. Now that we have learned how to use regular expressions, we can use them to match patterns in text.

*(45 mins)*






