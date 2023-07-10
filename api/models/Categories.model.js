const sequelize = require('../../db')
const { DataTypes } = require('sequelize')

const Categories = sequelize.define('Categories', 
    {
    category_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    category_name: {type: DataTypes.STRING,},
    subcategory_name: {type: DataTypes.STRING},
    },
    { timestamps: false });

module.exports = Categories