var express = require('express');
var router = express.Router();

// server/routes/index.js
router.get('/', function(req, res, next) {
  res.render('index', { user: { displayName: 'John Smith' } });
});

module.exports = router;
