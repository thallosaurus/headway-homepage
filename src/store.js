import { createStore } from 'vuex';
import data from './assets/data.json';
import { fetchArtists } from './api.js';

// console.log("store loaded");


export const store = createStore({
    state: {
        // artists: data.artists
        artists: [],
        cookiesAccepted: true
    },
    mutations: {
        setArtists(state, data) {
            state.artists = data;
        }
    }
});

fetchArtists().then(d => {
    console.log(d);
    store.commit('setArtists', d);
});