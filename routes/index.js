var express = require('express');
var router = express.Router();
let controller = require('../controller/Controller');

/* GET home page. */
router.get('/conversion', controller.compare);

module.exports = router;
