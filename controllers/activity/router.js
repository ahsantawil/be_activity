const express = require('express');
const router = express.Router();
const { viewCreate, viewActivity } = require('./controllers')

router.get('/', viewActivity);
router.get('/add', viewCreate);
// router.post('/', actionSignin);
// router.get('/logout', actionLogout);
module.exports = router;
