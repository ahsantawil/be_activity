const express = require('express');
const router = express.Router();
const { viewDepartment } = require('./controller')

router.get('/', viewDepartment);
// router.get('/data', viewActivity);
// router.post('/', actionSignin);
// router.get('/logout', actionLogout);
module.exports = router;
