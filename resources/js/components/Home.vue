<template>
  <div class="relative min-h-screen">
    <!-- Fondo de partículas -->
    <div ref="particleContainer" class="fixed top-0 left-0 w-full h-full -z-10"></div>

    <!-- Hero Section -->
    <section class="relative min-h-[110vh] py-10 flex items-center justify-center overflow-hidden">
      <div class="container mx-auto px-4 z-10">
        <div class="text-center" ref="heroContent">
          <h1 class="text-6xl md:text-8xl font-bold mb-6 text-gradient typing-effect" style="
    height: 120px;">
            Corp Max King Tech
          </h1>
          <p class="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transformando el futuro digital con soluciones tecnológicas innovadoras
          </p>
          <router-link 
            to="/contact" 
            class="btn-futuristic text-white font-bold text-lg"
          >
            Comienza tu proyecto
          </router-link>
        </div>
      </div>
    </section>

    <!-- Servicios Destacados -->
    <section class="py-20 relative" ref="servicesSection">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-12 text-gradient">
          Nuestros Servicios
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            v-for="(service, index) in services" 
            :key="index"
            class="glass-container p-8 hover-card"
            :ref="el => { if(el) serviceCards[index] = el }"
          >
            <component 
              :is="service.icon" 
              class="w-16 h-16 text-primary-light mb-6"
            />
            <h3 class="text-2xl font-bold mb-4">{{ service.title }}</h3>
            <p class="text-gray-300">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Sección de Estadísticas -->
    <section class="py-20 relative bg-gradient" ref="statsSection">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div 
            v-for="(stat, index) in stats" 
            :key="index"
            class="text-center"
            :ref="el => { if(el) statItems[index] = el }"
          >
            <h3 class="text-4xl font-bold text-primary-light mb-2">
              {{ stat.value }}
            </h3>
            <p class="text-gray-300">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Cpu, Globe, Shield } from 'lucide-vue-next';
import { initParticles, cleanupParticles } from '../particles';

gsap.registerPlugin(ScrollTrigger);

// Referencias para animaciones
const heroContent = ref(null);
const servicesSection = ref(null);
const statsSection = ref(null);
const serviceCards = ref([]);
const statItems = ref([]);
const particleContainer = ref(null);

// Datos
const services = ref([
  {
    icon: Cpu,
    title: 'Tecnología Avanzada',
    description: 'Soluciones tecnológicas de vanguardia para impulsar tu negocio'
  },
  {
    icon: Globe,
    title: 'Alcance Global',
    description: 'Conectando tu negocio con el mundo a través de soluciones digitales'
  },
  {
    icon: Shield,
    title: 'Seguridad Máxima',
    description: 'Protección de datos y sistemas con los más altos estándares'
  }
]);

const stats = ref([
  { value: '100+', label: 'Clientes Satisfechos' },
  { value: '50+', label: 'Proyectos Completados' },
  { value: '24/7', label: 'Soporte Técnico' },
  { value: '98%', label: 'Tasa de Éxito' }
]);

// Animaciones
onMounted(() => {
  // Inicializar Three.js para las partículas
  if (particleContainer.value) {
    initParticles(particleContainer.value);
  }

  // Animación del hero
  gsap.from(heroContent.value, {
    duration: 1.5,
    y: 100,
    opacity: 0,
    ease: 'power4.out'
  });

  // Animación de las tarjetas de servicios
  serviceCards.value.forEach((card, index) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top bottom-=100',
        toggleActions: 'play none none reverse'
      },
      duration: 0.8,
      y: 50,
      opacity: 0,
      delay: index * 0.2,
      ease: 'power3.out'
    });
  });

  // Animación de estadísticas
  statItems.value.forEach((stat, index) => {
    gsap.from(stat, {
      scrollTrigger: {
        trigger: stat,
        start: 'top bottom-=100',
        toggleActions: 'play none none reverse'
      },
      duration: 1,
      y: 30,
      opacity: 0,
      delay: index * 0.2,
      ease: 'power2.out'
    });
  });
});

onUnmounted(() => {
  // Limpiar Three.js y ScrollTrigger
  cleanupParticles();
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
});
</script>

<style scoped>
.bg-gradient {
  background: linear-gradient(45deg, var(--bg-dark), var(--primary-dark));
}

.text-primary-light {
  color: var(--primary-light);
}
</style>