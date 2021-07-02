const express = require('express');
const router = express.Router();

const { signup, signin } = require('../controllers/auth');
const { periodTracker } = require('../controllers/periodTracker');
const { birthControl } = require('../controllers/birthControl');
const { mentalHealth } = require('../controllers/mentalHealth');
const { reproductiveHealth } = require('../controllers/reproductiveHealth');
const { profile } = require('../controllers/profile');
const {menstrualCondition} = require('../controllers/menstrualCondition');

router.post('/signup', signup);
router.post('/signin', signin);
router.post('/periodTracker',periodTracker);
router.post('/birthControl',birthControl);
router.post('/mentalHealth',mentalHealth);
router.post('/reproductiveHealth',reproductiveHealth);
router.post('/profile',profile);
router.post('/menstrualCondition',menstrualCondition);



module.exports = router;