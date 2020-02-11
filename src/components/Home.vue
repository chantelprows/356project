<template>
    <section>
    <div :style="{backgroundImage: `url(${backgroundUrl})`}" style="margin-left: 0px; background-size: cover">
        <div style="height: 550px;" >
            <div style="background-color: rgba(255,255,255,0.6); position: absolute;
                margin-left: 10%; margin-right: 10%; margin-top: 5%; height: 80%; width: 80%;">
                <div style="text-align: center; padding-top: 125px; font-size: 50px; color: #002e5d; font-weight: bold;">
                    Reserve a room. Any building. Any time.
                </div>
                <br>
                <br>
                <br>
                <div style="text-align: center;">
                    <v-btn
                            rounded
                            color="#002e5d"
                            style="color: white; display: inline-block;"
                            @click="setPage('Login')"
                    >
                        Get Started!
                    </v-btn>
                </div>
                <br>
<!--                <div style="text-align: center; font-size: 20px; color: #002e5d; text-decoration: underline; cursor: pointer;">-->
<!--                    Log In-->
<!--                </div>-->
            </div>

        </div>
    </div>

    </section>
</template>

<script>
    import backgroundUrl from '../assets/campus.jpg'

    export default {
        name: "home",
        data: function() {
            return {
                backgroundUrl
            }
        },
        methods: {
            setPage(str) {
                this.$store.commit('setPage', str)
            }
        }
    }
</script>

<style scoped>

</style>