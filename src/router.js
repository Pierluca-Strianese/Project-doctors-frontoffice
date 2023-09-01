import { createRouter, createWebHistory } from "vue-router";


import AppHome from "./pages/AppHome.vue";
import AppDoctorList from './pages/AppDoctorList.vue';
import AppLogIn from "./pages/AppLogIn.vue";
import AppRegister from "./pages/AppRegister.vue";
import AppSearch from "./pages/AppSearch.vue";
import AppDoctorShow from "./pages/AppDoctorShow.vue"

// import AppAbout from "./pages/AppAbout.vue";
// import page404 from "./pages/page404.vue";




// Importiamo i componenti che definiscono le varie pagine

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/home",
      name: "home",
      component: AppHome,
    },
    {
      path: '/doctors',
      name: 'doctor_list',
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
      path: "/login",
      name: "login",
      component: AppLogIn,
    },
    {
      path: "/register",
      name: "register",
      component: AppRegister,
    },
    {
      path: "/search",
      name: "search",
      component: AppSearch,
    },
    {
      path: "/doctor/:id",
      name: "doctor.show",
      component: AppDoctorShow,
    },

  ],
});

export { router };
