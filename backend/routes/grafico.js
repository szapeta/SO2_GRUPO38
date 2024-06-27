const { Router } = require('express');
const { graficoGet,
    graficoPut,
    graficoPost,
    graficoDelete } = require('../controllers/grafico');

const router = Router();

router.get('/', graficoGet);

router.put('/', graficoPut);

router.put('/:id', graficoPut);

router.post('/', graficoPost);

router.delete('/:id', graficoDelete);

router.delete('/', graficoDelete);

module.exports = router;