var express = require('express');
var router = express.Router();
var plugInfo = require("../models/plug");
/* GET api page. */
router.get('/', function(req, res, next) {
  res.render('api');
});

router.post('/add', function(req, res, next) {
  var plug = new plugInfo;
  plug.name = req.body.name;
  plug.status = req.body.status;
  plug.save( err => {
  	if(err) {
  		return console.log(err);
  	}
  	// return res.status(200);
  	res.send("Name: ", req.body.name);
  	res.send("Status: ", req.body.status);
  	return res.end();
  });
});

router.get('/add', function(req, res, next) {
  var plug = new plugInfo();
  plug.name = req.query.name;
  plug.status = req.query.status;
  plug.save( err => {
  	if(err) {
  		return console.log(err);
  	}
  	// return res.status(200);
  	res.send(req.query);
  });
});

router.get('/edit', function(req, res, next) {
  	plugInfo.findOne({"name": req.query.name}, (err, plug) => {
  		plug.status = req.query.status;
  		plug.save( err => {
  		if(err) {
  			return console.log("Not plugs matching!!");
  		}
  		res.send(req.query);
  	});
  });
});

router.get('/get/:name', function(req, res, next) {
  plugInfo.findOne({"name": req.params.name}, (err, plug) => {  
    res.send(plug.status);
    //console.log(plug);
    res.end();
  });
});

module.exports = router; 