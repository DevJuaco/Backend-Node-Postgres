const { Product, ProductSchema } = require('./models/product.model')

function setupModels(sequelize) {
    Product.init(ProductSchema, Product.config(sequelize))
}

module.exports = setupModels