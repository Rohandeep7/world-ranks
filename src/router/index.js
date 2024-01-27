import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../pages/Home.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/home", component: Home },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
