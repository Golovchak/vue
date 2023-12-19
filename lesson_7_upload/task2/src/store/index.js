import { createStore } from 'vuex'
import products from "../data/products.json";

export default createStore({
	state: {
		products: [],
		cart: [],
		currentCurrency: {
			title: 'UAH',
			label: '₴',
			rate: 1
		},
	},
	getters: {
		products: ({ products }) => products,
		currentCurrency: ({ currentCurrency }) => currentCurrency,
		currentPrice: (state) => (price) => (price * state.currentCurrency.rate).toFixed(2),
		cartList: ({ cart, products }) => cart.map((product) => ({
			...products.find(item => item.id == product.id),
			count: product.count
		})),
		totalSum: (state, getters) => (getters.cartList.reduce((prevSum, product) => prevSum + product.price * product.count, 0) * state.currentCurrency.rate).toFixed(2)
	},
	mutations: {
		loadProducts(state, list) {
			state.products = list
		},
		setCurrentCurrency(state, currencyVal) {
			state.currentCurrency = currencyVal
		},
		addToCart(state, prodId) {
			let cartElem = state.cart.find(product => product.id == prodId)
			if (cartElem) cartElem.count++
			else {
				state.cart.push({
					id: prodId,
					count: 1
				})
			}
		},
		removeFromCart(state, prodId) {
			state.cart = state.cart.filter((product) => product.id !== prodId)
		},
	},
	actions: {
		loadProducts({ commit }) {
			commit('loadProducts', products)
		},
		setCurrentCurrency({ commit }, currencyVal) {
			commit("setCurrentCurrency", currencyVal)
		},
		addToCart({ commit }, prodId) {
			commit('addToCart', prodId)
		},
		removeFromCart({ commit }, prodId) {
			commit('removeFromCart', prodId)
		}
	},
	modules: {},
})
