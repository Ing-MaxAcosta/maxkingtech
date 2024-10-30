<template>
  <div id="app" ref="appContainer" class="min-h-screen flex flex-col">
    <div ref="particleContainer" class="fixed top-0 left-0 w-full h-full -z-10"></div>
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import { createRouter, createWebHistory } from 'vue-router';
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap'; // Importar GSAP
import Header from './components/Header.vue';
import Home from './components/Home.vue';
import About from './components/About.vue';
import Services from './components/Services.vue';
import ServiceDetail from './components/ServiceDetail.vue';
import CaseStudy from './components/CaseStudy.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/services', component: Services },
  { path: '/services/:id', component: ServiceDetail },
  { path: '/case-study/:id', component: CaseStudy },
  { path: '/contact', component: Contact }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default {
  components: {
    Header,
    Footer,
  },
  router,
};

onMounted(() => {
  gsap.from(appContainer.value, { duration: 1, opacity: 0 }); // Efecto de desvanecimiento al cargar
});
</script>

<style scoped>
/* Estilos adicionales si es necesario */
</style>
