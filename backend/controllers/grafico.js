const { response, request } = require('express');
const bdd = require("../db/access");

const graficoGet = async (req = request, res = response) => {

    let dsResp = await bdd
        .select(`SELECT
                    pid, nombre_proceso,
                    SUM(CASE WHEN tipo = 'mmap' THEN size ELSE 0 END) AS total_mmap,
                    SUM(CASE WHEN tipo = 'munmap' THEN size ELSE 0 END) AS total_munmap,
                    SUM(CASE WHEN tipo = 'mmap' THEN size ELSE 0 END) - SUM(CASE WHEN tipo = 'munmap' THEN size ELSE 0 END) AS diferencia
                FROM
                    memoria_proceso
                GROUP BY
                    pid, nombre_proceso
                order by diferencia desc
                limit 10;`)
        .then((result) => {
            res.json(result);
        });

};

const graficoPut = (req = request, res = response) => {
    const { id } = req.params;
    const idUser = parseInt(id);
    res.json({
        msg: 'put API'
    });
};

const graficoPost = async (req = request, res = response) => {
    const { username } = req.body;
    res.json({
        msg: 'post API',
    });
};

const graficoDelete = (req = request, res = response) => {
    const { id } = req.params;
    const idusuario = parseInt(id);
    res.json({
        msg: 'delete API'
    });
};

module.exports = {
    graficoGet,
    graficoPost,
    graficoPut,
    graficoDelete,
}