import { createApp } from "vue";
import App from "./App.vue";
import routes from "./routes";
import { createPinia } from "pinia";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import specific icons */
import {
  faPlus,
  faEdit,
  faBars,
  faShoppingCart,
  faRightFromBracket,
  faUser,
  faQuestion,
  faMinus,
  faLock,
  faArrowRight,
  faCheck,
  faArrowLeft,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";

import { faDhl } from "@fortawesome/free-brands-svg-icons";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faQuestion,
  faArrowLeft,
  faTruckFast,
  faCheck,
  faArrowRight,
  faLock,
  faDhl,
  faEdit,
  faPlus,
  faMinus,
  faBars,
  faUser,
  faRightFromBracket,
  faShoppingCart
);

import plausible from "./plugins/plausible";

const plausibleOptions = {
  domain: "www.vite-shop.de",
  apiHost: "https://tracking.jmartz.gmbh",
  hashMode: false,
  trackLocalhost: false,
};

const app = createApp(App);

app.use(plausible, plausibleOptions);
app.component("fa", FontAwesomeIcon);
app.use(routes);
const pinia = createPinia();
pinia.use(({ store }) => {
  store.router = routes;
});
app.use(createPinia());
app.mount("#app");
