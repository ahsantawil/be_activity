const express = require('express');
const router = express.Router();
const { viewEmply } = require('./controllers')

router.get('/', viewEmply);
module.exports = router;
