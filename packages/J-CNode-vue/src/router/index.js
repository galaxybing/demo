import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Question from '@/views/Question'
import Message from '@/views/Message'
import Profile from '@/views/Profile'
import Detail from '@/views/Detail'
import Login from '@/views/Login'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/question',
    name: 'Question',
    component: Question
  }, {
    path: '/message',
    name: 'Message',
    component: Message
  }, {
    path: '/profile',
    name: 'Profile',
    component: Profile
  }, {
    path: '/detail',
    name: 'Detail',
    component: Detail
  }, {
    path: '/login',
    name: 'Login',
    component: Login
  }]


})
