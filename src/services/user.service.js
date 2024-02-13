const { models } = require('./../config/sequelize')

class UserService {
    constructor() {}
    
    async getAll () {
        return await models.User.findAll()
    }
}

module.exports = UserService