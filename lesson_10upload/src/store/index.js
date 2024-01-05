import { createStore } from 'vuex'
import { boysList, girlsList } from '@/data/source'
// Знаю що під задуману мною логіку треба було зробити об'єкт у стейті і вибирати дані з нього ключами (об'єкт[ключ1][ключ2]) чи щось таке
// А так вийшов дотаток весь в костилях(((


export default createStore({
	state: {
		girlsList: [],
		boysList: [],
		girlsIdList: [],
		boysIdList: [],
		currentSelectedBoyId: null,
		currentSelectedGirlId: null,
		pairs:
		{
			boys: [],
			girls: []
		},
	},
	getters: {
		girlsIdList: ({ girlsIdList }) => girlsIdList,
		boysIdList: ({ boysIdList }) => boysIdList,
		getPersonById: (state) => param => state[param.source].find(person => person.id == param.id).name,
		pairs: ({ pairs }) => pairs,
		currentSelectedBoyId: ({ currentSelectedBoyId }) => currentSelectedBoyId,
		currentSelectedGirlId: ({ currentSelectedGirlId }) => currentSelectedGirlId,
	},
	mutations: {
		loadData(state) {
			state.boysList = boysList
			state.girlsList = girlsList
			state.boysIdList = boysList.map(item => item.id)
			state.girlsIdList = girlsList.map(item => item.id)
		},
		personSelected(state, { boyId, girlId }) {
			if (state.boysIdList.length === 0 || state.girlsIdList.length === 0) return
			if (boyId) state.currentSelectedBoyId = state.currentSelectedBoyId == boyId ? null : boyId
			if (girlId) state.currentSelectedGirlId = state.currentSelectedGirlId == girlId ? null : girlId
		},
		addPair(state) {
			state.pairs.boys.push(state.currentSelectedBoyId)
			state.pairs.girls.push(state.currentSelectedGirlId)
			state.boysIdList = state.boysIdList.filter(id => id !== state.currentSelectedBoyId)
			state.girlsIdList = state.girlsIdList.filter(id => id !== state.currentSelectedGirlId)
			state.currentSelectedBoyId = null
			state.currentSelectedGirlId = null
		},
		deletePair(state, pairIndex) {
			state.boysIdList.push(state.pairs.boys[pairIndex])
			state.girlsIdList.push(state.pairs.girls[pairIndex])
			state.pairs.boys.splice(pairIndex, 1)
			state.pairs.girls.splice(pairIndex, 1)
		}
	},
	actions: {
		loadData({ commit }) {
			commit('loadData')
		},
		personSelected({ commit }, { boyId, girlId }) {
			commit('personSelected', { boyId, girlId })
		},
		addPair({ commit }) {
			commit('addPair')
		},
		deletePair({ commit }, pairIndex) {
			commit('deletePair', pairIndex)
		}
	},
	modules: {},
})
