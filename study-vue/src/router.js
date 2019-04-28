import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Community from './views/Community.vue'
import Learn from './views/Learn.vue'
import Student from './views/Student.vue'

import Download from './components/community/Download.vue'
import Personal from './components/community/Personal.vue'
import Academic from './components/community/Academic.vue'

import Question from './components/community/Question.vue'
import Err from './components/Err.vue'

import User from './global'

Vue.use(Router)

const router = new Router({
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact',
    routes: [{
            path: '/home',
            name: 'home',
            meta: {
                login: false
            },
            //alias:'/home',别名
            components: {
                default: Home,
                'community': Community,

            }

        }, {
            path: '/student',
            name: 'student',
            component: Student
        },

        {
            path: '/about',
            name: 'about',
            component: About
        },

        {
            path: '/learn',
            name: 'learn',
            component: Learn
        },
        {
            path: '/err.html',
            name: 'err',
            component: Err
        }, {
            path: '/community',
            name: 'community',
            component: Community,
            redirect: '/community/academic',
            meta: {
                login: false
            },
            children: [{
                    path: 'download',
                    name: 'download',
                    component: Download
                }, {
                    path: 'personal',
                    name: 'personal',
                    component: Personal
                },
                {
                    path: 'academic',
                    name: 'academic',
                    component: Academic,
                    //独享守卫
                    // beforeEnter(to,from, next) {
                    //     const answer = confirm('你还没有登录，要登陆后才能浏览信息，要登录吗？')
                    //     if (answer) {
                    //         next({
                    //             name: 'personal'
                    //         });
                    //     } else {
                    //         next(false)
                    //     }
                    // }
                }
            ]
        }, {
            path: '/question/:id',
            name: 'question',
            component: Question
        },
        {
            path: '*',
            redirect(to) {
                if (to.path == '/') {
                    return '/home'
                } else {
                    return {
                        name: 'err'
                    }
                }

            }
        },

    ],
    mode: 'history'
})

//全局守卫

router.beforeEach((to, from, next) => {
    if(to.path==='/community/academic'){
       if(!User.login){
        next({name:'personal'});
       } else{
        next(false)
       }
    } else{
        next()
    }
 
    console.log("User.login:"+User.login)

})

export default router;