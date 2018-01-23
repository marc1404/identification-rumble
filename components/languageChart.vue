<template>
    <div style="width: 200px; height: 200px">
        <div ref="chart" class="ct-chart ct-square"></div>
    </div>
</template>

<script>
import languageService from '~/src/languageService';

export default {
    name: 'LanguageChart',
    props: {
        languages: {
            type: Object,
            required: true
        }
    },
    methods: {
        createChart(Chartist) {
            const { languages } = this;
            const data = {
                series: [],
                labels: []
            };
            const languageEntries = Object.entries(languages);

            for (const [languageCode, dates] of languageEntries) {
                const language = languageService.findByCode(languageCode);

                data.series.push(dates.length);
                data.labels.push(language.name);
            }

            new Chartist.Pie(this.$refs.chart, data);
        }
    },
    mounted() {
        import('chartist')
            .then(Chartist => this.createChart(Chartist))
            .catch(error => console.error(error));
    }
};
</script>
