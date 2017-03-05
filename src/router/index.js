import Vue from 'vue'
import Router from 'vue-router'
import NotFoundComponent from '../components/NotFoundComponent.vue'
import MainComponent from '../components/main/MainComponent.vue'
import HomeComponent from '../components/main/home/HomeComponent.vue'
import AboutComponent from '../components/main/about/AboutComponent.vue'
import WorkComponent from '../components/main/work/WorkComponent.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeComponent
    },
    {
      path: '/about',
      name: 'about',
      component: AboutComponent
    },
    {
      path: '/work',
      name: 'work',
      component: WorkComponent
    },

    // {
    //   path: '/resume',
    //   name: 'resume',
    //   component: HomeComponent
    // },
    // {
    //   path: '/projects',
    //   name: 'projects',
    //   component: HomeComponent
    // },
    // {
    //   path: '/articles',
    //   name: 'articles',
    //   component: HomeComponent
    // }
    { path: '*', component: NotFoundComponent }
  ]
})
