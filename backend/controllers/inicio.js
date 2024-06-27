const { response, request } = require('express');

const inicioGet = async (req = request, res = response) => {

    res.json({
        nombre: 'SERGIO MYNOR DAVID FELIPE ZAPETA',
        grupo: 'No. 38'
    });
};

const inicioPut = (req = request, res = response) => {
    const { id } = req.params;
    const idUser = parseInt(id);
    res.json({
        msg: 'put API',
        idUser
    });
};

const inicioPost = async (req = request, res = response) => {
    console.log("iniciopost");
    const { username } = req.body;
    res.json({
        msg: 'post API',
    });
};

const inicioDelete = (req = request, res = response) => {
    const { id } = req.params;
    const idusuario = parseInt(id);
    res.json({
        msg: 'delete API',
        idusuario
    });
};

module.exports = {
    inicioGet,
    inicioPost,
    inicioPut,
    inicioDelete,
}