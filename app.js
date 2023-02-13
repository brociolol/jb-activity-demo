const express = require('express');
const configJSON = require('./config/config-json.js');
const

port = process.env.PORT || 80;

const app = express();

app.set('view engine', 'ejs');

app.post('/execute', function(req, res) { 

  console.log('executed');

});

app.get('/index.html', function(req, res) {

  return res.render('/html/index.ejs');
  
});

app.get('/config.json', function(req, res) {

  return res.status(200).json(configJSON(req));
  
});

app.post('/save', function(req, res) {

  return res.status(200).json({});
  
});

app.post('/publish', function(req, res) {

  return res.status(200).json({});
  
});

app.post('/validate', function(req, res) {

  return res.status(200).json({});
  
});

app.post('/stop', function(req, res) {

  return res.status(200).json({});
  
});

app.post('/stop', function(req, res) {

  return res.status(200).json({});
  
});


app.listen(port);
console.log(port);
