const { response, request } = require('express');
const bdd = require("../db/access");

const procesoGet = async (req = request, res = response) => {

    const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const results = {};

    let dsResp = await bdd
        .select(`select id, pid, nombre_proceso, tipo, size, timestamp from memoria_proceso order by 1 desc;`)
        .then((result) => {

            results.total = result.length;
            results.procesos = result.slice(startIndex, endIndex);

            res.json(results);
        });

};

const procesoPut = (req = request, res = response) => {
    const { id } = req.params;
    const idUser = parseInt(id);
    res.json({
        msg: 'put API'
    });
};

const procesoPost = async (req = request, res = response) => {
    const { username } = req.body;
    res.json({
        msg: 'post API',
    });
};

const procesoDelete = (req = request, res = response) => {
    const { id } = req.params;
    const idusuario = parseInt(id);
    res.json({
        msg: 'delete API'
    });
};

module.exports = {
    procesoGet,
    procesoPost,
    procesoPut,
    procesoDelete,
}