<template>
  <section id="skills" class="py-20 px-4 bg-slate-800/30">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-4xl font-bold text-white mb-12 text-center">Skills & Technologies</h2>
      <div class="grid md:grid-cols-4 gap-6">
        <Card
          v-for="skill in skills"
          :key="skill.name"
          class="bg-slate-800/50 border border-slate-700/50 text-center hover:border-purple-500/50 transition-all"
        >
          <template #content>
            <i :class="`pi ${skill.icon} text-5xl text-purple-400 mb-4`"></i>
            <h3 class="text-white font-semibold">{{ skill.name }}</h3>
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

<style scoped></style>
