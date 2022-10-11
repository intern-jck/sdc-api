const express = require('express');
const router = express.Router();

const {
  getProducts,
  getProduct,
  } = require('../controllers/productsController.js');

router.get('/', getProducts);

router.get('/:product_id', getProduct);

module.exports = router;
