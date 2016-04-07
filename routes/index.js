var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'OwnMeet 遇到未知,随机跳转到一个好玩的网站' });
});

module.exports = router;