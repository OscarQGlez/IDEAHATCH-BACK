const sequelize = require('../../db')
const { DataTypes } = require('sequelize')

const Contributions = sequelize.define('Contributions', 
    {
        /* user_id: {type: DataTypes.INTEGER,}, */
        /* project_id: {type: DataTypes.INTEGER,} ,*/
        contributed_amount: {type: DataTypes.DECIMAL,},
        contribution_date: {type: DataTypes.DATE},
    },
    {   timestamps: false }
);

module.exports = Contributions