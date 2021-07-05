import Vue from 'vue'
import Vuex from 'vuex'
import VueSocketIO from "vue-socket.io";
import vuetify from './plugins/vuetify'
import VueMoment from 'vue-moment'
import App from './App.vue'
import router from "./components/router/router"
import VueSmartWidget from 'vue-smart-widget'
import authentication from "./plugins/authentication.js "

Vue.use(VueSmartWidget)

Vue.use(VueMoment)
// import VueSocketIO from "vue-socket.io";
Vue.prototype.$socket = new VueSocketIO({
  debug: false,
  connection: 'http://9.8.100.153:8082',
  options: {'transports': ['websocket']},
  upgrade: false
});
Vue.use(Vue.prototype.$socket);
Vue.use(Vuex)

var store = new Vuex.Store({
  state: {
    anomaly: true,
    interval: "5s",
    refresh: false,
    ctLineData: { type: "bar", data: { labels: [], datasets: [{ label: "Cycle Time(Latest 10)", data: [], backgroundColor: "#465942", borderColor: "#465942", borderWidth: 1}] }, options: { legend: {display:true, position:'top',align:'end'}, responsive: true, lineTension: 1, scales: { yAxes: [{ scaleLabel: { display: true, labelString: 'sec' },ticks: { beginAtZero: true, padding: 25}}]}}},
    logined: false,
    ctAvg: []
    
  },
  mutations: { 
    changeAnomalyState(state, anomalyState) {
      state.anomaly = anomalyState;
    },
    changeInterval(state, selInterval) {
      state.interval = selInterval;
    },
    changeCTHistory(state, ctHistory) {
      state.ctLineData = ctHistory;
    },
    changeAvgVal(state, ctAvgVal) {
      state.ctAvg = ctAvgVal;
    },
    changeLogined(state, loginedState) {
      state.logined = loginedState;
    }
  },
  actions: {
    callAnomaly({ commit }, { anomalyState }) {
      commit('changeAnomalyState', anomalyState);
    },
    callInterval({ commit }, { selInterval }) {
      commit('changeInterval', selInterval);
    },
    callCTHistory({ commit }, { ctHistory }) {
      commit('changeCTHistory', ctHistory);
    },
    callLogined({ commit }, { loginedState }) {
      commit('changeLogined', loginedState);
    },
    callCTAvgVal({ commit }, { ctAvgVal }) {
      commit('changeAvgVal', ctAvgVal);
    },
  }
});

Vue.config.productionTip = false

Vue.use(authentication)

Vue.$keycloak.init({ checkLoginIframe: false }).then(() => {
  new Vue({
    router,
    store,
    vuetify,
    render: h => h(App),
  }).$mount('#app')
});

