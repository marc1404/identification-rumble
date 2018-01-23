<template>
    <div class="p-3">

        <div class="row">
            <div class="col-12 col-sm-6">

                <section class="mb-3">
                    <h1>Language</h1>

                    <div class="custom-control custom-radio" v-for="language in languages">
                        <input :id="language.code" type="radio" name="languageRadios" class="custom-control-input" :value="language" v-model="selectedLanguage">
                        <label :for="language.code" class="custom-control-label">
                            <flag :countryCode="language.code" />
                            {{ language.name }}
                        </label>
                    </div>
                </section>

            </div>
            <div class="col-12 col-sm-6 mb-3 mb-sm-0">

                <h1>Activity</h1>

                <samp>
                    <span v-for="message in messages">
                        {{ message }}<br>
                    </span>
                </samp>

            </div>
        </div>

        <section>
            <scanner @passport="handlePassport" />
        </section>

    </div>
</template>

<script>
import flagComponent from '~/components/flag.vue';
import scannerComponent from '~/components/scanner.vue';
import languageService from '../src/languageService';
import socketService from '../src/socketService';

export default {
    name: 'Language',
    components: {
        flag: flagComponent,
        scanner: scannerComponent
    },
    head() {
        return {
            title: 'Language'
        };
    },
    data() {
        return {
            selectedLanguage: null,
            languages: languageService.getLanguages(),
            messages: []
        };
    },
    methods: {
        handlePassport(passport) {
            socketService.changeLanguage(
                passport.id,
                this.selectedLanguage.code
            );

            const message = `Changed language of passport #${passport.id} to ${
                this.selectedLanguage.name
            }`;

            this.messages.push(message);
        }
    }
};
</script>
