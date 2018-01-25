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

    setReadOnlyMode(enabled: boolean) {
        this.settings.setReadOnlyMode(enabled);
        this.save();
    }

    getTagMapping(): Object {
        return this.settings.getTagMapping();
    }

    setTagMapping(tag: string, value: string) {
        this.settings.setTagMapping(tag, value);
        this.save();
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
