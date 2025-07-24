const express = require('express');
const router = express.Router();
const { getOnboardingContent } = require('../controllers/contentController');

router.get('/onboarding', getOnboardingContent);

module.exports = router;