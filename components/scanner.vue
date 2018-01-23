<template>
    <div>

        <h1>Scanner</h1>

        <div class="mb-3">
            <div :key="camera.id" class="custom-control custom-radio" v-for="camera in cameras">
                <input :id="camera.id" class="custom-control-input" type="radio" name="cameraRadios" :value="camera" v-model="selectedCamera">
                <label :for="camera.id" class="custom-control-label">
                    {{ camera.name }}
                </label>
            </div>
        </div>

        <video ref="video"></video>

    </div>
</template>

<script>
import instascanService from '../src/instascanService';
import socketService from '../src/socketService';
import notificationService from '~/src/notificationService';

export default {
    name: 'Scanner',
    data() {
        return {
            selectedCamera: null,
            cameras: [],
            scanner: null,
            beep: null
        };
    },
    async mounted() {
        this.beep = new Audio('/beep.mp3');
        this.beep.volume = 0.2;
        const { Scanner, Camera } = await instascanService.getInstascan();
        const { video } = this.$refs;

        this.scanner = new Scanner({ video: video });

        this.scanner.addListener('scan', async scan => {
            const passportId = parseInt(scan, 10);

            if (Number.isNaN(passportId)) {
                console.warn(`Scanned passport ID ${scan} is NaN!`);
                return;
            }

            const passport = await socketService.getPassport(passportId);

            if (!passport) {
                console.warn(`Passport with ID ${passportId} not found!`);
            }

            this.beep.play().catch(error => console.error(error));
            notificationService.success('Passport scanned!');
            this.$emit('passport', passport);
        });

        this.cameras = await Camera.getCameras();

        for (let i = 0; i < this.cameras.length; i++) {
            const camera = this.cameras[i];

            if (!camera.name) {
                camera.name = 'Camera' + i;
            }

            if (!this.selectedCamera) {
                this.selectedCamera = camera;
            }
        }
    },
    beforeDestroy() {
        const { scanner } = this;

        if (!scanner) {
            return;
        }

        this.scanner = null;

        scanner.stop().catch(error => console.error(error));
    },
    watch: {
        async selectedCamera(camera) {
            await this.scanner.stop();

            if (camera) {
                this.scanner.start(camera);
            }
        }
    }
};
</script>
