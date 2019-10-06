const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'charter')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'charter', 'index.html'));
});

app.listen(9000);