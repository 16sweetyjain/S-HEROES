const express = require('express');
const router = express.Router();


const { signup, signin } = require('../controllers/auth');
const { periodTracker } = require('../controllers/periodTracker');

router.post('/signup', signup);
router.post('/signin', signin);
router.post('/periodTracker',periodTracker);

module.exports = router;