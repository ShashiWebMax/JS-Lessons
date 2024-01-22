# DOM Node Navigation

In this lesson, we will learn how to navigate the DOM tree. We will learn how to find the parent, children, and siblings of a DOM node.

## Node Relationships

Each node in the DOM tree has a relationship with other nodes. The relationship is defined by the position of the node in the DOM tree. The node can be a parent, child, or sibling of another node.

### Parent

The parent of a node is the node that is above the node in the DOM tree. The parent of the node is the node that is closer to the root of the DOM tree. To find the parent of a node, we can use the `parentNode` property of the node.

Example:

```js
let element = document.getElementById("element");
let parent = element.parentNode;
```

### Children

The children of a node are the nodes that are below the node in the DOM tree. The children of the node are the nodes that are closer to the leaves of the DOM tree. To find the children of a node, we can use the `childNodes` property of the node.

Example:

```js
let element = document.getElementById("element");
let children = element.childNodes;
```

#### First Child

To find the first child of a node, we can use the `firstChild` property of the node.

Example:

```js
let element = document.getElementById("element");
let firstChild = element.firstChild;
```

#### Last Child

To find the last child of a node, we can use the `lastChild` property of the node.

Example:

```js
let element = document.getElementById("element");
let lastChild = element.lastChild;
```

#### nth Child

To find the nth child of a node, we can use the `childNodes` property of the node.

Example:

```js
let element = document.getElementById("element");
let nthChild = element.childNodes[n];
```

### Siblings

The siblings of a node are the nodes that are on the same level as the node in the DOM tree. The siblings of the node are the nodes that are on the same level as the node in the DOM tree. To find the siblings of a node, we can use the `nextSibling` and `previousSibling` properties of the node.

Example:

```js
let element = document.getElementById("element");
let nextSibling = element.nextSibling;
let previousSibling = element.previousSibling;
```

## What can we do with this?

Each node have the following properties:

- `parentNode`
- `childNodes`
- `firstChild`
- `lastChild`
- `nextSibling`
- `previousSibling`
- `nodeName`
- `nodeValue`
- `nodeType`
- `textContent`
- `innerHTML`
- `outerHTML`
- `attributes`

## Attributes

There are several types of attributes:

- Attributes that we can access directly
- Attributes that we can access using the `getAttribute` method

if you define an attribute that is not in HTML specification, you have to use the `getAttribute` method to access it. otherwise, you can access it directly.

Example:

```html
<div id="element" class="red" data-name="John"></div>
```

```js
let element = document.getElementById("element");

// Accessing the id attribute
let id = element.id;

// Accessing the class attribute
let className = element.className;

// Accessing the data-name attribute
let dataName = element.getAttribute("data-name");
```

*(45 mins)*


