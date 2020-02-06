<template>
  <v-app style="margin: 0; padding: 0;">
    <section>
      <v-toolbar style="background-color: #002e5d;" dark>
        <img src="./assets/byu.svg" style="height: 44px; width: 44px; margin-right: 10px;">
        <v-toolbar-title style="font-size: 32px;"> Study Rooms </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items style="margin-left: 20px;">
          <v-btn text @click="setPage('Home')" :style="tabSelected('Home')">Home</v-btn>
          <v-btn text @click="setPage('Schedule')" :style="tabSelected('Schedule')">Schedule Room</v-btn>
          <v-btn text @click="setPage('My')" :style="tabSelected('My')">My Rooms</v-btn>
        </v-toolbar-items>
      </v-toolbar>

      <v-content>
        <home v-if="page === 'Home'"></home>
        <schedule-room v-else-if="page === 'Schedule'"></schedule-room>
        <my-rooms v-else></my-rooms>
      </v-content>
    </section>
  </v-app>
</template>

<script>
import Home from './components/Home'
import MyRooms from './components/MyRooms'
import ScheduleRoom from "./components/ScheduleRoom";

export default {
  name: 'App',
  components: {
    MyRooms,
    ScheduleRoom,
    Home
  },
  data: () => ({
    //
  }),
  methods: {
    setPage(str) {
      this.$store.commit('setPage', str)
    },
    tabSelected(str) {
      if (str === this.page) {
          return 'background-color: #628CB6'
      }
    }
  },
  computed: {
    page() {
      return this.$store.state.page
    }
  }
};
</script>
