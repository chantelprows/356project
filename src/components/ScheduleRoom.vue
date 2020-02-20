<template>
    <section>
        <div style="text-align: center; padding-top: 30px; font-size: 50px; color: #628CB6; font-weight: bold;">
            Schedule A Room
        </div>
        <div style="text-align: center; color: #628CB6;">
            Rooms can be reserved in hour long blocks
        </div>
        <br>
        <div style="margin-top: 16px; display: flex; margin-left: 220px;">
            <div style="font-size: 32px; color: #628CB6; font-weight: bold;">
                When?
            </div>
            <div style="margin-left: 40px;">
                <v-select
                        v-model="day"
                        :items="days"
                        label="Pick a Day"
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
        <div style="margin-top: 32px; display: flex; margin-left: 220px;" v-show="time !== ''">
            <div style="font-size: 32px; color: #628CB6; font-weight: bold;">
                Where?
            </div>
            <div style="margin-left: 30px;">
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
                buildings: ['ASB', 'BNSN', 'CB', 'EB', 'ESC', 'HBLL', 'HFAC', 'JFSB', 'JKB', 'JSB', 'KMBL', 'LSB', 'MARB', 'MSRB', 'RB', 'TMCB', 'TNRB', 'WSC'],
                room: "",
                rooms: ['1214', '2170J', '2170K', '2714', '4360', '4361', '4520', '4521'],
                day: "",
                days: ['February 15', 'February 17', 'February 18', 'February 19', 'February 20'],
                time: "",
                times: ['8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm']
            }
        },
        methods: {
            schedule() {
                let obj = {'location': this.building + " " + this.room, 'day': this.day, 'time': this.time}
                this.$store.commit('addRoom', obj)
                this.building = ""
                this.room = ""
                this.day = ""
                this.time = ""
                this.$store.commit('setPage', 'My')
            }
        }
    }
</script>

<style scoped>

</style>