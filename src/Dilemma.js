export default class Dilemma {
    constructor({ id, slug, name, componentName, answers, answerFact }) {
        this.id = id;
        this.slug = slug;
        this.name = name;
        this.componentName = componentName;
        this.answers = answers;
        this.answerFact = answerFact;
    }

    getAnswerLabelFor(answerId) {
        const answer = this.findAnswerById(answerId);

        if (!answer) {
            return null;
        }

        return answer.label;
    }

    getEvaluationTextFor(answerId) {
        const answer = this.findAnswerById(answerId);

        if (!answer) {
            return null;
        }

        return answer.evaluationText;
    }

    findAnswerById(id) {
        id = Number.parseInt(id, 10);

        for (const answer of this.answers) {
            if (answer.id === id) {
                return answer;
            }
        }

        return null;
    }
}
