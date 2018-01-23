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

    createPassport() {
        return this.emit('createPassport');
    }

    resetPassport(id) {
        return this.emit('resetPassport', { id: id });
    }

    removePassport(id) {
        return this.emit('removePassport', { id: id });
    }

    getPassport(id) {
        return this.emit('getPassport', { id: id });
    }

    changeLanguage(passportId, languageCode) {
        return this.emit('changeLanguage', {
            passportId: passportId,
            languageCode: languageCode
        });
    }

    answerDilemma(passportId, dilemmaId, answerId) {
        return this.emit('answerDilemma', {
            passportId: passportId,
            dilemmaId: dilemmaId,
            answerId: answerId
        });
    }

    getStats() {
        return this.emit('getStats');
    }
}

export default new SocketService();
