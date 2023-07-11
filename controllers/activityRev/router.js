const express = require('express');
const router = express.Router();
const {viewActivityRev, viewCreateActivityRev } = require('./controllers')

router.get('/', viewActivityRev);
router.get('/add', viewCreateActivityRev);
// router.post('/', actionSignin);
// router.get('/logout', actionLogout);
module.exports = router;
