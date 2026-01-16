<template>
  <section id="profile" class="relative py-24 px-4 overflow-hidden">
    <div class="absolute inset-0 bg-first-section pointer-events-none"></div>

    <div class="relative max-w-7xl mx-auto">
      <!-- <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-16 text-center">About Me</h2> -->

      <div class="grid md:grid-cols-3 gap-6">
        <!-- Profile Overview Card (Full Width) -->
        <Card
          class="md:col-span-3 bg-linear-to-br from-gray-800/60 to-gray-900/40 backdrop-blur-md border border-white/10 hover:border-white/20 transition"
        >
          <template #content>
            <div class="space-y-5">
              <div class="flex items-center gap-4 flex-wrap">
                <Chip
                  label="Github"
                  class="bg-white/10 text-gray-200 border border-white/20 font-semibold text-sm cursor-pointer hover:bg-white/20 transition"
                  @click="openLink('https://github.com/damaskus92')"
                >
                  <template #icon>
                    <i class="pi pi-github text-gray-200"></i>
                  </template>
                </Chip>
                <Chip
                  label="LinkedIn"
                  class="bg-white/10 text-gray-200 border border-white/20 font-semibold text-sm cursor-pointer hover:bg-white/20 transition"
                  @click="openLink('https://linkedin.com/in/damaskus92')"
                >
                  <template #icon>
                    <i class="pi pi-linkedin text-gray-200"></i>
                  </template>
                </Chip>
                <Chip
                  label="Available for Work"
                  class="bg-emerald-600/10 text-emerald-500 border border-emerald-600/20 font-semibold text-sm"
                />
              </div>

              <h1 class="text-4xl md:text-5xl font-bold text-white tracking-tight">
                Damas Eka Kusuma
              </h1>

              <p class="text-gray-400 leading-relaxed">
                Over 5 years of experience in end-to-end web application development with deep
                expertise in Backend and Frontend development. Focused on building scalable system
                architecture, writing clean code, and implementing data security to deliver robust
                and maintainable digital solutions in dynamic work environments.
              </p>

              <div class="flex flex-wrap gap-3 pt-4">
                <Tag severity="secondary" class="bg-white/10 text-gray-300 border border-white/20">
                  <template #icon>
                    <i class="pi pi-map-marker mr-1"></i>
                  </template>
                  Karanganyar, Central Java
                </Tag>

                <Tag severity="secondary" class="bg-white/10 text-gray-300 border border-white/20">
                  <template #icon>
                    <i class="pi pi-graduation-cap mr-1"></i>
                  </template>
                  Bachelor of Engineering in Informatics
                </Tag>

                <Tag severity="secondary" class="bg-white/10 text-gray-300 border border-white/20">
                  <template #icon>
                    <i class="pi pi-briefcase mr-1"></i>
                  </template>
                  Full-Stack Developer
                </Tag>

                <Tag severity="secondary" class="bg-white/10 text-gray-300 border border-white/20">
                  <template #icon>
                    <i class="pi pi-language mr-1"></i>
                  </template>
                  Indonesian
                </Tag>
              </div>
            </div>
          </template>
        </Card>

        <!-- Contact Card -->
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
                <i class="pi pi-crown text-gray-400 text-2xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-white tracking-tight">Let's Work Together</h3>
              <p class="text-gray-400 text-sm mt-2">Turn Visions into Reality</p>
            </div>

            <div class="space-y-3">
              <Button
                label="Email Me"
                icon="pi pi-envelope"
                @click="openLink('mailto:damaskusuma92@gmail.com')"
                class="w-full bg-white/10 hover:bg-white/20 text-gray-200 border border-white/20 font-semibold"
                outlined
              />

              <Button
                label="WhatsApp Me"
                icon="pi pi-whatsapp"
                @click="openLink('https://wa.me/62811358815')"
                class="w-full bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-600/40 font-semibold"
                outlined
              />
            </div>
          </template>
        </Card>

        <!-- Tech Stack Card -->
        <Card
          class="bg-linear-to-br from-gray-800/60 to-gray-900/40 backdrop-blur-md border border-white/10 hover:border-white/20 transition md:col-span-2"
        >
          <template #content>
            <div class="space-y-5">
              <h3 class="text-2xl font-bold text-white tracking-tight">Tech Stack</h3>

              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <p class="text-gray-400 text-sm mb-3 font-semibold">Backend</p>
                  <div class="flex flex-wrap gap-2">
                    <Chip
                      label="PHP"
                      class="bg-white/10 text-gray-200 border border-white/20 text-xs"
                    />
                    <Chip
                      label="Laravel"
                      class="bg-white/10 text-gray-200 border border-white/20 text-xs"
                    />
                    <Chip
                      label="Codeigniter"
                      class="bg-white/10 text-gray-200 border border-white/20 text-xs"
                    />
                    <Chip
                      label="Slim Framework"
                      class="bg-white/10 text-gray-200 border border-white/20 text-xs"
                    />
                    <Chip
                      label="MySQL"
                      class="bg-white/10 text-gray-200 border border-white/20 text-xs"
                    />
                    <Chip
                      label="Medoo"
                      class="bg-white/10 text-gray-200 border border-white/20 text-xs"
                    />
                  </div>
                </div>

                <div>
                  <p class="text-gray-400 text-sm mb-3 font-semibold">Frontend</p>
                  <div class="flex flex-wrap gap-2">
                    <Chip
                      label="Vue.js"
                      class="bg-white/10 text-gray-200 border border-white/20 text-xs"
                    />
                    <Chip
                      label="JavaScript"
                      class="bg-white/10 text-gray-200 border border-white/20 text-xs"
                    />
                    <Chip
                      label="TypeScript"
                      class="bg-white/10 text-gray-200 border border-white/20 text-xs"
                    />
                    <Chip
                      label="Tailwind CSS"
                      class="bg-white/10 text-gray-200 border border-white/20 text-xs"
                    />
                    <Chip
                      label="Bootstrap"
                      class="bg-white/10 text-gray-200 border border-white/20 text-xs"
                    />
                    <Chip
                      label="Livewire"
                      class="bg-white/10 text-gray-200 border border-white/20 text-xs"
                    />
                    <Chip
                      label="jQuery"
                      class="bg-white/10 text-gray-200 border border-white/20 text-xs"
                    />
                  </div>
                </div>

                <div>
                  <p class="text-gray-400 text-sm mb-3 font-semibold">Tools & Others</p>
                  <div class="flex flex-wrap gap-2">
                    <Chip
                      label="Git"
                      class="bg-white/10 text-gray-200 border border-white/20 text-xs"
                    />
                    <Chip
                      label="GitHub"
                      class="bg-white/10 text-gray-200 border border-white/20 text-xs"
                    />
                    <Chip
                      label="GitLab"
                      class="bg-white/10 text-gray-200 border border-white/20 text-xs"
                    />
                    <Chip
                      label="Postman"
                      class="bg-white/10 text-gray-200 border border-white/20 text-xs"
                    />
                    <Chip
                      label="Notion"
                      class="bg-white/10 text-gray-200 border border-white/20 text-xs"
                    />
                    <Chip
                      label="Figma"
                      class="bg-white/10 text-gray-200 border border-white/20 text-xs"
                    />
                  </div>
                </div>
              </div>
            </div>
          </template>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const openLink = (url: string) => {
  window.open(url, '_blank')
}
</script>

<style scoped>
:deep(.p-card) {
  background: linear-gradient(
    to bottom right,
    rgba(31, 41, 55, 0.6),
    rgba(17, 24, 39, 0.4)
  ) !important;
}

:deep(.p-card-body) {
  background: transparent !important;
}

:deep(.p-card-content) {
  background: transparent !important;
}
</style>
