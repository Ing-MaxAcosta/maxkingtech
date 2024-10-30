<template>
  <motion.div
    v-if="caseStudy"
    v-motion="fadeIn" class="container mx-auto px-4 py-12 relative overflow-hidden">
    <!-- Fondo de partículas -->
    <div ref="particleContainer" class="fixed top-0 left-0 w-full h-full -z-10"></div>
    <div v-if="caseStudy" class="bg-gray-900 rounded-lg p-8 shadow-lg transform transition-all duration-500 hover:scale-105">
      <h1 class="text-4xl font-bold mb-6 text-blue-400">{{ caseStudy.title }}</h1>
      <p class="text-gray-300 mb-8 text-lg">{{ caseStudy.description }}</p>
      
      <h2 class="text-2xl font-bold mb-4 text-white">Desafío</h2>
      <p class="text-gray-300 mb-8">{{ caseStudy.challenge }}</p>
      
      <h2 class="text-2xl font-bold mb-4 text-white">Solución</h2>
      <p class="text-gray-300 mb-8">{{ caseStudy.solution }}</p>
      
      <h2 class="text-2xl font-bold mb-4 text-white">Resultados</h2>
      <ul class="list-disc list-inside mb-8 text-gray-300">
        <li v-for="(result, index) in caseStudy.results" :key="index" class="mb-2">
          {{ result }}
        </li>
      </ul>
      
      <router-link 
        :to="{ name: 'ServiceDetail', params: { id: caseStudy.serviceId }}" 
        class="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
      >
        Volver al servicio
      </router-link>
    </div>
    <div v-else class="text-center text-gray-400">
      Caso de estudio no encontrado
    </div>
  </motion.div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { fadeIn } from '../animations/animations'
import { gsap } from 'gsap'; // Importar GSAP
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { initParticles, cleanupParticles } from '../particles.js'; // Asegúrate de que la función esté exportada correctamente

gsap.registerPlugin(ScrollTrigger);

const route = useRoute()
const caseStudy = ref(null)

const caseStudies = [
  {
    id: 101,
    serviceId: 1,
    title: 'Sistema de Gestión para Empresa Logística',
    description: 'Desarrollamos un sistema integral que optimizó las operaciones y redujo los costos en un 30%.',
    challenge: 'La empresa logística enfrentaba problemas de eficiencia y altos costos operativos debido a procesos manuales y sistemas desconectados.',
    solution: 'Implementamos un sistema de gestión personalizado que integró todos los procesos logísticos, desde la recepción de pedidos hasta la entrega final, con seguimiento en tiempo real y análisis de datos.',
    results: [
      'Reducción del 30% en costos operativos',
      'Aumento del 25% en la eficiencia de entrega',
      'Mejora del 40% en la satisfacción del cliente',
      'ROI alcanzado en menos de 12 meses'
    ]
  },
  {
    id: 102,
    serviceId: 1,
    title: 'Plataforma de E-commerce B2B',
    description: 'Creamos una plataforma robusta que aumentó las ventas en línea en un 150% en el primer año.',
    challenge: 'Un distribuidor mayorista buscaba expandir su alcance y modernizar sus operaciones de ventas B2B, pero carecía de una presencia en línea efectiva.',
    solution: 'Desarrollamos una plataforma de e-commerce B2B personalizada con características como catálogos dinámicos, precios específicos por cliente, gestión de pedidos y integración con sistemas ERP existentes.',
    results: [
      'Aumento del 150% en ventas en línea en el primer año',
      'Expansión a nuevos mercados geográficos',
      'Reducción del 40% en el tiempo de procesamiento de pedidos',
      'Mejora significativa en la retención de clientes'
    ]
  },
  // ... Añadir más casos de estudio según sea necesario
]

// Animaciones
onMounted(() => {
  // Inicializar Three.js para las partículas
  if (particleContainer.value) {
    initParticles(particleContainer.value);
  }
});

onUnmounted(() => {
  // Limpiar Three.js y ScrollTrigger
  cleanupParticles();
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
});
</script>

<style scoped>
.container {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.1)); /* Reemplaza con el fondo de partículas */
  background-attachment: fixed;
  position: relative;
  overflow: hidden;
}
</style>
