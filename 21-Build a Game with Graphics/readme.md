# Build a Game with Graphics

This is a project-based lesson. We are going use `<canvas>` element to build a simple game.

## The `<canvas>` element

The `<canvas>` element is an HTML element that can be used to draw graphics using JavaScript. It has a width and a height, and it can be styled using CSS. It is a block-level element, so it takes up the entire width of its parent element by default.

```html
<canvas id="canvas" width="400" height="400"></canvas>
```

## The `getContext()` method

The `<canvas>` element has a `getContext()` method that returns a drawing context. The drawing context is an object that has methods for drawing on the canvas. The drawing context is used to draw shapes, text, and images on the canvas.

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
```

## Drawing a rectangle

The `fillRect()` method is used to draw a filled rectangle on the canvas. It takes four parameters: `x`, `y`, `width`, and `height`. The `x` and `y` parameters specify the position of the top-left corner of the rectangle. The `width` and `height` parameters specify the width and height of the rectangle.

```js
ctx.fillRect(0, 0, 100, 100);
```

## Drawing a circle

The `arc()` method is used to draw a circle on the canvas. It takes six parameters: `x`, `y`, `radius`, `startAngle`, `endAngle`, and `anticlockwise`. The `x` and `y` parameters specify the position of the center of the circle. The `radius` parameter specifies the radius of the circle. The `startAngle` and `endAngle` parameters specify the start and end angles of the circle in radians. The `anticlockwise` parameter is a boolean value that specifies whether the circle should be drawn in the anticlockwise direction.

```js
ctx.arc(200, 200, 50, 0, Math.PI * 2, false);
```

## Drawing a line

The `moveTo()` method is used to move the drawing cursor to a new position. It takes two parameters: `x` and `y`. The `x` and `y` parameters specify the new position of the drawing cursor.

The `lineTo()` method is used to draw a line from the current position of the drawing cursor to a new position. It takes two parameters: `x` and `y`. The `x` and `y` parameters specify the new position of the drawing cursor.

```js
ctx.moveTo(0, 0);
ctx.lineTo(400, 400);
```

*(45 mins)*
