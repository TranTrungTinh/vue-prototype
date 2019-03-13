import Vue from 'vue';
import App from './App.vue';
import router from './route/router';
import store from './store/store';

import VueProgressBar from 'vue-progressbar'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

const options = {
  color: '#eb2f06',
  failedColor: '#44bd32',
  thickness: '3px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  inverse: false
}

Vue.config.productionTip = false
Vue.use(Antd);
Vue.use(VueProgressBar, options);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
