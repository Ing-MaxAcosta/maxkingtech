<template>
  <div class="container mx-auto px-4 relative">
    <div id="particle-background"></div>
    <div class="banner h-96 flex items-center justify-center mb-12 bg-gradient-to-r from-blue-500 to-green-400 rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-105">
      <h1 class="text-6xl font-bold text-white animate-pulse">
        Corp Max King Tech
      </h1>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div v-for="(feature, index) in features" :key="index" class="bg-gray-900 p-6 rounded-lg transition-transform duration-300 hover:scale-105">
        <component :is="feature.icon" class="w-12 h-12 text-blue-400 mb-4" />
        <h2 class="text-2xl font-bold mb-2">{{ feature.title }}</h2>
        <p class="text-gray-400">{{ feature.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Cpu, Globe, Shield } from 'lucide-vue-next';
import { loadParticles } from '../particles.js'; // Importa la función loadParticles
import { fadeIn } from '../animations/animations'


const features = ref([
  { 
    icon: Cpu, 
    title: 'Tecnología Avanzada', 
    description: 'Utilizamos las últimas tecnologías para impulsar su negocio.' 
  },
  { 
    icon: Globe, 
    title: 'Soluciones Globales', 
    description: 'Ofrecemos soluciones que funcionan a escala global.' 
  },
  { 
    icon: Shield, 
    title: 'Seguridad Primero', 
    description: 'La seguridad de sus datos es nuestra prioridad número uno.' 
  },
]);

onMounted(() => {
  loadParticles();
});
</script>

<style scoped>
#particle-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
}
</style>
