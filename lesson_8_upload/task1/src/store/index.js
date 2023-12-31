import { createStore } from 'vuex'
import { categories } from '@/components/settings'
import products from '@/data/products.json'

export default createStore({
	state: {
		categoryIndex: null,
		currentCategory: [],
	},
	getters: {
		currentCategory: ({ currentCategory, categoryIndex }) => currentCategory[categoryIndex],
		selectedCategory: ({ categoryIndex }) => categories[categoryIndex].title,
		categoryIndex: ({ categoryIndex }) => categoryIndex
	},
	mutations: {
		selectCategory(state, categoryIndex) {
			if (categoryIndex == null) {
				categoryIndex = Math.floor(Math.random() * 4)
				state.currentCategory = products
			}
			state.categoryIndex = categoryIndex
		},
	},
	actions: {
		selectCategory({ commit }, categoryIndex) {
			commit('selectCategory', categoryIndex)
		},

	},
	modules: {},
})
