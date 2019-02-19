
var express = require('express');
var router = express.Router();
var Text = require('../models/model1')
var app = express();

router.get('/text', function(req,res) {
	console.log(req.query.text),
	res.send(req.query.text);
});

//router.post('/text', function(req,res) {
//	Text.create(req.body).then(function(text) {
//	res.send(text);
//	})
//	.catch(function(err) {
//	res.send("unable to save to databse");
//	});
//});

router.put('/text/:id', function(req,res) {
	res.send({type: 'PUT'});
});

module.exports = router;


