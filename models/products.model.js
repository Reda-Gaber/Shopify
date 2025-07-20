const mongoose = require("mongoose");

const URL = "mongodb://localhost:27017/data";

const productSchema = mongoose.Schema({
    name: String,
    image: String,
    description: String,
    category: String,
    price: Number
});

const product = mongoose.model("product", productSchema);

// get all products
exports.getProducts = () => {
    return mongoose
    .connect(URL)
    .then(() => product.find({}))
    .catch((err) => {
    console.error("Error while fetching products:", err);
    throw err;
    })
    .finally(() => mongoose.disconnect())
}