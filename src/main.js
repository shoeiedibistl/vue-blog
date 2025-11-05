import "./assets/styles/reset.scss";

import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";
import App from "./App.vue";
import UiPage from "./pages/UiPage.vue";
import IndexPage from "./pages/IndexPage.vue";
import ArticlePage from "./pages/ArticlePage.vue";

const app = createApp(App);

const routes = [
  {
    path: "/",
    name: "index",
    component: IndexPage,
  },
  {
    path: "/ui",
    name: "ui",
    component: UiPage,
  },
  {
    path: "/article",
    name: "article",
    component: ArticlePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

app.use(router);
app.mount("#app");
