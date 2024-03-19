const express = require('express');
const router = express.Router();

const nikeController = require('../controllers/nikeCollection');
const validation = require('../middleware/validate');


router.get('/', nikeController.getAll);

router.get('/:id', nikeController.getSingle);

router.post('/', validation.saveShoe, nikeController.createShoe);

router.put('/:id', validation.saveShoe, nikeController.updateShoe);

router.delete('/:id', nikeController.deleteShoe);

module.exports = router;


