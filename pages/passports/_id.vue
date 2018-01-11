<template>
    <div>
        <canvas ref="canvas"></canvas>
    </div>
</template>

<script>
import QRCode from 'qrcode';

export default {
    name: 'Passport',
    head() {
        return {
            title: 'Passport'
        };
    },
    methods: {
        async createQRCode() {
            const { id } = this.$route.params;
            const { canvas } = this.$refs;
            const payload = '' + id;

            QRCode.toCanvas(canvas, payload, { scale: 10 }, error => {
                if (error) {
                    console.error(error);
                }
            });
        }
    },
    mounted() {
        this.createQRCode();
    }
};
</script>
