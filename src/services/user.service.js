const { models } = require('./../config/sequelize')

class UserService {
    constructor() {}
    
    async getAll () {
        return await models.User.findAll()
    }

    async login(email, password) {
        const user = await models.User.findOne({
            where: { email, password }
        })
        return user ? user : null
    }
}

module.exports = UserService