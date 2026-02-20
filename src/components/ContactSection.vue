<template>
  <section class="py-20 bg-white dark:bg-slate/10">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="section-title">Contact</h2>

      <div class="text-center mb-12">
        <p class="text-lg text-slate dark:text-light/80 max-w-2xl mx-auto">
          I'm always interested in new opportunities and exciting experiences.
          Let's connect and discuss how we can make the next big thing!
        </p>
      </div>

      <div class="grid grid-cols-1 gap-8">
        <div
          class="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div
            v-for="contact in contactMethods"
            :key="contact.type"
            class="card hover:scale-105 group transition-transform duration-300 w-full"
          >
            <div class="flex items-start">
              <div
                class="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center mr-4"
              >
                <component :is="contact.icon" class="w-6 h-6 text-orange" />
              </div>
              <div class="flex-1">
                <h3 class="font-semibold text-navy dark:text-light mb-1">
                  {{ contact.type }}
                </h3>
                <a
                  v-for="item in contact.items"
                  :key="item.value"
                  :href="item.href"
                  :target="item.external ? '_blank' : ''"
                  :rel="item.external ? 'noopener noreferrer' : ''"
                  class="block text-slate dark:text-light/80 hover:text-orange dark:hover:text-light transition-colors duration-300"
                >
                  <div class="flex items-center">
                    {{ item.value }}
                    <ArrowTopRightOnSquareIcon
                      v-if="item.external"
                      class="w-4 h-4 ml-1"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Social Links -->
        <div class="card">
          <h3
            class="text-xl font-bold text-navy dark:text-light mb-6 text-center"
          >
            Connect With Me
          </h3>

          <div class="grid grid-cols-2 gap-4">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center p-4 rounded-lg bg-slate/5 dark:bg-light/5 hover:bg-orange/10 dark:hover:bg-orange/10 transition-colors duration-300 group"
            >
              <component
                v-if="social.icon"
                :is="social.icon"
                class="w-8 h-8 rounded-lg flex items-center justify-center mr-3 text-orange fill-current font-bold text-sm"
              />

              <div>
                <div
                  class="font-medium text-navy dark:text-light group-hover:text-orange"
                >
                  {{ social.name }}
                </div>
                <div class="text-sm text-slate/70 dark:text-light/60">
                  {{ social.handle }}
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline';
  import { contactMethods, socialLinks } from '@/consts/contacts';
</script>
