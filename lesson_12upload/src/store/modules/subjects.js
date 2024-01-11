import { getSubjectById, subjects } from '@/constants/subjects'
import { getClassById, classesList } from '@/constants/classes'

export default {
	namespaced: true,
	state: {
		lessonsList: [
			{ id: 1, subjectId: 7, classId: 3 },
			{ id: 2, subjectId: 2, classId: 5 },
			{ id: 3, subjectId: 5, classId: 1 },
			{ id: 4, subjectId: 9, classId: 6 },
			{ id: 5, subjectId: 4, classId: 2 },
			{ id: 6, subjectId: 10, classId: 4 },
			{ id: 7, subjectId: 1, classId: 7 },
			{ id: 8, subjectId: 3, classId: 3 },
			{ id: 9, subjectId: 4, classId: 4 },
			{ id: 10, subjectId: 3, classId: 6 },
			{ id: 11, subjectId: 5, classId: 3 },
			{ id: 12, subjectId: 2, classId: 1 },
		],
	},
	getters: {
		getSubjectTitleById: () => subjectId => subjectId ? getSubjectById(subjectId).subject : 'не обрано',
		getClassTitleById: () => classId => classId ? getClassById(classId).classTitle : 'не обрано',
		subjects: () => subjects,
		classesList: () => classesList,
		lessonsList: ({ lessonsList }) => lessonsList,
		getLessonById: ({ lessonsList }) => lessonId => lessonsList.find(lesson => lesson.id == lessonId)
	},
	mutations: {
		addLesson({ lessonsList }, lessonData) {
			lessonsList.push(lessonData)
		},
		updateLesson({ lessonsList }, lessonData) {
			const lessonIndex = lessonsList.findIndex(lesson => lesson.id == lessonData.id)
			lessonsList[lessonIndex] = lessonData
		},
		deleteLesson(state, lessonId) {
			state.lessonsList = state.lessonsList.filter(lesson => lesson.id !== lessonId)
		},
	},
	actions: {
		addLesson({ commit }, { subjectId, classId }) {
			commit('addLesson', {
				id: new Date().getTime(),
				subjectId,
				classId
			})
		},
		updateLesson({ commit }, lessonData) {
			commit('updateLesson', lessonData)
		},
		deleteLesson({ commit }, lessonId) {
			commit('deleteLesson', lessonId)
		}
	},
};
