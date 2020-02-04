<template>
    <div :style="{ backgroundImage: url('${image}') }">
        HOME
        {{image}}
    </div>
</template>

<script>
    export default {
        name: "home",
        data: function() {
            return {
                image: './assets/campus.jpg'
            }
        }
    }
</script>

<style scoped>

</style>