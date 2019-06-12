import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/pages/Home'
import Blog from '@/components/pages/users'
import detail from '@/components/pages/detail'
import debug from '@/components/pages/debug'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/', // http://localhost:8080/#/
      name: 'Home',
      component: Home
    },
    {
      path: '/users', // http://localhost:8080/#/blog
      name: 'users',
      component: Blog
    },    
		{
      path: '/debug', // http://localhost:8080/#/blog
      name: 'debug',
      component: debug
    },
				{
		  path: '/detail', // http://localhost:8080/#/blog
		  name: 'detail',
		  component: detail
		},
		
  ]
})