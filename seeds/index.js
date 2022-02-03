const sequelize = require('../config/connection');
const seedEmployees = require('./employeeSeedData');
const seedUsers = require('./userSeedData');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedEmployees();

    await seedUsers();

    process.exit(0);
};

seedAll();