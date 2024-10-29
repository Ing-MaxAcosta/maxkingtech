<template>
  <div class="container mx-auto px-4 py-12">
    <h1 class="text-4xl font-bold mb-8 text-center text-blue-400 parallax-title">Acerca de Nosotros</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div class="parallax-content">
        <h2 class="text-2xl font-bold mb-4 text-green-400">Nuestra Misión</h2>
        <p class="text-gray-300 leading-relaxed">
          En Corp Max King Tech, nuestra misión es proporcionar soluciones tecnológicas innovadoras 
          que impulsen el éxito de nuestros clientes en la era digital. Nos esforzamos por estar a 
          la vanguardia de la tecnología, ofreciendo servicios de alta calidad y soluciones personalizadas.
        </p>
      </div>
      <div class="parallax-content">
        <h2 class="text-2xl font-bold mb-4 text-green-400">Nuestra Visión</h2>
        <p class="text-gray-300 leading-relaxed">
          Aspiramos a ser líderes globales en la transformación digital, creando un futuro donde la 
          tecnología mejore todos los aspectos de la vida y los negocios. Visualizamos un mundo donde 
          la innovación tecnológica sea accesible para todos, impulsando el progreso y la prosperidad.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue';

const handleScroll = () => {
  document.querySelectorAll(".parallax-content").forEach((element) => {
    let offset = window.pageYOffset;
    element.style.transform = `translateY(${offset * 0.2}px)`;
  });
  document.querySelector(".parallax-title").style.transform = `translateY(${
    window.pageYOffset * 0.5
  }px)`;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>


<style scoped>
.parallax-content {
  transition: transform 0.3s ease;
}
.parallax-title {
  transition: transform 0.3s ease;
}
</style>
