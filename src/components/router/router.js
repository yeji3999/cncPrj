
import Vue from 'vue'
import Router from 'vue-router'
import Op1Main from '../OpMain/Op1Main.vue'
import Op2Main from '../OpMain/Op2Main.vue'
import Op3Main from '../OpMain/Op3Main.vue'
import Op4Main from '../OpMain/Op4Main.vue'
import Op5Main from '../OpMain/Op5Main.vue'
import Unauthorized from '../OpMain/Unauthorized.vue'
import Index from '../OpMain/IndexPage.vue'


Vue.use(Router)

const router =  new Router({
    mode: 'history', // history 모드는 자연스러운 url 가능, 지정하지 않으면 해시(#)기호로 url 사용
    routes: [
        {
            path: "/", // 경로
            name: "Main", // 해당 경로의 이름 
            component: Index, // 이동할 컴포넌트
            meta: {isAuthenticated: false}
        },

        {
            path: "/op1", // 경로
            name: "Op1Main", // 해당 경로의 이름 
            component: Op1Main, // 이동할 컴포넌트
            meta: {isAuthenticated: true, roles: ['HNAdmin', 'HNUser']}
        },
        {
            path: "/op2", // 경로
            name: "Op2Main", // 해당 경로의 이름 
            component: Op2Main, // 이동할 컴포넌트
            meta: {isAuthenticated: true, roles: ['HNAdmin']}
        },
        {
            path: "/op3", // 경로
            name: "Op3Main", // 해당 경로의 이름 
            component: Op3Main, // 이동할 컴포넌트
            meta: {isAuthenticated: true, roles: ['HNUser']}
        },
        {
            path: "/op4", // 경로
            name: "Op4Main", // 해당 경로의 이름 
            component: Op4Main, // 이동할 컴포넌트
            meta: {isAuthenticated: true, roles: ['HNUser']}
        },
        {
            path: "/op5", // 경로
            name: "Op5Main", // 해당 경로의 이름 
            component: Op5Main, // 이동할 컴포넌트
        },
        {
            path: "/Unauthorized",
            name: "Unauthorized",
            component: Unauthorized
        }
    ]
});

router.beforeEach((to, from, next) => {
    if (to.meta.isAuthenticated) {
      if (!Vue.$keycloak.authenticated) {
        // router.push({ path: '/Unauthorized' });
        Vue.$keycloak.login();
        // The page is protected and the user is not authenticated. Force a login.
        let url = window.location.toString()
        let tmp = url.split('/')
        Vue.$keycloak.login({ redirectUri: 'http://'+tmp[2] + to.path })
      } else if (roleCheck(to.meta.roles)) {
        // The user was authenticated, and has the app role
        Vue.$keycloak.updateToken(70)
          .then(() => {
            next()
          })
          .catch(err => {
            console.error(err)
          })
      } else {
        // The user was authenticated, but did not have the correct role
        // Redirect to an error page
        next({ name: 'Unauthorized' })//test())//{ name: 'Unauthorized' })
      }
    } else {
      // This page did not require authentication
      next()
    }
});

const roleCheck = function(roles) {
    for(let i=0; i < roles.length; i++) {
      if(Vue.$keycloak.hasRealmRole(roles[i])) {
        return true;
      }
    }
    return false;
}

export default router;
