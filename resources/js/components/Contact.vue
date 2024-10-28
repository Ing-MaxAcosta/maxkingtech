<template>
  <div class="container mx-auto px-4 py-12">
    <h1 class="text-4xl font-bold mb-8 text-center text-blue-400">Contáctanos</h1>
    <form @submit.prevent="submitForm" class="max-w-lg mx-auto bg-gray-900 p-8 rounded-lg">
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
import { ref } from 'vue'
import axios from 'axios'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)
const submitMessage = ref('')
const submitSuccess = ref(false)

const submitForm = async () => {
  isSubmitting.value = true
  submitMessage.value = ''
  submitSuccess.value = false

  try {
    const response = await axios.post('/contact', form.value)
    submitMessage.value = response.data.message
    submitSuccess.value = true
    form.value = { name: '', email: '', message: '' }
  } catch (error) {
    submitMessage.value = 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.'
    submitSuccess.value = false
  } finally {
    isSubmitting.value = false
  }
}
</script>