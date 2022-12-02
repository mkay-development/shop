import { createWebHistory, createRouter } from "vue-router";

import Home from "../pages/home.vue";
import UserLogin from "../pages/user/login.vue";
import UserLogout from "../pages/user/logout.vue";
import Impressum from "../pages/impressum.vue";
import CheckoutCart from "../pages/checkout/cart.vue";
import CheckoutShipping from "../pages/checkout/shipping.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/impressum", component: Impressum },
  { path: "/login", component: UserLogin },
  { path: "/logout", component: UserLogout },
  { path: "/checkout/cart", component: CheckoutCart },
  { path: "/checkout/shipping", component: CheckoutShipping },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
