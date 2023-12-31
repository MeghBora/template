const productController = require('../controllers/productController');
const express = require('express');
const Router = express.Router();

Router.route("/getAllProducts").get(productController.getAllProducts);
Router.route("/createProduct").post(productController.createProduct);
Router.route("/updateProducts/:id").put(productController.updateProducts);
Router.route("/deleteProducts/:id").delete(productController.deleteProduct);

module.exports = Router;