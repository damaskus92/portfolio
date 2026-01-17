<template>
  <div class="relative overflow-hidden" @mousemove="handleMouseMove">
    <!-- Base background -->
    <div class="fixed inset-0 -z-30 base-bg"></div>

    <!-- Multi-layered cursor light effect -->
    <div class="fixed inset-0 -z-20 cursor-light-primary"></div>
    <div class="fixed inset-0 -z-20 cursor-light-secondary"></div>
    <div class="fixed inset-0 -z-20 cursor-light-accent"></div>

    <!-- Grid overlay -->
    <div class="fixed inset-0 -z-10 grid-overlay"></div>

    <!-- Content -->
    <div class="relative z-10 min-h-screen">
      <MainNavbar />

      <HeroSection />
      <ProfileSection />
      <ServiceSection />
      <ProjectSection />
      <!-- <ContactSection /> -->

      <MainFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
import MainNavbar from './components/MainNavbar.vue'
import HeroSection from './components/HeroSection.vue'
import ProfileSection from './components/ProfileSection.vue'
import ProjectSection from './components/ProjectSection.vue'
// import ContactSection from './components/ContactSection.vue'
import MainFooter from './components/MainFooter.vue'
import ServiceSection from './components/ServiceSection.vue'

const handleMouseMove = (e: MouseEvent) => {
  const x = (e.clientX / window.innerWidth) * 100
  const y = (e.clientY / window.innerHeight) * 100

  document.documentElement.style.setProperty('--cursor-x', `${x}%`)
  document.documentElement.style.setProperty('--cursor-y', `${y}%`)
}
</script>

<style scoped>
.base-bg {
  background:
    radial-gradient(ellipse 80% 50% at 50% -20%, rgba(71, 85, 105, 0.12), transparent), #020617;
}

/* Primary cursor light - main glow */
.cursor-light-primary {
  background: radial-gradient(
    250px circle at var(--cursor-x, 50%) var(--cursor-y, 30%),
    rgba(148, 163, 184, 0.08),
    rgba(100, 116, 139, 0.05),
    transparent 50%
  );
  transition:
    background 0.5s ease-out,
    opacity 0.3s ease;
  will-change: background;
  pointer-events: none;
}

/* Secondary cursor light - inner intense glow */
.cursor-light-secondary {
  background: radial-gradient(
    120px circle at var(--cursor-x, 50%) var(--cursor-y, 30%),
    rgba(148, 163, 184, 0.12),
    rgba(100, 116, 139, 0.06),
    transparent 60%
  );
  mix-blend-mode: screen;
  transition: background 0.6s ease-out;
  will-change: background;
  pointer-events: none;
}

/* Accent light - subtle color variation */
.cursor-light-accent {
  background: radial-gradient(
    180px circle at var(--cursor-x, 50%) var(--cursor-y, 30%),
    rgba(125, 140, 160, 0.06),
    rgba(71, 85, 105, 0.03),
    transparent 65%
  );
  animation: pulse-glow 4s ease-in-out infinite;
  transition: background 0.7s ease-out;
  will-change: background, opacity;
  pointer-events: none;
}

.grid-overlay {
  background-image:
    linear-gradient(rgba(148, 163, 184, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(148, 163, 184, 0.1) 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: radial-gradient(ellipse 100% 80% at 50% 50%, black 40%, transparent 100%);
}

@keyframes pulse-glow {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.6;
  }
}

@media (prefers-reduced-motion: reduce) {
  .cursor-light-primary,
  .cursor-light-secondary,
  .cursor-light-accent {
    display: none;
  }

  .grid-overlay {
    animation: none;
  }
}

@media (hover: none) {
  .cursor-light-primary,
  .cursor-light-secondary,
  .cursor-light-accent {
    opacity: 0.5;
  }
}
</style>
