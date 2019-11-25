const express = require('express');

const app = express();

/**
 * Home del server --> /
 */
app.get('/', (req, res) => {

    let objeto = {
        mensaje: "Bienvenidos al REST server - 5APROGX Equipo 00"
    };

    res.send(objeto);

});

module.exports = app;



