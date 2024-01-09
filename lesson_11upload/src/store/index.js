import { createStore } from 'vuex'
import assignments from "@/store/modules/assignments"
import drivers from "@/store/modules/drivers"
import buses from "@/store/modules/buses"

export default createStore({
	namespaced: true,
	state: {},
	getters: {},
	mutations: {},
	actions: {},
	modules: {
		assignments,
		drivers,
		buses,
	},
})

// State:
//    companiesList : [ ]
//    filterObj: {}
// Getters:
//     getCompaniesList
//     getFilterObj
//     getCompanyById(companyId)
// Actions:
//    removeCompany(companyId)
//    updateFilter(filterData)
//    addCompany(company)
//    updateCompany(company)
