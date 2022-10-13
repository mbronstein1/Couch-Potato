const User = require('./User');
const Favorite = require('./Favorite');
const Movie = require('./Movie');

User.belongsToMany(Movie, {
    through: {
        model: Favorite,
        unique: false
    },
    as: 'favorite_movies'
});

Movie.belongsToMany(User, {
    through: {
        model: Favorite,
        unique: false
    },
    as: 'favorite_movies'
});

module.exports = {User, Favorite, Movie}
