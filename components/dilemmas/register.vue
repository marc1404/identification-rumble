<template>
    <div class="row">
        <div class="col-12 col-lg-6">

            <h1>{{ text.heading }}</h1>

            <p>{{ text.firstParagraph }}</p>

            <p>{{ text.secondParagraph }}</p>

            <p class="lead">{{ text.lead }}</p>

        </div>
    </div>
</template>

<script>
import dilemmaComponent from '../dilemma';

export default {
    name: 'Register',
    extends: dilemmaComponent,
    data() {
        return {
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
