<template>
    <div>

        <h1 v-show="!cast.isActive">Cameras</h1>

        <div class="mb-3" v-show="!cast.isActive">
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
import instascanService from '~/src/instascanService';

export default {
    name: 'QRCode',
    props: {
        cast: {
            type: Object,
            required: true
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

        this.scanner.addListener('scan', scan =>
            this.$emit('passportId', scan)
        );

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
