<template>
  <section id="skills" class="relative py-30 px-4 overflow-hidden">
    <div class="absolute inset-0 bg-continue-section pointer-events-none"></div>

    <div class="relative max-w-7xl mx-auto">
      <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-16 text-center">
        Skills & Technologies
      </h2>

      <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        <Card
          v-for="skill in skills"
          :key="skill.name"
          class="group bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/30 transition-all duration-300"
        >
          <template #content>
            <div class="flex flex-col items-center justify-center gap-4 py-6">
              <i
                :class="`pi ${skill.icon} text-5xl text-gray-300 group-hover:text-white transition-colors`"
              ></i>

              <h3 class="text-gray-200 font-semibold tracking-wide">
                {{ skill.name }}
              </h3>
            </div>
          </template>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Skill {
  name: string
  icon: string
}

const skills = ref<Skill[]>([
  { name: 'Vue.js', icon: 'pi-code' },
  { name: 'TypeScript', icon: 'pi-file-code' },
  { name: 'Tailwind', icon: 'pi-palette' },
  { name: 'Node.js', icon: 'pi-server' },
  { name: 'Database', icon: 'pi-database' },
  { name: 'Git', icon: 'pi-git' },
  { name: 'UI/UX', icon: 'pi-pencil' },
  { name: 'Testing', icon: 'pi-verified' },
])
</script>

<style scoped>
:deep(.p-card) {
  transition:
    transform 0.3s ease,
    border-color 0.3s ease;
}

:deep(.p-card:hover) {
  transform: translateY(-6px);
}
</style>
