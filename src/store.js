import { createStore } from 'vuex';
import data from './assets/data.json';

console.log("store loaded");

export const store = createStore({
    state: {
        // artists: data.artists
        ...data,
        cookiesAccepted: true
    }
})