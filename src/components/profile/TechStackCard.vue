<template>
  <Card
    class="bg-linear-to-br from-gray-800/50 to-gray-900/30 backdrop-blur-md border border-white/8 hover:border-white/15 transition-all duration-300 h-full"
  >
    <template #content>
      <div class="space-y-5">
        <h3 class="text-xl font-bold text-white tracking-tight">{{ t('about.techStack') }}</h3>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <TechCategory
            :title="t('about.techCategories.languages')"
            :technologies="techStack.languages"
          />
          <TechCategory
            :title="t('about.techCategories.backend')"
            :technologies="techStack.backend"
          />
          <TechCategory
            :title="t('about.techCategories.frontend')"
            :technologies="techStack.frontend"
          />
          <TechCategory
            :title="t('about.techCategories.database')"
            :technologies="techStack.database"
          />
          <TechCategory :title="t('about.techCategories.tools')" :technologies="techStack.tools" />
          <TechCategory
            :title="t('about.techCategories.others')"
            :technologies="techStack.others"
          />
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import TechCategory from './TechCategory.vue'
import { techStack } from '@/data/techStack'

const { t } = useI18n()
</script>
