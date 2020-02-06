<template>
    <div
            class=" bg-no-repeat bg-cover  bg-white hero relative"
            :style="{ backgroundImage: `url(${backgroundUrl})` }"
    >
        <div style="width: 1000px; height: 550px;">
            Home
        </div>
    </div>
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