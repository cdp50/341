const contModel = require('../models/contModel');

const controllerCont = {};

// Get all contacts
controllerCont.getAllContacts = async (req, res) => {
    try {
      const contacts = await contModel.find();
      console.log("the controller already called the model find function")
      res.status(200).json(contacts);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

// Create new Contacts
controllerCont.createContacts = async (req, res) => {
    try {
      const Contact = await contModel.create(req.body);
      res.status(201).json(Contact);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  module.exports = controllerCont;