var express = require('express');
var router = express.Router();

const data = require('../database/members.json');

/* GET members listing. */
router.get('/', function(req, res, next) {
  console.log('Request has come');
  res.json(data.members);
});

module.exports = router;
