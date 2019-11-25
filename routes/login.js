const express = require('express');
const mysql = require('mysql');
const jwt = require('jsonwebtoken');

const app = express();

/**
 * Login del server --> /login
 */
app.post('/login', (req, res) => {

    // Obtenemos las credenciales
    let body = req.body;

    console.log(body);

    if (body.usuario != 'haya') {
        return res.status(400).json({
            ok: false,
            err: {
                message: '(Usuario) o contraseña incorrectos'
            }
        });
    }

    if (body.contra != '245587467688431df0606fcfa4e6300893ca6630') {
        return res.status(400).json({
            ok: false,
            err: {
                message: 'Usuario o (contraseña) incorrectos'
            }
        });
    }

    let usuario = {
        nombre: "Ángel Haya",
        usuario: "haya",
    };

    let token = jwt.sign({
        usuario: usuario
    }, 'seed-secret-5APROGX-E00-icas-2019-1', {expiresIn: 60 * 60 * 24 *30});

    res.json({
        ok: true,
        usuario: usuario,
        token
    });

});

module.exports = app;



