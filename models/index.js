const User = require('./User');
const Favorite = require('./Favorite');
const Movie = require('./Movie');

User.belongsToMany(Movie, {
    through: {
        model: Favorite,
        unique: false
    },
    as: 'movies'
});

Movie.belongsToMany(User, {
    through: {
        model: Favorite,
        unique: false
    },
    as: 'movies'
});

module.exports = {User, Favorite, Movie}
