import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        weather: []
    },
    actions: {
        getWeatherInfo({commit}) {
            return axios('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&past_days=10&hourly=temperature_2m,relativehumidity_2m,windspeed_10m', {
                method: 'GET'
            })
            .then((response) => {
                commit('updateWeatherInfo', response.data)
            })
        }
    },
    mutations: {
        updateWeatherInfo(state, weather) {
            state.weather = weather
        }
    },
    getters: {
        weatherInfo(state) {
            return state.weather
        }
    }
})

export default store