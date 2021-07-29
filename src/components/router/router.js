
import Vue from 'vue'
import Router from 'vue-router'
import Op1Main from '../OpMain/Op1Main.vue'
import Op2Main from '../OpMain/Op2Main.vue'
import Op3Main from '../OpMain/Op3Main.vue'
import Op4Main from '../OpMain/Op4Main.vue'
import Op5Main from '../OpMain/Op5Main.vue'
import Op6Main from '../OpMain/Op6Main.vue'
import Op7Main from '../OpMain/Op7Main.vue'
import Op8Main from '../OpMain/Op8Main.vue'
import Op9Main from '../OpMain/Op9Main.vue'
import Op10Main from '../OpMain/Op10Main.vue'
import Op11Main from '../OpMain/Op11Main.vue'
import Op12Main from '../OpMain/Op12Main.vue'
import Unauthorized from '../OpMain/Unauthorized.vue'
import Index from '../OpMain/IndexPage.vue'
// import viewAll from '../Workshop/AllWorkshop.vue'

import UnityView from '../Line/Line1.vue'

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
          path: "/viewAll", // 경로
          name: "viewAll", // 해당 경로의 이름 
          component: UnityView, // 이동할 컴포넌트
        },
        {
          path: "/workshop1", // 경로
          name: "workshop1", // 해당 경로의 이름 
          component: UnityView, // 이동할 컴포넌트
        },
        {
          path: "/workshop2", // 경로
          name: "workshop2", // 해당 경로의 이름 
          component: UnityView, // 이동할 컴포넌트
        },
        {
          path: "/workshop3", // 경로
          name: "workshop3", // 해당 경로의 이름 
          component: UnityView, // 이동할 컴포넌트
        }, 
        {
          path: "/line1", // 경로
          name: "line1", // 해당 경로의 이름 
          component: UnityView, // 이동할 컴포넌트
        },      
        {
          path: "/line2", // 경로
          name: "line2", // 해당 경로의 이름 
          component: UnityView, // 이동할 컴포넌트
        }, 
        {
          path: "/line3", // 경로
          name: "line3", // 해당 경로의 이름 
          component: UnityView, // 이동할 컴포넌트
        },
        {
          path: "/line4", // 경로
          name: "line4", // 해당 경로의 이름 
          component: UnityView, // 이동할 컴포넌트
        }, 
        {
          path: "/line5", // 경로
          name: "line5", // 해당 경로의 이름 
          component: UnityView, // 이동할 컴포넌트
        },
        {
          path: "/line6", // 경로
          name: "line6", // 해당 경로의 이름 
          component: UnityView, // 이동할 컴포넌트
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
          path: "/op6", // 경로
          name: "Op6Main", // 해당 경로의 이름 
          component: Op6Main, // 이동할 컴포넌트
        },
        {
            path: "/op7", // 경로
            name: "Op7Main", // 해당 경로의 이름 
            component: Op7Main, // 이동할 컴포넌트
        },
        {
            path: "/op8", // 경로
            name: "Op8Main", // 해당 경로의 이름 
            component: Op8Main, // 이동할 컴포넌트
        },
        {
            path: "/op9", // 경로
            name: "Op9Main", // 해당 경로의 이름 
            component: Op9Main, // 이동할 컴포넌트
        },
        {
            path: "/op10", // 경로
            name: "Op10Main", // 해당 경로의 이름 
            component: Op10Main, // 이동할 컴포넌트
        },
        {
            path: "/op11", // 경로
            name: "Op11Main", // 해당 경로의 이름 
            component: Op11Main, // 이동할 컴포넌트
        },
        {
            path: "/op12", // 경로
            name: "Op12Main", // 해당 경로의 이름 
            component: Op12Main, // 이동할 컴포넌트
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
