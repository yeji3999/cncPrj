import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueSocketIO from "vue-socket.io";
import vuetify from './plugins/vuetify'
import VueMoment from 'vue-moment'
import router from "./components/router/router"

Vue.use(VueMoment)
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
    interval: "5s",
    refresh: false,
    ctLineData: {type: "bar",data: {labels: [], datasets: [{label: "Cycle Time(last 10)",data:[], backgroundColor: "#465942",borderColor: "#465942", borderWidth: 1}]}, options: { responsive: true, lineTension: 1, scales: { yAxes: [{ scaleLabel: {display: true, labelString: 'sec'}, ticks: { beginAtZero: true, padding: 25}}]}}},

  },
  mutations: { 
    changeMessage(state, newMsg) {
      state.message = newMsg;
      console.log(state.message)
    },
    changeInterval(state, selInterval) {
      state.interval = selInterval;
      console.log(state.interval)
    },
    changeCTHistory(state, ctHistory) {
      state.ctLineData = ctHistory;
      console.log(state.ctLineData)
    },
  },
  actions: {
    callMutation({ commit }, { newMsg }) {
      commit('changeMessage', newMsg);
    },
    callInterval({ commit }, { selInterval }) {
      commit('changeInterval', selInterval);
    },
    callCTHistory({ commit }, { ctHistory }) {
      commit('changeCTHistory', ctHistory);
    },
  },
});

setInterval(() => console.clear(), 300000);

Vue.config.productionTip = false
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')


