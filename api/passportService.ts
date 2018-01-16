import Passport from './Passport';
import * as jsonfile from 'jsonfile';

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
            const {
                id,
                hasJewishAncestry,
                created,
                languageCode,
                answerMap
            } = rawPassport;
            const passport = new Passport(
                id,
                hasJewishAncestry,
                created,
                languageCode,
                answerMap
            );

            this.passports.push(passport);
        }
    }

    getPassports(): Passport[] {
        return this.passports;
    }

    createPassport(hasJewishAncestry: boolean): Passport {
        const id = this.getNextId();
        const passport = new Passport(id, hasJewishAncestry, new Date());

        this.passports.push(passport);
        this.savePassports();

        return passport;
    }

    resetPassport(id: number): boolean {
        const passport = this.getPassport(id);

        if (!passport) {
            return false;
        }

        passport.reset();
        this.savePassports();

        return false;
    }

    removePassport(id: number): boolean {
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
            console.error(error);
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

        return true;
    }
}

export default new PassportService();
