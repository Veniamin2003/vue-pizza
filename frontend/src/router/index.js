import { createRouter, createWebHistory } from "vue-router";
import Index from "../views/Index.vue";
import Create from "../views/Create.vue";
import Edit from "../views/Edit.vue";
import Catalog from "../views/Catalog.vue";
import Login from "../views/Login.vue";
import Admin from "../views/Admin.vue";
import Main from "../views/Main.vue";
import Contacts from "../views/Contacts.vue";
import About from "../views/About.vue";
import User from "../views/User.vue";
import OrderList from "../views/OrderList.vue";
import ProductsList from "../views/ProductsList.vue";

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
    name: "OrderList",
    path: "/admin/orders",
    component: OrderList,
  },
  {
    name: "ProductsList",
    path: "/admin/products",
    component: ProductsList,
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
    name: "Contacts",
    path: "/contacts",
    component: Contacts,
  },
  {
    name: "About",
    path: "/about",
    component: About,
  },
  {
    name: "User",
    path: "/user",
    component: User,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
