import Vue from 'vue'
import Router from 'vue-router'
const RefactorDemo = () => import('../pages/refactor-demo')
const BaseExample = () => import('../pages/base-example.vue')

const MixApi = () => import('../pages/mix-api')

const ApiDemo = () => import('../pages/api-demo')

const RefsApi = () => import('../pages/getRefs')

const toolsApi = () => import('../pages/tools-api')

const VuexRouter = () => import('../pages/vuex-router')

const Test = () => import('../pages/element-ui-test')


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/',
      name: 'RefactorDemo',
      component: RefactorDemo
    },
    {
      path: '/base-example',
      name: 'BaseExample',
      component: BaseExample
    },
    {
      path: '/mix-api',
      name: 'MixApi',
      component: MixApi
    },
    {
      path: '/api-demo',
      name: 'ApiDemo',
      component: ApiDemo
    },
    {
      path: '/refs-api',
      name: 'RefsApi',
      component: RefsApi
    },
    {
      path: '/tools-api',
      name: 'toolsApi',
      component: toolsApi
    },
    {
      path: '/vuex-router',
      name: 'VuexRouter',
      component: VuexRouter
    },
  ]
})
