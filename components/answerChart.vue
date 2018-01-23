<template>
    <div ref="chart" class="ct-chart ct-golden-section"></div>
</template>

<script>
export default {
    name: 'AnswerChart',
    props: {
        answers: {
            type: Object,
            required: true
        },
        dilemma: {
            type: Object,
            required: true
        }
    },
    methods: {
        createChart(Chartist) {
            const series = [];
            const labels = [];
            const data = {
                series: [series],
                labels: labels
            };

            const answerEntries = Object.entries(this.answers);

            for (const [answerId, dates] of answerEntries) {
                const answerLabel = this.dilemma.getAnswerLabelFor(answerId);

                series.push(dates.length);
                labels.push(answerLabel);
            }

            new Chartist.Bar(this.$refs.chart, data, {
                axisY: {
                    onlyInteger: true
                }
            });
        }
    },
    mounted() {
        import('chartist')
            .then(Chartist => this.createChart(Chartist))
            .catch(error => console.error(error));
    }
};
</script>
