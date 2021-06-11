
import Vue from 'vue'
import Router from 'vue-router'

import Op1Main from '../OpMain/Op1Main.vue'
import Op2Main from '../OpMain/Op2Main.vue'
import Op3Main from '../OpMain/Op3Main.vue'
import Op4Main from '../OpMain/Op4Main.vue'
import Op5Main from '../OpMain/Op5Main.vue'
// import Login from '../../components/Login.vue'

Vue.use(Router)

export default new Router({
    mode: 'history', // history 모드는 자연스러운 url 가능, 지정하지 않으면 해시(#)기호로 url 사용
    routes: [
        // {
        //     path: "/", // 경로
        //     name: "Login", // 해당 경로의 이름 
        //     component: Login, // 이동할 컴포넌트
        // },
        {
            path: "/op1", // 경로
            name: "Op1Main", // 해당 경로의 이름 
            component: Op1Main, // 이동할 컴포넌트
        },
        {
            path: "/op2", // 경로
            name: "Op2Main", // 해당 경로의 이름 
            component: Op2Main, // 이동할 컴포넌트
        },
        {
            path: "/op3", // 경로
            name: "Op3Main", // 해당 경로의 이름 
            component: Op3Main, // 이동할 컴포넌트
        },
        {
            path: "/op4", // 경로
            name: "Op4Main", // 해당 경로의 이름 
            component: Op4Main, // 이동할 컴포넌트
        },
        {
            path: "/op5", // 경로
            name: "Op5Main", // 해당 경로의 이름 
            component: Op5Main, // 이동할 컴포넌트
        }
    ]
});