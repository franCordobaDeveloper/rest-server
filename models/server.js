
// Configuracion de express
const express = require('express');

class Server {

    constructor() {

        this.app = express();
        this.port = process.env.PORT;

        // Middlewares
        this.middlewares();

        // Rutas de mi app
        this.routes();
    }

    // Middlewares
    middlewares() {

        // Directorio Publico
        this.app.use( express.static('public') );
    }


    // Metodos
    routes() {
        this.app.get('/', (req = express.request, res = express.response ) => {
            res.send("Hello mundo");
        })
    }


    listen() {
        this.app.listen( this.port, () => {
            console.log('Servervidor corriendo en puerto', this.port );
        });
        
    }

}




module.exports = Server;