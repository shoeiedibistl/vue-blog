import "./assets/styles/reset.scss";

import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";
import App from "./App.vue";
import UiPage from "./pages/UiPage.vue";

const app = createApp(App);

const routes = [
  {
    path: "/",
  },
  {
    path: "/ui",
    name: "ui",
    component: UiPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(router);
app.mount("#app");
