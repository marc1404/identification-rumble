import uuid from "uuid/v4";

class PassportService {
    constructor() {
        this.passports = [];
    }

    createPassport(hasJewishAncestry) {
        const passport = {
            uuid: uuid(),
            hasJewishAncestry: hasJewishAncestry,
            created: new Date()
        };

        this.passports.push(passport);
        this.savePassports();
    }

    getPassport(uuid) {
        for (const passport of this.passports) {
            if (passport.uuid === uuid) {
                return passport;
            }
        }

        return null;
    }

    removePassport(passport) {
        for (let i = 0; i < this.passports.length; i++) {
            if (this.passports[i].uuid === passport.uuid) {
                this.passports.splice(i, 1);
                break;
            }
        }

        this.savePassports();
    }

    savePassports() {
        localStorage.setItem("passports", JSON.stringify(this.passports));
    }

    loadPassports() {
        const item = localStorage.getItem("passports");

        if (!item) {
            return;
        }

        this.passports = JSON.parse(item);

        for (const passport of this.passports) {
            passport.created = new Date(passport.created);
        }
    }
}

export default new PassportService();
