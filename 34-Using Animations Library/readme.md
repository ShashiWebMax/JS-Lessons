# Using Animations Library

We are going to use the animations library called anime.js. This library is a JavaScript library that allows you to create animations. It is a lightweight library that is easy to use. It is also compatible with most browsers.

## Install anime.js

First, we need to install the anime.js library. You can download the library from the [anime.js website](https://animejs.com/). You can also install the library using npm. To install the library using npm, run the following command:

```bash
npm install animejs
```

## add anime.js to the project

Once you have downloaded the library, you need to add it to the project. You can add the library to the project by adding the following script tag to the head of the HTML file:

there are 3 ways to add the library to the project:

1. use `<script>` tag to add the library to the project
```html
    <script src="lib/anime.min.js"></script>
```

2. use `require()` function to add the library to the project
```js
const anime = require('animejs');
```

3. use `import` statement to add the library to the project
```js
import anime from './anime.es.js';
```

## Create a simple animation

Now that we have added the library to the project, we can create a simple animation. To create a simple animation, we need to create a new animation object. We can create a new animation object by using the `anime()` function. The `anime()` function takes an object as an argument. The object contains the properties of the animation. The properties of the animation are:

- `targets`: The targets of the animation. The targets can be a single element or an array of elements. The targets can be a CSS selector, a DOM element, or an array of DOM elements. The targets can also be a function that returns a single element or an array of elements.
- `translateX`: The amount of translation in the X direction.
- `translateY`: The amount of translation in the Y direction.
- `scale`: The amount of scaling.
- `rotate`: The amount of rotation.
- `duration`: The duration of the animation.
- `delay`: The delay of the animation.
- `easing`: The easing of the animation.
- `loop`: The number of times the animation should loop.
- `direction`: The direction of the animation.
- `autoplay`: Whether the animation should start automatically.
- ect. please check the [anime.js website](https://animejs.com/documentation/) for more information.

## Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Using Animations Library</title>
    <script src="lib/anime.min.js"></script>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background-color: red;
        }
    </style>
</head>
<body>
    <div class="box"></div>
    <script>
        anime({
            targets: '.box',
            translateX: 250,
            rotate: '1turn',
            duration: 800
        });
    </script>
</body>
</html>
```


*(15 mins)*

