var express = require('express');
var app = express();
var config = require('./config');
var mongoose = require('mongoose');
var apiController = require('./controllers/apiController');
var port = process.env.PORT || 3000;

var moltin = require('moltin')({
  publicId: 'kHSvM9oGeuM088oRvUlA6EIcszABFNDlE0cMyDP8ap',
  secretKey: 'uMl5ET5O3zI7J2zbIW9Up9sGSEuV3i74pGtsovpAUm'
});

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

mongoose.connect(config.getDbConnectionString());

apiController(app);

app.listen(port);