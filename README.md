**This repository demonstrates the implementation of CI/CD using Jenkins.**

**It is continuously integrated with Jenkins pipeline via webhooks. Any changes made on this GitHub repo. fires an event or to be precise an http POST request to the Jenkins server's specific endpoint _"http://Jenkins_Server_Public_IP/github-webhook/"_ and as a result Jenkins server starts executing a build for this repo. automatically and finally deploy on the same machine on port 4000.**
