<template>
  <div id="app" class="bg-black text-white min-h-screen">
    <nav class="p-4">
      <ul class="flex justify-center space-x-6">
        <li><router-link to="/" class="text-blue-400 hover:text-blue-300">Inicio</router-link></li>
        <li><router-link to="/about" class="text-blue-400 hover:text-blue-300">Acerca de</router-link></li>
        <li><router-link to="/services" class="text-blue-400 hover:text-blue-300">Servicios</router-link></li>
        <li><router-link to="/contact" class="text-blue-400 hover:text-blue-300">Contacto</router-link></li>
      </ul>
    </nav>

    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>

    <footer class="p-4 text-center text-gray-500">
      &copy; 2023 Corp Max King Tech. Todos los derechos reservados.
    </footer>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

body {
  font-family: 'Roboto', sans-serif;
  background-color: #000;
  color: #fff;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>