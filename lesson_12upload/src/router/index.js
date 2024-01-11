import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TeachersView from '../views/TeachersView.vue'
import TeachersEditor from '../views/TeachersEditor.vue'
import LessonsView from '../views/LessonsView.vue'
import LessonsEditor from '../views/LessonsEditor.vue'
import AssignmentsView from '../views/AssignmentsView.vue'
import AssignmentsEditor from '../views/AssignmentsEditor.vue'
import LoginView from '../views/LoginView.vue'

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
	},
	{
		path: '/teachers',
		name: 'teachers',
		component: TeachersView,
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		// component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
	},
	{
		path: '/teaches/editor/:id?',
		name: 'teaches-editor',
		component: TeachersEditor,
	},
	{
		path: '/lessons',
		name: 'lessons',
		component: LessonsView,
	},
	{
		path: '/lessons/lesson/:id?',
		name: 'lessons-editor',
		component: LessonsEditor,
	},
	{
		path: '/assignments',
		name: 'assignments',
		component: AssignmentsView,
	},
	{
		path: '/assignments/editor/:id?',
		name: 'assignments-editor',
		component: AssignmentsEditor,
	},
	{
		path: '/user/:login?',
		name: 'user',
		component: LoginView,
	},

]

const router = createRouter({
	history: createWebHistory(),
	mode: 'history',
	routes,
})

export default router
