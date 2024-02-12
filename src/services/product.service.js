const { models } = require('./../config/sequelize')

class ProductService {
    constructor(){}

    async getAll() {
        return await models.Product.findAll()
    }
}

module.exports = ProductService