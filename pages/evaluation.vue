<template>
    <div class="p-3">

        <h1>Evaluation Station</h1>

        <p class="lead" v-if="!passport">Please identify yourself using your passport!</p>
        <div v-else>

            <pre>{{ passport.answerMap }}</pre>

            <h2>Visitors</h2>

            <p class="lead" v-show="totalVisitors">
                A total of <strong>{{ totalVisitors }} </strong> people visited the museum.
            </p>

            <language-chart :languages="stats.languages" v-if="stats" />

        </div>

        <scanner @passport="handlePassport" />

    </div>
</template>

<script>
import scannerComponent from '~/components/scanner.vue';
import socketService from '~/src/socketService';
import dilemmaService from '~/src/dilemmaService';
import languageService from '~/src/languageService';
import languageChartComponent from '~/components/languageChart.vue';

export default {
    name: 'Evaluation',
    components: {
        scanner: scannerComponent,
        languageChart: languageChartComponent
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
