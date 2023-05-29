const express = require('express');
const router = express.Router();
const { viewCreate, viewActivity } = require('./controllers')

router.get('/', viewCreate);
router.get('/data', viewActivity);
// router.post('/', actionSignin);
// router.get('/logout', actionLogout);
module.exports = router;
