<template>
  <div class="container mx-auto px-4 py-12">
    <h1 class="text-4xl font-bold mb-12 text-center text-blue-400">Nuestros Servicios</h1>
    
    <div class="flex flex-wrap justify-center gap-4 mb-8">
      <button
        v-for="category in categories"
        :key="category"
        @click="setSelectedCategory(category)"
        :class="[
          'px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105',
          selectedCategory === category
            ? 'bg-green-500 text-white'
            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
        ]"
      >
        {{ category }}
      </button>
    </div>

    <transition-group 
      name="service-list" 
      tag="div" 
      class="grid grid-cols-1 md:grid-cols-3 gap-8"
    >
      <div
        v-for="service in filteredServices"
        :key="service.id"
        class="bg-gray-900 p-6 rounded-lg text-center transition-all duration-300 transform hover:scale-105"
        ref="serviceItems"
      >
        <component :is="service.icon" class="w-16 h-16 mx-auto mb-4 text-green-400 parallax-icon" />
        <h2 class="text-2xl font-bold mb-2 text-white">{{ service.name }}</h2>
        <p class="text-gray-400 mb-4">{{ service.description }}</p>
        <router-link 
          :to="{ name: 'ServiceDetail', params: { id: service.id }}"
          class="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          Ver detalles
        </router-link>
      </div>
    </transition-group>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { gsap } from 'gsap'; // Importar GSAP
import { Code, Database, Cloud, Lock, Smartphone, Headphones, BarChart, Globe, Cog } from 'lucide-vue-next';


const services = ref([
  { id: 1, icon: Code, name: 'Desarrollo de Software', description: 'Creamos soluciones personalizadas.', category: 'Desarrollo' },
  { id: 2, icon: Database, name: 'Gestión de Datos', description: 'Optimización y análisis de datos.', category: 'Datos' },
  { id: 3, icon: Cloud, name: 'Servicios en la Nube', description: 'Soluciones en la nube escalables.', category: 'Infraestructura' },
  { id: 4, icon: Lock, name: 'Ciberseguridad', description: 'Protección digital avanzada.', category: 'Seguridad' },
  { id: 5, icon: Smartphone, name: 'Desarrollo Móvil', description: 'Aplicaciones móviles para iOS y Android.', category: 'Desarrollo' },
  { id: 6, icon: Headphones, name: 'Soporte Técnico', description: 'Soporte 24/7.', category: 'Soporte' },
  { id: 7, icon: BarChart, name: 'Inteligencia de Negocios', description: 'Dashboards y análisis avanzados.', category: 'Análisis' },
  { id: 8, icon: Globe, name: 'Ingeniería de Datos', description: 'Infraestructura y calidad de datos.', category: 'Datos' },
  { id: 9, icon: Cog, name: 'Automatización RPA', description: 'Implementación y soporte en RPA.', category: 'Automatización' }
]);

const categories = computed(() => {
  return ['Todos', ...new Set(services.value.map(service => service.category))];
});

const selectedCategory = ref('Todos');

const setSelectedCategory = (category) => {
  selectedCategory.value = category === 'Todos' ? 'Todos' : category; // Asegúrate de manejar bien el caso de "Todos"
};

const filteredServices = computed(() => {
  return selectedCategory.value === 'Todos'
    ? services.value
    : services.value.filter(service => service.category === selectedCategory.value);
});

// Animación de servicios
const serviceItems = ref([]);

watch(filteredServices, (newServices) => {
  gsap.from(serviceItems.value, {
    duration: 0.5,
    opacity: 0,
    y: 30,
    stagger: 0.2,
  });
});

</script>

<style scoped>
.parallax-icon {
  transition: transform 0.3s ease;
}

.service-list-enter-active,
.service-list-leave-active {
  transition: all 0.5s ease;
}

.service-list-enter-from,
.service-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
