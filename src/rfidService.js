class RfidService {
    constructor() {
        this.connection = null;
        this.rfid = null;
        this.listeners = [];
        this.tagMap = {
            '79001ff8c8': {
                name: 'Card',
                passportId: 0
            },
            '4a0037db70': {
                name: 'Blue chip',
                passportId: 1
            },
            '430039cdf7': {
                name: 'White chip',
                passportId: 2
            },
            '430039a40f': {
                name: 'White chip',
                passportId: 3
            },
            '7f002a6f6b': {
                name: 'White copper',
                passportId: 4
            },
            '7f002a6d76': {
                name: 'White copper',
                passportId: 5
            }
        };
    }

    async connect() {
        const url = 'ws://localhost:8989/phidgets';
        const options = { name: 'test', passwd: '' };
        this.connection = new jPhidgets.Connection(url, options);

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

    handleTag(tag) {
        const mapping = this.tagMap[tag];
        const value = mapping ? mapping.passportId : tag;

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
}

export default new RfidService();
