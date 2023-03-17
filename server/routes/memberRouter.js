var express = require('express');
//var router = express.Router();

const data = require('../database/members.json');

/* GET members listing. */
function routeMemberQueries (router){
  router.route('/')
    .get(function(req, res, next) {
      res.json(data.members);
    });

router.route('/:name')
  .get(function(req, res, next) {
  const memb = data.members.filter(member => member.firstName === req.params.name)
  res.json(memb[0]);
  });

  return router;
}

module.exports = routeMemberQueries;
