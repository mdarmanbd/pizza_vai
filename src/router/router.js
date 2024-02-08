
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue';
import PizzaItaliono from '../components/PizzaItaliono.vue';
import Kodo from '../components/KodoRistorant.vue'


const routes = [
    {
        path:'/',
        component:Home
    },
    {
        path:'/PizzaItaliono',
        component:PizzaItaliono
    },
    {
        path:'/Kodo',
        component:Kodo
    },
    
]


const router = createRouter({
    history: createWebHistory(),
    routes
})




export default router