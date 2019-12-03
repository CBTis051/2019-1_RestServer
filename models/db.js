const Sequelize = require('sequelize');

// Conexión a la BD con sequelize
const sequelize = new Sequelize('proyecto', 'root', 'Acbtis51-', {
    host: 'icas051.tech',
    dialect: 'mysql'
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = sequelize;
