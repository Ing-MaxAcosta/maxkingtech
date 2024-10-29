<template>
  <header class="fixed top-0 left-0 w-full bg-black text-white py-4 shadow-lg z-10 transition-opacity duration-300" :style="{ opacity: headerOpacity }">
    <!-- Fondo de partículas -->
    <div id="particle-background" class="absolute inset-0 z-0 flex-grow pt-16"></div>

    <!-- Contenido del encabezado, con partículas en segundo plano -->
    <nav class="relative z-10 container mx-auto flex justify-center space-x-8 text-blue-400">
      <ul class="flex space-x-6 text-lg font-semibold">
        <li><RouterLink to="/" class="hover:text-blue-300">Inicio</RouterLink></li>
        <li><RouterLink to="/about" class="hover:text-blue-300">Acerca de</RouterLink></li>
        <li><RouterLink to="/services" class="hover:text-blue-300">Servicios</RouterLink></li>
        <li><RouterLink to="/contact" class="hover:text-blue-300">Contacto</RouterLink></li>
      </ul>
    </nav>
  </header>
</template>

<script>
  import { initParticles, cleanupParticles } from '../particles.js';
  import { onMounted, onUnmounted  } from 'vue';
  import { gsap } from 'gsap';

  export default {
    name: 'Header',
    mounted() {
      window.addEventListener('scroll', this.handleScroll); // Escuchar evento scroll
      const particleContainer = document.getElementById('particle-background');
      if (particleContainer) {
        initParticles(particleContainer); // Llama a initParticles con el contenedor correcto
      }
      this.animateHeader();
    },
    onUnmounted() {
      window.removeEventListener('scroll', this.handleScroll); // Limpiar evento al desmontar
      cleanupParticles(); // Limpia el fondo de partículas al desmontar el componente
    },
    data() {
      return {
        headerOpacity: 1, // Inicialmente opaco
      };
    },
    methods: {
      animateHeader() {
        gsap.from("#particle-background", { duration: 1, opacity: 0 });
        gsap.from(".z-10", { duration: 1, y: -50, opacity: 0, delay: 0.5 });
      },
      handleScroll() {
        this.headerOpacity = Math.max(0.5, 1 - window.scrollY / 300); // Ajusta el 300 según el efecto deseado
      },
    },
  };
  
</script>

<style scoped>
/* Efecto de transición en enlaces */
a {
  transition: color 0.3s ease;
}

/* Ajuste del fondo de partículas */
#particle-background {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none; /* Evita interferir con la interacción del usuario */
}
</style>
