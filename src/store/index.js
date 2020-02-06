import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        page: "Home",
        rooms: [{location: 'location', day: 'day', time: 'time'}]
    },

    mutations: {
        setPage: (state, str) => {
            state.page = str
        },
        addRoom: (state, obj) => {
            state.rooms.push(obj)
        }
    },

    actions: {

    }
});