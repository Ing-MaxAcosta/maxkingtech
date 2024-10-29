// resources/js/animations/animations.js
// import { motion } from 'framer-motion';

// Ejemplo de animación para un componente
export const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
};

export const slideIn = {
    initial: { x: '-100vw' },
    animate: { x: 0 },
    exit: { x: '100vw' },
};

export const scaleUp = {
    initial: { scale: 0 },
    animate: { scale: 1 },
    exit: { scale: 0 },
};

// Puedes agregar más animaciones según lo necesites
