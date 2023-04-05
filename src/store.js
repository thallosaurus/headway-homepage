import { createStore } from 'vuex';
import data from './assets/data.json';

export const store = createStore({
    state: {
        // artists: data.artists
        ...data,
        cookiesAccepted: false
    }
})