const express = require('express');
const router = express.Router();
const groupController = require('../controllers/groupController');

router.get('/', groupController.getAllGroups);
router.get('/:id', groupController.getGroupById);
router.get('/search', groupController.searchGroups);

module.exports = router; 