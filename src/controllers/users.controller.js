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

async function loginUser (req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Email y contraseña son requeridos.' });
  }

  const user = await service.login(email, password);
  if (!user) {
    return res.status(401).json({ message: 'Credenciales inválidas.' });
  }

  return res.status(200).json({ message: 'Autenticación exitosa.', user });
}

module.exports = {
    getUsers,
    loginUser
}