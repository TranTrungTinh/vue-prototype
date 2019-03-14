import Vue from 'vue';
import Vuex from 'vuex';

import user from './modules/user';
import workers from './modules/workers';
import filter from './modules/filteredTask';
import tasks from './modules/tasks';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    workers,
    filter,
    tasks
  }
});
