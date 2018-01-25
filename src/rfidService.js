import socketService from './socketService';

class RfidService {
    constructor() {
        this.connection = null;
        this.rfid = null;
        this.listeners = [];
        this.tagMapping = {};
    }

    async connect() {
        const url = 'ws://localhost:8989/phidgets';
        const options = { name: 'test', passwd: '' };
        this.connection = new jPhidgets.Connection(url, options);

        this.updateTagMapping().catch(error => console.error(error));

        try {
            await this.connection.connect();
        } catch (error) {
            console.error(error);
            return false;
        }

        this.rfid = new jPhidgets.RFID();
        this.rfid.onTag = tag => this.handleTag(tag);

        try {
            await this.rfid.open();
        } catch (error) {
            console.error(error);
            return false;
        }

        return true;
    }

    async handleTag(tag) {
        const mapping = this.tagMapping[tag];
        const value = mapping ? mapping.value : tag;

        this.listeners.forEach(listener => listener(value));
    }

    onTag(listener) {
        this.listeners.push(listener);
    }

    close() {
        const { connection, rfid } = this;
        this.connection = null;
        this.rfid = null;
        this.listeners = [];

        if (rfid) {
            try {
                rfid.close();
            } catch (error) {
                console.error(error);
            }
        }

        if (connection) {
            try {
                connection.close();
            } catch (error) {
                console.error(error);
            }
        }
    }

    async updateTagMapping() {
        const tagMapping = await socketService.getTagMapping();
        this.tagMapping = tagMapping || {};
    }
}

export default new RfidService();
