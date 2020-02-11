<template>
    <section>
        <div style="text-align: center; padding-top: 30px; font-size: 50px; color: #628CB6; font-weight: bold;">
            Log In
        </div>
        <br><br>
        <div style="text-align: center;">
            <div style="width: 40%; display: inline-block;">
                <v-text-field
                        label="Net Id"
                        solo
                        v-model="netid"
                ></v-text-field>
                <v-text-field
                        label="Password"
                        solo
                        type="password"
                        v-model="password"
                ></v-text-field>
                <v-btn
                        rounded
                        color="#628CB6"
                        style="color: white;"
                        :disabled="netid === '' || password === ''"
                        @click="login()"
                >
                    Login
                </v-btn>
            </div>

        </div>
    </section>
</template>

<script>
    export default {
        name: "login",
        data: function() {
            return {
                netid: "",
                password: ""
            }
        },
        methods: {
            login() {
                this.$store.commit('setPage', 'Schedule')
            }
        }
    }
</script>

<style scoped>

</style>