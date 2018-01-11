<template>
    <div class="p-3">

        <div class="list-group d-inline-block">
            <nuxt-link
                    :key="dilemma.slug"
                    :to="{ name: 'dilemmas-slug', params: { slug: dilemma.slug }}"
                    v-for="dilemma in dilemmas"
                    class="list-group-item list-group-item-action text-dark">
                {{ dilemma.name }}
        </nuxt-link>
        </div>

    </div>
</template>

<script>
import dilemmaService from '../../src/dilemmaService';

export default {
    name: 'Dilemmas',
    head() {
        return {
            title: 'Dilemmas'
        };
    },
    data() {
        return {
            dilemmas: dilemmaService.dilemmas
        };
    }
};
</script>
