/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/js/**/*.{vue,js,ts}", // Incluye tus archivos .vue y elimina .tsx
    "./resources/views/**/*.blade.php", // Si usas Blade
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
