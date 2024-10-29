import * as tsParticles from "tsparticles";

export function loadParticles() {
  tsParticles.load("particle-background", {
    fpsLimit: 60,
    particles: {
      number: { value: 100, density: { enable: true, value_area: 800 } },
      color: { value: ["#00ccff", "#00ffcc"] },
      shape: { type: "circle" },
      opacity: { value: 0.5 },
      size: { value: 3, random: true },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        out_mode: "bounce",
        random: false,
        straight: false,
      },
      line_linked: { enable: false },
    },
    interactivity: {
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
        resize: true,
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
        push: { particles_nb: 4 },
      },
    },
    retina_detect: true,
  });
}
