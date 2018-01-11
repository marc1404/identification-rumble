<template>
    <div>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb bg-light rounded-0">
                <li class="breadcrumb-item">
                    <nuxt-link to="/passports" class="text-danger">Passports</nuxt-link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                    Passport #{{ $route.params.id }}
                </li>
            </ol>
        </nav>

        <canvas ref="canvas"></canvas>
    </div>
</template>

<script>
import QRCode from 'qrcode';

export default {
    name: 'Passport',
    head() {
        return {
            title: 'Passport #' + this.$route.params.id
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
