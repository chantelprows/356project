<template>
    <section>
    <div :style="{backgroundImage: `url(${backgroundUrl})`}" style="margin-left: 0px; background-size: cover">
        <div style="height: 550px;" >
            <div style="background-color: white; opacity: 0.7; position: absolute;
                margin-left: 10%; margin-right: 10%; margin-top: 5%; height: 80%; width: 80%;">
                <div style="text-align: center; padding-top: 30px; font-size: 50px; color: #628CB6; font-weight: bold; opacity: 0%">
                    Reserve a room. Any building. Any time.
                </div>
                <br>
                <br>
                <br>
                <div style="text-align: center;">
                    <v-btn
                            rounded
                            color="#628CB6"
                            style="color: white; display: inline-block;"
                            :disabled="time === ''"
                    >
                        Get Started!
                    </v-btn>
                </div>
                <br>
                <div style="text-align: center; font-size: 20px; color: #628CB6; text-decoration: underline">
                    Log In
                </div>
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
        }
    }
</script>

<style scoped>

</style>