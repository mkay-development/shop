import { createWebHistory, createRouter } from "vue-router";

import Home from "../pages/home.vue";
import UserLogin from "../pages/user/login.vue";
import UserLogout from "../pages/user/logout.vue";
import Impressum from "../pages/impressum.vue";
import CheckoutCart from "../pages/checkout/cart.vue";
import CheckoutPayment from "../pages/checkout/payment.vue";
import CheckoutShipping from "../pages/checkout/shipping.vue";
import CheckoutConfirm from "../pages/checkout/confirm.vue";
import CheckoutAccount from "../pages/checkout/account.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/impressum", component: Impressum },
  { path: "/login", component: UserLogin },
  { path: "/logout", component: UserLogout },
  { path: "/checkout/cart", component: CheckoutCart },
  { path: "/checkout/shipping", component: CheckoutShipping },
  { path: "/checkout/payment", component: CheckoutPayment },
  { path: "/checkout/confirm", component: CheckoutConfirm },
  { path: "/checkout/account", component: CheckoutAccount },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
