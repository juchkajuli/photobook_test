import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/explore",
    name: "Explore",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Explore.vue")
  },

  {
    path: "/account",
    name: "Account",
    component: () =>
    import("../views/Account.vue")
  },
  {
    path: "/message",
    name: "Message",
    component: () =>
    import("../views/Message.vue")
  },
  {
    path: "/setting",
    name: "Setting",
    component: () =>
    import("../views/Setting.vue")
  },
  {
    path: "/input",
    name: "Input",
    component: () =>
    import("../views/Input.vue")
  },
  {
    path: "/registration",
    name: "Registration",
    component: () =>
    import("../views/Registration.vue")
  }

];

const router = new VueRouter({
  routes
});

export default router;


