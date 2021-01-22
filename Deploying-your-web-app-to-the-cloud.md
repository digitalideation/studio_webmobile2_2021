Accessing most sensor APIs or the camera requires that your web application is served over HTTPS. There are multiple ways to deploy your web application so that it has HTTPS. In Studio 1, we used Netlify. However, Netlify can only serve static resources (HTML, JS). Which means it can not run your back-end Node.js server. In this class, I will introduce the following two options.

An easy way to deploy a Node.js application to the cloud is [Heroku](https://www.heroku.com/). Heroku falls into the Platform-as-a-service model. You don't have to install or maintain Node.js, but you only have to specify the version you want to use. You get HTTPS out of the box with a URL in the Heroku domain. I recommend this approach, if you want to focus on the development of your application instead of administrating your infrastructure.

A more complex approach is to use an Infrastructure-as-a-service provider (such as AWS EC2, Digital Ocean, Google Compute Engine) and Docker to deploy our application. To get HTTPS, we can NGINX and Let's Encrypt. I recommend this approach if you want to learn more about cloud deployment and infrastructure. This approach requires that you register a domain name (or I can give one from my own domain).

## Resources
* [Deploying Node.js Apps on Heroku](https://devcenter.heroku.com/articles/deploying-nodejs)