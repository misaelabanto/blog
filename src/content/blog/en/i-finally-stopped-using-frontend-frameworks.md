---
title: "I Finally Stopped Using Frontend Frameworks"
description: "I finally stopped using frontend frameworks like Angular, Vue, and React due to the unnecessary complexity they introduce in state management. Now, using HTMX, I build simpler and more efficient web applications by focusing on server-side rendering and separating presentation from business logic."
pubDate: 2025-09-03
heroImage: ''
category: Software
tags: ["web"]
---

I finally stopped using frontend frameworks. I started in the web development world using Angular, then I liked Vue more, and at Devsu I used React. Finally, now I don't use any. Why? In this article, I will explain in detail what led me to make this decision. 

## State management

Imagine you have a CRUD application. The process to carry it out with YouTube tutorials and for beginner developers, like I was initially, would be the following:

- Define database model

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

## How a Web Application Should Look

We all know that we should separate the presentation layer from the business layer. It's something we often forget. In a web application, HTML is just another presentation layer, made of text. 

```mermaid
graph LR
  DATABASE --> BUSINESS
  BUSINESS --> UI_PRESENTATION_LAYER
  BUSINESS --> API_PRESENTATION_LAYER
   
```

Servers are good at serving and returning text, any kind of text, not just JSON. 😉 

## HTMX

In my latest projects, I have consistently used HTMX. This has allowed for accelerated development since two projects are no longer programmed independently, one for frontend and one for backend, but only backend, showing how each part of the web should be updated. This has also allowed me to see things differently. Sometimes it is also much easier to create a custom HTML component instead of handling forms in strange ways, such as creating a long list of useState, as in the following example:

![27f326c8-cefd-8062-a651-e7afa7ea6985.png](/blog/deje-de-usar-frontend-frameworks/27f326c8-cefd-8062-a651-e7afa7ea6985.png)

On the internet, there are also other horrible examples, like this one: 

![27f326c8-cefd-80b6-8a18-f6e43d9db04c.png](/blog/deje-de-usar-frontend-frameworks/27f326c8-cefd-80b6-8a18-f6e43d9db04c.png)

I wonder if it's necessary to have all this mess of states. Why do we have to live like this? I feel that since using HTMX, my web apps have been significantly simplified and improved. 



Yes, I know. A project can be developed with much cleaner and tidier code than this, but unfortunately, that's not the most common.



Anyway, I do enjoy writing code in Flutter, for which I can't render directly from the server, right? I like the language (Dart), I think it's a modern and easy-to-use language. However, I have really liked GetX for state management because the abstraction is super intuitive. It's one of the best frameworks I've seen. 

END