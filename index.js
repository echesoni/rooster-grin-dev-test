'use strict';

const express = require('express');
const app = express();

const hostname = '127.0.0.1';
const port = 3000;

// Configure app
app.set('view engine', __dirname + 'views');
// Serve static files in public directory
app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.listen(process.env.PORT || 5000);
