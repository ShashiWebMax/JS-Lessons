# DOM Create and append elements

## Creating elements

To create an element, we can use the `createElement()` method of the `document` object.

Example:

```js
let element = document.createElement("p");
```

Then we can set the attributes of the element using the `setAttribute()` method of the element.

Example:

```js
element.setAttribute("id", "element");
```

To set the text content of the element, we can use the `textContent` property of the element.

Example:

```js
element.textContent = "Hello World!";
```

We can also set the inner HTML of the element using the `innerHTML` property of the element.

Example:

```js
element.innerHTML = "<strong>Hello World!</strong>";
```

## Appending elements

Once we have created an element, we can append it to the DOM tree using the `appendChild()` method of the parent node.

Example:

```js
let parent = document.getElementById("parent");
parent.appendChild(element);
```

## Using the innerHTML property

The `innerHTML` property of the element is a string that contains the HTML code of the element. We can use this property to create elements and append them to the DOM tree.

Example:

```js
let parent = document.getElementById("parent");
parent.innerHTML = "<p>Hello World!</p>";
```

## Using the outerHTML property

The `outerHTML` property of the element is a string that contains the HTML code of the element and the element itself. We can use this property to replace an element in the DOM tree.

Example:

```js
let parent = document.getElementById("parent");
parent.outerHTML = "<p>Hello World!</p>";
```

## Using Templates

We can use templates to create elements and append them to the DOM tree.

Example:

```html

<template id="template">
    <p>Hello World!</p>
</template>

<script>
    let template = document.getElementById("template");
    let element = template.content.cloneNode(true);
    let parent = document.getElementById("parent");
    parent.appendChild(element);
</script>
```

When using the template, we can use query selectors and other methods to access the elements in the template. 

Example:

```html

<template id="template">
    <p id="element">
        Hello World!
        <span id="span">...</span>
    </p>
</template>

<script>
    let template = document.getElementById("template");
    let element = template.content.querySelector("#element");
    //change the text content of the element
    element.querySelector("#span").textContent = "..........";
    
    let parent = document.getElementById("parent");
    parent.appendChild(element);

</script>
```

*(45 min)*


