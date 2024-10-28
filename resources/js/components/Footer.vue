<template>
  <footer class="bg-gray-900 text-white py-8">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="mb-4 md:mb-0">
          <p>&copy; 2023 Corp Max King Tech. Todos los derechos reservados.</p>
        </div>
        <div class="flex items-center space-x-4">
          <a href="mailto:info@maxkingtech.com" class="hover:text-blue-400 transition-colors duration-300">
            <Mail size="24" />
          </a>
          <a href="https://www.facebook.com/people/Corp-Max-King-Tech-MKT/61567310301752" target="_blank" rel="noopener noreferrer" class="hover:text-blue-400 transition-colors duration-300">
            <Facebook size="24" />
          </a>
          <a href="https://linkedin.com/company/max-king-tech" target="_blank" rel="noopener noreferrer" class="hover:text-blue-400 transition-colors duration-300">
            <Linkedin size="24" />
          </a>
          <a href="https://instagram.com/maxkingtech" target="_blank" rel="noopener noreferrer" class="hover:text-blue-400 transition-colors duration-300">
            <Instagram size="24" />
          </a>
          <a href="https://twitter.com/maxkingtech" target="_blank" rel="noopener noreferrer" class="hover:text-blue-400 transition-colors duration-300">
            <Twitter size="24" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { Facebook, Linkedin, Instagram, Twitter, Mail } from 'lucide-vue-next'; // Cambia a lucide-vue si usas Vue

export default {
  components: {
    Facebook,
    Linkedin,
    Instagram,
    Twitter,
    Mail
  }
}
</script>

<style scoped>
/* Estilos adicionales si es necesario */
</style>
