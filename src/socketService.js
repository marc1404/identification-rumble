import io from 'socket.io-client';

class SocketService {
    constructor() {
        this.socket = null;
    }

    connect() {
        this.socket = io('http://localhost:3001');
    }

    getSocket() {
        if (!this.socket) {
            this.connect();
        }

        return this.socket;
    }

    emit(event, payload = null) {
        return new Promise(resolve => {
            this.getSocket().emit(event, payload, response =>
                resolve(response)
            );
        });
    }

    getPassports() {
        return this.emit('getPassports');
    }

    createPassport(hasJewishAncestry) {
        return this.emit('createPassport', {
            hasJewishAncestry: hasJewishAncestry
        });
    }

    removePassport(id) {
        return this.emit('removePassport', { id: id });
    }

    getDilemmas() {
        return this.emit('getDilemmas');
    }
}

export default new SocketService();
