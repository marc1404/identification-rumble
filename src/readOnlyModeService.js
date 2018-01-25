import socketService from './socketService';

class ReadOnlyModeService {
    constructor() {
        this.enabled = false;

        this.init();
    }

    init() {
        const window = this.getWindow();

        if (!window) {
            return;
        }

        const identificationRumble = (window.__IDENTIFICATION_RUMBLE__ =
            window.__IDENTIFICATION_RUMBLE__ || {});

        identificationRumble.setReadOnlyMode = async (password, enabled) => {
            const result = await socketService.setReadOnlyMode(
                password,
                enabled
            );

            if (!result) {
                console.error('Could not set read-only mode!');
                return;
            }

            this.enabled = enabled;
            console.info(`Read-only mode set to: ${enabled}`);
        };

        this.update().catch(error => console.error(error));
    }

    async update() {
        this.enabled = await socketService.getReadOnlyMode();
    }

    getWindow() {
        try {
            return window;
        } catch (error) {}

        return null;
    }
}

export default new ReadOnlyModeService();
