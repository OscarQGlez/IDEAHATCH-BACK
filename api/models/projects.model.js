const sequelize = require('../../db')
const { DataTypes } = require('sequelize')

const Projects = sequelize.define('Projects',
    {
        /*creator_id: {type: DataTypes.INTEGER,},*/
        title: {type: DataTypes.STRING,},
        subtitle: {type: DataTypes.TEXT,},
        Project_Description: {type: DataTypes.TEXT,},
        Deadline: {type: DataTypes.DATE,},
        Status: {type: DataTypes.STRING,},
        Project_Creation_Date: {type: DataTypes.DATE,},
        Project_Update_Date: {type: DataTypes.DATE,},
        Project_Type: {type: DataTypes.STRING,},
    },
        { timestamps: false }
);
module.exports = Projects