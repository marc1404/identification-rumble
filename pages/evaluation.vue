<template>
    <div class="p-3">

        <h1>Evaluation Station</h1>

        <p class="lead text-danger">Not implemented yet!</p>

        <scanner />

    </div>
</template>

<script>
import scannerComponent from '~/components/scanner.vue';

export default {
    name: 'Evaluation',
    components: {
        scanner: scannerComponent
    },
    head() {
        return {
            title: 'Evaluation Station'
        };
    }
};
</script>
