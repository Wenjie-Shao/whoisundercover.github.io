import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Game from './views/Game.vue'
import Result from './views/Result.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/game',
      name: 'game',
      component: Game
    },
    {
      path: '/result',
      name: 'result',
      component: Result
    },
  ]
})
