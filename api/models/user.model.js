const sequelize = require('../../db')
const { DataTypes } = require('sequelize')

const Users = sequelize.define('Users', 
    {
        name: { type:DataTypes.STRING, },
        lastname: { type: DataTypes.STRING, },
        email:{ 
            type:DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        mobile_Phone: { type: DataTypes.STRING,},
        password:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: { len: [8, 100], }
        },
        date_of_Birth: { type: DataTypes.DATE,},
        country:  { type: DataTypes.STRING, },
        user_type :{ type: DataTypes.STRING },
        usertype: { type: DataTypes.STRING, defaultValue: "user" }
    },
        { timestamps: false },
);

module.exports = Users