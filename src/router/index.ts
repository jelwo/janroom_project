import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import News from '../components/News.vue';
import Home from '../components/Home.vue';
import About from '../components/About.vue';
import Contact from '../components/Contact.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/news',
    name: 'News',
    component: News
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),  // 修正部分
  routes
});

export default router;
