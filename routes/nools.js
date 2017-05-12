/**
 * Created by lucasdeoliveira on 12/05/2017.
 */
var express = require('express');
var router = express.Router();


var rules = require('../rules/jsonNools.json');

router.get('/', function(req, res, next) {
    res.send(rules);
});


/* GET home page. */
/*
router.get('/', function(req, res, next) {
    res.render('./noolsStructure/noolsRender', { title: 'Nools' });
});
*/
module.exports = router;