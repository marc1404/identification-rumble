<script>
export default {
    props: {
        languageCode: {
            type: String,
            default: 'gb',
            required: false
        },
        onPassport: {
            type: Array,
            required: false
        }
    },
    computed: {
        text() {
            const { i18n, languageCode } = this;

            return i18n[languageCode] || i18n.gb;
        }
    }
};
</script>
