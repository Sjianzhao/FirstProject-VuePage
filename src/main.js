import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import Video from 'video.js';
import 'video.js/dist/video-js.css';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.http = Vue.prototype.$http = axios;
Vue.use(ElementUI);
Vue.prototype.$video = Video;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
