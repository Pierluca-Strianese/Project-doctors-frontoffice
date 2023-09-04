import { createRouter, createWebHistory } from "vue-router";

import AppHome from "./pages/AppHome.vue";
import AppSearch from "./pages/AppSearch.vue";
import AppDoctorShow from "./pages/AppDoctorShow.vue";
import AppDoctorIndex from "./pages/AppDoctorIndex.vue";

// Importiamo i componenti che definiscono le varie pagine

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: AppHome,
    },
    {
      path: "/search",
      name: "search",
      component: AppSearch,
    },
    {
      path: "/doctors",
      name: "user.index",
      component: AppDoctorIndex,
    },
    {
      path: "/doctor/:slug",
      name: "doctor.show",
      component: AppDoctorShow,
    },
  ],
});


export { router };
