<template>
    <div class="p-3">

        <section class="mb-3">
            <h1>Passports</h1>

            <div class="card-columns">

                <div :key="passport.id" class="card" v-for="passport in passports">
                    <h5 class="card-header">
                        Passport #{{ passport.id }}
                    </h5>
                    <div class="card-body">
                        <p class="card-text">
                            <strong>Nationality:</strong>
                            {{ getNationalityText(passport) }}<br>

                            <strong class="pr-1">Language:</strong>
                            <flag :countryCode="passport.languageCode" />
                            {{ findLanguageByCode(passport.languageCode).name }}
                        </p>
                    </div>
                    <div class="card-body">
                        <nuxt-link :to="{ name: 'passports-id', params: { id: passport.id }}" class="card-link">
                            <i class="material-icons md-18 text-dark pr-1">visibility</i>
                            <span class="text-danger">Open</span>
                        </nuxt-link>
                        <a href="#" class="card-link" @click.prevent="resetPassport(passport)">
                            <i class="material-icons md-18 text-dark pr-1">restore</i>
                            <span class="text-danger">Reset</span>
                        </a>
                        <a href="#" class="card-link" @click.prevent="removePassport(passport)">
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

        <section>
            <h2>Create Passport</h2>

            <form @submit.prevent="createPassport()">
                <div class="custom-control custom-checkbox my-3">
                    <input id="checkbox-jewish-ancestry" type="checkbox" class="custom-control-input" v-model="hasJewishAncestry">
                    <label for="checkbox-jewish-ancestry" class="custom-control-label">
                        Jewish ancestry
                    </label>
                </div>

                <button type="submit" class="btn btn-danger">Create</button>
            </form>
        </section>

    </div>
</template>

<script>
import socketService from '../../src/socketService';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import flagComponent from '~/components/flag.vue';
import languageService from '../../src/languageService';

export default {
    name: 'Passports',
    components: {
        flag: flagComponent
    },
    head() {
        return {
            title: 'Passports'
        };
    },
    data() {
        return {
            hasJewishAncestry: false,
            passports: []
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
        getNationalityText(passport) {
            return passport.hasJewishAncestry ? 'Dutch Jewish' : 'Dutch';
        },
        findLanguageByCode(code) {
            return languageService.findByCode(code);
        },
        async loadPassports() {
            this.passports = await socketService.getPassports();
        }
    },
    mounted() {
        this.loadPassports().catch(error => console.error(error));
    }
};
</script>
