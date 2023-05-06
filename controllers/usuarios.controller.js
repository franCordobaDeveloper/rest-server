
const { request, response } = require("express")



const usuariosGet = (req = request, res = response ) => {

    const { q, nombre, apikey } = req.query;

    res.json({
        msg: 'Get API - Controlador',
        q,
        nombre,
        apikey
    });
}

const usuariosPost = (req = request, res = response ) => {

    const { nombre, edad } = req.body;

    res.json({
        msg: 'Post API - Controlador',
        nombre,
        edad
    });
}


const usuariosPut = (req = request, res = response ) => {

    const { id } = req.params;

    res.json({
        msg: 'Put API - Controlador',
        id
        
    });
}

const usuariosDelete = (req = request, res = response ) => {
    res.json({
        msg: 'Delete API - Controlador'
    });
}






// Exportaciones
module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
}
