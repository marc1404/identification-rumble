<template>
    <div class="p-3">

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
            languages: languageService.getLanguages()
        };
    },
    methods: {
        handlePassport(passport) {
            socketService.changeLanguage(
                passport.id,
                this.selectedLanguage.code
            );
        }
    }
};
</script>
