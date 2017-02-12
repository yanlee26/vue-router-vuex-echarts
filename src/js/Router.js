import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
	// Vue.component('chart', VueECharts);

import main from '../components/Main';
import equip from '../components/Equip';
import finance from '../components/Finance';
import medicine from '../components/Medicine';
import outpatient from '../components/Outpatient';
import science from '../components/Science';
import service from '../components/Service';

import m0 from '../packages/M0';
import m1 from '../packages/M1';
import m2 from '../packages/M2';
import m3 from '../packages/m3';
import m4 from '../packages/m4';
import m5 from '../packages/m5';
import m6 from '../packages/m6';

import e0 from '../packages/e0';
import e1 from '../packages/e1';
import e2 from '../packages/e2';

import sc0 from '../packages/sc0';
import sc1 from '../packages/sc1';
import sc2 from '../packages/sc2';

import f0 from '../packages/f0';
import f1 from '../packages/f1';
import f2 from '../packages/f2';
import f3 from '../packages/f3';
import f4 from '../packages/f4';
import f5 from '../packages/f5';
import f6 from '../packages/f6';
import f7 from '../packages/f7';

const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes: [{
		path: '/',
		name: 'home',
		component: main
	}, {
		path: '/service',
		name: 'service',
		component: service
	}, {
		path: '/equip',
		component: equip,
		children: [{
			path: '',
			component: e0
		}, {
			path: 'e1',
			component: e1
		}, {
			path: 'e2',
			component: e2
		}]
	}, {
		path: '/science',
		component: science,
		children: [{
			path: '',
			component: sc0
		}, {
			path: 'sc1',
			component: sc1
		}, {
			path: 'sc2',
			component: sc2
		}, ]
	}, {
		path: '/medicine',
		component: medicine,
		children: [{
			path: '',
			component: m0
		}, {
			path: 'm1',
			component: m1
		}, {
			path: 'm2',
			component: m2
		}, {
			path: 'm3',
			component: m3
		}, {
			path: 'm4',
			component: m4
		}, {
			path: 'm5',
			component: m5
		}, {
			path: 'm6',
			component: m6
		}]
	}, {
		path: '/finance',
		component: finance,
		children: [{
			path: '',
			component: f0
		}, {
			path: 'f1',
			component: f1
		}, {
			path: 'f2',
			component: f2
		}, {
			path: 'f3',
			component: f3
		}, {
			path: 'f4',
			component: f4
		}, {
			path: 'f5',
			component: f5
		}, {
			path: 'f6',
			component: f6
		}, {
			path: 'f7',
			component: f7
		}]
	}, {
		path: '/outpatient',
		name: 'outpatient',
		component: outpatient
	}]
});

export default router