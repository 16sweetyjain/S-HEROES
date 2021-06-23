const express = require('express');
const router = express.Router();

const { signup, signin } = require('../controllers/auth');
const { periodTracker } = require('../controllers/periodTracker');
const { birthControl } = require('../controllers/birthControl');
const { mentalHealth } = require('../controllers/mentalHealth');
const { reproductiveHealth } = require('../controllers/reproductiveHealth');

router.post('/signup', signup);
router.post('/signin', signin);
router.put('/periodTracker',periodTracker);
router.put('/birthControl',birthControl);
router.put('/mentalHealth',mentalHealth);
router.put('/reproductiveHealth',reproductiveHealth);


module.exports = router;