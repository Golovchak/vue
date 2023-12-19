import { createStore } from "vuex";
import students from '@/data/students.json'
import { getScoreIn5Category, getGradeLimits } from '@/store/helpers'

export default createStore({
	state: {
		studentList: ['ok'],
		ratingSystem: [12, 5],
		ratingGrade: [
			'Показати усіх', 'Відмінник', 'Хорошист', 'Трійочник', 'Двійочник', 'Блатник'
		],
		ratingSystemValue: null,
		ratingGradeValue: null,


	},
	getters: {
		// studentList: ({ studentList }) => studentList,
		ratingSystem: ({ ratingSystem }) => ratingSystem,
		ratingGrade: ({ ratingGrade }) => ratingGrade,
		ratingSystemValue: ({ ratingSystemValue }) => ratingSystemValue,
		ratingGradeValue: ({ ratingGradeValue }) => ratingGradeValue,
		currentGradeLimits: ({ ratingGradeValue }) => getGradeLimits(ratingGradeValue),

		getFilteredByGradeValue: ({ studentList, ratingGradeValue }, getters) => {
			if (!ratingGradeValue) return studentList
			return studentList.filter(
				(student) => student.rating >= getters.currentGradeLimits.min
					&&
					student.rating <= getters.currentGradeLimits.max
			)
		},
		// getFilteredIn5Category: (state) => state,

		getFilteredStudentList: ({ ratingSystemValue }, getters) => {
			if (!ratingSystemValue) return getters.getFilteredByGradeValue
			return getters.getFilteredByGradeValue.map((student) => ({
				...student,
				rating: getScoreIn5Category(student.rating),
			}))
		},

	},
	mutations: {
		setStudentList(state, list) {
			state.studentList = list
		},
		setRatingSystemValue(state, val) {
			state.ratingSystemValue = val
		},
		setRatingGradeValue(state, val) {
			state.ratingGradeValue = val
		}
	},
	actions: {
		loadStudentList({ commit }) {
			commit('setStudentList', students)
		},
		setRatingSystemValue({ commit }, val) {
			commit('setRatingSystemValue', val)
		},
		setRatingGradeValue({ commit }, val) {
			commit('setRatingGradeValue', val)
		},
	},
	modules: {},
});
