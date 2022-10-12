const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Movie extends Model { }

Movie.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        series_title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        genre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        released_year: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        overview: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        director: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        poster_link: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isUrl: true,
            },
        },
        star1: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        star2: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        star3: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        star4: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'movie',
    }
);

module.exports = Movie;