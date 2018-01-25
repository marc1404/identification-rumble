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

        this.scannerMode = localStorage.getItem('scannerMode');
        this.hiddenAnswers = localStorage.getItem('hiddenAnswers');

        const identificationRumble = (window.__IDENTIFICATION_RUMBLE__ =
            window.__IDENTIFICATION_RUMBLE__ || {});

        identificationRumble.setScannerMode = scannerMode => {
            this.scannerMode = scannerMode;

            localStorage.setItem('scannerMode', scannerMode);
        };

        identificationRumble.setHiddenAnswers = hiddenAnswers => {
            this.hiddenAnswers = hiddenAnswers;

            localStorage.setItem('hiddenAnswers', hiddenAnswers);
        };
    }

    getScannerMode() {
        return this.scannerMode;
    }

    getHiddenAnswers() {
        return this.hiddenAnswers;
    }

    getWindow() {
        try {
            return window;
        } catch (error) {}

        return null;
    }
}

export default new PresetService();
