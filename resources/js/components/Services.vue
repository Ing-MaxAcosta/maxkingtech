<template>
  <div class="container mx-auto px-4 py-12">
    <h1 class="text-4xl font-bold mb-12 text-center text-blue-400">Nuestros Servicios</h1>
    
    <div class="flex flex-wrap justify-center gap-4 mb-8">
      <button
        v-for="category in categories"
        :key="category"
        @click="setSelectedCategory(category)"
        :class="[
          'px-4 py-2 rounded-full transition-all duration-300',
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
      >
        <component :is="service.icon" class="w-16 h-16 mx-auto mb-4 text-green-400" />
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
import { ref, computed } from 'vue'
import { Code, Database, Cloud, Lock, Smartphone, Headphones, BarChart, Globe, Cog } from 'lucide-vue-next'

const services = ref([
  { 
    id: 1,
    icon: Code, 
    name: 'Desarrollo de Software', 
    description: 'Creamos soluciones de software personalizadas para satisfacer sus necesidades específicas.',
    category: 'Desarrollo'
  },
  { 
    id: 2,
    icon: Database, 
    name: 'Gestión de Datos', 
    description: 'Optimizamos el almacenamiento y análisis de sus datos para obtener insights valiosos.',
    category: 'Datos'
  },
  { 
    id: 3,
    icon: Cloud, 
    name: 'Servicios en la Nube', 
    description: 'Ofrecemos soluciones en la nube escalables y seguras para su negocio.',
    category: 'Infraestructura'
  },
  { 
    id: 4,
    icon: Lock, 
    name: 'Ciberseguridad', 
    description: 'Protegemos sus activos digitales con las últimas tecnologías de seguridad.',
    category: 'Seguridad'
  },
  { 
    id: 5,
    icon: Smartphone, 
    name: 'Desarrollo Móvil', 
    description: 'Creamos aplicaciones móviles intuitivas y eficientes para iOS y Android.',
    category: 'Desarrollo'
  },
  { 
    id: 6,
    icon: Headphones, 
    name: 'Soporte Técnico', 
    description: 'Brindamos soporte técnico 24/7 para garantizar el funcionamiento óptimo de sus sistemas.',
    category: 'Soporte'
  },
  { 
    id: 7,
    icon: BarChart, 
    name: 'Inteligencia de Negocios (BI)', 
    description: 'Ofrecemos dashboards y reportes personalizados, análisis de datos avanzados y consultoría de BI.',
    category: 'Análisis'
  },
  { 
    id: 8,
    icon: Database, 
    name: 'Ingeniería de Datos', 
    description: 'Diseñamos infraestructuras de datos, aseguramos la calidad y gobernanza, y realizamos migraciones de datos.',
    category: 'Datos'
  },
  { 
    id: 9,
    icon: Globe, 
    name: 'Desarrollo de Aplicativos Web', 
    description: 'Desarrollamos aplicativos web personalizados, optimizamos UX/UI y ofrecemos mantenimiento y soporte.',
    category: 'Desarrollo'
  },
  { 
    id: 10,
    icon: Cog, 
    name: 'Automatización Robótica de Procesos (RPA)', 
    description: 'Implementamos RPA, integramos sistemas y proporcionamos capacitación y soporte en RPA.',
    category: 'Automatización'
  },
])

const categories = computed(() => {
  return ['Todos', ...new Set(services.value.map(service => service.category))]
})

const selectedCategory = ref('Todos')

const setSelectedCategory = (category) => {
  selectedCategory.value = category
}

const filteredServices = computed(() => {
  if (selectedCategory.value === 'Todos') {
    return services.value
  }
  return services.value.filter(service => service.category === selectedCategory.value)
})
</script>

<style scoped>
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