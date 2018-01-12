export default class Passport {
    id: number;
    hasJewishAncestry: boolean;
    created: Date;
    languageCode: string;

    constructor(id: number, hasJewishAncestry: boolean, created: Date) {
        this.id = id;
        this.hasJewishAncestry = hasJewishAncestry;
        this.created = created;
        this.languageCode = 'nl';
    }
}
