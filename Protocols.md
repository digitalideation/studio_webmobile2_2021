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
* Try to find a really fast server and a really slow response time. Record your results in this [Google Doc](https://docs.google.com/spreadsheets/d/17-deXCd0A-DaWr5IaBH6zBFYl6IxLeeRTEBZD0Ym1As/)
   * What factors can impact the response time?