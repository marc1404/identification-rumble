<template>
    <span :class="flagIcon"></span>
</template>

<script>
export default {
    name: 'Flag',
    props: {
        countryCode: {
            type: String,
            required: true
        }
    },
    computed: {
        flagIcon() {
            return 'flag-icon flag-icon-' + this.countryCode;
        }
    }
};
</script>
