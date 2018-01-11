<template>
    <div>
        Dilemmas
    </div>
</template>

<script>
import socketService from '../../src/socketService';

export default {
    name: 'Dilemmas',
    head() {
        return {
            title: 'Dilemmas'
        };
    },
    data() {
        return {
            dilemmas: []
        };
    },
    async mounted() {
        this.dilemmas = await socketService.getDilemmas();
    }
};
</script>
