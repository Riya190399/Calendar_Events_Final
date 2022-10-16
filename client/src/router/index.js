import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AddEvent from '../views/AddEvent.vue';
import editEvent from '../views/editEvent.vue';



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  
  {
    path: '/add-events',
    name: 'add-events',
    component: AddEvent
  },
  {
    path: '/editEvent/:id',
    name: 'editEvent',
    component: editEvent
  },
  
  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;
