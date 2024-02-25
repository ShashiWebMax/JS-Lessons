# Intersection Observer API 

## Introduction

The Intersection Observer API provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document's viewport.

## Common Use Cases

- Lazy loading of images or other content as a page is scrolled.
- Implementing "infinite scrolling" web sites, where more and more content is loaded and rendered as you scroll, so that the user doesn't have to flip through pages.
- Reporting of visibility of advertisements in order to calculate ad revenues.
- Deciding whether or not to perform tasks or animation processes based on whether or not the user will see the result.
- Implementing effects that should be triggered when an element is visible.
- Sticking elements when they reach the viewport, and switching to a fixed position when they leave the viewport.
- Implementing elements that are sensitive to the visibility of other elements.
- Implementing scroll-based animations.
- Implementing a "scroll to top" button that is only visible when the user scrolls up.

# How it works

The Intersection Observer API allows you to configure a callback that is called whenever one element, called the target, intersects either the device viewport or a specified element; for example, the target element's parent. It provides a way to efficiently watch for changes in a target element's intersection with an ancestor element or with a top-level document's viewport.

example:

```javascript
let options = {
  root: document.querySelector('#scrollArea'),
  rootMargin: '0px',
  threshold: 1.0
}

let observer = new IntersectionObserver((entries,observer)=>{
    entries.forEach(entry=>{
        console.log(entry);
    });
}, options);
observer.observe(target);
```