const express = require('express');
const app = express();
app.use(express.static('public'));
const User = require

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/search', (req, res) => {
  res.sendFile(__dirname + '/public/search.html');
  console.log
});

app.get('/results', (req, res) => {
  res.sendFile(__dirname + '/public/results.html');
});

app.get('/settings', (req, res) => {
  res.sendFile(__dirname + '/public/settings.html');
});

app.get('/signin', (req, res) => {
  res.sendFile(__dirname + '/public/signin.html');
});

app.get('/signup', (req, res) => {
  res.sendFile(__dirname + '/public/signup.html');
});


 app.post('/???????????????????', function (req, res, next) {
  if (req.body.password !== req.body.passwordConf) {
    var err = new Error('Passwords do not match.');
    err.status = 400;
    res.send("passwords dont match");
    return next(err);
  }

  if (req.body.email &&
    req.body.password &&
    req.body.passwordConf) {

    var user = {
      email: req.body.email,
      password: req.body.password,
      passwordConf: req.body.passwordConf,
    }