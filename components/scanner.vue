<template>
    <div>

        <h1>Scanner</h1>

        <div class="mb-3">
            <div :key="camera.id" class="custom-control custom-radio" v-for="camera in cameras">
                <input :id="camera.id" class="custom-control-input" type="radio" name="cameraRadios" :value="camera" v-model="selectedCamera" :disabled="!active">
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

export default {
    name: 'Scanner',
    props: {
        active: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            selectedCamera: null,
            cameras: [],
            scanner: null
        };
    },
    async mounted() {
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

            this.$emit('passport', passport);
        });

        this.cameras = await Camera.getCameras();

        for (let i = 0; i < this.cameras.length; i++) {
            const camera = this.cameras[i];

            if (!camera.name) {
                camera.name = 'Camera' + i;
            }
        }
    },
    beforeDestroy() {
        this.scanner.stop().catch(error => console.error(error));

        this.scanner = null;
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
