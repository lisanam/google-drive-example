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

//Google Drive
const Google = require('./google');
const APIKey = process.env.GOOGLE_API_KEY;
const folderId = process.env.FOLDER_ID;

app.get('/images', (req, res) => { //send private folder
  //for caching res.set("Cache-Control", "public, max-age=300, s-maxage=40000");

  //if api key is not there
  if(!APIKey) res.sendStatus(404).send("GOOGLE_API_KEY is missing");
  //if folder id is not there 
  if(!folderId) res.sendStatus(404).send("Folder_Id is missing");

  //callback function after receiving images' metadata from Google Drive
  let callback = (images) => {
    res.status(200).send(images);
  };

  //get images metadata from Google Drive folder
  Google.getImages(APIKey, folderId, callback); 
});

//Serve index.html at every other route that comes to server
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

app.listen(5000, function () {
  console.log(`The website is running at port 5000!`);
});

module.exports = app;