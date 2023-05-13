const express = require('express');
const router = express.Router();
const contController = require('../controllers/contacts');

router.get('/', contController.getAllContacts);
router.get('/:id', contController.getOneContact);
router.post('/', contController.createContact);
router.put('/:id', contController.updateContact);
router.delete('/:id', contController.deleteContact);

module.exports = router;