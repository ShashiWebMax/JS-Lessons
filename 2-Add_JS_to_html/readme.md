# How to add Javascript to HTML
There are 2 ways to add Javascript to HTML
## 1. Inline/Embedded/Internal
```html
<script>
     console.log("Hello World! - Internal JS in Header");
</script>
```
[Example](index.html#L9)


You can also add Javascript to HTML using the `onclick` attribute
```html
<button onclick="console.log('Click')">Click Me</button>
```
[Example](index.html#L21)

## 2. External
```html
<script src="script.js"></script>
```
for this to work we need to create a file called `script.js` in the same folder as the `index.html` file. Then we can add the following code to the `script.js` file
```js
console.log("Hello World! - External JS");
```
in the above example `src="script.js"` indicates the location of the JS file. This can be a relative path or an absolute path. In this case, the JS file is in the same folder as the HTML file so we can just use the file name. If the JS file is in a different folder, you can use a relative path like `src="js/script.js"` or an absolute path like `src="https://example.com/script.js"`.


Using `defer` attribute
The `defer` attribute tells the browser to continue downloading the HTML while the script is being downloaded and executed. This is useful if the script is large and takes a long time to download.
```html
<script src="script.js" defer></script>
```

Using `async` attribute
The `async` attribute tells the browser to continue downloading the HTML while the script is being downloaded. However, the browser will pause the HTML parser when the script is being executed. This is useful if the script is small and you want to execute the script as soon as possible.
```html
<script src="script.js" async></script>
```

Using `type` attribute
The `type` attribute is not required. The default value is `text/javascript`. However, if you are using a newer version of HTML, you can use `module` as the value. This tells the browser that the script is a module and should be treated as such.
```html
<script src="script.js" type="module"></script>
```
## number of scripts and placement
You can use all od the above methods to place any number of scripts in your HTML in any place you want. 

## Order of Execution
The order of execution is important. If you have multiple scripts, the scripts will be executed in the order they are loaded. (from Top to bottom) If you have multiple scripts with the `defer` attribute, the scripts will be executed in the order they are loaded. If you have multiple scripts with the `async` attribute, the scripts will be executed in the order they finish loading.





