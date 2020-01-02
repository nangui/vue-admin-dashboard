import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Team from "../views/Team.vue";
import SignIn from "../views/SignInFlow/SignIn";
import Request from "../views/SignInFlow/Request";
import Recover from "../views/SignInFlow/Recover";
import * as netlifyIdentityWidget from "netlify-identity-widget";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/team",
    name: "team",
    component: Team,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/sign-in",
    name: "sign-in",
    component: SignIn
  },
  {
    path: "/request",
    name: "request",
    component: Request
  },
  {
    path: "/recover",
    name: "recover",
    component: Recover
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const currentUser = netlifyIdentityWidget.currentUser();
  const requiresAuth = to.matched.some(record => {
    return record.meta.requiresAuth;
  });
  if (requiresAuth && !currentUser) {
    next("sign-in");
  }
  next();
});

export default router;
