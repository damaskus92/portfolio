<template>
  <section id="skills" class="relative py-24 px-4 overflow-hidden">
    <div class="absolute inset-0 bg-continue-section pointer-events-none"></div>

    <div class="relative max-w-7xl mx-auto">
      <!-- Section Heading -->
      <div class="mb-16 text-center">
        <h2
          class="text-3xl md:text-4xl font-bold text-white inline-block section-heading section-heading-center"
        >
          <span class="text-accent font-mono text-xl mr-2">05.</span> Skills & Technologies
        </h2>
      </div>

      <!-- Marquee Container -->
      <div class="marquee-container space-y-4 overflow-hidden">
        <!-- Row 1 - scrolls left -->
        <div class="flex marquee-left whitespace-nowrap">
          <div class="flex gap-3 pr-3" v-for="n in 2" :key="'row1-' + n">
            <div
              v-for="(skill, index) in row1Skills"
              :key="`row1-${n}-${index}`"
              class="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 border border-white/8 hover:border-accent/25 hover:bg-accent/5 transition-all duration-300 cursor-default"
            >
              <i :class="`pi ${skill.icon} text-accent/70 text-sm`"></i>
              <span class="text-slate-300 text-sm font-medium">{{ skill.name }}</span>
            </div>
          </div>
        </div>

        <!-- Row 2 - scrolls right -->
        <div class="flex marquee-right whitespace-nowrap">
          <div class="flex gap-3 pr-3" v-for="n in 2" :key="'row2-' + n">
            <div
              v-for="(skill, index) in row2Skills"
              :key="`row2-${n}-${index}`"
              class="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 border border-white/8 hover:border-accent/25 hover:bg-accent/5 transition-all duration-300 cursor-default"
            >
              <i :class="`pi ${skill.icon} text-accent/70 text-sm`"></i>
              <span class="text-slate-300 text-sm font-medium">{{ skill.name }}</span>
            </div>
          </div>
        </div>

        <!-- Row 3 - scrolls left (slower) -->
        <div class="flex marquee-left-slow whitespace-nowrap">
          <div class="flex gap-3 pr-3" v-for="n in 2" :key="'row3-' + n">
            <div
              v-for="(skill, index) in row3Skills"
              :key="`row3-${n}-${index}`"
              class="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 border border-white/8 hover:border-accent/25 hover:bg-accent/5 transition-all duration-300 cursor-default"
            >
              <i :class="`pi ${skill.icon} text-accent/70 text-sm`"></i>
              <span class="text-slate-300 text-sm font-medium">{{ skill.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Skill {
  name: string
  icon: string
}

const row1Skills: Skill[] = [
  { name: 'Laravel', icon: 'pi-code' },
  { name: 'Vue.js', icon: 'pi-star' },
  { name: 'TypeScript', icon: 'pi-file-edit' },
  { name: 'React.js', icon: 'pi-code' },
  { name: 'PHP', icon: 'pi-server' },
  { name: 'Inertia.js', icon: 'pi-arrow-right-arrow-left' },
  { name: 'Livewire', icon: 'pi-bolt' },
  { name: 'Express.js', icon: 'pi-server' },
]

const row2Skills: Skill[] = [
  { name: 'MySQL', icon: 'pi-database' },
  { name: 'MongoDB', icon: 'pi-database' },
  { name: 'Tailwind CSS', icon: 'pi-palette' },
  { name: 'Bootstrap', icon: 'pi-th-large' },
  { name: 'jQuery', icon: 'pi-code' },
  { name: 'REST API', icon: 'pi-cloud' },
  { name: 'Filament', icon: 'pi-objects-column' },
  { name: 'PrimeVue', icon: 'pi-prime' },
]

const row3Skills: Skill[] = [
  { name: 'Git', icon: 'pi-github' },
  { name: 'GitHub', icon: 'pi-github' },
  { name: 'GitLab', icon: 'pi-gitlab' },
  { name: 'Figma', icon: 'pi-pencil' },
  { name: 'Postman', icon: 'pi-send' },
  { name: 'Notion', icon: 'pi-clipboard' },
  { name: 'Vercel', icon: 'pi-cloud-upload' },
  { name: 'Docker', icon: 'pi-box' },
]
</script>

<style scoped>
@keyframes marquee-left-slow {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.marquee-left-slow {
  animation: marquee-left-slow 40s linear infinite;
}

.marquee-container:hover .marquee-left-slow {
  animation-play-state: paused;
}
</style>
