export default {
	namespaced: true,
	state: {
		assignmentsList: [
			{ id: 1, lessonId: 3, teacherId: 2 },
			{ id: 2, lessonId: 1, teacherId: 5 },
			{ id: 3, lessonId: 5, teacherId: 7 },
			{ id: 4, lessonId: 2, teacherId: 1 },
			{ id: 5, lessonId: 4, teacherId: 3 },
			{ id: 6, lessonId: 6, teacherId: 6 },
			{ id: 7, lessonId: 7, teacherId: 4 },
		],
	},
	getters: {
		assignmentsList: ({ assignmentsList }) => assignmentsList,
		getAssignmentById: ({ assignmentsList }) => assignmentId => assignmentsList.find(assignment => assignment.id == assignmentId),
	},
	mutations: {
		deleteAssignment(state, assignmentId) {
			state.assignmentsList = state.assignmentsList.filter(assignment => assignment.id !== assignmentId)
		},
		addAssignment({ assignmentsList }, assignmentData) {
			assignmentsList.push(assignmentData)
		},
		updateAssignment({ assignmentsList }, assignmentData) {
			const assignmentIndex = assignmentsList.findIndex(assignment => assignment.id == assignmentData.id)
			assignmentsList[assignmentIndex] = assignmentData
		},
		deleteAssignmentByLessonId(state, lessonId) {
			state.assignmentsList = state.assignmentsList.filter(assignment => assignment.lessonId !== lessonId)
		},
		deleteAssignmentByTeacherId(state, teacherId) {
			state.assignmentsList = state.assignmentsList.filter(assignment => assignment.teacherId !== teacherId)
		},
	},
	actions: {
		deleteAssignment({ commit }, assignmentId) {
			commit('deleteAssignment', assignmentId)
		},
		addAssignment({ commit }, assignmentData) {
			commit('addAssignment', {
				id: new Date().getTime(),
				...assignmentData
			})
		},
		updateAssignment({ commit }, assignmentData) {
			commit('updateAssignment', assignmentData)
		},
		deleteAssignmentByLessonId({ commit }, lessonId) {
			commit('deleteAssignmentByLessonId', lessonId)
		},
		deleteAssignmentByTeacherId({ commit }, teacherId) {
			commit('deleteAssignmentByTeacherId', teacherId)
		},
	},
};