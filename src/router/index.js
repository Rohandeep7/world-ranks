import { createRouter, createWebHashHistory } from "vue-router";
import SearchFilterResultsPanel from "../views/SearchFilterResultsPanel.vue";
import Country from "../views/Country.vue";

const routes = [
  { path: "/", component: SearchFilterResultsPanel },
  { path: "/home", component: SearchFilterResultsPanel },
  { path: "/country/:name", name: "country", component: Country },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
