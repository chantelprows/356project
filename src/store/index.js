import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        page: "Home",
        rooms: []
    },

    mutations: {
        setPage: (state, str) => {
            state.page = str
        },
        addRoom: (state, obj) => {
            state.rooms.push(obj)
        },
        deleteRoom: (state, obj) => {
            for (let i = 0; i < state.rooms.length; i++) {
                if (state.rooms[i].location === obj.location && state.rooms[i].time === obj.time) {
                    state.rooms.splice(i, 1)
                }
            }
        }
    },

    actions: {

    }
});