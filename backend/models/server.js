const express = require('express');
const xmlparser = require('express-xml-bodyparser');
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.server = require('http').createServer(this.app);
        this.io = require('socket.io')(this.server, {
            cors: {
                origin: '*',
            }
        })

        this.grafico = '/grafico'
        this.proceso = '/proceso'
        
        this.middlewares();
        this.routes();

    }

    middlewares() {
        this.app.use(cors());
        this.app.use(xmlparser());
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use('/', require('../routes/inicio'));
        this.app.use(this.grafico, require('../routes/grafico'));
        this.app.use(this.proceso, require('../routes/proceso'));
        this.app.post('/dual',  function(req, resp) {
            let {palabra} = req.body
            let duplicado = palabra+palabra
            resp.json({
                nuevapalabra:duplicado
            })
        });

    }

    listen(port) {
        this.server.listen(port, () => {
            console.log('running on ', port);
        });
    }
}

module.exports = Server;