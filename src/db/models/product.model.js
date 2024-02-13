const { Model, DataTypes, Sequelize } = require('sequelize')

const PRODUCT_TABLE = 'products'

const ProductSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    productName: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'name',
    },
    urlImage: {
        type: DataTypes.STRING,
        field: 'url_image'
    },
    price: {
        allowNull: false,
        type: DataTypes.DOUBLE,
    },
    description: {
        type: DataTypes.STRING
    },
    quantity: {
        type: DataTypes.INTEGER
    },
    createAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'create_at',
        defaultValue: Sequelize.NOW
    }
}

class Product extends Model {
    static associate() {
        //relaciones
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: PRODUCT_TABLE,
            modelName: 'Product',
            timestamps: false
        }
    }
}

module.exports = {
    PRODUCT_TABLE,
    ProductSchema,
    Product
}