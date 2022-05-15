const {Sequelize} = require('sequelize');

const db = new Sequelize('sakila', 'root', 'Mariobrosx2021', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = db;