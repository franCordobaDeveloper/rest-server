
// Configuracion de express
const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server {

    constructor() {

        this.app = express();
        this.port = process.env.PORT;


        // rutas
        this.paths = {
            auth:       '/api/auth',
            buscar:     '/api/buscar',
            categorias: '/api/categorias',
            productos: '/api/productos',
            usuarios:   '/api/usuarios',
        }

        // Conectar a base de datos
        this.conectarDB();

        // Middlewares
        this.middlewares();

        // Rutas de mi app
        this.routes();
    }

    // Metodo coneccion a db
    async conectarDB () {
        await dbConnection();
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

        this.app.use( this.paths.usuarios ,  require('../routes/usuarios') );
        this.app.use( this.paths.categorias, require('../routes/categorias') );
        this.app.use( this.paths.productos,  require('../routes/productos') );

        // ruta de busqueda
        this.app.use( this.paths.buscar,     require('../routes/buscar') );
        
        // ruta de autenticacion
        this.app.use( this.paths.auth,       require('../routes/auth') );
        
    }


    listen() {
        this.app.listen( this.port, () => {
            console.log('Servervidor corriendo en puerto', this.port );
        });
        
    }

}




module.exports = Server;