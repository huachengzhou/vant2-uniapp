import App from './App';
import store from './store';

import Vue from 'vue'
Vue.config.productionTip = false;
Vue.config.silent = true;
Vue.prototype.$store = store
Vue.prototype.$adpid = "1111111111"
Vue.prototype.$backgroundAudioData = {
	playing: false,
	playTime: 0,
	formatedPlayTime: '00:00:00'
}
App.mpType = 'app'
const app = new Vue({
	store,
	...App
})


// #ifdef H5
import * as Vants from 'vant';

import demo_block from './wxcomponents/vant/demo-block/index.vue';

for (let key in Vants) {
	let itemCpn = Vants[key];
	if(itemCpn.name){
		if(itemCpn.name.indexOf("van") != -1){
			Vue.component(itemCpn.name, itemCpn)
		}
	}
}
Vue.component(demo_block.name, demo_block);
// #endif


app.$mount()
