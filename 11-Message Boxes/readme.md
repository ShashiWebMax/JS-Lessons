#  Message Boxes

JS have several ways to display messages to the user. 

## Alert

The most basic one is `alert()`. It shows a message and waits for the user to press “OK”.

```js
alert("Hello");
```

The mini-window with the message is called a **modal window**. The word “modal” means that the visitor can’t interact with the rest of the page, press other buttons, etc. until they have dealt with the window. In this case – until they press “OK”.

[Example](index.html#L14)

## Prompt

The function `prompt(title, [default])` shows a modal window with a text message, an input field for the visitor, and the buttons OK/Cancel.

```js
let age = prompt('How old are you?', 100);
alert(`You are ${age} years old!`); // You are 100 years old!
```

The first argument `title` is the text to show the visitor. The second argument `default` is an optional second parameter, the initial value for the input field.

The call to `prompt` returns the text from the input field or `null` if the input was canceled.

[Example](index.html#L19)

## Confirm

The function `confirm(question)` shows a modal window with a question and two buttons: OK and Cancel.

```js
let isBoss = confirm("Are you the boss?");
alert( isBoss ); // true if OK is pressed
```

The result is `true` if OK is pressed and `false` otherwise.

[Example](index.html#L26)


***
*(30 mins)*