export default class Passport {
    id: number;
    hasJewishAncestry: boolean;
    created: Date;
    languageCode: string;

    constructor(
        id: number,
        hasJewishAncestry: boolean,
        created: Date,
        languageCode: string = 'nl'
    ) {
        this.id = id;
        this.hasJewishAncestry = hasJewishAncestry;
        this.created = created;
        this.languageCode = languageCode;
    }

    setLanguageCode(languageCode: string) {
        this.languageCode = languageCode;
    }
}
