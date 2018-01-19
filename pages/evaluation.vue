<template>
    <div class="p-3">

        <h1>Evaluation Station</h1>

        <p class="lead" v-if="!passport">Please identify yourself using your passport!</p>
        <div v-else>

            <h2>Passport #{{ passport.id }}</h2>

            <pre>{{ passport.answerMap }}</pre>

            <template v-if="languageStats">
                <h2>Visitors</h2>

                <p class="lead">
                    A total of <strong>{{ languageStats.total}}</strong> people visited the museum.
                </p>

                <div class="progress mb-3" v-for="language in languageStats.languages">
                    <div class="progress-bar" role="progressbar" :style="getWidth(language.percent)">
                        {{ language.percent }}% {{ language.name }}
                    </div>
                </div>
            </template>

        </div>

        <scanner @passport="handlePassport" />

    </div>
</template>

<script>
import scannerComponent from '~/components/scanner.vue';
import socketService from '../src/socketService';
import dilemmaService from '../src/dilemmaService';
import languageService from '../src/languageService';

export default {
    name: 'Evaluation',
    components: {
        scanner: scannerComponent
    },
    head() {
        return {
            title: 'Evaluation Station'
        };
    },
    data() {
        return {
            passport: null,
            stats: null
        };
    },
    computed: {
        languageStats() {
            const { stats } = this;

            if (!stats) {
                return [];
            }

            const languageStats = {
                total: 0,
                languages: []
            };

            for (const [languageCode, dates] of Object.entries(
                stats.languages
            )) {
                languageStats.total += dates.length;
            }

            for (const [languageCode, dates] of Object.entries(
                stats.languages
            )) {
                const language = languageService.findByCode(languageCode);

                languageStats.languages.push({
                    ...language,
                    percent: Math.round(
                        dates.length / languageStats.total * 100
                    )
                });
            }

            return languageStats;
        }
    },
    methods: {
        handlePassport(passport) {
            this.passport = passport;
        },
        getWidth(percent) {
            return {
                width: `${percent}%`
            };
        }
    },
    async mounted() {
        this.stats = await socketService.getStats();
    }
};
</script>
