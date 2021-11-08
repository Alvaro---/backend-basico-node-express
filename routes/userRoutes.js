const { Router } = require('express');
const { usuariosGet, usuariosPost, usuariosDelete, usuariosPut } = require('../controllers/userControl');

const router = Router();

// router.get('/', (req, res) => {
//     res.status(403).json({ 
//         msg: 'get API'
//     })
// }) es mejor separar al controlador. Se corta el callcak y se lo llama de aca.

router.get('/', usuariosGet)

router.put('/:id', usuariosPut) //con ese nombre obtendremos el valor de los parametros de segmento

router.post('/', usuariosPost)

router.delete('/:id', usuariosDelete)

module.exports = router