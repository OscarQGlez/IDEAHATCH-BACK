const sequelize = require('../../db')
const { DataTypes } = require('sequelize')

const Ratings = sequelize.define('Ratings', 
    {
       /* user_id: {type: DataTypes.INTEGER,},
        project_id: {type: DataTypes.INTEGER,},*/
        score: {type: DataTypes.INTEGER,},
        rating_date: {type: DataTypes.DATE,},
    },
        { timestamps: false }
);

module.exports = Ratings