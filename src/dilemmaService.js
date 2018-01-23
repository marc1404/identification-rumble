import dilemmas from './dilemmas';

class DilemmaService {
    constructor() {
        this.dilemmas = dilemmas;
    }

    findById(id) {
        id = Number.parseInt(id, 10);

        return this.findBy('id', id);
    }

    findBySlug(slug) {
        return this.findBy('slug', slug);
    }

    findBy(key, value) {
        for (const dilemma of this.dilemmas) {
            if (dilemma[key] === value) {
                return dilemma;
            }
        }

        return null;
    }
}

export default new DilemmaService();
