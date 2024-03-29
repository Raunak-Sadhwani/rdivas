import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import NotFound from "./pages/NotFound.vue";
import store from "./store/index.js";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomePage,
      alias: "/home",
      name: "home",
    },
    {
      path: "/:category/:id",
      component: () => import("./pages/CategoryPage.vue"),
      props: true,
    },
    {
      path: "/product/:id",
      component: () => import("./pages/ProductPage.vue"),
      props: true,
    },
    {
      name: "login",
      path: "/login",
      component: () => import("./pages/LoginPage.vue"),
      meta: {
        requiresUnauth: true,
      },
    },
    {
      name: "register",
      path: "/register",
      component: () => import("./pages/RegisterPage.vue"),
      meta: {
        requiresUnauth: true,
      },
    },
    {
      path: "/wish-list",
      component: () => import("./pages/WishListPage.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/cart",
      component: () => import("./pages/CartPage.vue"),
      name: "cart",
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/user",
      component: () => import("./pages/UserPage.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/verify/:id",
      component: () => import("./pages/VerifyPage.vue"),
      props: true,
    },
    {
      path: "/resetpassword/:id",
      props: true,
      component: () => import("./pages/ResetPass.vue"),
      meta: {
        requiresUnauth: true,
      },
    },
    {
      path: "/checkout",
      component: () => import("./pages/CheckoutPage.vue"),
      beforeEnter: (_, from, next) => {
        if (from.name === "cart") {
          next();
        } else {
          next({ name: "cart" });
        }
      },
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/orders",
      component: () => import("./pages/OrdersPage.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFound,
    },
  ],
});

router.beforeEach((to, _, next) => {
  if (to.meta.requiresUnauth && store.getters.isAuth) {
    next("/home");
  } else if (to.meta.requiresAuth && !store.getters.isAuth) {
    next("/login");
  } else {
    next();
  }
});

export default router;
