<template>
    <header class="relative bg-black text-white py-4 shadow-lg">
      <!-- Fondo de partículas -->
      <div id="particle-background" class="absolute inset-0 z-0"></div>
  
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
  import { loadParticles } from '../particles.js'; 
  import { onMounted } from 'vue';
  import { gsap } from 'gsap'; // Importar GSAP
  
  export default {
    name: 'Header',
    mounted() {
      loadParticles();
      this.animateHeader(); // Llamar a la función de animación al montar el componente
    },
    methods: {
    animateHeader() {
      gsap.from("#particle-background", { duration: 1, opacity: 0 }); // Efecto de desvanecimiento
      gsap.from(".z-10", { duration: 1, y: -50, opacity: 0, delay: 0.5 }); // Desplazamiento y desvanecimiento de enlaces
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
  