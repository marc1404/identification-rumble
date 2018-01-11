<template>
    <div>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb bg-light rounded-0 mb-0">
                <li class="breadcrumb-item">
                    <nuxt-link to="/dilemmas" class="text-danger">Dilemmas</nuxt-link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                    {{ dilemma.name }}
                </li>
            </ol>
        </nav>

        <div class="p-3">
            <h1>{{ dilemma.name }}</h1>
        </div>

    </div>
</template>

<script>
import socketService from '../../src/socketService';

export default {
    name: 'Dilemma',
    head() {
        return {
            title: this.title
        };
    },
    data() {
        return {
            title: this.$route.params.slug,
            dilemma: {}
        };
    },
    async mounted() {
        const { slug } = this.$route.params;
        this.dilemma = await socketService.getDilemmaBySlug(slug);
        this.title = this.dilemma.name;
    }
};
</script>
