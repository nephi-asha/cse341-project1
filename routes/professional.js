const express = require('express');

const professionalController = require('../controllers/professional');

const router = express.Router();

// GET /feed/posts
router.get('/', professionalController.getData);
router.get('/:id', professionalController.getSingleData);

module.exports = router;