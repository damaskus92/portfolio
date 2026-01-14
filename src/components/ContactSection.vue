<template>
  <section id="contact" class="py-30 px-4 relative">
    <div class="max-w-3xl mx-auto">
      <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-16 text-center">Get In Touch</h2>

      <Card
        class="bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition"
      >
        <template #content>
          <div class="space-y-6">
            <div class="grid md:grid-cols-2 gap-4">
              <div class="space-y-2">
                <label class="text-gray-300 text-sm">Name</label>
                <InputText
                  placeholder="Your name"
                  class="w-full bg-black/30 border border-white/10 text-white placeholder-gray-500 focus:border-white/30"
                />
              </div>

              <div class="space-y-2">
                <label class="text-gray-300 text-sm">Email</label>
                <InputText
                  placeholder="your@email.com"
                  class="w-full bg-black/30 border border-white/10 text-white placeholder-gray-500 focus:border-white/30"
                />
              </div>
            </div>

            <div class="space-y-2">
              <label class="text-gray-300 text-sm">Message</label>
              <Textarea
                placeholder="Your message..."
                rows="5"
                class="w-full bg-black/30 border border-white/10 text-white placeholder-gray-500 focus:border-white/30"
              />
            </div>

            <Button
              label="Send Message"
              icon="pi pi-send"
              class="w-full bg-white text-black border-white hover:bg-gray-200 transition"
            />
          </div>
        </template>
      </Card>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
:deep(.p-inputtext:focus),
:deep(.p-textarea:focus) {
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.2);
}
</style>
