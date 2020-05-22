const database = require('mongoose');
//create mongoose client schema
const ClientSchema = new database.Schema({name:{type:String, required: true, unique: true}});
//create client model from schema
const ClientModel = database.model('Client', ClientSchema);

module.exports = ClientModel;