import Passport from './Passport';
import * as jsonfile from 'jsonfile';

class PassportService {
    passports: Passport[] = [];

    constructor() {
        this.passports = jsonfile.readFileSync('./passports.json', {
            throws: false
        }) as Passport[];

        if (!this.passports) {
            this.passports = [];
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

    getPassport(id): Passport {
        for (const passport of this.passports) {
            if (passport.id === id) {
                return passport;
            }
        }

        return null;
    }
}

export default new PassportService();
