const { Router } = require('express');
const routes = Router();
const testController = require('../controllers/test.controller');

routes.get('/',testController.get);
routes.post('/post',testController.post);
routes.put('/update',testController.update);
routes.delete('/delete',testController.destroy);

module.exports = routes;