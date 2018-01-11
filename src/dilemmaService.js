import Dilemma from './Dilemma';

class DilemmaService {
    constructor() {
        this.dilemmas = [
            new Dilemma('register', 'Register?', 'register'),
            new Dilemma('stay-on', 'Stay on?', 'stayOn')
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