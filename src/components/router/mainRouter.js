import Vue from 'vue'
import Router from 'vue-router'

import Login from '../Login.vue';
import App from '../../App.vue'

export default new Router({
    mode: 'history', // history 모드는 자연스러운 url 가능, 지정하지 않으면 해시(#)기호로 url 사용
    routes: [
        {
            path: "/main", // 경로
            name: "Main", // 해당 경로의 이름 
            component: App, // 이동할 컴포넌트
        },
        {
            path: "/login", // 경로
            name: "Login", // 해당 경로의 이름 
            component: Login, // 이동할 컴포넌트
        }
    ]
});