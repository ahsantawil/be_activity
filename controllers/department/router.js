const express = require('express');
const router = express.Router();
const { viewDepartment } = require('./controller')

router.get('/', viewDepartment);
module.exports = router;
