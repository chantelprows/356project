<template>
    <section>
        <div style="text-align: center; padding-top: 30px; font-size: 50px; color: #628CB6; font-weight: bold;">
            My Rooms
        </div>
        <div style="text-align: center; color: #628CB6;">
            Rooms are reserved in hour long blocks
        </div>
        <br>
        <div style="text-align: center;">
            <v-data-table
                    :headers="headers"
                    :items="rooms"
                    :hide-default-footer="true"
                    class="elevation-1"
                    style="display: inline-block; width: 64%;"
            >
                <template slot="items" slot-scope="props">
                    <td>{{ props.item.day }}</td>
                    <td>{{ props.item.time }}</td>
                    <td>{{ props.item.building + " " + props.item.room }}</td>
                </template>
                <template v-slot:item.action="{ item }">
                    <v-icon
                            @click="deleter(item)"
                    >
                        delete
                    </v-icon>
                </template>
            </v-data-table>
        </div>
    </section>
</template>

<script>
    export default {
        name: "my-rooms",
        data: function() {
            return {
                headers: [
                    { text: 'Date', align: 'center', sortable: false, value: 'day' },
                    { text: 'Time', align: 'center', sortable: false, value: 'time' },
                    { text: 'Location', align: 'center', sortable: false, value: 'location' },
                    { text: 'Action', align: 'center', sortable: false, value: 'action'}
                ],
            }
        },
        computed: {
            rooms() {
                return this.$store.state.rooms
            }
        },
        methods: {
            deleter(item) {
                this.$store.commit('deleteRoom', item)
            }
        }
    }
</script>

<style scoped>

</style>