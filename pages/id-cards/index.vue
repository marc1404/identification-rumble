<template>
    <div class="p-3">

        <section class="mb-3">
            <h1>
                ID Cards
                <button type="button" class="btn btn-danger btn-sm" @click="createPassport()" v-if="!readOnlyMode.enabled">Create</button>
            </h1>

            <div class="card-columns">

                <div :key="passport.id" class="card" v-for="passport in passports">
                    <h5 class="card-header">
                        ID Card #{{ passport.id }}
                    </h5>
                    <div class="card-body">
                        <p class="card-text">
                            <strong class="pr-1">Language:</strong>
                            <flag :countryCode="passport.languageCode" />
                            {{ findLanguageByCode(passport.languageCode).name }}<br>

                            <strong>Answered dilemmas:</strong>
                            {{ countAnsweredDilemmas(passport) }}
                        </p>
                    </div>
                    <div class="card-body">
                        <nuxt-link :to="{ name: 'id-cards-id', params: { id: passport.id }}" class="card-link">
                            <i class="material-icons md-18 text-dark pr-1">visibility</i>
                            <span class="text-danger">Open</span>
                        </nuxt-link>
                        <a href="#" class="card-link" @click.prevent="resetPassport(passport)" v-if="!readOnlyMode.enabled">
                            <i class="material-icons md-18 text-dark pr-1">restore</i>
                            <span class="text-danger">Reset</span>
                        </a>
                        <a href="#" class="card-link" @click.prevent="removePassport(passport)" v-if="!readOnlyMode.enabled">
                            <i class="material-icons md-18 text-dark pr-1">delete_forever</i>
                            <span class="text-danger">Remove</span>
                        </a>
                    </div>
                    <div class="card-footer text-muted">
                        created {{ distanceInWordsToNow(passport.created) }} ago
                    </div>
                </div>

            </div>
        </section>

    </div>
</template>

<script>
import socketService from '../../src/socketService';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import flagComponent from '~/components/flag.vue';
import languageService from '../../src/languageService';
import readOnlyModeService from '~/src/readOnlyModeService';

export default {
    name: 'IDCards',
    components: {
        flag: flagComponent
    },
    head() {
        return {
            title: 'ID Cards'
        };
    },
    data() {
        return {
            hasJewishAncestry: false,
            passports: [],
            readOnlyMode: readOnlyModeService
        };
    },
    methods: {
        async createPassport() {
            const passport = await socketService.createPassport(
                this.hasJewishAncestry
            );

            if (!passport) {
                console.error('Could not create passport!');
                return;
            }

            this.passports.push(passport);
        },
        async resetPassport(passport) {
            await socketService.resetPassport(passport.id);
            await this.loadPassports();
        },
        removePassport(passport) {
            socketService
                .removePassport(passport.id)
                .catch(error => console.error(error));

            for (let i = 0; i < this.passports.length; i++) {
                if (this.passports[i].id === passport.id) {
                    this.passports.splice(i, 1);
                }
            }
        },
        distanceInWordsToNow(date) {
            return distanceInWordsToNow(date);
        },
        findLanguageByCode(code) {
            return languageService.findByCode(code);
        },
        async loadPassports() {
            this.passports = await socketService.getPassports();
        },
        countAnsweredDilemmas(passport) {
            const { answerMap } = passport;

            return Object.keys(answerMap || {}).length;
        }
    },
    mounted() {
        this.loadPassports().catch(error => console.error(error));
    }
};
</script>
