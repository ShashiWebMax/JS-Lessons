# Storage

So far we have been using variables to store data in memory. However, when the program ends, all the data is lost. To retain data between program executions, we need to store it more permanently. In JS this can be done with the `localStorage` object.

## localStorage

The `localStorage` object is a property of the `window` object. It is a key-value store that can be used to store data in the browser. The data is stored as strings, so we need to convert it to the appropriate type when we retrieve it.

### Storing data

To store data in localStorage, we use the `setItem` method. It takes two arguments: the key and the value. The key is a string that we use to identify the data. The value can be any type of data, but it will be converted to a string.

```js
localStorage.setItem("name", "John");
localStorage.setItem("age", 30);
```

### Retrieving data

To retrieve data from localStorage, we use the `getItem` method. It takes one argument: the key. It returns the value as a string, so we need to convert it to the appropriate type.

```js
let name = localStorage.getItem("name");
let age = parseInt(localStorage.getItem("age"));
```

### Removing data

To remove data from localStorage, we use the `removeItem` method. It takes one argument: the key.

```js
localStorage.removeItem("name");
```

### Clearing data

To remove all data from localStorage, we use the `clear` method. It takes no arguments.

```js
localStorage.clear();
```

## Convert data to JSON

The `localStorage` object can only store strings. To store other types of data, we need to convert them to strings. We can do this by using the `JSON.stringify` method. It takes one argument: the data to be converted. It returns a string.

```js
let person = {
    name: "John",
    age: 30
};

localStorage.setItem("person", JSON.stringify(person));
```

To retrieve the data, we use the `JSON.parse` method. It takes one argument: the string to be converted. It returns the data as an object.

```js
let person = JSON.parse(localStorage.getItem("person"));
```

## Session Storage

The `sessionStorage` object is similar to the `localStorage` object, but it is cleared when the browser is closed. It can be used to store data that is only needed for the current session.

```js
sessionStorage.setItem("name", "John");
sessionStorage.setItem("age", 30);
```

## Cookies

Cookies are small text files that are stored on the user's computer. They can be used to store data that is needed for the current session or for a longer period of time. They can also be used to track the user's activity on a website.

The difference between cookies and localStorage is that cookies are sent to the server with every request, while localStorage is only available on the client side.

### Creating cookies

To create a cookie, we use the `document.cookie` property. It takes one argument: the cookie string. The cookie string is a key-value pair separated by an equal sign. The key is a string that we use to identify the data. The value can be any type of data, but it will be converted to a string.

```js
document.cookie = "name=John";
document.cookie = "age=30";
```


*(45 mins)*


