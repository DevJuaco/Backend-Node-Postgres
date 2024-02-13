const { Router } = require('express')
const { getUsers, loginUser } = require('../controllers/users.controller')

const router = Router()

router.get('/', getUsers)
router.post('/login', loginUser)

module.exports = router