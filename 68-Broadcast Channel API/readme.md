# Broadcast Channel API

## Introduction

The Broadcast Channel API allows simple communication between browsing contexts (that is windows, tabs, frames, or iframes) and workers on the same origin. It is a simple one-to-many messaging system built into the browser.

## Common Use Cases

- to switch between dark and light mode on all tabs
- log out all tabs when the user logs out from one tab
- to send messages to all tabs when a new version of the app is available
- to send messages to all tabs when the user is online or offline
- 


## How it works

The Broadcast Channel API is a simple messaging system that allows communication between browsing contexts and workers. It is a one-to-many messaging system, which means that a message sent to a channel is received by all the other browsing contexts or workers that are listening to that channel. To use the Broadcast Channel API, you first create a new BroadcastChannel object, specifying the name of the channel you want to use. You can then send messages to the channel using the postMessage() method, and listen for messages on the channel using the onmessage event handler.

example:

```javascript
let channel = new BroadcastChannel('test_channel');
channel.onmessage = (event) => {
  console.log(event.data);
};
channel.postMessage('Hello, world!');
```
