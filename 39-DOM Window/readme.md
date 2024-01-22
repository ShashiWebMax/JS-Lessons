# DOM Window

We brefly talked about the DOM window in the DOM lesson. In this lesson, we will learn more about the DOM window.


## The Window Object

Window is the global object in the browser. It represents the browser window. It is the top-level object in the DOM hierarchy. It is the parent of all other objects in the.

In previous lessons, we have been using the `document` object to access the DOM. The `document` object is a property of the `window` object. We can access the `document` object using the `window.document` syntax. However, we can omit the `window` part and use the `document` object directly. This was made possible for convenience. this is same for other objects that are properties of the `window` object.

Some of the other objects that are properties of the `window` object are:

- `console`
- `localStorage`
- `sessionStorage`
- `location`
- `history`
- `navigator`
- `screen`
- `frames`

we already talked about the `console` and `localStorage` and some of the other objects in previous lessons. In this lesson, we will learn about less commonly used objects.


## Creating a new window

We can use the `open` method of the `window` object to create a new window. It takes three arguments: the URL of the page to be opened, the name of the window, and the features of the window.

Example:

```js
let newWindow = window.open("https://www.google.com", "Google", "width=500,height=500");
```

## Writing to a window

Instead of providing a URL to the `open` method, we can provide a string of HTML code. This will create a new window with the HTML code.

Example:

```js
let newWindow = window.open("<h1>Hello World</h1>", "Hello World", "width=500,height=500");
```

We can also change the content of an existing window using the `document.write` method of the `document` object.

## Closing a window

We can use the `close` method of the `window` object to close a window. It takes no arguments.

Example:

```js
window.close();
```

## Moving a window

We can use the `moveTo` method of the `window` object to move a window. It takes two arguments: the x and y coordinates of the window.

Example:

```js
window.moveTo(100, 100);
```

## Resizing a window

We can use the `resizeTo` method of the `window` object to resize a window. It takes two arguments: the width and height of the window.

Example:

```js
window.resizeTo(500, 500);
```

## Getting the size of a window

We can use the `innerWidth` and `innerHeight` properties of the `window` object to get the size of a window.

Example:

```js
let width = window.innerWidth;
let height = window.innerHeight;
```

## Getting the position of a window

We can use the `screenX` and `screenY` properties of the `window` object to get the position of a window.

Example:

```js
let x = window.screenX;

let y = window.screenY;
```

## Getting the scroll position of a window

We can use the `scrollX` and `scrollY` properties of the `window` object to get the scroll position of a window.

Example:

```js
let x = window.scrollX;

let y = window.scrollY;
```

