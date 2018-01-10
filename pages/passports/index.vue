<template>
    <div>
        <section>
            <h1>Passports</h1>

            <table class="table table-responsive">
                <thead>
                <tr>
                    <th>UUID</th>
                    <th>Jewish Ancestry</th>
                    <th>Created</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr :key="passport.uuid" v-for="passport in passportService.passports">
                    <td>
                        <nuxt-link :to="{ name: 'passports-uuid', params: { uuid: passport.uuid }}">
                            {{ passport.uuid }}
                        </nuxt-link>
                    </td>
                    <td>
                        <span v-if="passport.hasJewishAncestry">yes</span>
                        <span v-else>no</span>
                    </td>
                    <td>
                        <span :title="passport.created">
                            {{ distanceInWordsToNow(passport.created) }} ago
                        </span>
                    </td>
                    <td class="text-right">
                        <button type="button" class="btn btn-link btn-sm text-danger" @click="removePassport(passport)">
                            Remove
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>
        </section>

        <section>
            <h2>Create Passport</h2>

            <form @submit.prevent="createPassport()">
                <div class="form-check my-3">
                    <input id="checkbox-jewish-ancestry" type="checkbox" class="form-check-input" v-model="hasJewishAncestry">
                    <label for="checkbox-jewish-ancestry" class="form-check-label">
                        Jewish ancestry
                    </label>
                </div>

                <button type="submit" class="btn btn-primary">Create</button>
            </form>
        </section>
    </div>
</template>

<script>
    import passportService from '../../src/passportService';
    import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';

    export default {
        name: 'Passports',
        head() {
            return {
                title: 'Passports'
            };
        },
        data() {
            return {
                hasJewishAncestry: false,
                passportService: passportService
            };
        },
        methods: {
            createPassport() {
                passportService.createPassport(this.hasJewishAncestry);
            },
            removePassport(passport) {
                passportService.removePassport(passport);
            },
            distanceInWordsToNow(date) {
                return distanceInWordsToNow(date);
            }
        },
        mounted() {
            passportService.loadPassports();
        }
    };
</script>

<style>
    table.table, table.table thead, table.table th, table.table th td {
        border-top: none;
    }
</style>