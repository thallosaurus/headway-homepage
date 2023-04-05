import { createRouter, createWebHashHistory } from "vue-router"
import LandingPage from './pages/LandingPage.vue';
import AboutPage from './pages/AboutPage.vue';
import ArtistsPage from './pages/ArtistsPage.vue';
import ArtistsDetailsPage from './pages/ArtistsDetailsPage.vue';
import SetPage from './pages/SetPage.vue';
import BookingPage from './pages/BookingPage.vue';
import DatesPage from './pages/DatesPage.vue';

const routes = [
    { 
        path: '/',
        component: LandingPage,
        name: "landing"
    },
    { path: '/about', component: AboutPage, name: "about" },
    { path: '/artists', component: ArtistsPage, name: "artists" },
    { path: '/artists/:id', name: "artistdetails", component: ArtistsDetailsPage },
    { path: '/sets', component: SetPage, name: "sets" },
    { path: '/dates', component: DatesPage, name: "dates" },
    { path: '/booking', component: BookingPage, name: "booking" },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
export let router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})