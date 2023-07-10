const sequelize = require('../../db')
const { DataTypes } = require('sequelize')

const Project_Followers = sequelize.define('Project_Followers', 
    {
    follow_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    user_id: {type:DataTypes.INTEGER,},
    project_id: {type:DataTypes.INTEGER,},
    follow_date: {type:DataTypes.DATE,},
    },
        { timestamps: false }
);

module.exports = Project_Followers