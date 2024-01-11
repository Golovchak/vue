import { createStore } from 'vuex'
import teachers from './modules/teachers'
import subjects from './modules/subjects'
import assignments from './modules/assignments'

export default createStore({
	namespaced: true,
	state: {
		user: {}
	},
	getters: {
		user: ({ user }) => user
	},
	mutations: {
		setUserData(state, userData) {
			state.user = userData
		}
	},
	actions: {
		setUserData({ commit }, userData) {
			commit('setUserData', userData)
		}
	},
	modules: {
		teachers,
		subjects,
		assignments
	},
})

