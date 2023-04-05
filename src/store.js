import { createStore } from 'vuex';
import data from './assets/dj.json';

export const store = createStore({
    state: {
        artists: data.artists
    }
})