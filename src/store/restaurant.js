import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        restaurants: []
    },
    mutations: {
        getAllRestaurants(state) {
            axios
                .get("api/restaurants")
                .then(response => {
                    state.restaurants = response.data["hydra:member"];
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
    },
    actions: {
    },
    modules: {
    }
})