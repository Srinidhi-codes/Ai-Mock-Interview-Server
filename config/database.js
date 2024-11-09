// const { Sequelize } = require("sequelize");

// const env = process.env.NODE_ENV || 'development';
// const config = require('./config');

// const sequelize = new Sequelize(config[env]);

// module.exports = sequelize;

const {PrismaClient}  = require("@prisma/client");

const prisma = new PrismaClient({
    log:["query"],
});

module.exports = prisma;