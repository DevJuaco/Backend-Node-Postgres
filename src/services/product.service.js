const { models } = require('./../config/sequelize')

class ProductService {
    constructor(){}

    async getAll() {
        return await models.Product.findAll()
    }

    async getById(id) {
        return await models.Product.findByPk(id)
    }
}

module.exports = ProductService