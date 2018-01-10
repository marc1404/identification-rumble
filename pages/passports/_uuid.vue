<template>
    <div>
        <canvas ref="canvas"></canvas>
    </div>
</template>

<script>
    import passportService from '../../src/passportService';
    import QRCode from 'qrcode';

    export default {
        name: 'Passport',
        head() {
            return {
                title: 'Passport'
            };
        },
        methods: {
            createQRCode() {
                const { uuid } = this.$route.params;
                const passport = passportService.getPassport(uuid);
                const { canvas } = this.$refs;
                const payload = passport.uuid + '_' + (passport.hasJewishAncestry ? 1 : 0);

                QRCode.toCanvas(canvas, payload, { scale: 10 }, error => {
                    if (error) {
                        console.error(error);
                    }
                });
            }
        },
        mounted() {
            passportService.loadPassports();
            this.createQRCode();
        }
    };
</script>