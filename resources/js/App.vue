<template>
  <Router>
    <div class="flex flex-col min-h-screen bg-black text-white">
      <nav class="p-4">
        <ul class="flex justify-center space-x-6">
          <li><RouterLink to="/" class="text-blue-400 hover:text-blue-300">Inicio</RouterLink></li>
          <li><RouterLink to="/about" class="text-blue-400 hover:text-blue-300">Acerca de</RouterLink></li>
          <li><RouterLink to="/services" class="text-blue-400 hover:text-blue-300">Servicios</RouterLink></li>
          <li><RouterLink to="/contact" class="text-blue-400 hover:text-blue-300">Contacto</RouterLink></li>
        </ul>
      </nav>

      <main class="flex-grow">
        <RouterView />
      </main>

      <Footer />
    </div>
  </Router>
</template>

<script>
import { createRouter, createWebHistory } from 'vue-router';
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
    Footer
  },
  router
}
</script>

<style scoped>
/* Estilos adicionales si es necesario */
</style>
