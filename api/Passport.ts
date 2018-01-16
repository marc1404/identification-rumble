export default class Passport {
    id: number;
    hasJewishAncestry: boolean;
    created: Date;
    languageCode: string;
    answerMap: Object;

    constructor(
        public id: number,
        public hasJewishAncestry: boolean,
        public created: Date,
        public languageCode: string = 'nl',
        public answerMap: Object = {}
    ) {}

    setLanguageCode(languageCode: string) {
        this.languageCode = languageCode;
    }

    answerDilemma(dilemmaId, answerId) {
        this.answerMap[dilemmaId] = answerId;
    }

    reset() {
        this.languageCode = 'nl';
        this.answerMap = {};
    }
}
