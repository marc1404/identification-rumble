import * as jsonfile from 'jsonfile';
import Settings from './Settings';

class SettingsService {
    private settings: Settings = new Settings();

    constructor() {
        this.init();
    }

    init() {
        const rawSettings = jsonfile.readFileSync('./settings.json', {
            throws: false
        });

        if (!rawSettings) {
            return;
        }

        const { readOnlyMode, tagMapping } = rawSettings;
        this.settings = new Settings(readOnlyMode, tagMapping);
    }

    setReadOnlyMode(password: string, enabled: boolean) {
        if (password !== process.env.API_PASSWORD) {
            console.warn(
                `Incorrect password ${password} for changing read-only mode to ${enabled}!`
            );
            return false;
        }

        this.settings.setReadOnlyMode(enabled);
        this.save();

        return true;
    }

    getReadOnlyMode(): boolean {
        return this.settings.getReadOnlyMode();
    }

    getTagMapping(): Object {
        return this.settings.getTagMapping();
    }

    setTagMapping(tag: string, value: string) {
        if (this.getReadOnlyMode()) {
            console.warn('Cannot change tag mappings in read-only mode!');
            return false;
        }

        this.settings.setTagMapping(tag, value);
        this.save();

        return true;
    }

    save() {
        jsonfile.writeFile('./settings.json', this.settings, error => {
            if (error) {
                console.error(error);
            }
        });
    }
}

export default new SettingsService();
