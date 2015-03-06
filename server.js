var application_root = __dirname;
var publicDir = application_root + "/public";
var express = require("express");
var path = require("path");
var mongoose = require('mongoose');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var objectID = require('mongodb').ObjectID;
app.use(bodyParser.json());
app.use(express.static(publicDir));
mongoose.connect('mongodb://localhost/mydb');

var Product = require('./models/product.js')(mongoose);

var setObjectFieldsFromParams = function(obj, params) {
  for (k in obj.schema.paths) {
    if (params[k]) {
      obj[k] = params[k];
    }
  }
};


app.get('/', function(req, res){
  res.redirect("/index.html");
});




app.listen(3000);

