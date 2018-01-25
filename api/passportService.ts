import Passport from './Passport';
import * as jsonfile from 'jsonfile';
import statsService from './statsService';
import settingsService from './settingsService';

class PassportService {
    passports: Passport[] = [];

    constructor() {
        this.init();
    }

    init() {
        const rawPassports = jsonfile.readFileSync('./passports.json', {
            throws: false
        });

        if (!rawPassports) {
            return;
        }

        for (const rawPassport of rawPassports) {
            const { id, created, languageCode, answerMap } = rawPassport;
            const passport = new Passport(id, created, languageCode, answerMap);

            this.passports.push(passport);
        }
    }

    getPassports(): Passport[] {
        return this.passports;
    }

    createPassport(): Passport {
        if (settingsService.getReadOnlyMode()) {
            console.warn('Cannot create passport in read-only mode!');
            return null;
        }

        const id = this.getNextId();
        const passport = new Passport(id, new Date());

        this.passports.push(passport);
        this.savePassports();

        return passport;
    }

    resetPassport(id: number): boolean {
        if (settingsService.getReadOnlyMode()) {
            console.warn('Cannot reset passport in read-only mode!');
            return false;
        }

        const passport = this.getPassport(id);

        if (!passport) {
            return false;
        }

        passport.reset();
        this.savePassports();

        return false;
    }

    removePassport(id: number): boolean {
        if (settingsService.getReadOnlyMode()) {
            console.warn('Cannot remove passport in read-only mode!');
            return false;
        }

        for (let i = 0; i < this.passports.length; i++) {
            if (this.passports[i].id === id) {
                this.passports.splice(i, 1);
                return true;
            }
        }

        this.savePassports();

        return false;
    }

    getNextId(): number {
        let nextId = 0;

        for (const passport of this.passports) {
            if (passport.id >= nextId) {
                nextId = passport.id + 1;
            }
        }

        return nextId;
    }

    savePassports() {
        jsonfile.writeFile('./passports.json', this.passports, error => {
            if (error) {
                console.error(error);
            }
        });
    }

    getPassport(id: number): Passport {
        for (const passport of this.passports) {
            if (passport.id === id) {
                return passport;
            }
        }

        return null;
    }

    changeLanguage(id: number, languageCode: string): boolean {
        const passport = this.getPassport(id);

        if (!passport) {
            return false;
        }

        passport.setLanguageCode(languageCode);
        this.savePassports();
        statsService.increaseLanguage(languageCode);

        return true;
    }

    answerDilemma(
        passportId: number,
        dilemmaId: number,
        answerId: number
    ): boolean {
        const passport = this.getPassport(passportId);

        if (!passport) {
            return false;
        }

        passport.answerDilemma(dilemmaId, answerId);
        this.savePassports();
        statsService.increaseDilemmaAnswer(dilemmaId, answerId);

        return true;
    }
}

export default new PassportService();
