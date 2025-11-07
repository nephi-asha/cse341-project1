const express = require('express');

const userController = require('../controllers/user');

const router = express.Router();

// GET /feed/posts
router.get('/', userController.getData);
router.get('/:id', userController.getSingleData);

module.exports = router;