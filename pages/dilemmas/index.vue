<template>
    <div class="p-3">

        <h1>Dilemmas</h1>

        <nav class="nav flex-column lead">
            <nuxt-link
                    :key="dilemma.slug"
                    :to="{ name: 'dilemmas-slug', params: { slug: dilemma.slug }}"
                    v-for="dilemma in dilemmas"
                    class="nav-link text-danger">
                {{ dilemma.name }}
            </nuxt-link>
        </nav>

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
