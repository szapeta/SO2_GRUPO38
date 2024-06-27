const { Router } = require('express');
const { procesoGet,
    procesoPut,
    procesoPost,
    procesoDelete } = require('../controllers/proceso');

const router = Router();

router.get('/', procesoGet);

router.put('/', procesoPut);

router.put('/:id', procesoPut);

router.post('/', procesoPost);

router.delete('/:id', procesoDelete);

router.delete('/', procesoDelete);

module.exports = router;