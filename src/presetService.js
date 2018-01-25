class PresetService {
    constructor() {
        this.scannerMode = null;
        this.hiddenAnswers = false;

        this.init();
    }

    init() {
        const window = this.getWindow();

        if (!window) {
            return;
        }

        this.scannerMode = localStorage.getItem('scannerMode') || null;
        this.hiddenAnswers = localStorage.getItem('hiddenAnswers') || false;

        const identificationRumble = (window.__IDENTIFICATION_RUMBLE__ =
            window.__IDENTIFICATION_RUMBLE__ || {});

        identificationRumble.setScannerMode = scannerMode => {
            this.scannerMode = scannerMode;

            this.persist('scannerMode', scannerMode);
        };

        identificationRumble.setHiddenAnswers = hiddenAnswers => {
            this.hiddenAnswers = hiddenAnswers;

            this.persist('hiddenAnswers', hiddenAnswers);
        };
    }

    getScannerMode() {
        return this.scannerMode;
    }

    getHiddenAnswers() {
        return this.hiddenAnswers;
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
