const sequelize = require('../../db')
const { DataTypes } = require('sequelize')

const Categories = sequelize.define('Categories', 
    {
        category_name: {type: DataTypes.STRING,},
        /*subcategory_name: {type: DataTypes.STRING},*/
    },
    {   timestamps: false });

module.exports = Categories