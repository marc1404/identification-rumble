<template>
    <div class="p-3">

        <section class="mb-3">
            <h1>Language</h1>

            <div class="custom-control custom-radio" v-for="language in languages">
                <input :id="language.code" type="radio" name="languageRadios" class="custom-control-input" :value="language" v-model="selectedLanguage">
                <label :for="language.code" class="custom-control-label">
                    <span :class="getFlagIcon(language)"></span>
                    {{ language.name }}
                </label>
            </div>
        </section>

        <section>
            <scanner :active="!!selectedLanguage" @scan="handleScan" />
        </section>

    </div>
</template>

<script>
import scannerComponent from '~/components/scanner.vue';

export default {
    name: 'Language',
    components: {
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
            languages: [
                { code: 'nl', name: 'Nederlands' },
                { code: 'gb', name: 'English' },
                { code: 'de', name: 'Deutsch' },
                { code: 'es', name: 'Español' },
                { code: 'fr', name: 'Français' },
                { code: 'it', name: 'Italiano' },
                { code: 'pt', name: 'Portugese' }
            ]
        };
    },
    methods: {
        getFlagIcon(language) {
            return 'flag-icon flag-icon-' + language.code;
        },
        handleScan(scan) {
            console.log(scan);
        }
    }
};
</script>
