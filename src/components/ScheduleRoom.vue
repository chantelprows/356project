<template>
    <section>
        <div style="text-align: center; padding-top: 30px; font-size: 50px; color: #628CB6; font-weight: bold;">
            Schedule A Room
        </div>
        <div style="margin-top: 32px; display: flex; margin-left: 220px;">
            <div style="font-size: 32px; color: #628CB6; font-weight: bold;">
                Where?
            </div>
            <div style="margin: auto;">
                <v-select
                        v-model="building"
                        :items="buildings"
                        label="Pick Building"
                        solo
                        style="width: 480px; margin-left: 80px; margin-right: 416px;"
                >
                </v-select>
                <v-select
                        v-model="room"
                        :items="rooms"
                        label="Pick Room"
                        solo
                        style="width: 480px; margin-left: 80px; margin-right: 416px;"
                        v-show="building !== ''"
                >
                </v-select>
            </div>
        </div>
        <div style="margin-top: 16px; display: flex; margin-left: 220px;" v-show="room !== ''">
            <div style="font-size: 32px; color: #628CB6; font-weight: bold;">
                When?
            </div>
            <div style="margin-left: 10px;">
                <v-select
                        v-model="day"
                        :items="days"
                        label="Pick Day"
                        solo
                        style="width: 480px; margin-left: 80px; margin-right: 416px;"
                >
                </v-select>
                <v-select
                        v-model="time"
                        :items="times"
                        label="Pick Time"
                        solo
                        style="width: 480px; margin-left: 80px; margin-right: 416px;"
                        v-show="day !== ''"
                >
                </v-select>
            </div>
        </div>
        <br>
        <div style="text-align: center;">
            <v-btn
                    rounded
                    color="#628CB6"
                    style="color: white; display: inline-block;"
                    :disabled="time === ''"
                    @click="schedule()"
            >
                Schedule
            </v-btn>
        </div>
        <br><br>
    </section>
</template>

<script>
    export default {
        name: "schedule-room",
        data: function () {
            return {
                building: "",
                buildings: ['ASB', 'HBLL', 'LSB', 'TMCB'],
                room: "",
                rooms: ['100', '200', '300', '400'],
                day: "",
                days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                time: "",
                times: ['1:00pm', '1:30pm', '2:00pm', '2:30pm']
            }
        },
        methods: {
            schedule() {
                this.building = ""
                this.room = ""
                this.day = ""
                this.time = ""
                alert('Room scheduled!')
            }
        }
    }
</script>

<style scoped>

</style>