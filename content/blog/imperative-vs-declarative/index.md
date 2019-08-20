---
title: Imperative vs Declarative
date: "2019-07-23T08:57:31.348Z"
description: "Imperative programming is like how you do something, and declarative programming is more like what you do or something."
tags: ["programming"]
---

> Imperative programming is like how you do something, and declarative programming is more like what you do or something.

You and your friends go to a restaurant, a waitress appears and ask what she can help.

**An imperative approach (HOW)**: "We see the table next to the window is empty, we want to walk over there and sit at that table"

**A declarative approach (WHAT)**: "Table for five, please"

The imperative approach is concerned with HOW you’re actually going to get a seat. You need to list out the steps to be able to show HOW you’re going to get a table. The declarative approach is more concerned with WHAT you want, a table for five.

Let's look at some programming "languages" that are inherently declarative versus those which are more imperative by nature.

**Imperative**: C, C++, Java
**Declarative**: SQL, HTML
**(Can Be) Mix**: JavaScript, Python, C#

**Declarative examples**

```sql
SELECT * FROM Users WHERE Country='Singapore';
```

```html
<article>
  <footer>
   <h1>Google Chrome</h1>
   <p>Google Chrome is a free, released in 2008.</p>
   </footer>
</article>
```

By glancing at both examples, you have a clear understanding of what is going on. They're both declarative. They've concerned with **WHAT** you want to be done, rather than **HOW** you want it done (how the browsers parse and display it to the screen).

Before we dive into another example, it’s important to realize that **many declarative approaches have some sort of imperative abstraction layer**. 

**Mix between declarative and imperative examples**

Using Javascript to write a function double(\[1,2,3]) which returns \[2,4,6]

**Imperative**

```javascript
function double (arr) {
  let results = []
  for (let i = 0; i < arr.length; i++){
    results.push(arr[i] * 2)
  }
  return results
}
```

the code above isn’t very readable. we can’t just glance at the code and understand what’s going on. we need to step through the code just as an interpreter would while also taking into account the context in which the code lives 

**Declarative**

```javascript
function double (arr) {
  return arr.map((item) => item * 2)
}
```

Much better 

Notice that we’re leveraging JavaScript’s built-in `map` and `reduce` methods. This goes back to what we’ve been talking about over and over in this article, the most declarative solutions are an abstraction over some imperative implementation.

In every example we’re describing WHAT we want to happen rather than HOW (we don’t know HOW map and reduce are implemented, we also probably don’t care). We’re not mutating any state. All of the mutations are abstracted inside of map and reduce. It’s also more readable (once you get used to map and reduce, of course).
