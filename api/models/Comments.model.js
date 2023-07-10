const sequelize = require('../../db')
const { DataTypes } = require('sequelize')

const Comments = sequelize.define('Comments', 
    {
    comment_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },

    user_id: {type: DataTypes.INTEGER,},
    project_id: {type: DataTypes.INTEGER,},
    content: {type: DataTypes.TEXT,},
    publication_date: {type: DataTypes.DATE},
    },
    { timestamps: false }
);

module.exports = Comments