# Practice What we learned 

Lets create a library to display customizable pi charts.

## Steps

1. Create a folder for the project and an html file to test the library.
2. Create a file called `chart.js` and add it to the html file.
3. Inside the `chart.js` file create a class called pieChart and export it.
4. The constructor of the class should receive the following parameters:
    - `elementId`: The id of the element where the chart will be displayed.    -  
    - `data`: An array of objects with the following structure:
        - `label`: The label of the data.
        - `value`: The value of the data.
        - `color`: The color of the data.
    - `width`: The width of the chart. Default value: 400.
    - `height`: The height of the chart. Default value: 400.
    - `backgroundColor`: The background color of the chart. Default value: '#fff'.
5. Create a method called `draw` that will draw the chart. Call this method inside the constructor.
6. Create a method called `update` that will update the chart.
7. Create a method called `addData` that will add a new data to the chart.
8. Create a method called `removeData` that will remove a data from the chart.
9. Create a method called `clear` that will clear the chart.
10. Create a method called `destroy` that will remove the chart from the DOM.

At the end you should be able to do the following:

```javascript

const chart = new pieChart('chart', [
    { label: 'A', value: 10, color: '#00f' },
    { label: 'B', value: 20, color: '#0f0' },
    { label: 'C', value: 30, color: '#f00' },
    { label: 'D', value: 40, color: '#ff0' },
], 400, 400, '#fff');

```

### Hint 

You are going use canvas to draw the chart. To draw the circle you can you can use the `arc` method of the canvas. Below is the breakdown of the parameters of the `arc` method:


```javascript

context.arc(x, y, radius, startAngle, endAngle, anticlockwise);


```
- x: The x coordinate of the center of the circle.
- y: The y coordinate of the center of the circle.
- radius: The radius of the circle.
- startAngle: The starting angle, in radians (0 is at the 3 o'clock position of the arc's - circle).
- endAngle: The ending angle, in radians.
- anticlockwise: Optional. Specifies whether the drawing should be counterclockwise or clockwise. False is default, and indicates clockwise, while true indicates counter-clockwise.

Full circle radians is ```2 * Math.PI.``` (2 times the value of PI)
To calculate the radians of a percentage of the circle you can use the following formula:

```javascript

const radians = 2*Math.PI * (percentage/100);

```
To calculate the total radiat portion of a data you can use the following formula:

```javascript

const radians = 2*Math.PI * (data.value/total);

``` 

to calculate the x and y coordinates of a point in a circle you can use the following formula:

```javascript

const x = centerX + radius * Math.cos(radians);
const y = centerY + radius * Math.sin(radians);

```
Resources: https://math.libretexts.org/Bookshelves/Precalculus/Precalculus_1e_%28OpenStax%29/05%3A_Trigonometric_Functions/5.02%3A_Unit_Circle_-_Sine_and_Cosine_Functions



