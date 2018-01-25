<template>
    <div v-show="!cast.isActive">

        <div class="mb-3">
            <div class="badge badge-warning mr-1" v-show="!isConnected">Not connected</div>
            <span class="badge badge-success mr-1" v-show="isConnected">Connected</span>
            <span class="badge badge-danger mr-1" v-show="hasError">Error</span>
        </div>

        <div class="mb-3">
            <strong>Last passport: <code>{{ lastTag }}</code></strong>
        </div>

        <h1>Tag mapping</h1>

        <div class="row">
            <div class="col-6 col-lg-3 mb-3" v-for="(mapping, tag) in rfidService.tagMapping">
                <label :for="tag">
                    {{ mapping.name }}
                    <code>{{ tag }}</code>
                </label>
                <input :id="tag" type="text" class="form-control text-center" style="width: 10rem" v-model="mapping.value" :disabled="readOnlyMode.enabled">
            </div>
        </div>

    </div>
</template>

<script>
import rfidService from '~/src/rfidService';
import throttle from 'lodash.throttle';
import readOnlyModeService from '~/src/readOnlyModeService';
import debounce from 'lodash.debounce';
import socketService from '~/src/socketService';

export default {
    name: 'RFID',
    props: {
        cast: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            isConnected: false,
            hasError: false,
            rfidService: rfidService,
            readOnlyMode: readOnlyModeService,
            lastTag: null
        };
    },
    methods: {
        saveTagMapping: debounce(() => {
            const mappingEntries = Object.entries(rfidService.tagMapping);

            for (const [tag, mapping] of mappingEntries) {
                socketService
                    .setTagMapping(tag, mapping.value)
                    .catch(error => console.error(error));
            }
        }, 1000)
    },
    async mounted() {
        try {
            this.isConnected = await rfidService.connect();
        } catch (error) {
            this.hasError = true;

            console.error(error);
            return;
        }

        const emit = throttle(tag => this.$emit('passportId', tag), 1000);

        rfidService.onTag(tag => {
            this.lastTag = tag;

            emit(tag);
        });
    },
    beforeDestroy() {
        rfidService.close();
    },
    watch: {
        'rfidService.tagMapping': {
            handler() {
                this.saveTagMapping();
            },
            deep: true
        }
    }
};
</script>
