<template>
  <Card
    class="md:col-span-3 bg-linear-to-br from-gray-800/60 to-gray-900/40 backdrop-blur-md border border-white/10 hover:border-white/20 transition"
  >
    <template #content>
      <div class="space-y-5">
        <!-- Social Links & Status -->
        <div class="flex items-center justify-between gap-4 flex-wrap">
          <div class="flex items-center gap-4 flex-wrap">
            <Chip
              label="Github"
              class="bg-white/10 text-gray-200 border border-white/20 font-semibold text-sm cursor-pointer hover:bg-white/20 transition"
              @click="openLink('https://github.com/damaskus92')"
            >
              <template #icon>
                <i class="pi pi-github text-gray-200" />
              </template>
            </Chip>

            <Chip
              label="LinkedIn"
              class="bg-white/10 text-gray-200 border border-white/20 font-semibold text-sm cursor-pointer hover:bg-white/20 transition"
              @click="openLink('https://linkedin.com/in/damaskus92')"
            >
              <template #icon>
                <i class="pi pi-linkedin text-gray-200" />
              </template>
            </Chip>

            <Chip
              v-if="isOpenWork"
              label="Available for Work"
              class="bg-emerald-600/10 text-emerald-500 border border-emerald-600/20 font-semibold text-sm"
            />
          </div>

          <!-- Download CV Button -->
          <Button
            v-if="isOpenWork"
            label="Download CV"
            icon="pi pi-download"
            outlined
            size="small"
            class="bg-white/10 hover:bg-white/20 text-gray-200 border border-white/20 font-semibold"
            @click="downloadCV"
          />
        </div>

        <!-- Name -->
        <h1 class="text-4xl md:text-5xl font-bold text-white tracking-tight">Damas Eka Kusuma</h1>

        <!-- Bio -->
        <p class="text-gray-400 leading-relaxed">
          Over 5 years of experience in end-to-end web application development with deep expertise
          in Backend and Frontend development. Focused on building scalable system architecture,
          writing clean code, and implementing data security to deliver robust and maintainable
          digital solutions in dynamic work environments.
        </p>

        <!-- Info Tags -->
        <div class="flex flex-wrap gap-3 pt-4">
          <Tag severity="secondary" class="bg-white/10 text-gray-300 border border-white/20">
            <template #icon>
              <i class="pi pi-map-marker mr-1" />
            </template>
            Karanganyar, Central Java
          </Tag>

          <Tag severity="secondary" class="bg-white/10 text-gray-300 border border-white/20">
            <template #icon>
              <i class="pi pi-graduation-cap mr-1" />
            </template>
            Bachelor of Engineering in Informatics
          </Tag>

          <Tag severity="secondary" class="bg-white/10 text-gray-300 border border-white/20">
            <template #icon>
              <i class="pi pi-briefcase mr-1" />
            </template>
            Full-Stack Developer
          </Tag>

          <Tag severity="secondary" class="bg-white/10 text-gray-300 border border-white/20">
            <template #icon>
              <i class="pi pi-language mr-1" />
            </template>
            Indonesian
          </Tag>
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
defineProps<{
  isOpenWork: boolean
}>()

const CV_GOOGLE_DRIVE_ID = '13iKIQp8DlrHrvGG6lYHVARZeZP5hsBys'

const openLink = (url: string) => {
  window.open(url, '_blank')
}

const downloadCV = () => {
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${CV_GOOGLE_DRIVE_ID}`
  window.open(downloadUrl, '_blank')
}
</script>
