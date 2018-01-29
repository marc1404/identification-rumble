class PresetService {
    constructor() {
        this.scannerMode = null;

        this.init();
    }

    init() {
        const window = this.getWindow();

        if (!window) {
            return;
        }

        this.scannerMode = localStorage.getItem('scannerMode') || null;

        const identificationRumble = (window.__IDENTIFICATION_RUMBLE__ =
            window.__IDENTIFICATION_RUMBLE__ || {});

        identificationRumble.setScannerMode = scannerMode => {
            this.scannerMode = scannerMode;

            this.persist('scannerMode', scannerMode);
        };
    }

    getScannerMode() {
        return this.scannerMode;
    }

    persist(key, value) {
        if (value) {
            localStorage.setItem(key, value);
            return;
        }

        localStorage.removeItem(key);
    }

    getWindow() {
        try {
            return window;
        } catch (error) {}

        return null;
    }
}

export default new PresetService();
