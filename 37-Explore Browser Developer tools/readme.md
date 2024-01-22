# Explore Browser Developer tools

We have been using the browser developer tools to access the console, see the HTML and CSS so far. In this tutorial, we will explore the other features of the browser developer tools. In the previous tutorial, we learned about the `localStorage` object. In this lesson, we will start by learning how to use see the data stored in `localStorage` using the browser developer tools and then we will learn about the other features of the browser developer tools.

WE can create a simple HTML with fallowing code:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Browser Developer Tools</title>
</head>
<body>
    <script>
        localStorage.setItem("name", "John");
        localStorage.setItem("age", 30);
    </script>
</body>
</html>
```

We can open the browser developer tools by pressing `F12` or `Ctrl+Shift+I` on Windows and `Cmd+Option+I` on Mac. We can also right-click on the page and select `Inspect` from the menu. then we have fallowing tabs:
- Elements
- Console
- Sources
- Network
- Application
- ect.

We can see the data stored in `localStorage` by selecting `Application` tab and then selecting `Storage` from the left menu. We can see the data stored in `localStorage` under `Local Storage` section.

*(45 mins)*
