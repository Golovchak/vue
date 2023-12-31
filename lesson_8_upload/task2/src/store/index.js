import { createStore } from 'vuex'
import carsList from '@/data/carList.json'
import { extractFilterParams } from '@/components/helpers'

export default createStore({
	state: {
		carsList: [],
		categorySelected: null,
		bodyTypeSelected: [],
		makeSelected: null,
		modelSelected: null,
		minYearSelected: null,
		maxYearSelected: null,
	},
	getters: {
		carsList: ({ carsList }) => carsList,
		getCarCategories: ({ carsList }) => extractFilterParams(carsList, "category"),
		getCarBodyType: ({ carsList }) => extractFilterParams(carsList, "bodyType"),
		getCarMake: ({ carsList }) => extractFilterParams(carsList, "make"),
		getCarModel: ({ carsList }) => extractFilterParams(carsList, "model"),
		getCarYear: ({ carsList }) => extractFilterParams(carsList, "year"),
		getCarMinYear: (state, getters) => getters.getCarYear.reduce((min, current) => (min != null && min < current) ? min : current),
		getCarMaxYear: (state, getters) => getters.getCarYear.reduce((max, current) => (max > current) ? max : current),
		getYearRangeFrom(state, getters) {
			let range = []
			let rangeEnd = state.maxYearSelected || getters.getCarMaxYear
			for (let i = rangeEnd; i >= getters.getCarMinYear; i--) range.push(i)
			return range
		},
		getYearRangeUntil(state, getters) {
			let range = []
			let rangeStart = state.minYearSelected || getters.getCarMinYear
			for (let i = getters.getCarMaxYear; i >= rangeStart; i--) range.push(i)
			return range
		},
		getYearRange(state, getters) {
			let range = []
			let rangeStart = state.minYearSelected || getters.getCarMinYear
			let rangeEnd = state.maxYearSelected || getters.getCarMaxYear
			for (let i = rangeEnd; i >= rangeStart; i--) range.push(i)
			return range
		},
		filteredCarsListByCategory: (state) => {
			if (!state.categorySelected) return state.carsList
			else return state.carsList.filter(car => car.category == state.categorySelected)
		},
		filteredCarsListByBodyType(state, getters) {
			if (!state.bodyTypeSelected[0]) return getters.filteredCarsListByCategory
			else return getters.filteredCarsListByCategory.filter(car => state.bodyTypeSelected.includes(car.bodyType))
		},
		filteredCarsListByMake(state, getters) {
			if (!state.makeSelected) return getters.filteredCarsListByBodyType
			else return getters.filteredCarsListByBodyType.filter(car => car.make == state.makeSelected)
		},
		filteredCarsListByModel(state, getters) {
			if (!state.modelSelected) return getters.filteredCarsListByMake
			else return getters.filteredCarsListByMake.filter(car => car.model == state.modelSelected)
		},
		filteredCarsListByYear: (state, getters) => getters.filteredCarsListByModel.filter((car) => getters.getYearRange.includes(car.year))
	},
	mutations: {
		loadCarsList(state, carsList) {
			state.carsList = carsList
		},
		setCategory(state, param) {
			state.categorySelected = param
		},
		setMake(state, param) {
			state.makeSelected = param
		},
		setModel(state, param) {
			state.modelSelected = param
		},
		setBodyType(state, param) {
			state.bodyTypeSelected = param
		},
		setMinCarYear(state, param) {
			state.minYearSelected = param
		},
		setMaxCarYear(state, param) {
			state.maxYearSelected = param
		},
	},
	actions: {
		loadCarsList({ commit }) {
			commit('loadCarsList', carsList)
		},
		setCategory({ commit }, param) {
			commit('setCategory', param)
		},
		setMake({ commit }, param) {
			commit('setMake', param)
		},
		setModel({ commit }, param) {
			commit('setModel', param)
		},
		setBodyType({ commit }, param) {
			commit('setBodyType', param)
		},
		setMinCarYear({ commit }, param) {
			commit('setMinCarYear', param)
		},
		setMaxCarYear({ commit }, param) {
			commit('setMaxCarYear', param)
		},
	},
	modules: {},
})
