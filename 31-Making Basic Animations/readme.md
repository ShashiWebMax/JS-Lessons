# Make a Popup Dialog

In this exercise, you will create a popup dialog that displays a message when the user clicks a button.

you can use js setTimeout() and setInterval() methods to gradually change css properties of an element to create animations. However, these methods are not very efficient. They can cause performance issues and are not recommended for animations. Instead, you can use CSS transitions and animations to create animations more efficiently. Then we can use JavaScript to trigger the animations.

For example we can use js to move an element from one position to another. 

```js
const box = document.querySelector('.box');
box.addEventListener('click', () => {
  let time = 0;
  let interval = setInterval(() => {
    box.style.transform = `translate(${time}px)`;
    time += 10;
    if (time > 200) {
      clearInterval(interval);
    }
  }, 10);
});
```

however, this is not the best way to do this. We can use CSS transitions to do this more efficiently. 

```css
.box {
  /* other related css */
  transition: transform 0.2s;
}
```

```js
const box = document.querySelector('.box');
box.addEventListener('click', () => {
  box.style.transform = `translate(200px)`;
});
```
*(45 mins)*