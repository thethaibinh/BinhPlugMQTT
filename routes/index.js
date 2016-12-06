var express = require('express');
var router = express.Router();
// var app = require('express')();
// var http = require('http').Server(app);

// app.get('/', function(req, res){
//   res.send('<h1>Hello world</h1>');
// });

// http.listen(3000, function(){
//   console.log('listening on *:3000');
// });
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
