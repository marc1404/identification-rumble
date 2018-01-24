<template>
    <div>

        <h1 v-show="!cast.isActive">Scanner</h1>

        <div class="mb-3" v-show="!cast.isActive">
            <div class="custom-control custom-radio">
                <input id="qrcode-radio" class="custom-control-input" type="radio" name="scannerRadios" value="qrcode" v-model="mode">
                <label for="qrcode-radio" class="custom-control-label">QR code</label>
            </div>
            <div class="custom-control custom-radio">
                <input id="rfid-radio" class="custom-control-input" type="radio" name="scannerRadios" value="rfid" v-model="mode">
                <label for="rfid-radio" class="custom-control-label">RFID</label>
            </div>
        </div>

        <component :is="mode" :cast="cast" @passportId="handlePassportId" />

    </div>
</template>

<script>
import qrCodeComponent from './qrCode';
import rfidComponent from './rfid';
import castService from '~/src/castService';
import notificationService from '~/src/notificationService';
import socketService from '~/src/socketService';

export default {
    name: 'Scanner',
    components: {
        qrcode: qrCodeComponent,
        rfid: rfidComponent
    },
    data() {
        return {
            cast: castService,
            mode: null,
            beep: null
        };
    },
    methods: {
        async handlePassportId(rawId) {
            rawId = '' + rawId;
            const hasAnswer = rawId.includes('_');

            if (hasAnswer) {
                const [head, tail] = rawId.split('_');
                rawId = head;
                const answerId = parseInt(tail, 10);

                this.$emit('answerId', answerId);
            }

            const passportId = parseInt(rawId, 10);

            if (Number.isNaN(passportId)) {
                console.warn(`Scanned passport ID ${rawId} is NaN!`);
                return;
            }

            const passport = await socketService.getPassport(passportId);

            if (!passport) {
                console.warn(`Passport with ID ${passportId} not found!`);
                return;
            }

            this.beep.play().catch(error => console.error(error));
            notificationService.success('Passport scanned!');
            this.$emit('passport', passport);
        }
    },
    mounted() {
        this.beep = new Audio('/beep.mp3');
        this.beep.volume = 0.2;
    }
};
</script>
