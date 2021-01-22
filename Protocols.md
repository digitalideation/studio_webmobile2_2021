How would you build a cross-device application? How can devices communicate with each other? Which protocols do you know? How do you choose the right one?

## Introduction to web protocols
Which protocols do you know? We will draw their communication patterns in [this Miro board](https://miro.com/app/board/o9J_lZaF1LU=/).

## HTTP deep dive
Try to answer the following questions using the resources listed below
* How are HTTP requests structured?
* Which HTTP methods exist?
* Which HTTP methods are idempotent, which are safe?
* What HTTP response status codes should I know?

### HTTP resources
* [HTTP overview](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)
* [HTTP methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
* [Safe HTTP methods](https://developer.mozilla.org/en-US/docs/Glossary/safe)
* [Idempotent HTTP methods](https://developer.mozilla.org/en-US/docs/Glossary/idempotent)
* [HTTP headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)
* [HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
* [HTTP status ranges in a nutshell](https://twitter.com/stevelosh/status/372740571749572610)

### Postman exercise
Postman is an app for testing HTTP APIs. You can download it [here](https://www.postman.com/downloads/). Note that you don't need to create an account and sign in if you don't want to. You can still use the app.
Using Postman do the following exercises:
* Send an HTTP GET request to known servers, for example http://hslu.ch
   * Inspect the response
   * Look at the response time
   * Do you get the same result every time?
* Try to find a really fast server and a really slow response time. Record your results in this [Google Doc](https://docs.google.com/spreadsheets/d/17-deXCd0A-DaWr5IaBH6zBFYl6IxLeeRTEBZD0Ym1As/edit#gid=0)
   * What factors can impact the response time?
* Try to provoke a response code that is not OK. What request did you send to which address and what response do you get? Record your results in the [Google Doc](https://docs.google.com/spreadsheets/d/17-deXCd0A-DaWr5IaBH6zBFYl6IxLeeRTEBZD0Ym1As/edit#gid=430344301)

### Debugging network and timing issues
![XKCD networking problems](https://imgs.xkcd.com/comics/networking_problems.png )

[Image Credit XKCD](https://xkcd.com/2259/)

Modern browser developer tools come with a _network_ tab to help you find issues in the communication over a network. Open the browser of your choice and open the network tab, then (re)load a website. What do you see? 

## WebSockets and Socket.io
Socket.io is a library for real-time, bidirectional and event-based communication. Under the hood it uses WebSockets, but is a bit easier to use and provides additional functionality on top.
We will work through the [Socket.io tutorial](https://socket.io/get-started/chat/) together. Alternatively you can work through it by yourself. If you have time left, choose some of the exercise listed as _Homework_ and try implement them.

### Websocket resources
* [WebSockets on MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)

## Optional further reading

### HTTPS and HTTP/2
* [HTTPS](https://developers.google.com/search/docs/advanced/security/https?hl=en&visit_id=637460591423716973-1265265362&rd=1)
* [Evolution of HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Evolution_of_HTTP)

### WebRTC
* [WebRTC Introduction](https://webrtc.org/)
* [Signalling](https://www.onsip.com/voip-resources/voip-fundamentals/webrtc-signaling)

### Server-sent events
* [Server-sent events introduction](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events)
* [WebSocket vs. server-sent events](https://www.telerik.com/blogs/websockets-vs-server-sent-events)