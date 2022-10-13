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
            type: DataTypes.TEXT,
            validate: {
                isUrl: true,
            },
        },
        Series_Title: {
            type: DataTypes.TEXT,
            defaultValue: "xxxxx"
        },
        Released_Year: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        Certificate: {
            type: DataTypes.TEXT,
            defaultValue: "xxxxx"
        },
        Runtime: {
            type: DataTypes.TEXT,
            defaultValue: "xxxxx"
        },
        Genre: {
            type: DataTypes.TEXT,
            defaultValue: "xxxxx"
        },
        IMDB_Rating: {
            type: DataTypes.DECIMAL(10,2),
            defaultValue: 0
        },
        Overview: {
            type: DataTypes.TEXT,
            defaultValue: "xxxxx"
        },
        Meta_score: {
            type: DataTypes.TEXT,
            defaultValue: "xxxx"
        },
        Director: {
            type: DataTypes.TEXT,
            defaultValue: "xxxxx"
        },
        Star1:{
            type: DataTypes.TEXT,
            allowNull: false,
            defaultValue: "xxxxx"
        },
        Star2:{
            type: DataTypes.TEXT,
            defaultValue: "xxxxx"
        },
        Star3:{
            type: DataTypes.TEXT,
            defaultValue: "xxxxx"
        },
        Star4:{
            type: DataTypes.TEXT,
            defaultValue: "xxxxx"
        },
        No_of_Votes: {
            type: DataTypes.TEXT,
            defaultValue: 0
        },
        Gross: {
            type: DataTypes.TEXT,
            defaultValue: "xxxxx"
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