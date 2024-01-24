import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { OhVueIcon, addIcons } from "oh-vue-icons";

import { BiSearch } from "oh-vue-icons/icons";
addIcons(BiSearch);

const app = createApp(App);
app.component("v-icon", OhVueIcon).mount("#app");
