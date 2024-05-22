import { createRouter, createWebHistory } from "vue-router";
import Index from "../views/Index.vue";
import Create from "../views/Create.vue";
import Edit from "../views/Edit.vue";
import Catalog from "../views/Catalog.vue";
import Login from "../views/Login.vue";
import Admin from "../views/Admin.vue";
import Main from "../views/Main.vue";

const routes = [
  {
    name: "Main",
    path: "/",
    component: Main,
  },
  {
    name: "Catalog",
    path: "/catalog",
    component: Catalog,
  },
  {
    name: "Admin",
    path: "/admin",
    component: Admin,
  },
  {
    name: "Edit",
    path: "/edit/:id",
    component: Edit,
  },
  {
    name: "Create",
    path: "/create",
    component: Create,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
