import dilemmas from './dilemmas';

class DilemmaService {
    constructor() {
        this.dilemmas = dilemmas;
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
