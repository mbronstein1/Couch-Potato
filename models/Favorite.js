const { Model, DataTypes } = require('sequelize');
const seqeuelize = require('../config/connection');

class Favorite extends Model { }

Favorite.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false, 
            references: {
                
            }
        },
        movie_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }      
    }
)