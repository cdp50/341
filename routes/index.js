const routes = require('express').Router();
const myController = require('../controllers');

routes.get('/', myController.awesome);
routes.get('/superAwesome', myController.superAwesome);


module.exports = routes;