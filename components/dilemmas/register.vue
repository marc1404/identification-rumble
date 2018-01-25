<template>
    <div>
        <h1>{{ text.heading }}</h1>

        <register-animation :onPassport="onPassport" />
    </div>
</template>

<script>
import dilemmaComponent from '../dilemma';
import registerAnimationComponent from '../registerAnimation';

export default {
    name: 'Register',
    extends: dilemmaComponent,
    components: {
        registerAnimation: registerAnimationComponent
    },
    data() {
        return {
            i18n: {
                gb: {
                    heading: 'Registration and dismissal'
                },
                nl: {
                    heading: 'Registratie en ontslag'
                }
            }
        };
    }
};
</script>
