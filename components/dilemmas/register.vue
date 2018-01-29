<style>
.dark-mode {
    background-color: black;
    color: white;
}
</style>

<template>
    <div :class="{ 'dark-mode': cast.isActive }">
        <h1>{{ text.heading }}</h1>

        <register-animation :onPassport="onPassport" />
    </div>
</template>

<script>
import dilemmaComponent from '../dilemma';
import registerAnimationComponent from '../registerAnimation';
import castService from '~/src/castService';

export default {
    name: 'Register',
    extends: dilemmaComponent,
    components: {
        registerAnimation: registerAnimationComponent
    },
    head() {
        return {
            bodyAttrs: {
                class: this.bodyClass
            }
        };
    },
    data() {
        return {
            cast: castService,
            i18n: {
                gb: {
                    heading: 'Registration and dismissal'
                },
                nl: {
                    heading: 'Registratie en ontslag'
                }
            }
        };
    },
    computed: {
        bodyClass() {
            return castService.isActive ? 'dark-mode' : '';
        }
    }
};
</script>
