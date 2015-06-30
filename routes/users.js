var express = require('express');
var router = express.Router();

/* GET users listing. */


router.get('/userlist', function(req, res, next) {
  
  var db = req.db;
  var collection = db.get('usercollection');
  collection.find({}, {}, function(e, docs){
  	res.render('userlist', {
  		'userlist' : docs
  	})
  })	
  //res.send('new' + req.param('text'));
});


module.exports = router;
