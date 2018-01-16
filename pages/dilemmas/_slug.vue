<template>
    <div>

        <nav aria-label="breadcrumb">
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
            <component :is="dilemma.componentName" :languageCode="languageCode" />

            <div class="row">
                <div class="col-12 col-sm-6">

                    <section class="mb-3">
                        <h1>Answers</h1>

                        <div class="custom-control custom-radio" :class="{ 'mb-3': answer.id === 0 }" v-for="answer in dilemma.answers">
                            <input :id="getAnswerElementId(answer)" type="radio" name="answerRadios" class="custom-control-input" :value="answer" v-model="selectedAnswer">
                            <label :for="getAnswerElementId(answer)" class="custom-control-label">{{ answer.label }}</label>
                        </div>
                    </section>

                </div>
                <div class="col-12 col-sm-6 mb-3 mb-sm-0">

                    <h1>Activity</h1>

                    <samp>
                        <span v-for="message in messages">
                            {{ message }}<br>
                        </span>
                    </samp>

                </div>
            </div>

            <section>
                <scanner :active="!!selectedAnswer" @passport="handlePassport" />
            </section>
        </div>

    </div>
</template>

<script>
import dilemmaService from '../../src/dilemmaService';
import scannerComponent from '~/components/scanner.vue';
import registerComponent from '~/components/dilemmas/register.vue';
import signComponent from '~/components/dilemmas/sign.vue';
import languageService from '../../src/languageService';

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
        const dilemma = dilemmaService.findBySlug(slug);

        return {
            title: dilemma.name,
            dilemma: dilemma,
            selectedAnswer: null,
            messages: [],
            passport: null
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

            const message = this.generateMessage(
                dilemma,
                selectedAnswer,
                passport
            );

            this.messages.push(message);
        },
        generateMessage(dilemma, answer, passport) {
            if (answer.id === 0) {
                const language = languageService.findByCode(
                    passport.languageCode
                );

                return `Passport #${passport.id} started ${dilemma.name} in ${
                    language.name
                }`;
            }

            return `Passport #${passport.id} responded '${answer.label}' on ${
                dilemma.name
            }`;
        }
    }
};
</script>
