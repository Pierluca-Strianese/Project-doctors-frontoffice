import { createRouter, createWebHistory } from "vue-router";

import AppHome from "./pages/AppHome.vue";
import AppDoctorList from "./pages/AppDoctorList.vue";
import AppSearch from "./pages/AppSearch.vue";
import AppDoctorShow from "./pages/AppDoctorShow.vue";

// import AppAbout from "./pages/AppAbout.vue";
// import page404 from "./pages/page404.vue";

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
      path: "/doctors",
      name: "doctor_list",
      component: AppDoctorList,
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   component: AppAbout,
    // },
    // {
    //   path: "/:pathMatch(.*)*",
    //   name: "page404",
    //   component: page404,
    // },
    {
      path: "/search",
      name: "search",
      component: AppSearch,
    },
    {
      path: "/doctor/:slug",
      name: "doctor.show",
      component: AppDoctorShow,
    },
  ],
});

export { router };
