const { response } = require('express') //agregar eso solo ayuda a que el editor reconosca mejor las opcines de la respuesta

const usuariosGet = (req = request, res = response) => {
    // Los get pueden tener query params. Esto es distinto de los parametros de segmento. En la ruta se separan por ? en lugar de / ?h='hola'&nombre=Alvaro ...
    // Expres ya los parsea y no hay que hacer nada en la ruta. a diferencia de los parametros de segmento. Ademas estos son opcionales. los de segmento son obligatorios
    // const query = req.query
    //En este caso es mejor desetructurar 
    const {q, nombre='no name', id, page=1, limit=15} = req.query // Esto sirve para dar valores iniciales. Se usa para paginar
    res.status(200).json({
        msg: 'get API - controlador',
        q,nombre,id, page, limit
    })
}

const usuariosPost = (req, res) => {
    // const body = req.body; // Se debe limpiar inyeccion de dependencias y demas
    const {nombre, edad} = req.body; // se puede jalar todo el body o por datos. esto da mayor seguridad

    res.status(201).json({  //200 ok, 201 creado
        msg: 'post API',
        // body
        nombre, edad// Si se coloca solo los datos se acepta, pero si hhay otros no llegaran. es buena forma de validar para tener mayor seguridad
    })
}

// put usa parametros de segmento, que son añadidos en la URL 
const usuariosPut = (req, res) => {

    // const id=re.params.id;
    const {id}=req.params;
    res.status(403).json({ 
        msg: 'put API',
        id
    })
}

const usuariosDelete = (req, res) => {
    const id=re.params.id;
    res.status(403).json({ 
        msg: 'delete API',
        id
    })
}



module.exports = {
    usuariosGet,
    usuariosDelete,
    usuariosPost,
    usuariosPut
}