class Sockets {

    constructor(io) {
        this.io = io;
        this.socketEvents();
    }

    socketEvents() {
        this.io.on('connection', async (socket) => {
            console.log("conectado");
        });
    }
}

module.exports = Sockets;