var express = require('express');
var app = express();
var jwt = require('express-jwt');

var port = process.env.PORT || 8080;

var jwtCheck = jwt({
  secret: '9FCLfJNoOiwKlanW40QecOPhA0PvyTYB',
  audience: 'http://login',
  issuer: 'https://dev-dmmyc9h2.us.auth0.com/'
});

// enforce on all endpoints
app.use(jwtCheck);

app.get('/authorized', function (req, res) {
    res.send('Secured Resource');
});

app.listen(port);

console.log('Running on port ', port);
      