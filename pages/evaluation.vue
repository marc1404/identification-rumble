<template>
    <div class="p-3">

        <h1>Evaluation Station</h1>

        <p class="lead" v-if="!passport">Please identify yourself using your passport!</p>
        <div v-else>

            <section class="mb-3">
                <h2>Dilemmas</h2>

                <div class="card-deck">
                    <div class="card" style="max-width: 30rem" v-for="dilemma in dilemmas">
                        <div class="card-body">
                            <h3 class="card-title">
                                {{ dilemma.name }}
                            </h3>

                            <p class="card-text">
                                {{ dilemma.answerText }}
                            </p>

                            <p class="card-text lead text-center">
                                <strong>{{ dilemma.percent }}%</strong> of visitors answered the same.<br>
                                {{ dilemma.nativeDilemma.answerFact }}
                            </p>

                            <answer-chart :answers="dilemma.answerStats" :dilemma="dilemma.nativeDilemma" />
                        </div>
                    </div>
                </div>
            </section>

            <section class="mb-3">
                <h2>Visitors</h2>

                <p class="lead" v-show="totalVisitors">
                    A total of <strong>{{ totalVisitors }} </strong> people visited the museum.
                </p>

                <language-chart :languages="stats.languages" v-if="stats" />
            </section>

        </div>

        <scanner @passport="handlePassport" />

    </div>
</template>

<script>
import scannerComponent from '~/components/scanner.vue';
import socketService from '~/src/socketService';
import dilemmaService from '~/src/dilemmaService';
import languageChartComponent from '~/components/languageChart.vue';
import answerChartComponent from '~/components/answerChart.vue';

export default {
    name: 'Evaluation',
    components: {
        scanner: scannerComponent,
        languageChart: languageChartComponent,
        answerChart: answerChartComponent
    },
    head() {
        return {
            title: 'Evaluation Station'
        };
    },
    data() {
        return {
            passport: null,
            stats: null,
            totalVisitors: 0
        };
    },
    computed: {
        dilemmas() {
            const { passport } = this;

            if (!passport) {
                return [];
            }

            const dilemmas = [];
            const answerEntries = Object.entries(passport.answerMap);

            for (const [dilemmaId, answerId] of answerEntries) {
                const dilemma = dilemmaService.findById(dilemmaId);
                const answerText = dilemma.getEvaluationTextFor(answerId);
                const answerStats = this.stats.dilemmas[dilemmaId];
                const totalAnswers = Object.values(answerStats).reduce(
                    (sum, dates) => sum + dates.length,
                    0
                );
                const sameAnswersCount = answerStats[answerId].length;
                const percent = Math.round(
                    sameAnswersCount / totalAnswers * 100
                );

                dilemmas.push({
                    name: dilemma.name,
                    answerText: answerText,
                    answerStats: answerStats,
                    nativeDilemma: dilemma,
                    percent
                });
            }

            return dilemmas;
        }
    },
    methods: {
        handlePassport(passport) {
            this.passport = passport;
        }
    },
    async mounted() {
        this.stats = await socketService.getStats();
        this.totalVisitors = Object.values(this.stats.languages).reduce(
            (sum, dates) => sum + dates.length,
            0
        );
    }
};
</script>
