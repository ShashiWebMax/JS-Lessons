# Browserify

Browserify is a tool that allows you to use Node JS packages in the browser. It does this by bundling all the required files into a single file. This means that you can use the `require` function in the browser to include Node JS packages in your file.

## Installing Browserify

You can install Browserify by running the following command in your terminal:

```bash
npm install -g browserify
```

## Using Browserify

To use Browserify, you have to create a file that requires the Node JS packages you want to use. You can then use Browserify to bundle the file into a single file that you can include in your HTML file using a script tag.

## using animejs in the browser

create a file called `main.js` and add the following code:

```javascript
const anime = require("animejs");
anime({
  targets: "#box",
  translateX: 250,
  rotate: "1turn",
  duration: 800,
  loop: true,
});
```

in order to use the `require` function in the browser, you first have to install the required packages using npm.
for example, to use the `animejs` library in the browser, you have to install it by running the following command in your terminal:

```bash
npm install animejs
```

You can then use Browserify to bundle the file by running the following command in your terminal:

```bash
browserify main.js -o bundle.js
```

This will create a file called `bundle.js` that you can include in your HTML file using a script tag:

```html
<script src="bundle.js"></script>
```

## loading lowdash using browserify

```bash
npm install lodash
```

```javascript
const _ = require("lodash");
console.log(_.random(1, 100));
```

```bash
browserify main.js -o bundle.js
```

```html
<script src="bundle.js"></script>
```

## watching files

You can use the `watchify` package to watch your files and automatically bundle them when they change. You can install `watchify` by running the following command in your terminal:

```bash
npm install -g watchify
```

You can then use `watchify` to watch your files by running the following command in your terminal:

```bash
watchify main.js -o bundle.js
```




