import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as NetlifyIdentityWidget from "netlify-identity-widget";

Vue.config.productionTip = false;

// Initialize Netlify Identity
NetlifyIdentityWidget.init();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
