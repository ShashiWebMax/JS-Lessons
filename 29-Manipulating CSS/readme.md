# Manipulating CSS 

As we already know, we can use JavaScript to manipulate the HTML elements. We can also use JavaScript to manipulate the CSS. We can use the `style` property of the HTML element to manipulate the CSS. We can use the `style` property to change the color, font, size, and other properties of the HTML element. We can also use the `style` property to add animations to the HTML elements.

We talked about thin in the DOM lesson. In this lesson, we will learn more and practice manipulating the CSS with JavaScript.

Example:

```js
let element = document.getElementById("element");
element.style.color = "red";
element.style.fontSize = "20px";
```

## How to find the CSS properties

You can use online resources like [W3Schools CSS Reference](https://www.w3schools.com/cssref/index.php) to find the CSS properties.


## Adding and removing CSS classes

We can use the `classList` property to add and remove CSS classes. We can use the `add` method to add a CSS class and the `remove` method to remove a CSS class.

Example:

```js

let element = document.getElementById("element");
element.classList.add("red");
element.classList.remove("red");
```

## Toggle CSS classes

We can use the `toggle` method to toggle CSS classes. If the CSS class is present, it will be removed. If the CSS class is not present, it will be added.

Example:

```js
let element = document.getElementById("element");
element.classList.toggle("red");
```


## Adding new css classes to the page

We can use the `insertRule` method of the `CSSStyleSheet` object to add new CSS classes to the page. The `CSSStyleSheet` object is a property of the `document` object. The `insertRule` method takes two arguments: the CSS rule and the index of the rule. The index is optional. If it is not specified, the rule will be added to the end of the stylesheet.

Example:

```js

let styleSheet = document.styleSheets[0];
styleSheet.insertRule("p { color: red; }", 0);
```

*(45 mins)*