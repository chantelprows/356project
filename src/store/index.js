import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
      page: "Home"
    },

    mutations: {
        setPage: (state, str) => {
            state.page = str
        }
    },

    actions: {

    }
});