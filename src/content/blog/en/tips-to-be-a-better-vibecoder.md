---
title: "Tips to be a better vibecoder"
description: "The rise of \"vibecoding\" extends beyond engineers, promising accelerated development, but also poses risks if solid fundamentals are lacking. To be an effective vibecoder, it's crucial to provide granular context, super specific tasks, and precise feedback, leveraging remote tools and, above all, consistently reinforcing our basic software engineering knowledge."
pubDate: 2025-09-30
heroImage: 'https://images.unsplash.com/photo-1626968361222-291e74711449?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb'
category: Tutorial
tags: ["tips"]
---

I've noticed that now not only software engineers want to be vibecoders, which excites and scares me in equal measure.

Firstly, I feel it's a good thing, that it improves competition and enables many ways to simplify and accelerate development for all the applications we use and could use every day. 

However, this can also cause applications with more bugs, even critical and security-related ones. If one doesn't have the fundamentals, they won't be able to discern between what is safe and what is not. 

## Context

For your application to work well, you must have context files. These files should be as granular as possible. Additionally, it is necessary to have two files README.md and CONVENTIONS.md at the root. Both allow the agent to start coding without spending hours understanding the project. This way, not only LLMs will learn from them, but also new devs. 

## Tasks

Tasks must be super specific. Decide what you want in mind first and write that in the task. Don't leave mental processing in the hands of the AI; otherwise, you will suffer the effects of its hallucination, details you don't want, implementations you didn't ask for, and worst of all, wasted time. Who wants to waste time if they're already vibecoding?

## Results

If you don't like the results, think carefully about what you will write next. Observations must be precise and specific. Changes must be testable. Asking an LLM for things like: “make it prettier” or “make it look more professional” isn't very helpful. The AI doesn't know what you want, you are supposed to, and you have to tell it. 

## Remote

![2ba326c8-cefd-802e-bcf1-ee4852d42d00.jpg](/blog/tips-to-be-a-better-vibecoder/2ba326c8-cefd-802e-bcf1-ee4852d42d00.jpg)



I like to do vibecoding almost always, when I'm on my phone I use different tools: 

- Jules by Google. With an AI Pro subscription, you can initiate 100 tasks daily. It's a very generous limit. [https://jules.google/](https://jules.google/)

- Cursor agents. Tasks can be launched at any time but it's not as generous. You need to enable an extra budget to use it. [https://cursor.com/agents](https://cursor.com/agents)

- Gemini CLI. I use it when I connect to my VPS from Termux using SSH. If you use iOS I recommend iSH or Termius. [https://github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

- Aider. I also use it on my VPS, but it only works with an API Key since it's just an orchestrator of other models; however, it's very good and saves tokens. [https://aider.chat/](https://aider.chat/)

## Fundamentals

AI or LLMs do not exempt anyone from learning the basic fundamentals of applications, software engineering, or programming. If you really want to succeed in this, you must have clear concepts. Take advantage of each vibecoding session to learn something new. With the time you save, read many books on software engineering, programming, artificial intelligence, and much more. This will allow you to have a broader and better view of how applications should work. 



