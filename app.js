const Server = require('./models/server');
require('dotenv').config();

const server = new Server();

server.listen();


// const express = require('express')
// const app = express()

// app.get('/', (req, res) => {
//     res.send('Hello World')
// })

// app.listen(process.env.PORT, ()=>{
//     console.log(`Corriendo en el puerto ${process.env.PORT}`)
// }) 
// Todo esto enviado a server en models


