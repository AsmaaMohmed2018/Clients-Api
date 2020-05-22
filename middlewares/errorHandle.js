function errorHandle(err, req, res, next){
    if(res.statusCode != 200)
        res.send(err.message);
        
    else{
        res.statusCode = 500;
        res.send(err.message);
        
    }
}

module.exports = errorHandle;