import Dilemma from './Dilemma';
import Answer from './Answer';
import { registerYes, registerNo, signYes, signNo } from './consequences';

export default [
    new Dilemma({
        id: 0,
        slug: 'register',
        name: 'Register?',
        componentName: 'register',
        answerFact: 'In 1941 almost everyone obeyed.',
        answers: [
            new Answer(
                0,
                'Fill in the registration form',
                'You filled in the ancestry registration form.',
                registerYes
            ),
            new Answer(
                1,
                'Refuse to fill in the form',
                'You refused to fill in the ancestry registration form.',
                registerNo
            )
        ]
    }),
    new Dilemma({
        id: 1,
        slug: 'sign',
        name: 'Sign?',
        componentName: 'sign',
        answerFact: "In 1943 roughly 86% of students didn't sign.",
        answers: [
            new Answer(
                0,
                'Sign loyalty declaration',
                'You signed the loyalty declaration towards Germany.',
                signYes
            ),
            new Answer(
                1,
                'Refuse & go into hiding',
                'You refused to sign the loyalty declaration and went into hiding from the occupiers.',
                signNo
            )
        ]
    })
];
