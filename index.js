var express = require('express');
var ReactDOMServer = require('react-dom/server');
var react = require('react');
var app = express();

app.get("/", (req, res) => {
  res.send("<!DOCTYPE html><html><head><title>My Page</title></head><body><div id='content'> "+
  ReactDOMServer.renderToString(react.createElement('div', null, 'Hello World'))+
  " </div></body></html>");

});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
