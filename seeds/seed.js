const sequelize = require('../config/connection');
const { User, Favorite, Movie } = require('../models');


const seedDatabase = async () => {
//create tables, does not seed any data
  await sequelize.sync({ force: true });

  process.exit(0);
};

seedDatabase();