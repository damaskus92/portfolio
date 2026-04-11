<template>
  <Card
    class="bg-linear-to-br from-gray-800/50 to-gray-900/30 backdrop-blur-md border border-white/8 hover:border-accent/20 transition-all duration-300 h-full"
  >
    <template #content>
      <div class="flex flex-col gap-5 justify-between h-full">
        <div class="text-center">
          <div
            class="inline-flex items-center justify-center w-14 h-14 bg-accent/10 rounded-xl mb-4"
          >
            <i class="pi pi-send text-accent text-xl" />
          </div>
          <h3 class="text-xl font-bold text-white tracking-tight">{{ t('about.letsWork') }}</h3>
          <p class="text-slate-500 text-sm mt-1.5">{{ t('about.gotProject') }}</p>
        </div>

        <div class="space-y-2.5">
          <Button
            :label="t('about.emailMe')"
            icon="pi pi-envelope"
            outlined
            class="w-full bg-white/5! border-white/10! text-slate-200! hover:bg-white/10! hover:border-white/20! hover:-translate-y-1 font-medium py-3 transition-all duration-300 backdrop-blur-sm rounded-xl!"
            @click="openLink('mailto:damaskusuma92@gmail.com')"
          />

          <Button
            label="WhatsApp"
            icon="pi pi-whatsapp"
            outlined
            class="w-full bg-emerald-600/10! border-emerald-600/30! text-emerald-400! hover:bg-emerald-600/20! hover:border-emerald-600/40! hover:-translate-y-1 font-medium py-3 transition-all duration-300 backdrop-blur-sm rounded-xl!"
            @click="openLink('https://wa.me/62811358815')"
          />
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { track } from '@vercel/analytics'

const { t } = useI18n()

const openLink = (url: string) => {
  track('cta_contact', { method: url.includes('wa.me') ? 'whatsapp' : 'email', source: 'profile' })
  window.open(url, '_blank')
}
</script>
