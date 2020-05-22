const clientModel = require('../models/clients');
const successMessage = 'success';

//find all clients
function FindAllClients(req,res,next){
    clientModel.find().then((client)=>{
        res.send(client);
    }).catch((err)=>{
        next(err);
    })
}

//create new client and handle mongo errors
function CreateNew(req,res,next){
    const clientMod = new clientModel(req.body);
    clientMod.save().
        then(()=>{
            res.send(successMessage);
        }).
        catch((err)=>{
            if (err.name == 'MongoError'
            || err.name == 'CastError'
            && err.code){
                res.statusCode = 400;
                next(err);
            }
            else next(err);
        })
}

//update client by it's name as route parameters and handle mongo errors

function updateClient(req,res,next){
    console.log(req.params.id);
    const updatedClient = req.body;
    clientModel.findOneAndUpdate({name:req.params.id},updatedClient,(err)=>{
        if(err){
            if (err.name == 'MongoError'
            || err.name == 'CastError'
            && err.code){
                res.statusCode = 400;
                next(err);
            }
            else next(err);
        }
        else{
            res.send(successMessage);
        }
    })
}

//delete client by it's name as a routr parameter and handle mongo errors 
function deleteClient(req,res,next){
    clientModel.findOneAndDelete({name:req.params.id},(err)=>{
        if(err){
            if (err.name == 'MongoError'
            || err.name == 'CastError'
            && err.code){
                res.statusCode = 400;
                next(err);
            }
            else next(err);
        }
        else{
            res.send(successMessage);
        }
    })
}

module.exports = {
    FindAllClients:FindAllClients,
    CreateNew : CreateNew,
    updateClient : updateClient,
    deleteClient : deleteClient
}