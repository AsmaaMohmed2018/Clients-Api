# Clients-Api

## Used Technologies 

- Node js v12.16.1 
- mongo db
- express v4.17.1
- mongoose v5.7.6

## Project setup
```
- npm install
```

## Compiles and hot-reloads for development
- open mongo server on 127.0.0.1 (local host) on port 27017
- cd project folder & open it with vs code (text editor)
- type the following in the terminalto start node app server & be ready for requests :
```
nodemon index.js
```
- open postman desktop app to start sending http requests & see responses to test 


## Test cases (available routs & responses)
### method : Get , Route : 'http://localhost:3000/clients'
get all clients, 
 response: 
 ```json
 [
    {
        "_id": "5ec6f46f0ce8f732c86ce7bf",
        "name": "asmaaMohmed"
    },
    {
        "_id": "5ec6f4dd0ce8f732c86ce7c1",
        "name": "Mohmed"
    },
    {
        "_id": "5ec6f5050ce8f732c86ce7c2",
        "name": "mariam"
    }
]
```

### method : post , Route : 'http://localhost:3000/clients'
body : ```json{"name":"asia"}```
create new client in request body ,
response:
  
 ```json
success
```

### method : put , Route : 'http://localhost:3000/clients/Mohmed'
body : ```json{"name":"lila"}```
update client which name = 'lila',
 response: 
 ```json
success
```

### method : delete , Route : 'http://localhost:3000/clients/Mohmed'
body : ```json{"name":"mariam"}```
delete client which name = 'mariam',
 response: 
 ```json
success
```
