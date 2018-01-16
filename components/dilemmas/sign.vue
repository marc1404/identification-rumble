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
import dilemmaComponent from '../dilemma.vue';

export default {
    name: 'Sign',
    extends: dilemmaComponent,
    data() {
        return {
            i18n: {
                gb: {
                    heading: `Students don't sign!`,
                    firstParagraph: `
                        In 1940 students in Leiden and Delft went on strike to protest against dismissal of their Jewish university teachers.
                        Many students are active in the resistance.
                        To keep them in line, the Germans introduce a 'loyalty declaration' early 1943.
                        Each student must promise to refrain from taking any action against the occupiers.
                        Whoever refuses must go to work in Germany.
                    `,
                    secondParagraph: `
                        The illegal student consultation group calls on students not to sign the declaration - and 86% don't sign!
                        The universities are shut down.
                        More than half of the students who refused to sign go into hiding.
                        They are to play an important role in the resistance.
                    `,
                    lead: 'What would you do?'
                },
                nl: {
                    heading: 'Studenten tekenen niet!',
                    firstParagraph: `
                        In 1940 staakten studenten in Leiden en Delft tegen het ontslag van hun joodse docenten.
                        Veel studenten zijn actief in het verzet.
                        Om ze in het gareel te krijgen introduceren de Duitsers begin 1943 de 'loyaliteitsverklaring'.
                        Iedereen die studeert moet beloven niets tegen de bezetter te ondernemen.
                        Wie weigert moet in Duitsland werken.
                    `,
                    secondParagraph: `
                        Het illegale studentenoverleg roept op de verklaring niet te tekenen.
                        En 86% tekent niet!
                        De universiteiten gaan dicht.
                        Meer dan de helft van de weigeraars duikt onder.
                        Uij zullen een belangrijke rol spelen in het verzet.
                    `,
                    lead: 'Wat zou jij doen?'
                }
            }
        };
    }
};
</script>
