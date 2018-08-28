import Vue from 'vue'
import Router from 'vue-router'

//Components
import HomePage from '@/components/home'
import LogIn from '@/components/log-in'


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'HomePage',
            component: HomePage
        },
        {
            path: '/log-in',
            name: 'LogIn',
            component: LogIn
        },
    ]
})
