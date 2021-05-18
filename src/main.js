import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueSocketIO from "vue-socket.io";
import vuetify from './plugins/vuetify'

Vue.prototype.$socket = new VueSocketIO({
  debug: true,
  connection: 'http://9.8.100.153:1234',
  options: {'transports': ['websocket']}
});
Vue.use(Vue.prototype.$socket);
Vue.use(Vuex)

var store = new Vuex.Store({
  state: {
    message: true,
  },
  mutations: {
    changeMessage(state, newMsg) {
      state.message = newMsg;
      console.log(state.message)
    }
  },
  actions: {
    callMutation({ commit }, { newMsg }) {
      commit('changeMessage', newMsg);
    }
  },
})

Vue.config.productionTip = false
new Vue({
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')


