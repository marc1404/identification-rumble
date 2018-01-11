<template>
    <div class="list-group w-50">
        <nuxt-link
            :key="dilemma.slug"
            :to="{ name: 'dilemmas-slug', params: { slug: dilemma.slug }}"
            v-for="dilemma in dilemmas"
            class="list-group-item list-group-item-action">
            {{ dilemma.name }}
        </nuxt-link>
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
