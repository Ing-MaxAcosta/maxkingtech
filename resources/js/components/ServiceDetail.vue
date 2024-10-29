<template>
  <div class="container mx-auto px-4 py-12">
    <div v-if="service" class="bg-gray-900 rounded-lg p-8 transition-all duration-500 transform hover:scale-105" ref="serviceDetail">
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
import { ref, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import { gsap } from 'gsap'; // Importar GSAP
import { Code, Database, Cloud, Lock, Smartphone, Headphones, BarChart, Globe, Cog } from 'lucide-vue-next';
import { initParticles, cleanupParticles } from '../particles';

const route = useRoute();
const service = ref(null);

const services = [
  { 
    id: 1, 
    icon: Code, 
    name: 'Desarrollo de Software', 
    description: 'Creamos soluciones personalizadas.', 
    features: ['App a medida', 'Integración'], 
    benefits: ['Adaptación', 'Eficiencia'], 
    caseStudies: [{ id: 101, title: 'Gestión Logística', description: 'Optimización del 30% en costos.' }] 
  },
  { 
    id: 2, 
    icon: Database, 
    name: 'Gestión de Datos', 
    description: 'Optimización y análisis de datos.', 
    features: ['Integración de datos', 'Visualización'], 
    benefits: ['Mejora en la toma de decisiones', 'Eficiencia en procesos'], 
    caseStudies: [{ id: 102, title: 'Análisis Financiero', description: 'Incremento del 25% en rendimiento.' }] 
  },
  { 
    id: 3, 
    icon: Cloud, 
    name: 'Servicios en la Nube', 
    description: 'Soluciones en la nube escalables.', 
    features: ['Escalabilidad', 'Ahorro de costos'], 
    benefits: ['Accesibilidad', 'Seguridad mejorada'], 
    caseStudies: [{ id: 103, title: 'Migración a la Nube', description: 'Reducción del 40% en costos operativos.' }] 
  },
  { 
    id: 4, 
    icon: Lock, 
    name: 'Ciberseguridad', 
    description: 'Protección digital avanzada.', 
    features: ['Análisis de vulnerabilidades', 'Monitoreo constante'], 
    benefits: ['Protección de datos', 'Cumplimiento normativo'], 
    caseStudies: [{ id: 104, title: 'Protección de Red', description: 'Detección de amenazas en tiempo real.' }] 
  },
  { 
    id: 5, 
    icon: Smartphone, 
    name: 'Desarrollo Móvil', 
    description: 'Aplicaciones móviles para iOS y Android.', 
    features: ['Interfaz intuitiva', 'Desarrollo multiplataforma'], 
    benefits: ['Aumento de usuarios', 'Mayor alcance de mercado'], 
    caseStudies: [{ id: 105, title: 'App de Comercio', description: 'Incremento del 50% en ventas.' }] 
  },
  { 
    id: 6, 
    icon: Headphones, 
    name: 'Soporte Técnico', 
    description: 'Soporte 24/7.', 
    features: ['Asistencia inmediata', 'Resolución de problemas'], 
    benefits: ['Mayor satisfacción del cliente', 'Menos tiempos de inactividad'], 
    caseStudies: [{ id: 106, title: 'Atención al Cliente', description: 'Reducción de quejas en un 30%.' }] 
  },
  { 
    id: 7, 
    icon: BarChart, 
    name: 'Inteligencia de Negocios', 
    description: 'Dashboards y análisis avanzados.', 
    features: ['Reportes en tiempo real', 'Análisis predictivo'], 
    benefits: ['Mejor toma de decisiones', 'Visualización clara de datos'], 
    caseStudies: [{ id: 107, title: 'Optimización de Ventas', description: 'Incremento del 20% en ventas.' }] 
  },
  { 
    id: 8, 
    icon: Globe, 
    name: 'Ingeniería de Datos', 
    description: 'Infraestructura y calidad de datos.', 
    features: ['Modelado de datos', 'ETL'], 
    benefits: ['Datos confiables', 'Mejor análisis'], 
    caseStudies: [{ id: 108, title: 'Gestión de Datos', description: 'Mejora del 40% en calidad de datos.' }] 
  },
  { 
    id: 9, 
    icon: Cog, 
    name: 'Automatización RPA', 
    description: 'Implementación y soporte en RPA.', 
    features: ['Automatización de procesos', 'Integración de sistemas'], 
    benefits: ['Reducción de costos', 'Aumento de eficiencia'], 
    caseStudies: [{ id: 109, title: 'Automatización de Facturación', description: 'Reducción de errores en un 80%.' }] 
  }
];

onMounted(() => {
  const serviceId = parseInt(route.params.id); // Obtén el id desde los parámetros de la ruta
  service.value = services.find(s => s.id === serviceId); // Busca el servicio correspondiente
  if (service.value) {
    gsap.from(serviceDetail.value, { duration: 1, opacity: 0, y: 50 }); // Animación de entrada
    initParticles(); // Inicializar partículas al montar el componente
  }
});

onUnmounted(() => {
  cleanupParticles(); // Limpiar partículas al desmontar el componente
});
</script>
