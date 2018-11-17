import mainMenu from './components/mainMenu.vue'
import login from './components/loginForm.vue'

export default [
    {
        path:'/',
        component: login
    },
    {
        path:'/main',
        component: mainMenu
    },
];