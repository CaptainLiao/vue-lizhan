// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import axios from 'axios'
import FastClick from 'fastclick'

import './assets/js/changeRootFontSize'
import './assets/style/iconfont/iconfont.css'


import config from './config/config'
import routes from './router/index'




if('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', () => {
    FastClick.attach(document.body);
  }, false);
}


Vue.prototype.config = config;

Vue.prototype.$get = function(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {params})
      .then(res => {
        console.log(res)
        resolve(res)
      })
      .catch(err => {
        console.log(err)
        reject(err)
      })
  })
}
Vue.prototype.$post = function(url, body) {
  return new Promise((resolve, reject) => {
    axios.post(url, body)
      .then(res => {
        console.log(res)
        resolve(res)
      })
      .catch(err => {
        console.log(err)
        reject(err)
      })
  })
}

Vue.config.productionTip = false;

Vue.use(Router);


const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition
  } else {
    return { x: 0, y: 0 }
  }
};

const router = new Router({
  mode: 'history',
  scrollBehavior,
  routes
});

/* eslint-disable no-new */
new Vue({
  router,
  template: '<App/>',
  components: { App }
}).$mount('#app')
