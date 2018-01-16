import Dilemma from './Dilemma';
import Answer from './Answer';

export default [
    new Dilemma(0, 'register', 'Register?', 'register', [
        new Answer(0, 'Start'),
        new Answer(1, 'Fill in the registration form'),
        new Answer(2, 'Refuse to fill in the form')
    ]),
    new Dilemma(1, 'sign', 'Sign?', 'sign', [
        new Answer(0, 'Start'),
        new Answer(1, 'Sign loyalty declaration'),
        new Answer(2, 'Refuse & go into hiding')
    ])
];
