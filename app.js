var express     = require('express');
var bodyParser  = require('body-parser');
var nconf       = require('nconf');
var request     = require('request');
var mongoose = require('mongoose');

var app = express();


var APP_ENV = process.env.ENVIRONMENT;
if(APP_ENV == undefined){ APP_ENV = "pre" }

nconf.file('config',  'config/' + APP_ENV + '/config.json');

console.log('ENVIRONMENT: ' + nconf.get('APP_ENV') );

app.use (function (req, res, next) {
  console.log ("inside middleware");
  next();
});

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json(), function (req, res, next) {
    //Enable CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    console.log({originalUrl: req.originalUrl, ip: req.ip, method: req.method, body: req.body}, "Incoming request..."); //Log request...
    next();
});

app.listen(nconf.get('APP_PORT'));

/*
 * Conecction database thai
 */
mongoose.connect('mongodb://localhost:27017/thai');

var db = mongoose.connection;
db.on('error', function()  { console.log('ERROR Connected database! '); });
db.once('open', function() { console.log('Connected with database!  '); });


require('./src/routes/routes-user')(app, request);
require('./src/routes/routes-service')(app, request);
require('./src/routes/routes-product')(app, request);


console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx");

