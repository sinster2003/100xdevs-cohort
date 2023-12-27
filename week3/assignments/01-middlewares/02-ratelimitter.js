const request = require('supertest');
const assert = require('assert');
const express = require('express');
const app = express();
// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// rate limit the requests from a user to only 5 request per second
// If a user sends more than 5 requests in a single second, the server
// should block them with a 404.
// User will be sending in their user id in the header as 'user-id'
// You have been given a numberOfRequestsForUser object to start off with which
// clears every one second

let numberOfRequestsForUser = {};
setInterval(() => {
  numberOfRequestsForUser = {};
}, 1000);

const rateLimitter = (request, response, next) => {
  // request only for five times in a second
  const userId = request.headers["user-id"];

  if (numberOfRequestsForUser.userId) {
    numberOfRequestsForUser.userId++;
    if(numberOfRequestsForUser.userId > 5) {
      console.log("Done");
      return response.status(404).json({msg: "No entry"});
    }
    console.log(numberOfRequestsForUser.userId);
    next();
  }
  else {
    // if initially undefined
    numberOfRequestsForUser.userId = 1;
    next();
  }
}

app.use(rateLimitter);

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

app.listen(3001);

module.exports = app;