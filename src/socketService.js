import io from 'socket.io-client';

class SocketService {
    constructor() {
        this.socket = null;
    }

    connect() {
        const apiHost = process.env.API_HOST;
        this.socket = io(apiHost);
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

    getPassport(id) {
        return this.emit('getPassport', { id: id });
    }
}

export default new SocketService();
