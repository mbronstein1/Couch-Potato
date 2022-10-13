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
        Poster_Link: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isUrl: true,
            },
        },
        Series_Title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Released_Year: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Certificate: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Runtime: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Genre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        IMDB_Rating: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        Overview: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        Meta_score: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        Director: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Star1:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        Star2:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        Star3:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        Star4:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        No_of_Votes: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Gross: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: false,
        modelName: 'movies',
    }
);

module.exports = Movie;