#Fetch Data From Web

### AJAX
We can use JavaScript to fetch data from the without reloading the page. This is called an AJAX request. AJAX stands for Asynchronous JavaScript and XML. AJAX requests can be made using the `XMLHttpRequest` object, or the `fetch` function.
**We'll use the [JSONPlaceholder](https://jsonplaceholder.typicode.com/) service in this lesson.**
You can also use free JSON APIs like  to practice making AJAX requests.
### XMLHttpRequest
The `XMLHttpRequest` object is used to make an AJAX request. The `XMLHttpRequest` object has a `readyState` property that tells us the state of the request. The `readyState` property can have the following values:

- `0` - request not initialized
- `1` - server connection established
- `2` - request received
- `3` - processing request
- `4` - request finished and response is ready
  
The `XMLHttpRequest` object also has an `onreadystatechange` event listener that is called whenever the `readyState` property changes. We can use this event listener to run some code whenever the `readyState` property changes. 

```js
var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "https://jsonplaceholder.typicode.com/users", true);
  xhttp.send();

```

### Sending data and setting headers
We can send data along with the request using the `send` method. The `send` method takes a string as an argument, and sends that string along with the request. We can also set headers using the `setRequestHeader` method. The `setRequestHeader` method takes two arguments: the name of the header, and the value of the header.

```js
var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("POST", "https://jsonplaceholder.typicode.com/users", true);
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.send(JSON.stringify({name: 'John Doe'}));

```



## Fetch API
The easiest way to make an AJAX request is to use the `fetch` function. The `fetch` function takes a URL as an argument, and returns a promise. The promise resolves to a response object, which contains information about the response from the server. We can use the `json` method on the response object to get the data from the response in JSON format. 
First wee seed a web server to fetch data from. you can find such services by Googling 'free JSON API'.  We'll use the [JSONPlaceholder](https://jsonplaceholder.typicode.com/) service in this lesson.

```js
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => console.log(data));
```

### Sending data and setting headers
We can send data along with the request using the `fetch` function. The `fetch` function takes a second argument, which is an object containing information about the request. We can set the method, headers, and body of the request using this object.

```js
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1
  })
})
  .then(response => response.json())
  .then(data => console.log(data));
```

### Find free to use JSON APIs

vist https://github.com/public-apis/public-apis to find free to use JSON APIs

*(45 mins)*