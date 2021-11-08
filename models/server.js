const express = require('express')
const cors = require('cors') // postman se salta el cors

class Server {

    constructor() {
        this.app = express()
        this.port = process.env.PORT
        this.usuariosRoutePath = '/api/usuarios'

        //middlewares
        this.middlewares()

        //rutas
        this.routes();
    }

    middlewares() { // toodos los .use son middleware
        this.app.use(cors())

        //Lectura y parseo del body - para recibir datos del json
        this.app.use(express.json())

        //directorio publico
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.usuariosRoutePath, require('../routes/userRoutes'))
        // //endpoints
        // this.app.get('/api', (req, res) => {
        //     // res.send('Hello World') //Devuelve la respuesta como texto. 
        //     // res.json('Hola mundo')
        //     res.status(403).json({ // 403 status error de rechazo
        //         // ok: true, // No es necesatio por que ya va con el satus 200 si es ok Se puede poner manualmente con status
        //         msg: 'get API'
        //     })
        // })

        // // Los 400 sirven para indicar cual es el error al frontend
        // // errores 500 son fallos del servidor. Estos deberian ir en un log
        // // Los 300 son redirecciones} los errores son ok

        // this.app.put('/api', (req, res) => {
        //     res.status(403).json({ 
        //         msg: 'put API'
        //     })
        // })

        // this.app.post('/api', (req, res) => {
        //     res.status(201).json({  //200 ok, 201 creado
        //         msg: 'post API'
        //     })
        // })

        // this.app.delete('/api', (req, res) => {
        //     res.status(403).json({ 
        //         msg: 'delete API'
        //     })
        // })
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Corriendo en el puerto ${this.port}`)
        })
    }
}

module.exports = Server