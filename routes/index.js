var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/command', function(req, res, next){
	res.send({text: 'hello world', items: ['a', 'b', 'c']})
})

module.exports = router;
