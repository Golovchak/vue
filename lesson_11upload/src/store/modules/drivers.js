function isFilterMach(driver, filter) {
	if (filter.name) {
		if (!driver.name.toLowerCase().includes(filter.name.toLowerCase())) return false
	}
	if (filter.expMin) {
		if (filter.expMin > driver.exp) return false
	}
	if (filter.expMax)
		if (filter.expMax < driver.exp) return false
	return true
}

export default ({
	namespaced: true,
	state: {
		driversList: [
			{
				id: 1,
				name: 'Ivan',
				exp: 12,
			},
			{
				id: 2,
				name: 'Petro',
				exp: 23,
			},
		],
		filterObj: {}
	},
	getters: {
		driversList: ({ driversList }) => driversList,
		getDriverById: ({ driversList }) => driverId => driversList.find(driver => driver.id == driverId),
		filteredDriversList: (state) => state.driversList.filter(driver => isFilterMach(driver, state.filterObj))
	},
	mutations: {
		deleteDrivers(state, driverId) {
			state.driversList = state.driversList.filter(driver => driver.id !== driverId)
		},
		addDriver(state, driver) {
			state.driversList.push(driver)
		},
		updateDriver(state, driverObj) {
			const driverIndex = state.driversList.findIndex(driver => driver.id == driverObj.id)
			state.driversList[driverIndex] = driverObj
		},
		setFilter(state, filter) {
			state.filterObj = filter
		}
	},
	actions: {
		deleteDrivers({ commit, dispatch }, driverId) {
			commit('deleteDrivers', driverId)
			dispatch('assignments/deleteAssignmentsByDriverId', driverId, { root: true })
		},
		addDriver({ commit }, driver) {
			commit('addDriver', {
				id: new Date().getTime(),
				...driver
			})
		},
		updateDriver({ commit }, driver) {
			commit('updateDriver', {
				id: new Date().getTime(),
				...driver
			})
		},
		setFilter({ commit }, filter) {
			commit('setFilter', filter)
		}
	},
	modules: {},
})