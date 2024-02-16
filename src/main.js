import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { OhVueIcon, addIcons } from "oh-vue-icons";

import { BiSearch, PrSpinner, MdClear } from "oh-vue-icons/icons";
addIcons(BiSearch, PrSpinner, MdClear);

const app = createApp(App);

app.use(router);

app.component("v-icon", OhVueIcon).mount("#app");
