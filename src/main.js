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

Vue.prototype.$get = function(url, params, isCatchErr) {

  this.loading = true;
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url,
      params,
      timeout: 2000,
    })
    .then(res => {
      this.loading = false;
      if(res.status === 200) {
        let data = res.data;
        console.log(data)
        if(data.errorCode === 0) {
          resolve(data);
        }else {
          throw new Error('errorCode：'+ data.errorCode + '-->' + data.message)
        }
      }
    })
    .catch(err => {
      this.loading = false;
      console.error(err);
      if(isCatchErr) {
        reject(err)
      }

    })

  })
}
Vue.prototype.$post = function(url, body, isCatchErr) {

  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url,
      body,
      timeout: 2000
    })
    .then(res => {
      if(res.status === 200) {
        let data = res.data;
        console.log(data)
        if(data.errorCode === 0) {
          resolve(data);
        }else {
          throw new Error('errorCode：'+ data.errorCode + '-->' + data.message)
        }
      }
    })
    .catch(err => {
      console.error(err);
      if(isCatchErr) {
        reject(err)
      }
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
