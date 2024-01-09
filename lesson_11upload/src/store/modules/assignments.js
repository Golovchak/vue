
export default ({
	namespaced: true,
	state: {
		assignmentsList: [
			{
				id: 1,
				driverId: 2,
				busId: 1
			},
			{
				id: 2,
				driverId: 1,
				busId: 2
			},
		]
	},
	getters: {
		assignmentsList: ({ assignmentsList }) => assignmentsList,
		getFiledAssignmentsList: (state, getters, rootState, rootGetters) => state.assignmentsList.map(assignments => ({
			id: assignments.id,
			driverName: rootGetters['drivers/getDriverById'](assignments.driverId).name,
			busNumber: rootGetters['buses/getBusById'](assignments.busId).number,
		})),
	},
	mutations: {
		deleteAssignments(state, id) {
			state.assignmentsList = state.assignmentsList.filter(assignment => assignment.id !== id)
		},
		addAssignment(state, assignment) {
			state.assignmentsList.push(assignment)
		},
		deleteAssignmentsByBusId(state, busId) {
			state.assignmentsList = state.assignmentsList.filter(assignment => assignment.busId !== busId)
		},
		deleteAssignmentsByDriverId(state, driverId) {
			state.assignmentsList = state.assignmentsList.filter(assignment => assignment.driverId !== driverId)
		},
	},
	actions: {
		deleteAssignments({ commit }, id) {
			commit('deleteAssignments', id)
		},
		addAssignment({ commit }, assignment) {
			commit('addAssignment', {
				id: new Date().getTime(),
				...assignment
			})
		},
		deleteAssignmentsByBusId({ commit }, busId) {
			commit('deleteAssignmentsByBusId', busId)
		},
		deleteAssignmentsByDriverId({ commit }, driverId) {
			commit('deleteAssignmentsByDriverId', driverId)
		},
	},
	modules: {},
})