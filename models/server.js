
// Configuracion de express
const express = require('express');
const cors = require('cors');

class Server {

    constructor() {

        this.app = express();
        this.port = process.env.PORT;


        // API Usuarios
        this.usuariosPath = '/api/usuarios';

        // Middlewares
        this.middlewares();

        // Rutas de mi app
        this.routes();
    }

    // Middlewares
    middlewares() {
        
        // CORS
        this.app.use( cors() );

        // Lectura y parseo del body
        this.app.use( express.json() );

        // Directorio Publico
        this.app.use( express.static('public') );
    }


    // Metodos
    routes() {

        this.app.use( this.usuariosPath , require('../routes/usuarios') );

        
    }


    listen() {
        this.app.listen( this.port, () => {
            console.log('Servervidor corriendo en puerto', this.port );
        });
        
    }

}




module.exports = Server;