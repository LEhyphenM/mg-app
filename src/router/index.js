import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
// import App from "../App.vue";
// import About from "../views/About";
// import Cart from "../views/Cart";
// import Store from "../views/Store";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/store',
    name: 'Store',
    // component: Store
    component: () => import(/* webpackChunkName: "store" */ '../views/Store.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    // component: Cart
    component: () => import(/* webpackChunkName: "cart" */ '../views/Cart.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // component: About,
  },
  // {
  //   path: '/store',
  //   name: 'Store',
  //   // route level code-splitting
  //   // this generates a separate chunk (store.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "store" */ '../views/Store.vue')
  //   // component: Store,
  // },
  // {
  //   path: '/cart',
  //   name: 'Cart',
  //   // route level code-splitting
  //   // this generates a separate chunk (cart.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "cart" */ '../views/Cart.vue')
  //   // component: Cart,
  // },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router