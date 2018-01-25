import passportService from './passportService';
import statsService from './statsService';
import settingsService from './settingsService';

class EventHandler {
    async getPassports() {
        return passportService.getPassports();
    }

    async createPassport() {
        return passportService.createPassport();
    }

    async resetPassport({ id }) {
        return passportService.resetPassport(id);
    }

    async removePassport({ id }) {
        return passportService.removePassport(id);
    }

    async getPassport({ id }) {
        return passportService.getPassport(id);
    }

    async changeLanguage({ passportId, languageCode }) {
        return passportService.changeLanguage(passportId, languageCode);
    }

    async answerDilemma({ passportId, dilemmaId, answerId }) {
        return passportService.answerDilemma(passportId, dilemmaId, answerId);
    }

    async getStats() {
        return statsService.getStats();
    }

    async setReadOnlyMode({ password, enabled }) {
        return settingsService.setReadOnlyMode(password, enabled);
    }

    async getReadOnlyMode() {
        return settingsService.getReadOnlyMode();
    }

    async getTagMapping() {
        return settingsService.getTagMapping();
    }

    async setTagMapping({ tag, value }) {
        return settingsService.setTagMapping(tag, value);
    }
}

export default new EventHandler();
