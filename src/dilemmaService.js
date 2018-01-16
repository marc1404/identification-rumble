import Dilemma from './Dilemma';
import Answer from './Answer';

class DilemmaService {
    constructor() {
        this.dilemmas = [
            new Dilemma('register', 'Register?', 'register', [
                new Answer(0, 'Start'),
                new Answer(1, 'Fill in the registration form'),
                new Answer(2, 'Refuse to fill in the form')
            ]),
            new Dilemma('sign', 'Sign?', 'sign', [
                new Answer(0, 'Start'),
                new Answer(1, 'Sign loyalty declaration'),
                new Answer(2, 'Refuse & go into hiding')
            ])
        ];
    }

    findBySlug(slug) {
        for (const dilemma of this.dilemmas) {
            if (dilemma.slug === slug) {
                return dilemma;
            }
        }

        return null;
    }
}

export default new DilemmaService();
