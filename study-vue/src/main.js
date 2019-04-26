import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/reset.css'
Vue.config.productionTip = false
    //路由
    // import Router from 'vue-router'
    // import Home from './views/Home.vue'
    // import About from './views/About.vue'
    // Vue.use(Router)
    // const myRouter = new Router({
    //     routes: [{
    //             path: '/',
    //             name: 'home',
    //             component: Home
    //         },
    //         {
    //             path: '/about',
    //             name: 'about',
    //             component: About
    //         }
    //     ],
    //     mode: 'history'
    // })
new Vue({
    router,
    //router: myRouter,
    render: h => h(App)
}).$mount('#app')