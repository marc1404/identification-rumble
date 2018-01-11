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

        <component :is="dilemma.componentName" />

    </div>
</template>

<script>
import dilemmaService from '../../src/dilemmaService';
import registerComponent from '~/components/dilemmas/register.vue';
import stayOnComponent from '~/components/dilemmas/stayOn.vue';

export default {
    name: 'Dilemma',
    components: {
        register: registerComponent,
        stayOn: stayOnComponent
    },
    head() {
        return {
            title: this.title
        };
    },
    data() {
        const { slug } = this.$route.params;
        const dilemma = dilemmaService.findBySlug(slug);

        return {
            title: dilemma.name,
            dilemma: dilemma
        };
    }
};
</script>
