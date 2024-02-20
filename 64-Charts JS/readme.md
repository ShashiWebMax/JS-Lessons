# Charts JS

Charts JS is a powerful library for creating charts. It is free, open-source, and easy to use. It is a great library for creating beautiful and interactive charts. It is also very customizable and has a lot of options for creating different types of charts.

official website: [Charts JS](https://www.chartjs.org/)

## Installing Charts JS

You can download Charts JS from the [official website](https://www.chartjs.org/). You can also use npm to install Charts JS by running the following command in your terminal:

```bash
npm install chart.js
```


if you download the file from the website, you can include it in your project by adding the following line to your HTML file:

```html
<script src="path/to/chart.js"></script>
```

## Using Charts JS

Charts JS makes it easy to create beautiful and interactive charts. For example, you can use Charts JS to create a bar chart by running the following code:

```javascript
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
```
## Extensive Documentation ans Samples

Charts JS has extensive documentation and samples that you can use to learn how to create different types of charts. You can find the documentation and samples on the [official website](https://www.chartjs.org/). You can also find a lot of tutorials and examples on the internet.