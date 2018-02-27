const express = require('express');
const mongoose = require('mongoose');
const configDB = require('./config/database.js');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const morgan = require('morgan');
const nodemon = require('nodemon');
const passport = require('passport');
const port = process.env.PORT || 5000;
const app = express();


app.use(express.static('public'));
// config to connect to local db

mongoose.connect(configDB.url);
// passport configurations for the db

app.use(morgan('dev'));
//logs reqeusts to console

app.use(cookieParser());
//reads cookies used for authentication

app.use(bodyParser());
//allows to read and get info from html forms

// app.use(expressSession({
//   secret: 'a4f8071f-c873-4447-8ee2',
//     cookie: { maxAge: 2628000000 },
//     store: new (require('express-sessions'))})); 
//wooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
//look up how to create a session secret(JWT Auth)

app.use(passport.initialize());

app.use(passport.session());

let server;
function runServer() {
  const port = process.env.PORT || 5000;
  return new Promise((resolve, reject) => {
    server = app.listen(port, () => {
      console.log(`Your app is listening on port ${port}`);
      resolve(server);
    })
    .on('error', err => {
      reject(err);
    });
  });
}

//... closeServer defined here

if (require.main === module) {
  runServer().catch(err => console.error(err));
};

// like `runServer`, this function also needs to return a promise.
// `server.close` does not return a promise on its own, so we manually
// create one.
function closeServer() {
  return new Promise((resolve, reject) => {
    console.log('Closing server');
    server.close(err => {
      if (err) {
        reject(err);
        // so we don't also call `resolve()`
        return;
      }
      resolve();
    });
  });
}

// if server.js is called directly (aka, with `node server.js`), this block
// runs. but we also export the runServer command so other code (for instance, test code) can start the server as needed.
if (require.main === module) {
  runServer().catch(err => console.error(err));
};


//app.listen(port); //CALLING listen was causing crash!

console.log('My app is starting' + port);

module.exports = {app, runServer, closeServer};
