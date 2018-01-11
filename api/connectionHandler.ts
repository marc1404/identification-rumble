import Socket = SocketIO.Socket;
import eventHandler from './eventHandler';

class ConnectionHandler {
    events = [
        'getPassports',
        'createPassport',
        'removePassport',
        'getDilemmas',
        'getDilemmaBySlug'
    ];

    handle(socket: Socket) {
        this.events.forEach(event => this.registerEvent(socket, event));
    }

    registerEvent(socket, event) {
        socket.on(event, async (data, callback) => {
            try {
                const result = await eventHandler[event](data);

                callback(result);
            } catch (error) {
                console.error(error);
                callback(null);
            }
        });
    }
}

export default new ConnectionHandler();
