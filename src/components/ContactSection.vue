<template>
  <section id="contact" class="py-20 px-4">
    <div class="max-w-3xl mx-auto">
      <h2 class="text-4xl font-bold text-white mb-12 text-center">Get In Touch</h2>
      <Card class="bg-gray-800/50 border border-gray-700/50">
        <template #content>
          <div class="space-y-6">
            <div class="grid md:grid-cols-2 gap-4">
              <div class="space-y-2">
                <label class="text-white">Name</label>
                <InputText
                  placeholder="Your name"
                  class="w-full bg-gray-700/50 border-gray-600/50 text-white"
                />
              </div>
              <div class="space-y-2">
                <label class="text-white">Email</label>
                <InputText
                  placeholder="your@email.com"
                  class="w-full bg-gray-700/50 border-gray-600/50 text-white"
                />
              </div>
            </div>
            <div class="space-y-2">
              <label class="text-white">Message</label>
              <Textarea
                placeholder="Your message..."
                rows="5"
                class="w-full bg-gray-700/50 border-gray-600/50 text-white"
              />
            </div>
            <Button
              label="Send Message"
              icon="pi pi-send"
              class="w-full bg-gray-700 border-gray-700 hover:bg-gray-600"
            />
          </div>
        </template>
      </Card>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped></style>
