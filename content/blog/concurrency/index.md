---
template: "post"
title: Concurrency
date: "2020-05-18T10:00:00.000"
description: "How is concurrency related to parallelism? What is the importance of synchronous and asynchronous programming in concurrency and parallelism? How threads fit along with all these concepts?"
tags: ["Concurrency", "Parallelism", "Synchronous", "Asynchronous"]
---

At some point in life, you may confuse with these questions:
- How is concurrency related to parallelism?
- What is the importance of synchronous and asynchronous programming in concurrency and parallelism?
- How threads fit along with all these concepts?

![confused](_confused.gif)

<br />
Let's analyze these terms one by one to understand what actually they are and their relationships.

## Synchronous Programming Model

In this programming model, A thread is assigned to one task and starts working on it. Once the task completes then it is available for the next task. In this model, **it cannot leave the executing task in the middle to take up another task.**

Let’s discuss how this model works in single and multi-threaded environments.
<br /><br />

![synchronous Single Threaded Environment](_synchronous_single_threaded_env.jpg)
*<center>In a single threaded environment, each task gets executed one after another.</center>*
<br />

![synchronous Multiple Threaded Environment](_synchronous_multiple_threaded_env.jpg)
*<center>In a multiple threded environment<br/>
Tasks get executed in different threads but wait for any other executing tasks on any other thread.</center>*
<br />

## Asynchronous Programming Model

In this model, **a thread once starts executing a task it can hold it in mid, save the current state and start executing another task.**

Let’s discuss how this model works in single and multi-threaded environments.
<br /><br />

![asynchronous Single Threaded Environment](_asynchronous_single_threaded_env.jpg)
*<center>a single thread is responsible to complete all the tasks and tasks are interleaved to each other.</center>*
<br />

![asynchronous Multiple Threaded Environment](_asynchronous_multiple_threaded_env.jpg)
*<center>In a multiple threded environment<br/>
Tasks get executed in different threads without waiting for any tasks and independently finish off their executions.</center>*
<br />

*So, What is the role of synchronous and asynchronous programming models in concurrency and parallelism?*
- **Asynchronous programming model** helps us to achieve **concurrency**.
- **Asynchronous programming model** in **a multi-threaded environment** is a way to achieve **parallelism**.

Well, if these definitions don't make any sense to you, don't worry, let's keep reading about Concurrency and Parallelism, then go back this section, and I'm sure you will understand.

## Concurrency

In the computer science world, the way how concurrency is achieved in various processors is different. In a single core environment, concurrency is achieved via a process called **context-switching**. 

Consider you are given a task of singing and eating at the same time. At a given instance of time either you would sing or you would eat as in both cases your mouth is involved. 

![Sing and Eat](_sing_eat.png)
*<center>You can sing or eat at a time not simultaneously</center>*

Isn't it look like ***Asynchronous programming model in a single threaded environment***? Yes, that's the reason why we mentioned that **Asynchronous programming model** helps us to achieve **concurrency**.

## Parallelism

***So, what happens when concurrency occurs in multiple threaded environment?***\
Well, In a multi-core environment, concurrency enables parallelism in which multiple tasks are executed simultaneously.

![Parallelism](_parallelism.jpg)
*<center>Two tasks are being performed simultaneously over the same time period.</center>*

Yes, I think you also realize that this way of executing tasks looks like  ***Asynchronous programming model in a multiple threaded environment***