const { Product, ProductSchema } = require('./models/product.model')
const { UserSchema, User } = require('./models/user.model')

function setupModels(sequelize) {
    Product.init(ProductSchema, Product.config(sequelize))
    User.init(UserSchema, User.config(sequelize))
}

module.exports = setupModels