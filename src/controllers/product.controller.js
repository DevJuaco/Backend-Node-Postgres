const { getAll } = require('./../services/product.service')
const ProductService = require('./../services/product.service')

const service = new ProductService

async function getAllProducts (req, res) {
    try {
        const allProducts = await service.getAll()
        res.json({
            ok: true,
            allProducts
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
    getAllProducts
}