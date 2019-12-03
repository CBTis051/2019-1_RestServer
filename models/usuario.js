const Sequelize = require('sequelize');
const sequelize = require('../models/db');


const Usuario = sequelize.define('usuario', {
        // attributes
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        nombre: {
            type: Sequelize.STRING,
            allowNull: false
        },
        usuario: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        rol: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        // options
        // Para que no busque los campos createdAt, updatedAt
        timestamps: false,
        // Para que cuando consultemos el modelo, no nos regrese la contraseña
        defaultScope: {
            attributes: { exclude: ['password'] }, 
        }
    }
);

module.exports = Usuario;


