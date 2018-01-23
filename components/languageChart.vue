<template>
    <div style="width: 200px; height: 200px">
        <canvas ref="canvas" width="200" height="200"></canvas>
    </div>
</template>

<script>
import Chart from 'chart.js';
import languageService from '~/src/languageService';

export default {
    name: 'LanguageChart',
    props: {
        languages: {
            type: Object,
            required: true
        }
    },
    mounted() {
        const { languages } = this;
        const data = [];
        const labels = [];
        const chartOptions = {
            type: 'pie',
            data: {
                datasets: [
                    {
                        data: data,
                        backgroundColor: [
                            '#003049',
                            '#D62828',
                            '#F77F00',
                            '#FCBF49',
                            '#EAE2B7'
                        ]
                    }
                ],
                labels: labels
            }
        };
        const languageEntries = Object.entries(languages);

        for (const [languageCode, dates] of languageEntries) {
            const language = languageService.findByCode(languageCode);

            data.push(dates.length);
            labels.push(language.name);
        }

        new Chart(this.$refs.canvas, chartOptions);
    }
};
</script>
