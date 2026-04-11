<template>
  <section id="experience" class="relative py-24 px-4 overflow-hidden">
    <div class="absolute inset-0 bg-continue-section pointer-events-none"></div>

    <div class="relative max-w-4xl mx-auto">
      <!-- Section Heading -->
      <div class="mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-white section-heading">
          <span class="text-accent font-mono text-xl mr-2">02.</span> {{ t('experience.heading') }}
        </h2>
      </div>

      <!-- Timeline -->
      <div class="relative">
        <!-- Timeline Line -->
        <div class="absolute left-1.25 top-2 bottom-2 w-px timeline-line md:left-1.25"></div>

        <!-- Experience Items -->
        <div class="space-y-12">
          <div
            v-for="(exp, index) in experiences"
            :key="exp.id"
            class="relative pl-10 experience-item"
          >
            <!-- Timeline Dot -->
            <div
              :class="[
                'absolute left-0 top-1.5',
                exp.current ? 'timeline-dot' : 'timeline-dot-inactive',
              ]"
            ></div>

            <!-- Content -->
            <div class="group">
              <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                <div>
                  <h3
                    class="text-xl font-bold text-white group-hover:text-accent transition-colors mb-2"
                  >
                    {{ t(`experience.items[${index}].title`) }}
                  </h3>
                  <p class="text-teal-600 font-medium">{{ exp.company }}</p>
                </div>
                <span class="text-slate-500 text-sm font-mono shrink-0">{{ exp.period }}</span>
              </div>

              <ul class="space-y-1 mb-4">
                <li
                  v-for="descIdx in exp.descriptionCount"
                  :key="descIdx"
                  class="text-slate-400 text-sm leading-relaxed flex"
                >
                  <span class="text-accent/50 -mt-3 shrink-0"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M12 10a2 2 0 0 0-2 2a2 2 0 0 0 2 2c1.11 0 2-.89 2-2a2 2 0 0 0-2-2"
                      /></svg
                  ></span>
                  <span>{{ t(`experience.items[${index}].description[${descIdx - 1}]`) }}</span>
                </li>
              </ul>

              <div class="flex flex-wrap gap-2">
                <Chip
                  v-for="tech in exp.technologies"
                  :key="tech"
                  :label="tech"
                  class="bg-accent/8 text-accent/90 border border-accent/15 text-xs py-0.5 px-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { experiences } from '@/data/experience'
import { useScrollReveal } from '@/composables/useScrollReveal'

const { t } = useI18n()
const { revealChildren } = useScrollReveal()

onMounted(() => {
  revealChildren('#experience .space-y-12', '.experience-item', {
    x: -30,
    y: 0,
    stagger: 0.2,
    start: 'top 85%',
  })
})
</script>
