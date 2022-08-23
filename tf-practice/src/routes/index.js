import AppVue from "@/App.vue";
import HomeVue from "@/views/HomeVue.vue";
import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue"

const routes = [
    {
        path: "/",
        name: "App",
        component: AppVue,
      },
      {
        path: "/HomeVue",
        name: "HomeVue",
        component: HomeVue,
      },
            {
        path: "/hw",
        name: "HelloWorld",
        component: HelloWorld,
      },
]


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  });
  
  export default router;
  