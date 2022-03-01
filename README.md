# user-presence-app

Demo: https://user-presence-by-veeresh.herokuapp.com/app

---
Presence service app, similar to that in google docs, which shows people that are
currently viewing a particular doc.


## Running Locally
Make sure you have [Node.js](http://nodejs.org/) and [MongoDB](https://docs.mongodb.com/manual/installation/) and the [Heroku Cli](https://devcenter.heroku.com/articles/heroku-cli) installed.

```sh

cd user-presence-app
npm install
npm run dev
```

Your app should now be running on [localhost:8989](http://localhost:8989/).


## Deploying to Heroku
```
heroku create
git push heroku master
heroku open
```
Alternatively, you can deploy your own copy of the app using the web-based flow
Follow instructions from official docs below

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://devcenter.heroku.com/categories/deployment)

PURPOSE
* To check, no of users on the site viewing a particular documents at the same time.
* To track the time spent on viewing the document. 

TECHNOLOGIES USED
In building this Foodie web app, we will majorly use:

• Node.js – A JavaScript runtime.
• Express js framework.
• Template Engine – ES6.
• Mongo dB Atlas, a cloud based No-SQL database, for database handling.
• Bcrypt.js: library to help you hash passwords.
• Passport: It is authentication middleware for Node.js .
• Socket.io: enables real-time bidirectional event-based communication.
• Noty: It is a notification library that makes it easy to create alert - success - error - warning - information - confirmation
• Moment.js: it is used for formatting Date and time.
HEROKU

---

Cheers!
