const express = require('express');
const userController = require('../controllers/user');
const router = express.Router();

// GET /feed/posts
router.use = require("express").Router();
router.get('/', userController.getAll);
router.post('/', userController.createContact)
router.get('/:id', userController.getSingle);
router.put('/:id', userController.updateContact);
router.delete('/:id', userController.deleteContact);

module.exports = router;