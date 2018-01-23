<template>
    <div class="row">
        <div class="col-12 col-lg-6">

            <h1>{{ text.heading }}</h1>

            <div class="mb-3" v-show="!cast.isActive">
                <div class="custom-control custom-radio">
                    <input id="text-checkbox" type="radio" name="viewRadios" class="custom-control-input" value="text" v-model="view">
                    <label for="text-checkbox" class="custom-control-label">Text</label>
                </div>
                <div class="custom-control custom-radio">
                    <input id="animation-checkbox" type="radio" name="viewRadios" class="custom-control-input" value="animation" v-model="view">
                    <label for="animation-checkbox" class="custom-control-label">
                        Animation
                    </label>
                </div>
            </div>

            <template v-if="view === 'text'">
                <p class="lead">{{ text.firstParagraph }}</p>

                <p class="lead">{{ text.secondParagraph }}</p>

                <p class="lead">
                    <strong>{{ text.lead }}</strong>
                </p>
            </template>
            <template v-else-if="view === 'animation'">
                <you-tube-video />
            </template>

        </div>
    </div>
</template>

<script>
import dilemmaComponent from '../dilemma';
import youTubeVideoComponent from '../youTubeVideo';
import castService from '~/src/castService';

export default {
    name: 'Register',
    extends: dilemmaComponent,
    components: {
        youTubeVideo: youTubeVideoComponent
    },
    data() {
        return {
            cast: castService,
            view: 'text',
            i18n: {
                gb: {
                    heading: 'Registration and dismissal',
                    firstParagraph: `
                        The first anti-Jewish regulations seem rather harmless.
                        In October 1940 all civil servants are required to fill in an 'ancestry form', indicating their religion and that of their parents and grandparents.
                        Everyone knows that the purpose is to register Jewish civil servants, yet the response is massive compliance.
                        One month later the Jewish civil servants are dismissed.
                        In Leiden and Delft, students go on strike to protest against the dismissal of their Jewish university teachers.
                    `,
                    secondParagraph: `
                        In January 1941 all Jews have to report for registration.
                        Almost everyone obeys.
                        After all, what can possibly happen if you refuse?
                        And why shouldn't you be open about your origins?
                        However, this registration makes it easier for the Germans to carry out other measures against the Jews later on.
                    `,
                    lead: 'What would you do?'
                },
                nl: {
                    heading: 'Registratie en ontslag',
                    firstParagraph: `
                        De eerste maatregelen tegen de joden lijken tamelijk onschuldig.
                        In oktober 1940 moeten alle ambtenaren op een 'afstammingsformulier' hun geloof en dat van hun ouders en grootouders invullen.
                        Het is bekend dat registratie van de joodse ambtenaren het doel is.
                        Toch worden de formulieren massaal ingevuld.
                        Een maand later krijgen de joodse ambtenaren ontslag.
                        In Leiden en Delft gaan studenten in staking uit protest tegen het ontslag van hun joodse docenten.
                    `,
                    secondParagraph: `
                        In januari 1941 moeten alle joden zich aanmelden voor registratie.
                        Vrijwel iedeeren gehoorzaamt.
                        Want wat gebeurt er als je weigert?
                        En waarom zou jet niet uitkommen voor je afkomst?
                        De registratie maakt het de Duitsers echter makkelijker om de latere maatregelen tegen de joden uit te voeren.
                    `,
                    lead: 'Wat zou jij doen?'
                }
            }
        };
    }
};
</script>
