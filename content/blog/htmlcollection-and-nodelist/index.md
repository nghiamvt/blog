---
template: "post"
title: HTMLCollection and Nodelist
date: "2019-08-23T10:14:14.068"
description: "Most of us believed, at least for some time, that in our DOM Scripting, we always dealt with arrays in our JavaScript, but they are actually not..."
tags: ["javascript", "DOM", "HTMLCollection", "Nodelist"]
---

Assuming we have a DOM like this

```html
<div id="container">
 <div class="child">...</div>
 <div class="child">...</div>
 <div class="child">...</div>
 <div class="child">...</div>
</div>
```
Req: Find a way to get an array which contains all children of `#container`

During the good **jQuery** days
```Javascript
$('.child') // or 
$('#container').children()
```


Using **[querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)**
```Javascript
const childList = document.querySelectorAll('.child')
childList.constructor.name //=> NodeList ???
Array.isArray(childList) //=> false
```


Or **[getElementsByClassName](https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByClassName)** 
```Javascript
const childList = document.getElementsByClassName('child')
childList.constructor.name //=> HTMLCollection ???
Array.isArray(childList) //=> false
```


**_What are NodeList and HTMLCollection?_**

### **HTMLCollection**
*An HTMLCollection object is an array-like list of HTML elements. An HTMLCollection in the HTML DOM is `live`; it is automatically updated when the underlying document is changed.*

### **Nodelist**
*A NodeList object is a list (collection) of nodes extracted from a document. NodeList objects in the DOM are `live or static` based on the interface used to retrieve them*

**_What are live and static?_**
```Javascript
let container = document.getElementById('container')
let nodeList = document.querySelectorAll('.child')
let htmlCollection = document.getElementsByClassName('child')

nodeList.length //=> 4
htmlCollection.length //=> 4

// append a new child to container
let newChild = document.createElement('div');
newChild.className = 'child'

container.appendChild(newChild)
nodeList.length //=> 4
htmlCollection.length //=> 5 (*)
```

(*) We can see that any changes to DOM prompts the HTMLCollection to be updated automatically and available in the collection, which is the reason why it is literally live.

**Not all NodeList objects are static.** 
For example, `document.getElementByName` will return a live NodeList.

- HTMLCollection: `getElementsByTagName`, `getElementsByClassName`
- NodeList: `getElementsByName`, `querySelectorAll`

**Neither HTMLCollectionn nor NodeList is a native Javascript array**. Event though they look like an array, they are not. They, therefore, aren't support array prototype methods like push, pop or splice.

### **_How can we interact with them?_**
We can convert them into an array by using `Array.from` or `spread operator`
```Javascript
Array.from(Nodelist) // Array.from(HTMLCollection)
[…document.querySelectorAll('.child')]
```

There are more interesting and useful stuff to do with this topic. Stay tune 🤙.
