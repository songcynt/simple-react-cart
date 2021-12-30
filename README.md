
## Introduction

This respository contains the frontend & backend codebase of Uof[Good]Tea, a web app where you can buy all kinds of tea leaves. We are using Node/Express for the backend and React for the frontend running on top of the Node runtime environment.

The production web app can be accessed here: https://safe-coast-31254.herokuapp.com/

Instructions for how to use the website can be found here: https://docs.google.com/document/d/11WUyK4J7tLbDP1ovFAf6DmfMcUBJ_ZObw-v3Z7He-UY/edit

## Comparing Node and Django for backend frameworks

Over the years Node has become one of the most widely used Javascript runtime environments for server-side functionalities. One reason behind Node being widely used for the backend is that runs on Javascript. Web developers have been using Javascript for frontend scripting for years, and so being able to use the same language for the backend is really convenient. Here are a few reasons we decided to use Node:

1. We have experience with Javascript, so transferring it over to Node was easy.
2. Node is insanely popular and so there's a huge market demand for developers with Node experience.
3. There's over 1.3 million packages on Npm.js that can easily be incorporated into your project.
4. Despite being event driven & single-threaded, it can handle thousands of concurrent connections, making it highly performant as a web server.

Some of the cons of Node are:

 1. Many tools in the NPM registry have poor quality or they're not properly documented or tested. This is because the registry isn't structured well enough to assess tools by their quality. Despite this drawback, generally, there is at least one reliable tool for different major use cases (HTTP modules, Audio manipulation, Image processing...etc)
 2. The Asynchronous programming model is an advanced concept and so can be hard for beginners to learn quickly (I consider myself a beginner in Node). I think it's very important to understand this to be able to right performant applications on Node.

Alternative to Node: Pros of Django

 1. It's implemented in Python which we are very familiar with from CSC148 and other courses or personal projects.
 2. It comes with many built-in resources thanks to its battery-included approach.
 3. It's been around since 2005 and is still very popular to this day, which means there's a large community of developers and lots of documentation available if we ever encounter problems.
    
Cons of Django
 
 1. Not suitable for small projects. Since it's designed for larger projects, it requires lots of server processing time and bandwidth during development, which is a waste of resource for such a small assignment. 
 2. All the built-in resources can become confusing for someone who's just starting out in Django.

## Comparing Class based React, React Hooks, and Angular.

React is the most popular frameworks used for web development, along with Angular and Vue. We decided to use React Hooks as opposed to the standard class based React framework as we needed to reduce code complexity in order to facilitate progress between two developers who do not have extensive backgrounds in web development or React.

Some of the pros of React Hooks:

 1. Able to access core components without having to work with complex classes and design patterns like HOC and render prop.
 2. Sharing data between components is easy with their Context API.
 3. Easy to incorporate bootstrap UI, as well as other libraries, which can really speed up development.

In comparison to React Hooks, Angular is much more suitable for advanced larger scale projects due to its complexity. And due to lack of mentorship and time, the simplicity of React Hooks is much more preferrable to use.

## Continuous Integration/Delivery

We decided to go with Git Actions for our continuous integration platform. The primary reason being that it was very easy to get it set up and met the requirements of the assignment. Here are the pros and cons of Git Actions:

### Continuous Integration

Pros:

 1. Configuration script is a yaml file, which is similar to most other CI services. We had experience with Azure pipelines, which also used yaml configuration file. This made is easier to get started.
 2. It is integrated into into Github.

Cons:

 1. Not as mature as other CI servicers like CircleCI and Azure Pipeline. However, it fits the requirements for A1.

In contrast, here are the pros and cons of CircleCI:

Pros:

 1. It is faster that Git Actions according to a benchmark test.
 2. It provides greater visibility than Git Actions into the software delivery process.
 3. Wide array of choices to customize operating systems, CPUs, GPUs, memory and images for each job.
 4. SSH Debugging

Cons:

 1. Not as easy to set up as Git Actions.

### Continuous Delivery

We decided to host the server on Heroku because of how easy it was to do that. A simple command and the entire application was deployed. Not only that, when the a new commit is added to the `development`/`master` branch, Heroku gets notified and deploys the application from the respective branch. The set up was as simple as connecting Heroku to github and selecting the branch to deploy all from the Heroku Web app.
