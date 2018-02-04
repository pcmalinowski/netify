const express = require('express');
const app = express();
app.use(express.static('public'));

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

function runServer() {
  const port = process.env.PORT || 5000;
  return new Promise((resolve, reject) => {
    server = app.listen(port, () => {
      console.log(`Your app is listening on port ${port}`);
      resolve(server);
    }).on('error', err => {
      reject(err)
    });
  });
}

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


module.exports = {app, runServer, closeServer};