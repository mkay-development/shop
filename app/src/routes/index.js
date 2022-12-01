import { createWebHistory, createRouter } from "vue-router";

import Home from "../pages/home.vue";
import UserLogin from "../pages/user/login.vue";
import UserLogout from "../pages/user/logout.vue";
import Impressum from "../pages/impressum.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/impressum", component: Impressum },
  { path: "/login", component: UserLogin },
  { path: "/logout", component: UserLogout },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
