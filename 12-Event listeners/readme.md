# Event listeners

You can use event listeners to listen for events that occur in your web page. There are several different types event listeners in JavaScript, which we'll discuss in this lesson. 

## Event listener types

### DOM event listeners

DOM event listeners are attached to a DOM element, and listen for events that happen inside it. For example, you can attach a DOM event listener to a button that listens for the `click` event, and then run some code when that event occurs on that button.

```js
const button = document.querySelector('button');

button.addEventListener('click', () => {
  console.log('Button clicked!');
});
```

When the event occurs, the provided callback function is run with an event object as its first argument. The event object contains information about the event that occurred, such as the element that the event occurred on, the type of event, and more. 

```js
const button = document.querySelector('button');

button.addEventListener('click', (event) => {
  console.log(event);
});

```
#### DOM event listener types

Below are some of the most common DOM event listeners:

- `click` - when the user clicks on an element
- `dblclick` - when the user double-clicks on an element
- `mousedown` - when the user presses a mouse button over an element
- `mouseup` - when the user releases a mouse button over an element
- `mouseenter` - when the user moves the mouse pointer into an element
- `mouseleave` - when the user moves the mouse pointer out of an element
- `mousemove` - when the user moves the mouse pointer over an element
- `keydown` - when the user presses a key on the keyboard
- `keyup` - when the user releases a key on the keyboard
- `keypress` - when the user presses a key on the keyboard
- `focus` - when an element receives focus
- `blur` - when an element loses focus
- `change` - when the user changes the value of an element
- `input` - when the user changes the value of an element
- `submit` - when the user submits a form
- `resize` - when the browser window is resized
- `scroll` - when the user scrolls in an element
- `load` - when the browser has finished loading a page
- `DOMContentLoaded` - when the browser has finished parsing the HTML and building the DOM

[Example](index.html#L13)


### Window event listeners

Window event listeners are attached to the `window` object, and listen for events that happen in the browser window. For example, you can attach a window event listener to listen for the `resize` event, and then run some code when that event occurs.

```js
window.addEventListener('resize', () => {
  console.log('Window resized!');
});
```

When the event occurs, the provided callback function is run with an event object as its first argument. The event object contains information about the event that occurred, such as the element that the event occurred on, the type of event, and more. 

```js
window.addEventListener('resize', (event) => {
  console.log(event);
});
```

#### Window event listener types

Below are some of the most common window event listeners:

- `resize` - when the browser window is resized
- `scroll` - when the user scrolls in an element
- `load` - when the browser has finished loading a page
- `DOMContentLoaded` - when the browser has finished parsing the HTML and building the DOM

[Example](index.html#L57)

### Practice by Creating a simple game

This is a simple game that will help you practice your typing skills. The game will display a random character, and you have to type that character it will check if you typed the correct character. It will keep count of how many characters you typed correctly, and how many you typed incorrectly.

We need to generate a random character but we have not learned how to do that yet. So just ignore the code that generates the random character for now. 

```js
function randomLetter() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    //generate a random number between 0 and 25
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    return alphabet[randomIndex];
}
```
we use event listeners to listen for the `keydown` event on the input element. When the event occurs, we run a callback function that checks if the character typed by the user is the same as the random character. If it is, we increment the `correct` variable by 1, and if it isn't, we increment the `incorrect` variable by 1. We also update the `correct` and `incorrect` elements to display the new values.




[Game Example](typing_game.html)


#### Improve the game
Remove the input and use the `window` object to listen for the `keydown` event. 

[Game Example](typing_game_window.html)

We still haven't learned things like how to track the time in js and delays. once we learn that we will come back to this game and improve it by adding a timer.


*(45 mins)*