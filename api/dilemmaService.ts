import Dilemma from './Dilemma';

class DilemmaService {
    dilemmas: Dilemma[] = [
        new Dilemma('register', 'Register?'),
        new Dilemma('stay-on', 'Stay on?')
    ];

    getDilemmas(): Dilemma[] {
        return this.dilemmas;
    }
}

export default new DilemmaService();
