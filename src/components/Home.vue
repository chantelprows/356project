<template>
    <div :style="{backgroundImage: `url(${backgroundUrl})`}" style="margin-left: 32px;">
        <div style="height: 550px;">
            <div style="background-color: white; opacity: 0.7; position: absolute;
                margin-left: 7.5%; margin-top: 5%; height: 80%; width: 80%;">
                <div style="color: white;">
                    HOME
                </div>
            </div>
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