import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import blank  from '@/layout/blank'
import defaulta  from '@/layout/default'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/defaulta',
      name: 'defaulta',
      component: defaulta
    },
    {
      path: '/blank',
      name: 'blank',
      component: blank
    }
  ],
  mode:'history'
})
