import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/character/:id",
    name: "character",
    component: () => import("../views/CharacterView.vue"),
  },
  {
    path: "/notfound",
    name: "notfound",
    component: () => import("../views/NotfoundView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
