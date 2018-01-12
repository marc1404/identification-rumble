class LanguageService {
    constructor() {
        this.languages = [
            { code: 'nl', name: 'Nederlands' },
            { code: 'gb', name: 'English' },
            { code: 'de', name: 'Deutsch' },
            { code: 'es', name: 'Español' },
            { code: 'fr', name: 'Français' },
            { code: 'it', name: 'Italiano' },
            { code: 'pt', name: 'Portugese' }
        ];
    }

    getLanguages() {
        return this.languages;
    }

    findByCode(code) {
        for (const language of this.languages) {
            if (language.code === code) {
                return language;
            }
        }

        return null;
    }
}

export default new LanguageService();
