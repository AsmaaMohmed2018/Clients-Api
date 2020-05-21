//node js & database servers requires
const express = require('express');
//a database connection instance started
const database = require('./database');

//Node app server config
const app = express();
const port = 3000;
const serverStarted = `Node server started on port ${port}`;

//Node app server connection
app.listen(port,()=>{
    console.log(serverStarted);
})

//json middleware to handle the sent data(js object) to server & recognize it as a json object
app.use(express.json());