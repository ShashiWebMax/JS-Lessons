# Node JS for Front end developers

## What is Node JS?

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world. Node JS is commonly used for building server side applications. However, it can also be used for building front end applications.

## Installing Node JS

First you can check if you have Node JS installed by running the following command in your terminal:

```bash
node -v
```

If you don't have Node JS installed, you can download it from the [official website](https://nodejs.org/en/).


## Running Node JS

You can run a Node JS file by running the following command in your terminal:

```bash
node filename.js
```

## NPM

NPM is the package manager for Node JS. It is used to install and manage packages. You can install a package by running the following command in your terminal:

```bash
npm install package-name
```

You can also install a package globally by running the following command in your terminal:

```bash
npm install -g package-name
```

## Initializing a Node JS project

You can initialize a Node JS project by running the following command in your terminal:

```bash
npm init
```

## Downloading Node JS packages 

You can download Node JS packages by running the following command in your terminal:

```bash
npm install package-name
```

in a previous lesson, we learned about the animejs library. In that lesson, we downloaded the file from the official website. However, the instructions also mentioned that we could download the file using npm. We can do that by running the following command in our terminal:

```bash
npm install animejs --save
```
`--save` is used to save the package as a dependency in the package.json file. so that when we run `npm install` in the future, it will install all the dependencies listed in the package.json file. but now it is not necessary to use `--save` because it is the default behavior of npm. if you want to install a package without saving it as a dependency, you can use the `--no-save` flag.

## Uninstalling Node JS packages

You can uninstall a Node JS package by running the following command in your terminal:

```bash
npm uninstall package-name
```

once you have uninstalled a package, you can also remove it from the package.json file by running the following command in your terminal:

```bash
npm uninstall package-name --no-save
```

##  Using Node JS packages

If the library only need to be added to the HTML file, you can use a script tag to include the library. However, if the library is a Node JS package, you have to use the `require` function to include the library in your file. For example, to include the `animejs` library in your file, you can use the following code:

```javascript
const anime = require('animejs');
```
This may not work in the browser because the `require` function is not defined in the browser. To use Node JS packages in the browser, you can use a bundler like Webpack or Browserify.

## Running a javascript file using Node JS

You can run a javascript file using Node JS by running the following command in your terminal:

```bash
node filename.js
```









