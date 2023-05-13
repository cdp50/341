const contModel = require('../models/contModel');

const controllerCont = {};

// Get all contacts
controllerCont.getAllContacts = async (req, res) => {
    try {
      const contacts = await contModel.find();
      res.status(200).json(contacts);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

controllerCont.getOneContact = async (req, res) => {
try {
  const {id} = req.params;
  const Contact = await contModel.findById(id);
  res.status(200).json(Contact);
} catch (err) {
  res.status(500).json({ message: err.message });
}
};

// Create new Contacts
controllerCont.createContact = async (req, res) => {
    try {
      const Contact = await contModel.create(req.body);
      console.log(Contact)
      res.status(201).json(Contact);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

// edit Contacts
controllerCont.updateContact = async (req, res) => {
    try {
      const {id} = req.params;
      const Contact = await contModel.findByIdAndUpdate(id,req.body)
      res.status(204).json(Contact);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

// edit Contact
controllerCont.deleteContact = async (req, res) => {
    try {
      const {id} = req.params;
      const Contact = await contModel.findByIdAndDelete(id)
      res.status(200).json(Contact);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };


  
  module.exports = controllerCont;