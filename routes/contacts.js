const express = require('express');
const router = express.Router();
const contController = require('../controllers/contacts');

router.get('/', contController.getAllContacts);
router.post('/createContacts', contController.createContacts);
module.exports = router;