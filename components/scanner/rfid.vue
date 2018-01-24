<template>
    <div v-show="!cast.isActive">

        <div class="mb-3">
            <span class="badge badge-success mr-1" v-show="isConnected">Connected</span>
            <span class="badge badge-danger mr-1" v-show="hasError">Error</span>
        </div>

        <div class="mb-3">
            <strong>Last passport: <code>{{ lastTag }}</code></strong>
        </div>

        <div class="mb-3" v-for="(mapping, tag) in tagMap">
            <label :for="tag">
                {{ mapping.name }}
                <code>{{ tag }}</code>
            </label>
            <input :id="tag" type="text" class="form-control" v-model="mapping.passportId">
        </div>

    </div>
</template>

<script>
import rfidService from '~/src/rfidService';
import throttle from 'lodash.throttle';

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
            tagMap: rfidService.tagMap,
            lastTag: null
        };
    },
    async mounted() {
        try {
            await rfidService.connect();
        } catch (error) {
            this.hasError = true;

            console.error(error);
            return;
        }

        this.isConnected = true;
        const emit = throttle(tag => this.$emit('passportId', tag), 1000);

        rfidService.onTag(tag => {
            this.lastTag = tag;

            emit(tag);
        });
    },
    beforeDestroy() {
        rfidService.close();
    }
};
</script>
