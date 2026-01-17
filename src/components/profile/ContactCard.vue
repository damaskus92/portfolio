<template>
  <Card
    class="bg-linear-to-br from-gray-800/60 to-gray-900/40 backdrop-blur-md border border-white/10 hover:border-white/20 transition"
    pt:body:class="h-full"
    pt:content:class="flex flex-col gap-6 justify-between h-full"
  >
    <template #content>
      <div class="text-center">
        <div
          class="inline-flex items-center justify-center w-16 h-16 bg-gray-500/10 rounded-full mb-4"
        >
          <i class="pi pi-crown text-gray-400 text-2xl" />
        </div>
        <h3 class="text-2xl font-bold text-white tracking-tight">Let's Work Together</h3>
        <p class="text-gray-400 text-sm mt-2">Turn Visions into Reality</p>
      </div>

      <div class="space-y-3">
        <Button
          label="Email Me"
          icon="pi pi-envelope"
          outlined
          class="w-full bg-white/10 hover:bg-white/20 text-gray-200 border border-white/20 font-semibold"
          @click="openLink('mailto:damaskusuma92@gmail.com')"
        />

        <Button
          label="WhatsApp Me"
          icon="pi pi-whatsapp"
          outlined
          class="w-full bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-600/40 font-semibold"
          @click="openLink('https://wa.me/62811358815')"
        />
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
const openLink = (url: string) => {
  window.open(url, '_blank')
}
</script>
