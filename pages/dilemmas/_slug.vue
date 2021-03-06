<template>
    <div>

        <nav aria-label="breadcrumb" v-show="!cast.isActive">
            <ol class="breadcrumb bg-light rounded-0 mb-0">
                <li class="breadcrumb-item">
                    <nuxt-link to="/dilemmas" class="text-danger">Dilemmas</nuxt-link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                    {{ dilemma.name }}
                </li>
            </ol>
        </nav>

        <div class="p-3">
            <component :is="dilemma.componentName" :languageCode="languageCode" :onPassport="onPassport" />

            <section class="mb-3">
                <h1>Answers</h1>

                <div class="custom-control custom-radio" v-for="answer in dilemma.answers">
                    <input :id="getAnswerElementId(answer)" type="radio" name="answerRadios" class="custom-control-input" :value="answer" v-model="selectedAnswer">
                    <label :for="getAnswerElementId(answer)" class="custom-control-label">{{ answer.label }}</label>
                </div>
            </section>

            <section>
                <scanner @passport="handlePassport" @answerId="handleAnswerId" />
            </section>
        </div>

    </div>
</template>

<script>
import dilemmaService from '../../src/dilemmaService';
import scannerComponent from '~/components/scanner/scanner.vue';
import registerComponent from '~/components/dilemmas/register.vue';
import signComponent from '~/components/dilemmas/sign.vue';
import socketService from '../../src/socketService';
import castService from '~/src/castService';
import presetService from '~/src/presetService';
import hotkeysService from '~/src/hotkeysService';

export default {
    name: 'Dilemma',
    components: {
        scanner: scannerComponent,
        register: registerComponent,
        sign: signComponent
    },
    head() {
        return {
            title: this.title
        };
    },
    data() {
        const { slug } = this.$route.params;
        const dilemma = dilemmaService.findBySlug(slug) || {};

        return {
            title: dilemma.name,
            dilemma: dilemma,
            selectedAnswer: null,
            passport: null,
            cast: castService,
            onPassport: []
        };
    },
    computed: {
        languageCode() {
            const { passport } = this;

            return passport ? passport.languageCode : 'gb';
        }
    },
    methods: {
        getAnswerElementId(answer) {
            return 'answer-radio-' + answer.id;
        },
        handlePassport(passport) {
            this.passport = passport;
            const { selectedAnswer, dilemma } = this;

            this.onPassport.forEach(callback => callback(passport));

            if (!selectedAnswer) {
                return;
            }

            const answerId = selectedAnswer.id;

            socketService
                .answerDilemma(passport.id, dilemma.id, answerId)
                .catch(error => console.error(error));
        },
        handleAnswerId(answerId) {
            const answer = this.dilemma.findAnswerById(answerId);

            if (answer) {
                this.selectedAnswer = answer;
            }
        }
    },
    mounted() {
        hotkeysService.onUp(() => {
            const currentIndex = this.dilemma.answers.indexOf(
                this.selectedAnswer
            );
            let nextIndex = currentIndex - 1;

            if (nextIndex < 0) {
                nextIndex = this.dilemma.answers.length - 1;
            }

            this.selectedAnswer = this.dilemma.answers[nextIndex];
        });

        hotkeysService.onDown(() => {
            const currentIndex = this.dilemma.answers.indexOf(
                this.selectedAnswer
            );
            let nextIndex = currentIndex + 1;

            if (nextIndex >= this.dilemma.answers.length) {
                nextIndex = 0;
            }

            this.selectedAnswer = this.dilemma.answers[nextIndex];
        });
    }
};
</script>
