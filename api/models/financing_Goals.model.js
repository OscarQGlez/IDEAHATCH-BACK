const sequelize = require('../../db')
const { DataTypes } = require('sequelize')

const Financing_Goals = sequelize.define('Financing_Goals', 
    {
        /* project_id: {type: DataTypes.INTEGER,}, // fuera */
        goal_amount: {type: DataTypes.DECIMAL,},
        goal_creation_date: {type: DataTypes.DATE},
    },
    {   timestamps: false }
);

module.exports = Financing_Goals