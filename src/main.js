// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import './assets/css/elemindex.css'; // 主题样式
import './assets/css/theme.css';  // 主题颜色样式
import './assets/css/allbasis.css';  // 基础样式
import './assets/css/index.css'; // 主题颜色样式
import './assets/css/icon.css'; // 字体图标
import ElementUI from 'element-ui';
import store from '@/store/index';
// import '../static/css/ele-red/index.css';       // 红色主题
import '../static/css/ele-blue/index.css';       // 蓝色主题

Vue.config.productionTip = false;
/* 权限指令 */
Vue.directive('has', {
  bind: function (el, binding) {
    if (!Vue.prototype.$_has(binding.value)) {
      el.parentNode.removeChild(el);
    }
  }
});
/* eslint-disable no-new */
Vue.use(ElementUI);
Vue.prototype.$axios = axios;
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
