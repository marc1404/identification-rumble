<template>
    <div class="p-3">

        <h1>Evaluation Station</h1>

        <p class="lead" v-if="!passport">Please identify yourself using your passport!</p>
        <div v-else>

            <p class="lead">
                Passport #{{ passport.id }}
            </p>

            <pre>{{ passport.answerMap }}</pre>

            <p class="lead">Stats</p>

            <pre>{{ stats }}</pre>

        </div>

        <scanner @passport="handlePassport" />

    </div>
</template>

<script>
import scannerComponent from '~/components/scanner.vue';
import socketService from '../src/socketService';

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
    methods: {
        handlePassport(passport) {
            this.passport = passport;
        }
    },
    async mounted() {
        this.stats = await socketService.getStats();
    }
};
</script>
