---
template: "post"
title: HTMLCollection, Nodelist and Array
date: "2019-08-23T10:14:14.068"
description: "Most of us believed, at least for some time, that in our DOM Scripting, we always dealt with arrays in our JavaScript, but they are actually not native Javascript array..."
tags: ["javascript", "dom", "HTMLCollection", "Nodelist"]
---

Assuming we have a DOM like this

```html
<div id="”container”>
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
Array.isArray(childList) //=> false
childList.constructor.name //=> NodeList ???
```


Or **[getElementsByClassName](https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByClassName)** 
```Javascript
const childList = document.getElementsByClassName('child')
Array.isArray(childList) //=> false
childList.constructor.name //=> HTMLCollection ???
```


**_What are NodeList and HTMLCollection objects and why are we not the plain vanilla javascript array?_**

### **HTMLCollection**
*An HTMLCollection is a list of nodes. Collections in the HTML DOM are assumed to be `live` meaning that they are automatically updated when the underlying document is changed.*

### **Nodelist**
*A NodeList object is a collection of nodes. NodeList objects in the DOM are `live or static` based on the interface used to retrieve them*

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

**Neither HTMLCollectionn nor NodeList is native Javascript array**, so that they aren't support array prototype methods like push, pop or splice.

### **_Convert to a Javascript Array_**
We can use either `Array.from` or `Spread operator`
```Javascript
Array.from(Nodelist) // Array.from(HTMLCollection)
[…document.querySelectorAll('.child')]
```

There are more interesting and useful stuff to do with this topic. Stay tune.
