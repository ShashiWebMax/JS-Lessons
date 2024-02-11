/*
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
*/

class pieChart {
    constructor(elementId, data, width = 400, height = 400, backgroundColor = '#fff') {
        this.elementId = elementId;
        this.data = data;
        this.width = width;
        this.height = height;
        this.backgroundColor = backgroundColor;
        this.draw();
    }

    draw() {
        let div = document.getElementById(this.elementId);
        div.innerHTML = '';
        let canvas = document.createElement('canvas');
        canvas.width = this.width;
        canvas.height = this.height;
        canvas.style.backgroundColor = this.backgroundColor;
        div.appendChild(canvas);
        let ctx = canvas.getContext('2d');
        let total = 0;
        this.data.forEach(element => {
            total += element.value;
        });
        let startAngle = 0;
        let endAngle = 0;
        this.data.forEach(section => {
            //calculate the end angle - full circle is 2 * PI
            let sectionAngle = (2 * Math.PI) * (section.value/total);
            endAngle = startAngle + sectionAngle;
            //start drawing
            ctx.beginPath();
            //go to the center of the canvas
            ctx.moveTo(this.width / 2, this.height / 2);
            //draw the arc
            let radius = this.width / 2;
            ctx.arc(radius, radius, radius, startAngle, endAngle);
            ctx.fillStyle = section.color;
            ctx.fill();
            //stor the end angle to use it as the start angle for the next section
            startAngle = endAngle;
            //show the label
            ctx.font = '20px Arial';
            ctx.fontWeight = 'bold';
            ctx.textAlign = 'center';
            ctx.fillStyle = '#000';
            //find the middle angle
            let middleAngle = startAngle - (sectionAngle / 2);
            //find the middle point of the arc
            let x = radius + (radius/2 * Math.cos(middleAngle));
            let y = radius + (radius/2 * Math.sin(middleAngle));
            //draw the label
            ctx.fillText(section.label, x, y);

        });
    
    }

    update(data) {
        this.data = data;
        this.draw();
    }

    addData(label, value, color) {
        //convert the value to a number
        value = Number(value);      
        this.data.push({label, value, color});
        this.draw();
    }

    removeData(index) {
        this.data.splice(index, 1);
        this.draw();
    }

    clear() {
        this.data = [];
        this.draw();
    }

    destroy() {
        let div = document.getElementById(this.elementId);
        div.innerHTML = '';
    }
}
//Home work
// create and export a class called barChart
class barChart {
    constructor(elementId, data, width = 400, height = 400, backgroundColor = '#fff') {
        this.elementId = elementId;
        this.data = data;
        this.width = width;
        this.height = height;
        this.backgroundColor = backgroundColor;
        this.draw();
    }

    draw() {
        let div = document.getElementById(this.elementId);
        div.innerHTML = '';
        let canvas = document.createElement('canvas');
        canvas.width = this.width;
        canvas.height = this.height;
        canvas.style.backgroundColor = this.backgroundColor;
        div.appendChild(canvas);
        let ctx = canvas.getContext('2d');
        //draw the bars
        let barWidth = this.width / this.data.length;
        let max = 0;
        this.data.forEach(element => {
            if (element.value > max) {
                max = element.value;
            }
        });
        let scale = this.height / max;
        let x = 0;
        this.data.forEach(element => {
            let barHeight = element.value * scale;
            ctx.fillStyle = element.color;
            ctx.fillRect(x, this.height - barHeight, barWidth, barHeight);
            x += barWidth;
        });
        //draw the labels
        x = 0;
        ctx.font = '20px Arial';
        ctx.fontWeight = 'bold';
        ctx.textAlign = 'center';
        ctx.fillStyle = '#000';
        this.data.forEach(element => {
            let label = element.label;
            let barHeight = element.value * scale;
            let y = this.height - barHeight - 5;
            ctx.fillText(label, x + barWidth / 2, y+30);
            x += barWidth;
        });
    
    }

    update(data) {
        this.data = data;
        this.draw();
    }

    addData(label, value, color) {
        //convert the value to a number
        value = Number(value);      
        this.data.push({label, value, color});
        this.draw();
    }
}


//export
export {pieChart, barChart};


