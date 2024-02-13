const UserService = require('./../services/user.service')

const service = new UserService

async function getUsers (req, res) {
    try {
        const allUsers = await service.getAll()
        res.json({
            ok: true,
            allUsers
        })
    } catch (error) {
        console.error(error)
        res.json({
            ok: false,
            msg: 'Error al obtener los productos'
        })
    }
}

module.exports = {
    getUsers
}