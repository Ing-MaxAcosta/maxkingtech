import './bootstrap';
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from  './components/Home.vue'
import About from './components/About.vue'
import Services from './components/Services.vue'
import ServiceDetail from './components/ServiceDetail.vue'
import CaseStudy from './components/CaseStudy.vue'
import Contact from './components/Contact.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/services', component: Services },
    { path: '/services/:id', name: 'ServiceDetail', component: ServiceDetail },
    { path: '/case-study/:id', name: 'CaseStudy', component: CaseStudy },
    { path: '/contact', component: Contact },
  ]
})

createApp(App).use(router).mount('#app')