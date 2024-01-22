# JS Modules

Js modules are a way to split your code into multiple files. This is useful for organization and reusability.

## Creating a module

To create a module, you need to export the functions you want to be available outside of the module. You can do this by adding the `export` keyword before the function declaration.

lets create a module called `example.js`. create a file called `[filename].js` and add the following code:

```js
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}
```
## Importing a module from a URL

You can also import a module from a URL. This is useful when you want to import a module from a CDN. You can do this by adding the `type="module"` attribute to the script tag in the HTML file. Then, you can import the module by adding the following code to the module:

```js
import { add, subtract } from "https://example.com/example.js";
```

## Importing a module from a file

You can also import a module from a file. This is useful when you want to import a module from a file. You can do this by adding the `type="module"` attribute to the script tag in the HTML file. Then, you can import the module by adding the following code to the module:

```js
import { add, subtract } from "./example.js";
```

use exports
```js

console.log(add(1, 2)); // 3
console.log(subtract(1, 2)); // -1
```

**Note**: You can not import a module from a file that is not a module. You also can not access modules from the browser console or from the HTML file. You have to attach the module to the window object to access it from the browser console or HTML file.

### Attach module to window object

To attach a module to the window object, you need to add the `type="module"` attribute to the script tag in the HTML file. Then, you can attach the module to the window object by adding the following code to the module:

```js
window.add = add;
window.subtract = subtract;
```

## Default exports

You can also export a default value from a module. This is useful when you only want to export one value from a module. You can do this by adding the `default` keyword before the value you want to export.

Lets create a module called `example.js`. Create a file called `example.js` and add the following code:

```js
export default function add(a, b) {
  return a + b;
}
```

Now, in another file, you can import the default value from the module. Create a file called `index.js` and add the following code:

```js
import add from "./example.js";

console.log(add(1, 2)); // 3
```

## import everything from a module

You can also import everything from a module. This is useful when you want to import everything from a module. You can do this by adding the `*` before the module name.

Lets create a module called `example.js`. Create a file called `example.js` and add the following code:

```js
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}
```

Now, in another file, you can import everything from the module. Create a file called `index.js` and add the following code:

```js
import * as example from "./example.js";
```

Now, you can access the functions from the module by using the `example` object.

```js
console.log(example.add(1, 2)); // 3
console.log(example.subtract(1, 2)); // -1
```

## Import as alias

You can also import a module as an alias. This is useful when you want to import a module as an alias. You can do this by adding the `as` keyword before the alias name.

Lets create a module called `example.js`. Create a file called `example.js` and add the following code:

```js
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}
```

Now, in another file, you can import the module as an alias. Create a file called `index.js` and add the following code:

```js
import { add as addNumbers, subtract as subtractNumbers } from "./example.js";
```

Now, you can access the functions from the module by using the alias.

```js
console.log(addNumbers(1, 2)); // 3
console.log(subtractNumbers(1, 2)); // -1
```













