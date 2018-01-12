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
            <component :is="dilemma.componentName" />

            <section class="mb-3">
                <h1>Answers</h1>

                <div class="custom-control custom-radio" v-for="answer in dilemma.answers">
                    <input :id="getAnswerElementId(answer)" type="radio" name="answerRadios" class="custom-control-input" :value="answer" v-model="selectedAnswer">
                    <label :for="getAnswerElementId(answer)" class="custom-control-label">{{ answer.label }}</label>
                </div>
            </section>

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
import stayOnComponent from '~/components/dilemmas/stayOn.vue';

export default {
    name: 'Dilemma',
    components: {
        scanner: scannerComponent,
        register: registerComponent,
        stayOn: stayOnComponent
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
            selectedAnswer: null
        };
    },
    methods: {
        getAnswerElementId(answer) {
            return 'answer-radio-' + answer.id;
        },
        handlePassport(passport) {
            console.log(passport);
        }
    }
};
</script>
