<template>
    <div class="row">
        <div class="col-12 col-lg-8">
            <h1>Camera</h1>

            <div class="mb-3">
                <div :key="camera.id" class="form-check" v-for="camera in cameras">
                    <input :id="camera.id" class="form-check-input" type="radio" name="exampleRadios" :value="camera" v-model="selectedCamera">
                    <label class="form-check-label" :for="camera.id">
                        {{ camera.name }}
                    </label>
                </div>
            </div>


            <video ref="video"></video>
        </div>
        <div class="col-12 col-lg-4">
            <h1>Scans</h1>

            <ul>
                <li v-for="scan in scans">{{ scan }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        head() {
            return {
                title: 'Home'
            };
        },
        data() {
            return {
                selectedCamera: null,
                scans: [],
                cameras: []
            };
        },
        methods: {
            getInstascan() {
                return new Promise(resolve => {
                    const interval = setInterval(() => {
                        const { Instascan } = window;

                        if (!Instascan) {
                            return;
                        }

                        clearInterval(interval);
                        resolve(Instascan);
                    }, 1);
                });
            }
        },
        async mounted() {
            const { Scanner, Camera } = await this.getInstascan();
            const { video } = this.$refs;

            this.scanner = new Scanner({ video: video });

            this.scanner.addListener('scan', content => {
                this.scans.push(content);
            });

            this.cameras = await Camera.getCameras();
        },
        beforeDestroy() {
            this.scanner.stop()
                .catch(error => console.error(error));

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