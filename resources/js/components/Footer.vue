<template>
  <footer class="bg-gray-900 text-white py-8">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="mb-4 md:mb-0">
          <p>&copy; 2023 Corp Max King Tech. Todos los derechos reservados.</p>
        </div>
        <div class="flex items-center space-x-4">
          <a href="mailto:info@maxkingtech.com" class="footer-link">
            <Mail size="24" />
          </a>
          <a href="https://www.facebook.com/people/Corp-Max-King-Tech-MKT/61567310301752" target="_blank" rel="noopener noreferrer" class="footer-link">
            <Facebook size="24" />
          </a>
          <a href="https://linkedin.com/company/max-king-tech" target="_blank" rel="noopener noreferrer" class="footer-link">
            <Linkedin size="24" />
          </a>
          <a href="https://instagram.com/maxkingtech" target="_blank" rel="noopener noreferrer" class="footer-link">
            <Instagram size="24" />
          </a>
          <a href="https://twitter.com/maxkingtech" target="_blank" rel="noopener noreferrer" class="footer-link">
            <Twitter size="24" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { Facebook, Linkedin, Instagram, Twitter, Mail } from 'lucide-vue-next';

export default {
  components: {
    Facebook,
    Linkedin,
    Instagram,
    Twitter,
    Mail,
  },
};
</script>

<style scoped>
.footer-link {
  transition: transform 0.3s, color 0.3s;
}
.footer-link:hover {
  color: #00ccff;
  transform: scale(1.2);
}
</style>
