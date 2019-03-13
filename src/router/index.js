import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      meta: {
        title: '总页'
      },
      component: (resolve) => require(['@/layouts/BasicLayout.vue'], resolve),
      children: [
        {
          path: '/',
          redirect: 'one'
        },
        {
          path: 'one',
          name: 'One',
          meta: {
            title: '1'
          },
          component: (resolve) => require(['@/components/one'], resolve)
        },
        {
          path: 'two',
          name: 'Tne',
          meta: {
            title: '2'
          },
          component: (resolve) => require(['@/components/two'], resolve)
        }
      ]
    }
  ]
})
