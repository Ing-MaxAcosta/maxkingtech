<template>
  <div class="container mx-auto px-4 py-12 relative">
    <div id="particle-background"></div>
    <h1 class="text-4xl font-bold mb-8 text-center text-blue-400">Contáctanos</h1>
    <form @submit.prevent="submitForm" class="max-w-lg mx-auto bg-gray-900 p-8 rounded-lg shadow-lg transition-all duration-500 transform hover:scale-105">
      <div class="mb-4">
        <label for="name" class="block text-gray-300 mb-2">Nombre</label>
        <input 
          type="text" 
          id="name" 
          v-model="form.name" 
          class="w-full bg-gray-800 text-white border border-gray-700 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          required
        >
      </div>
      <div class="mb-4">
        <label for="email" class="block text-gray-300 mb-2">Email</label>
        <input 
          type="email" 
          id="email" 
          v-model="form.email" 
          class="w-full bg-gray-800 text-white border border-gray-700 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          required
        >
      </div>
      <div class="mb-4">
        <label for="message" class="block text-gray-300 mb-2">Mensaje</label>
        <textarea 
          id="message" 
          v-model="form.message" 
          class="w-full bg-gray-800 text-white border border-gray-700 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          rows="4"
          required
        ></textarea>
      </div>
      <button 
        type="submit" 
        class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
        :disabled="isSubmitting"
      >
        {{ isSubmitting ? 'Enviando...' : 'Enviar Mensaje' }}
      </button>
    </form>
    <p v-if="submitMessage" class="mt-4 text-center" :class="submitSuccess ? 'text-green-400' : 'text-red-400'"> 
      {{ submitMessage }}
    </p>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import axios from 'axios';
import { initParticles, cleanupParticles  } from '../particles.js';

const form = ref({ name: '', email: '', message: '' });
const isSubmitting = ref(false);
const submitMessage = ref('');
const submitSuccess = ref(false);

onMounted(() => {
  const particleContainer = document.getElementById('particle-background');
  if (particleContainer) {
    initParticles(particleContainer); // Llamada corregida a initParticles con contenedor específico
  }
});

onUnmounted(() => {
  cleanupParticles();
});

const submitForm = async () => {
  isSubmitting.value = true;
  submitMessage.value = '';
  submitSuccess.value = false;

  // Validación simple
  if (!form.value.name || !form.value.email || !form.value.message) {
    submitMessage.value = 'Por favor, completa todos los campos.';
    submitSuccess.value = false;
    isSubmitting.value = false;
    return;
  }

  try {
    const response = await axios.post('/contact', form.value);
    submitMessage.value = response.data.message;
    submitSuccess.value = true;
    form.value = { name: '', email: '', message: '' };
  } catch (error) {
    const errorMessage = error.response?.data?.message || 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.';
    submitMessage.value = errorMessage;
    submitSuccess.value = false;
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
/* Efecto en el fondo de partículas */
#particle-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
</style>
