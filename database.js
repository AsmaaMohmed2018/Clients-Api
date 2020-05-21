//import mongoose framework to connect to database
const mongoose = require('mongoose');

//server wich database listen to on mongo default port 27017
const server = '127.0.0.1:27017';
//created mongo db name
const database = "clients-db";
//messages shown when connection success or fail
const success = `database connected on ${server} database: ${database}`;
const fail = `database failed to connect on ${server}`;

// db connection
class DataBase{
    constructor(){
        this._connect();
    }

    _connect(){
        mongoose.connect(`mongodb://${server}/${database}`,{useNewUrlParser: true,useUnifiedTopology: true}).
        then(()=>{
            console.log(success);
        }).
        catch(()=>{
            console.log(fail);
        })
    }
}
//create new instance (object) from database class to import it in entry file index.js
module.exports = new DataBase();