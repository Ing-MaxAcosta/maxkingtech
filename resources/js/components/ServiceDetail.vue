<template>
  <div class="container mx-auto px-4 py-12">
    <div v-if="service" class="bg-gray-900 rounded-lg p-8">
      <h1 class="text-4xl font-bold mb-6 text-blue-400">{{ service.name }}</h1>
      <component :is="service.icon" class="w-24 h-24 mb-6 text-green-400" />
      <p class="text-gray-300 mb-8 text-lg">{{ service.description }}</p>
      
      <h2 class="text-2xl font-bold mb-4 text-white">Características del servicio:</h2>
      <ul class="list-disc list-inside mb-8 text-gray-300">
        <li v-for="(feature, index) in service.features" :key="index" class="mb-2">
          {{ feature }}
        </li>
      </ul>
      
      <h2 class="text-2xl font-bold mb-4 text-white">Beneficios:</h2>
      <ul class="list-disc list-inside mb-8 text-gray-300">
        <li v-for="(benefit, index) in service.benefits" :key="index" class="mb-2">
          {{ benefit }}
        </li>
      </ul>
      
      <h2 class="text-2xl font-bold mb-4 text-white">Casos de Estudio</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div v-for="(caseStudy, index) in service.caseStudies" :key="index" class="bg-gray-800 p-6 rounded-lg">
          <h3 class="text-xl font-bold mb-2 text-white">{{ caseStudy.title }}</h3>
          <p class="text-gray-400 mb-4">{{ caseStudy.description }}</p>
          <router-link 
            :to="{ name: 'CaseStudy', params: { id: caseStudy.id }}" 
            class="text-blue-400 hover:text-blue-300"
          >
            Leer más
          </router-link>
        </div>
      </div>
    </div>
    <div v-else class="text-center text-gray-400">
      Servicio no encontrado
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { Code, Database, Cloud, Lock, Smartphone, Headphones, BarChart, Database as DataIcon, Globe, Cog } from 'lucide-vue-next'

const route = useRoute()
const service = ref(null)

const services = [
  { 
    id: 1,
    icon: Code, 
    name: 'Desarrollo de Software', 
    description: 'Creamos soluciones de software personalizadas para satisfacer sus necesidades específicas.',
    category: 'Desarrollo',
    features: [
      'Desarrollo de aplicaciones a medida',
      'Integración de sistemas',
      'Arquitectura de software',
      'Pruebas y control de calidad'
    ],
    benefits: [
      'Soluciones adaptadas a sus necesidades específicas',
      'Mejora de la eficiencia operativa',
      'Ventaja competitiva a través de la innovación tecnológica',
      'Escalabilidad y flexibilidad para el crecimiento futuro'
    ],
    caseStudies: [
      {
        id: 101,
        title: 'Sistema de Gestión para Empresa Logística',
        description: 'Desarrollamos un sistema integral que optimizó las operaciones y redujo los costos en un 30%.'
      },
      {
        id: 102,
        title: 'Plataforma de E-commerce B2B',
        description: 'Creamos una plataforma robusta que aumentó las ventas en línea en un 150% en el primer año.'
      }
    ]
  },
  // ... Añadir el resto de los servicios con sus detalles
]

onMounted(() => {
  const serviceId = parseInt(route.params.id)
  service.value = services.find(s => s.id === serviceId)
})
</script>