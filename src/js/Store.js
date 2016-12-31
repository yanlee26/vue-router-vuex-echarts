import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import echarts_data from './Echarts_data'

const state={
	m1:echarts_data.M.m1,
	m2:echarts_data.M.m2,
	m3:echarts_data.M.m3,
	m4:echarts_data.M.m4,
	m5:echarts_data.M.m5,
	m6:echarts_data.M.m6,
	f1:echarts_data.F.f1,
	f2:echarts_data.F.f2,
	f3:echarts_data.F.f3,
	f4:echarts_data.F.f4,
	f5:echarts_data.F.f5,
	f6:echarts_data.F.f6,
	f7:echarts_data.F.f7,
	e1:echarts_data.E.e1,
	e2:echarts_data.E.e2,
	sc1:echarts_data.Sc.sc1,
	sc2:echarts_data.Sc.sc2,
}

export default new Vuex.Store({
	state
})