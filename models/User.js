const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8],
                isAlphanumeric: true,
            },
        },
    },
    {
        hooks: {
           beforeCreate: async (newUserData) => {
            newUserData.email = await newUserData.email.toLowerCase();
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
           },
           beforeUpdate: async (updatedUserData) => {
            updatedUserData.email = await updatedUserData.email.toLowerCase();
            return updatedUserData;
           },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
    }
);

module.exports = User;