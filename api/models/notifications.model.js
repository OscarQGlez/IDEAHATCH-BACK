const sequelize = require('../../db')
const { DataTypes } = require('sequelize')

const Notifications = sequelize.define('Notifications', 
    {
        /*user_id: {type: DataTypes.INTEGER,},
        project_id: {type: DataTypes.INTEGER,},*/
        content: {type: DataTypes.TEXT,},
        sending_date: {type: DataTypes.DATE,},
        check: {type: DataTypes.BOOLEAN,}
    },
        { timestamps: false }
    );

module.exports = Notifications

