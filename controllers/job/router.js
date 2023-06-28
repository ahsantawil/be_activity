const express = require('express');
const router = express.Router();
const { viewJob } = require('./controllers')

router.get('/', viewJob);
module.exports = router;
