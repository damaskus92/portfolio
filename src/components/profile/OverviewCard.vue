<template>
  <Card
    class="bg-linear-to-br from-gray-800/50 to-gray-900/30 backdrop-blur-md border border-white/8 hover:border-white/15 transition-all duration-300 h-full"
  >
    <template #content>
      <div class="space-y-5">
        <!-- Social & Status -->
        <div class="flex items-center justify-between gap-4 flex-wrap">
          <div class="flex items-center gap-3 flex-wrap">
            <Chip
              label="Github"
              class="bg-white/8 text-gray-200 border border-white/15 font-medium text-sm cursor-pointer hover:bg-white/15 hover:border-accent/30 transition-all"
              @click="openGithub"
            >
              <template #icon>
                <i class="pi pi-github text-gray-200" />
              </template>
            </Chip>

            <Chip
              label="LinkedIn"
              class="bg-white/8 text-gray-200 border border-white/15 font-medium text-sm cursor-pointer hover:bg-white/15 hover:border-accent/30 transition-all"
              @click="openLinkedin"
            >
              <template #icon>
                <i class="pi pi-linkedin text-gray-200" />
              </template>
            </Chip>

            <Chip
              v-if="isOpenWork"
              label="Open to Work"
              class="bg-emerald-600/10 text-emerald-400 border border-emerald-600/20 font-medium text-sm"
            >
              <template #icon>
                <span class="relative flex h-2 w-2">
                  <span
                    class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"
                  ></span>
                  <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
              </template>
            </Chip>
          </div>
        </div>

        <!-- Bio -->
        <p class="text-slate-400 leading-relaxed">
          Over 4 years of experience in end-to-end web application development with deep expertise
          in Backend and Frontend development. Focused on building scalable system architecture,
          writing clean code, and implementing data security to deliver robust and maintainable
          digital solutions.
        </p>

        <!-- Info Tags -->
        <div class="flex flex-wrap gap-2.5 pt-2">
          <Tag
            severity="secondary"
            class="bg-white/8 text-slate-300 border border-white/12 text-xs"
          >
            <template #icon>
              <i class="pi pi-map-marker mr-1 text-accent/70" />
            </template>
            Karanganyar, Central Java
          </Tag>

          <Tag
            severity="secondary"
            class="bg-white/8 text-slate-300 border border-white/12 text-xs"
          >
            <template #icon>
              <i class="pi pi-graduation-cap mr-1 text-accent/70" />
            </template>
            Bachelor of Engineering in Informatics
          </Tag>

          <Tag
            severity="secondary"
            class="bg-white/8 text-slate-300 border border-white/12 text-xs"
          >
            <template #icon>
              <i class="pi pi-briefcase mr-1 text-accent/70" />
            </template>
            Full-Stack Developer
          </Tag>
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { track } from '@vercel/analytics'

defineProps<{
  isOpenWork: boolean
}>()

const openGithub = () => {
  track('cta_github', { source: 'profile' })
  window.open('https://github.com/damaskus92', '_blank')
}

const openLinkedin = () => {
  track('cta_linkedin', { source: 'profile' })
  window.open('https://linkedin.com/in/damaskus92', '_blank')
}
</script>
