import { createApp } from "vue";
import App from "./App.vue";
// import Cart from "./views/Cart";
// import Store from "./views/Store";
import { createRouter, createWebHashHistory } from "vue-router";
import router from './router';
// import { createRouter } from "vue-router";

// const routes = [
//   { 
//     path: "/store", 
//     name: "Store",
//     component: Store 
//   },
//   { 
//     path: "/cart",
//     name: "Cart", 
//     component: Cart 
//   },
// ];

// const router = createRouter({
//   history: createWebHashHistory(),
//   routes
// });

// export default router

const app = createApp(App).use(router);
app.use(router);
app.mount("#app");

// createApp(App).mount('#app');