import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
    resolve: {
        alias: {
            vue: 'vue/dist/vue.esm-bundler.js',
            '@': '/resources/js',
        },
    },
    build: {
        // Configuración de producción mejorada
        rollupOptions: {
            external: ['lucide-vue-next'],
            output: {
                manualChunks(id) {
                    // Separar los vendors en chunks diferentes
                    if (id.includes('node_modules')) {
                        return 'vendor';
                    }
                }
            }
        },
        // Aumenta el límite de advertencia
        chunkSizeWarningLimit: 1000,
        // Asegúrate de que los source maps estén generados
        sourcemap: true,
    },
    // Configuración de desarrollo
    server: {
        hmr: {
            host: 'localhost',
        },
    },
});