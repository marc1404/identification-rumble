import Dilemma from './Dilemma';
import Answer from './Answer';

class DilemmaService {
    constructor() {
        this.dilemmas = [
            new Dilemma('register', 'Register?', 'register', [
                new Answer(0, 'Yes'),
                new Answer(1, 'No')
            ]),
            new Dilemma('stay-on', 'Stay on?', 'stayOn', [])
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
