import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/create-article",
    component: () => import("../pages/CreateArticlePage.vue"),
  },
  {
    path: "/:articleId/edit",
    component: () => import("../pages/EditArticlePage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
