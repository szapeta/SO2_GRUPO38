const { Router } = require('express');
const { inicioGet,
    inicioPut,
    inicioPost,
    inicioDelete } = require('../controllers/inicio');

const router = Router();

router.get('/', inicioGet);

router.put('/', inicioPut);

router.post('/', inicioPost);

router.delete('/', inicioDelete);

module.exports = router;