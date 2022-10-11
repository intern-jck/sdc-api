const Product = require('../models/productModel.js');

// GET REQ
const getProducts = (req, res) => {
  console.log('Get All Products', req.query)
  Product.find()
  .limit(10)
  .exec()
  .then((doc) => {
    // doc[0].product_id = req.params.product_id;
    // doc[0].page = 1;
    // doc[0].count = req.query.count;
    res.send(doc);
  })
  .catch((error) => {
    res.sendStatus(404);
    console.log('Get Product Error:', error);
  });
};

const getProduct = (req, res) => {
  console.log('Get Product', typeof req.params.product_id);
  Product.find({'product_id': req.params.product_id})
  .exec()
  .then((doc) => {
    res.send(doc);
  })
  .catch((error) => {
    console.log('Get Product Error:', error);
    res.sendStatus(404);
  });
};

module.exports = {
  getProducts,
  getProduct,
};
