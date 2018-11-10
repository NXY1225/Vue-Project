// 入口文件
console.log('OK')

// 导入Vue
import Vue from 'vue'
// 导入 app根组件
import app from './App.vue'

// 按需导入mint-ui组件
import { Header } from 'mint-ui'
Vue.component(Header.name,Header)

// 导入 mui 样式
import './lib/mui/css/mui.min.css'

var vm = new Vue({
    el: '#app',
    render: c => c(app)
})