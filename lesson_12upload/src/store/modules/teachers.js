export default {
	namespaced: true,
	state: {
		teachersList: [
			{ id: 1, name: "Олександр", subjectId: 7 },
			{ id: 2, name: "Наталія", subjectId: 2 },
			{ id: 3, name: "Іван", subjectId: 5 },
			{ id: 4, name: "Оксана", subjectId: 9 },
			{ id: 5, name: "Андрій", subjectId: 4 },
			{ id: 6, name: "Тетяна", subjectId: 10 },
			{ id: 7, name: "Михайло", subjectId: 1 },
			{ id: 8, name: "Вікторія", subjectId: 3 },
			{ id: 9, name: "Сергій", subjectId: 8 },
			{ id: 10, name: "Юлія", subjectId: 6 },
			{ id: 11, name: "Артем", subjectId: 7 },
			{ id: 12, name: "Олена", subjectId: 2 },
			{ id: 13, name: "Володимир", subjectId: 5 },
			{ id: 14, name: "Марія", subjectId: 9 },
			{ id: 15, name: "Василь", subjectId: 4 },
		],
	},
	getters: {
		teachersList: ({ teachersList }) => teachersList,
		getTeacherById: ({ teachersList }) => teacherId => teachersList.find(teacher => teacher.id == teacherId)
	},
	mutations: {
		addTeacher({ teachersList }, teacherData) {
			teachersList.push(teacherData)
		},
		updateTeacher({ teachersList }, teacherData) {
			const teacherIndex = teachersList.findIndex(teacher => teacher.id == teacherData.id)
			teachersList[teacherIndex] = teacherData
		},
		deleteTeacher(state, teacherId) {
			state.teachersList = state.teachersList.filter(teacher => teacher.id !== teacherId)
		}
	},
	actions: {
		addTeacher({ commit }, { name, subjectId }) {
			commit('addTeacher', {
				id: new Date().getTime(),
				name,
				subjectId,
			})
		},
		updateTeacher({ commit }, teacherData) {
			commit('updateTeacher', teacherData)
		},
		deleteTeacher({ commit }, teacherId) {
			commit('deleteTeacher', teacherId)
		}
	},
};
