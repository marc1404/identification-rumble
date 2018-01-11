import Dilemma from './Dilemma';

class DilemmaService {
    dilemmas: Dilemma[] = [
        new Dilemma(0, 'register', 'Register?'),
        new Dilemma(1, 'stay-on', 'Stay on?')
    ];

    getDilemmas(): Dilemma[] {
        return this.dilemmas;
    }

    getDilemmaBySlug(slug: string): Dilemma {
        for (const dilemma of this.dilemmas) {
            if (dilemma.slug === slug) {
                return dilemma;
            }
        }

        return null;
    }
}

export default new DilemmaService();
