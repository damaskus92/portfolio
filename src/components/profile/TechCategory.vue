<template>
  <div>
    <p class="text-accent/70 text-xs mb-2.5 font-mono font-medium uppercase tracking-wider">
      {{ title }}
    </p>
    <div class="flex flex-wrap gap-2">
      <Chip
        v-for="tech in technologies"
        :key="tech"
        :label="tech"
        class="bg-white/6 text-slate-300 border border-white/10 text-xs py-1 px-2.5 hover:border-accent/20 hover:text-white transition-all"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  technologies: string[]
}>()
</script>
