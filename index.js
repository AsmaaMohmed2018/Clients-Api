//node js & database servers requires
const express = require('express');
//a database connection instance started
const database = require('./database');
//Route imports
const clientRoute = require('./routes/clientRoute');
//error handle middleware 
const errorHandle = require('./middlewares/errorHandle');
//Node app server config
const app = express();
const port = 3000;
const serverStarted = `Node server started on port ${port}`;

//json middleware to handle the sent data(js object) to server & recognize it as a json object
app.use(express.json());
app.use('/clients',clientRoute);


// error handle middleware
app.use(errorHandle);
//Node app server connection
app.listen(port,()=>{
    console.log(serverStarted);
})

