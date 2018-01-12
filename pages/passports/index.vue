<template>
    <div class="p-3">
        <section>
            <h1>Passports</h1>

            <table class="table table-responsive">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Jewish Ancestry</th>
                    <th>Created</th>
                    <th></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr :key="passport.id" v-for="passport in passports">
                    <td>
                        <nuxt-link :to="{ name: 'passports-id', params: { id: passport.id }}" class="text-danger">
                            {{ passport.id }}
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
                    <td>
                        <a href="#" class="text-danger" @click.prevent="resetPassport(passport)" style="text-decoration: none">
                            <i class="material-icons md-18 text-dark">restore</i>
                            Reset
                        </a>
                    </td>
                    <td>
                        <a href="#" class="text-danger" @click.prevent="removePassport(passport)" style="text-decoration: none">
                            <i class="material-icons md-18 text-dark">delete_forever</i>
                            Remove
                        </a>
                    </td>
                </tr>
                </tbody>
            </table>
        </section>

        <section>
            <h2>Create Passport</h2>

            <form @submit.prevent="createPassport()">
                <div class="custom-control custom-checkbox my-3">
                    <input id="checkbox-jewish-ancestry" type="checkbox" class="custom-control-input" v-model="hasJewishAncestry">
                    <label for="checkbox-jewish-ancestry" class="custom-control-label">
                        Jewish ancestry
                    </label>
                </div>

                <button type="submit" class="btn btn-danger">Create</button>
            </form>
        </section>
    </div>
</template>

<script>
import socketService from '../../src/socketService';
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
            passports: []
        };
    },
    methods: {
        async createPassport() {
            const passport = await socketService.createPassport(
                this.hasJewishAncestry
            );

            if (!passport) {
                console.error('Could not create passport!');
                return;
            }

            this.passports.push(passport);
        },
        resetPassport(passport) {},
        removePassport(passport) {
            socketService
                .removePassport(passport.id)
                .catch(error => console.error(error));

            for (let i = 0; i < this.passports.length; i++) {
                if (this.passports[i].id === passport.id) {
                    this.passports.splice(i, 1);
                }
            }
        },
        distanceInWordsToNow(date) {
            return distanceInWordsToNow(date);
        }
    },
    async mounted() {
        this.passports = await socketService.getPassports();
    }
};
</script>

<style>
table.table,
table.table thead,
table.table th,
table.table th td {
    border-top: none;
}
</style>
