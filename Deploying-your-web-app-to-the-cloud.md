Accessing most sensor APIs or the camera requires that your web application is served over HTTPS. There are multiple ways to deploy your web application so that it has HTTPS. In Studio 1, we used Netlify. However, Netlify can only serve static resources (HTML, JS). Which means it can not run your back-end Node.js server. In this class, I will introduce the following two options to choose from:

An easy way to deploy a Node.js application to the cloud is [Heroku](https://www.heroku.com/). Heroku falls into the Platform-as-a-service model. You don't have to install or maintain Node.js, but you only have to specify the version you want to use. You get HTTPS out of the box with a URL in the Heroku domain. I recommend this approach, if you want to focus on the development of your application instead of administrating your infrastructure.

A more complex approach is to use an Infrastructure-as-a-service provider (such as AWS EC2, Digital Ocean, Google Compute Engine) and Docker to deploy our application. To get HTTPS, we will use NGINX and Let's Encrypt. I recommend this approach if you want to learn more about cloud deployment and infrastructure. This approach requires that you register a domain name (or I can give one from my own domain). In this approach, you will use the Linux command line and SSH.

## Resources
* [Deploying Node.js Apps on Heroku](https://devcenter.heroku.com/articles/deploying-nodejs)
* [Docker Tutorial](https://docs.docker.com/get-started/).
* [Docker Compose Tutorial](https://docs.docker.com/compose/gettingstarted/)
* [Let's encrypt](https://letsencrypt.org/)
* [OpenSSL](https://www.openssl.org/)
* [Linux command line cheatsheet](https://cheatography.com/davechild/cheat-sheets/linux-command-line/)
* [Putty: SSH client for Windows](https://www.putty.org/)
* [Tutorial: how to build a Node.js application with Docker](https://www.digitalocean.com/community/tutorials/how-to-build-a-node-js-application-with-docker)
* [Tutorial: How To Secure a Containerized Node.js Application with Nginx, Let's Encrypt, and Docker Compose](https://www.digitalocean.com/community/tutorials/how-to-secure-a-containerized-node-js-application-with-nginx-let-s-encrypt-and-docker-compose?)

## Cost
Cloud services can quickly add up. If you use a credit card, keep a close eye on the cost. Cloud services sometimes offer free tiers for hobby projects without requiring credit cards. Through [Github for education](https://education.github.com/pack) you can also get credit for various services, including domain names and cloud hosting (Heroku, Digital Ocean).