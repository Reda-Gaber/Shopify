const productModel = require("../models/products.model");

exports.home = (req, res, next) => {
    

    const products = productModel.getProducts().then((products => {
        res.render("index", {
            products: products
        })
    }))

}

