import passportService from './passportService';
import dilemmaService from './dilemmaService';

class EventHandler {
    async getPassports() {
        return passportService.getPassports();
    }

    async createPassport({ hasJewishAncestry }) {
        return passportService.createPassport(hasJewishAncestry);
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
}

export default new EventHandler();
