import Vue from 'vue'

import Hello from '@/components/Hello'
import Index from '@/views/index'


//const Index = r => require.ensure([], () => r(require('../pages/index.vue')), 'Index')

let index = {
  path: '/',
  name: 'Index',
  component: Index
};



export default [index]
