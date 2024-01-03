import { createStore } from "vuex";
import products from "@/data/products.json"

export default createStore({
	state: {
		selectedCategory: []
	},
	getters: {
		selectedCategory: ({ selectedCategory }) => selectedCategory
	},
	mutations: {
		loadCategory(state, index) {
			state.selectedCategory = products[index]
		}
	},
	actions: {
		loadCategory({ commit }, index) {
			commit('loadCategory', index)
		}
	},
	modules: {},
});
