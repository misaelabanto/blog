---
title: "I Finally Stopped Using Frontend Frameworks"
description: "After years of using Angular, Vue, and React, I've decided to move away from traditional frontend frameworks. In this article, I explain how state management complexity led me to adopt HTMX, drastically simplifying my web applications by allowing the backend to handle much of the presentation."
pubDate: 2025-09-03
heroImage: '/blog/i-stopped-using-frontend-frameworks/cover.jpeg'
category: Software
tags: ["web"]
---

I finally stopped using frontend frameworks. I started in the web development world using Angular, then I preferred Vue, and at Devsu, I used React. Now, I use none. Why? In this article, I will explain in detail what led me to make this decision. 

## State management

Imagine you have a CRUD application. The process to build it, following YouTube tutorials and guides for beginner developers, as I once was, would be as follows:

- Define a database model

- Choose a database engine

- Choose a backend framework. It could be Express.js, Nest.js, or Hono

- Implement a REST API in this backend

- Choose a frontend framework. It could be Angular, Vue, or React.

- Implement services that consume the REST API

- Implement the UI



Can you already see what the problem is here?



```mermaid
graph LR
  DATABASE --> BACKEND
  BACKEND --> ENDPOINT1
  BACKEND --> ENDPOINT2
  ENDPOINT1 --> UI_SERVICE1
  UI_SERVICE1 --> UI_STATE1
  UI_SERVICE1 --> UI_STATE2
  UI_SERVICE1 --> UI_STATE3
  
  
```

## What a Web Application Should Look Like

We all know that we should separate the presentation layer from the business layer. It's something we often forget. In a web application, HTML is just another presentation layer, made of text. 

```mermaid
graph LR
  DATABASE --> BUSINESS
  BUSINESS --> UI_PRESENTATION_LAYER
  BUSINESS --> API_PRESENTATION_LAYER
   
```

Servers are good at serving and returning text, any kind of text, not just JSON. 😉 

## HTMX

In my latest projects, I have consistently used HTMX. This has accelerated development since two projects are no longer programmed independently (one for frontend and one for backend), but only the backend, showing how each part of the web should be updated. This has also allowed me to see things differently. Sometimes it is also much easier to create a custom HTML component instead of handling forms in strange ways, such as creating a long list of useState, as in the following example:

![27f326c8-cefd-8062-a651-e7afa7ea6985.png](/blog/deje-de-usar-frontend-frameworks/27f326c8-cefd-8062-a651-e7afa7ea6985.png)

On the internet, there are also other horrible examples, like this one: 

![27f326c8-cefd-80b6-8a18-f6e43d9db04c.png](/blog/deje-de-usar-frontend-frameworks/27f326c8-cefd-80b6-8a18-f6e43d9db04c.png)

I wonder if it's necessary to have all this mess of states. Why do we have to live like this? I feel that since I started using HTMX, my web apps have been significantly simplified and improved. 



Yes, I know. A project can be developed with much cleaner and more organized code than this, but unfortunately, that's not the most common scenario.



Anyway, I do enjoy writing code in Flutter, for which I can't render directly from the server, can I? I like the language (Dart); I think it's a modern and easy-to-use language. However, I've really liked GetX for state management because the abstraction is super intuitive. It's one of the best frameworks I've seen. 

END