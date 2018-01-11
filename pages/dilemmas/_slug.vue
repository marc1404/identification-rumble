<template>
    <div>

        <nav aria-label="breadcrumb">
            <ol class="breadcrumb bg-light rounded-0 mb-0">
                <li class="breadcrumb-item">
                    <nuxt-link to="/dilemmas" class="text-danger">Dilemmas</nuxt-link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                    {{ dilemma.name }}
                </li>
            </ol>
        </nav>

        <div class="p-3">
            <component :is="dilemma.componentName" />

            <section class="mb-3">
                <h1>Answers</h1>

                <div class="form-check" v-for="answer in dilemma.answers">
                    <input :id="getAnswerElementId(answer)" type="radio" name="answerRadios" class="form-check-input" :value="answer" v-model="selectedAnswer">
                    <label :for="getAnswerElementId(answer)" class="form-check-label">{{ answer.label }}</label>
                </div>
            </section>

            <section>
                <h1>Scanner</h1>

                <div class="mb-3">
                    <div :key="camera.id" class="form-check" v-for="camera in cameras">
                        <input :id="camera.id" class="form-check-input" type="radio" name="cameraRadios" :value="camera" v-model="selectedCamera" :disabled="!selectedAnswer">
                        <label :for="camera.id" class="form-check-label">
                            {{ camera.name }}
                        </label>
                    </div>
                </div>

                <video ref="video"></video>
            </section>
        </div>

    </div>
</template>

<script>
import dilemmaService from '../../src/dilemmaService';
import registerComponent from '~/components/dilemmas/register.vue';
import stayOnComponent from '~/components/dilemmas/stayOn.vue';
import instascanService from '../../src/instascanService';
import socketService from '../../src/socketService';

export default {
    name: 'Dilemma',
    components: {
        register: registerComponent,
        stayOn: stayOnComponent
    },
    head() {
        return {
            title: this.title
        };
    },
    data() {
        const { slug } = this.$route.params;
        const dilemma = dilemmaService.findBySlug(slug);

        return {
            title: dilemma.name,
            dilemma: dilemma,
            selectedCamera: null,
            selectedAnswer: null,
            cameras: []
        };
    },
    methods: {
        getAnswerElementId(answer) {
            return 'answer-radio-' + answer.id;
        },
        async handleScan(scan) {
            console.log(scan, typeof scan);

            const passportId = parseInt(scan, 10);

            console.log('Parsed ' + passportId);

            if (Number.isNaN(passportId)) {
                console.warn('Passport ID ' + passportId + 'is NaN!');
                return;
            }

            const passport = await socketService.getPassport(passportId);

            if (!passport) {
                console.warn('Passport with ID ' + passportId + ' not found!');
                return;
            }

            alert(
                `Passport #${passport.id} scanned answer: ${
                    this.selectedAnswer.label
                }`
            );
        }
    },
    async mounted() {
        const { Scanner, Camera } = await instascanService.getInstascan();
        const { video } = this.$refs;

        this.scanner = new Scanner({ video: video });

        this.scanner.addListener('scan', scan => {
            this.handleScan(scan).catch(error => console.error(error));
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
