import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Amplify, * as AmplifyModules from 'aws-amplify'
import { AmplifyPlugin, components } from 'aws-amplify-vue'
import devConfig from './aws-exports'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

Vue.use(AmplifyPlugin, AmplifyModules)
Amplify.configure(devConfig)
Vue.config.productionTip = false
Vue.use(Antd)

new Vue({
  router,
  store,
  components: {
    App,
    ...components
  },
  render: h => h(App)
}).$mount('#app')
