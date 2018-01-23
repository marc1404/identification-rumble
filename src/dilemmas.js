import Dilemma from './Dilemma';
import Answer from './Answer';

export default [
    new Dilemma(0, 'register', 'Register?', 'register', [
        new Answer(0, 'Fill in the registration form'),
        new Answer(1, 'Refuse to fill in the form')
    ]),
    new Dilemma(1, 'sign', 'Sign?', 'sign', [
        new Answer(0, 'Sign loyalty declaration'),
        new Answer(1, 'Refuse & go into hiding')
    ])
];
