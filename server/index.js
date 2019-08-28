//Server setup
const express = require('express');
const app = express();

//Environment variables
require('dotenv').config();

//Path
const path = require('path');

//Node modules
app.use('/scripts', express.static(path.join(__dirname, '..', 'node_modules')));

//Serve public folder
app.use(express.static(path.join(__dirname, '..', 'public'))); 

//Serve index.html at every other route that comes to server
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

app.listen(5000, function () {
  console.log(`The website is running at port 5000!`);
});

module.exports = app;