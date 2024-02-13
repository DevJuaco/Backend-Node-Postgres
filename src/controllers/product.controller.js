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

async function getProductById (req, res) {
    try {
        const{ id } = req.params
        const Product = await service.getById(id)
        res.json({
            ok: true,
            Product
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
    getAllProducts,
    getProductById
}