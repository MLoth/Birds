// https://markus.oberlehner.net/blog/implementing-a-simple-middleware-with-vue-router/ -> Middleware

import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home'
import pages from '../middleware/pages'

const router = new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
		},
		{
			path: '/about',
			name: 'about',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
		},
		{
			path: '/bird/:id',
			name: 'bird',
			component: () => import(/* webpackChunkName: "bird" */ './views/Bird.vue'),
		}
	]
})

router.beforeEach((to, from, next) => {
	pages(to, from);
	// We will handle a detail view in JS on the component itself.
	if ( to.name === 'bird' ) {
		console.log( 'Bird view!' );
	} else {
		next();
	}
})

Vue.use(Router)

export default router;