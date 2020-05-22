const express = require('express');
const router = express.Router();
const controller = require('../controllers/client-controller');
//controllers functions 
const FindAll = controller.FindAllClients; 
const createNew = controller.CreateNew;
const updateClient = controller.updateClient;
const deleteClient = controller.deleteClient;
//routes crud operations
router.get('/', FindAll);
router.post('/', createNew);
router.put('/:id',updateClient);
router.delete('/:id',deleteClient);

module.exports = router;