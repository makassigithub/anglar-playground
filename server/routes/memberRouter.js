var express = require('express');
var router = express.Router();

const data = require('../database/members.json');

/* GET members listing. */
router.get('/:name', function(req, res, next) {
  console.log(' getting a member by name');
  const memb = data.members.filter(member => member.firstName = req.params.name)
  res.json(memb[0]);
});

router.get('/', function(req, res, next) {
  console.log('getting all members');
  res.json(data.members);
});

module.exports = router;
