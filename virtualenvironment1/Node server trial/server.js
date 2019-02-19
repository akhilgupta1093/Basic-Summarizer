var express = require('express'),
	MongoClient = require('mongodb').MongoClient;
	bodyParser = require('body-parser');
var path = require('path');
var db = require('./config/db');
var routes = require('./app/routes/api')
var app = express();
var mongoose = require('mongoose')

const port = 8000;

//app.use(bodyParser.urlencoded({ extended: true }));

//mongoose.Promise = 
//global.Promise; mongoose.connect('mongodb://localhost:27017/texts');
//	.then(res => console.log("Connected to DB"))
//	.catch(err => console.log(err))

app.use(bodyParser.json());

app.use('/api',routes);

//MongoClient.connect(db.url, (err, database) => {
//	if (err) return console.log(err)
//	require('./app/routes')(app, database);

//MongoClient.connect('mongodb://localhost/texts');


app.listen(process.env.port || port, () => {
	console.log('Server is running at ' + port);
});
//})




