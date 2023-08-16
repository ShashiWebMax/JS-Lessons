## DOM (Document Object Model)
The DOM is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. 

## How to access the DOM?
The DOM is accessible via JavaScript using the document object. The document object is the root node of the HTML document. 

## How to access elements?
There are may methods and properties that can be used to access elements in the DOM. Here are some of the most common ones:
* `document.getElementById()` - returns the element with the specified id
* `document.getElementsByClassName()` - returns a collection of elements with the specified class name
* `document.getElementsByTagName()` - returns a collection of elements with the specified tag name
* `document.querySelector()` - returns the first element that matches the specified selector
* `document.querySelectorAll()` - returns all elements that match the specified selector
* `document.getElementsByName()` - returns a collection of elements with the specified name
* `document.forms` - returns a collection of all forms in the document
* `document.images` - returns a collection of all images in the document
* `document.links` - returns a collection of all links in the document
* `document.scripts` - returns a collection of all scripts in the document
* `document.styleSheets` - returns a collection of all stylesheets in the document
* `document.body` - returns the body element
* `document.head` - returns the head element
* `document.documentElement` - returns the root element of the document
* `document.activeElement` - returns the currently focused element in the document
* `document.embeds` - returns a collection of all embeds in the document
* `document.forms` - returns a collection of all forms in the document

## How to access element properties and methods?
Once an element has been accessed, it's properties and methods can be accessed using dot notation. 
```javascript
const element = document.getElementById("myElement");
console.log(element.innerHTML); //get the innerHTML of the element
element.innerHTML = "Hello World!"; //set the innerHTML of the element
```

## How to access element attributes?
Once an element has been accessed, it's attributes can be accessed using dot notation. 
```javascript
const element = document.getElementById("myElement");
console.log(element.id); //get the id of the element
element.id = "newId"; //set the id of the element
```

Attributes can also be accessed using the `getAttribute()` and `setAttribute()` methods. 
```javascript
const element = document.getElementById("myElement");
console.log(element.getAttribute("id")); //get the id of the element
element.setAttribute("id", "newId"); //set the id of the element
```

## How to access element styles?
Once an element has been accessed, it's styles can be accessed using dot notation. 
```javascript
const element = document.getElementById("myElement");
console.log(element.style.color); //get the color of the element
element.style.color = "red"; //set the color of the element
```
CSS JS Properties reference: https://www.w3schools.com/jsref/dom_obj_style.asp

## How to access CSS classes?
Once an element has been accessed, it's CSS classes can be accessed using dot notation. 
```javascript
const element = document.getElementById("myElement");
console.log(element.className); //get the class of the element
element.className = "newClass"; //set the class of the element
//add a class to the element
element.classList.add("newClass");
//remove a class from the element
element.classList.remove("newClass");


```

***
*(60 min)*
