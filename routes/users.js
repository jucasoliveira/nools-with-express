var express = require('express');
var router = express.Router();

var json = require('../rules/jsonNools.json');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(json);
});

module.exports = router;
