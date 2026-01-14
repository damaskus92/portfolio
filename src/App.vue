<template>
  <div class="min-h-screen bg-linear-to-br from-gray-950 via-gray-900 to-gray-950">
    <MainNavbar />

    <HeroSection />

    <ProfileSection />

    <SkillSection />

    <ProjectSection />

    <ContactSection />

    <MainFooter />
  </div>
</template>

<script setup lang="ts">
import MainNavbar from './components/MainNavbar.vue'
import HeroSection from './components/HeroSection.vue'
import ProfileSection from './components/ProfileSection.vue'
import ProjectSection from './components/ProjectSection.vue'
import ContactSection from './components/ContactSection.vue'
import MainFooter from './components/MainFooter.vue'
import SkillSection from './components/SkillSection.vue'
</script>

<style scoped>
/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #1f2937;
}

::-webkit-scrollbar-thumb {
  background: #4b5563;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #6b7280;
}
</style>
