import passportService from './passportService';
import dilemmaService from './dilemmaService';

class EventHandler {
    async getPassports() {
        return passportService.getPassports();
    }

    async createPassport({ hasJewishAncestry }) {
        return passportService.createPassport(hasJewishAncestry);
    }

    async removePassport({ id }) {
        passportService.removePassport(id);
    }

    async getPassport({ id }) {
        return passportService.getPassport(id);
    }
}

export default new EventHandler();
