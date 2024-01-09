
export default ({
	namespaced: true,
	state: {
		busesList: [
			{
				id: 1,
				number: 'AO3324HA',
				placesNumber: 30
			},
			{
				id: 2,
				number: 'AT9314DF',
				placesNumber: 40
			},
		]
	},
	getters: {
		busesList: ({ busesList }) => busesList,
		getBusById: ({ busesList }) => busId => busesList.find(bus => busId == bus.id)
	},
	mutations: {
		deleteBus(state, busId) {
			state.busesList = state.busesList.filter(bus => bus.id !== busId)
		},
		addBus(state, bus) {
			state.busesList.push(bus)
		},
		updateBus(state, busToEdit) {
			const busIndex = state.busesList.findIndex(bus => bus.id === busToEdit.id)
			state.busesList[busIndex] = busToEdit
		}
	},
	actions: {
		deleteBus({ commit, dispatch }, busId) {
			commit('deleteBus', busId)
			dispatch('assignments/deleteAssignmentsByBusId', busId, { root: true })
		},
		addBus({ commit }, busData) {
			commit('addBus', {
				id: new Date().getTime(),
				...busData
			})
		},
		updateBus({ commit }, bus) {
			commit('updateBus', bus)
		}
	},
	modules: {},
})