export default class Stats {
    dilemmas: Object = {};
    languages: Object = {};

    constructor(public dilemmas: Object = {}, public languages: Object = {}) {}

    increaseDilemmasAnswer(dilemmaId: number, answerId: number) {
        const { dilemmas } = this;

        if (!dilemmas[dilemmaId]) {
            dilemmas[dilemmaId] = { [answerId]: [] };
        }

        const dilemma = dilemmas[dilemmaId];

        if (!dilemma[answerId]) {
            dilemma[answerId] = [];
        }

        dilemma[answerId].push(new Date());
    }

    increaseLanguage(languageCode: string) {
        const { languages } = this;

        if (!languages[languageCode]) {
            languages[languageCode] = [];
        }

        languages[languageCode].push(new Date());
    }
}
