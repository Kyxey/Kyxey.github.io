<template>
  <section class="py-20 bg-white dark:bg-slate/15">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="section-title">Experience</h2>

      <div class="relative">
        <!-- Timeline Line -->
        <div
          class="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-orange"
        ></div>

        <div class="space-y-12">
          <div
            v-for="(job, index) in experiences"
            :key="index"
            class="relative flex flex-col md:flex-row items-start"
          >
            <!-- Timeline Dot -->
            <div
              class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange rounded-full border-4 border-white dark:border-navy shadow-lg z-10"
            ></div>

            <!-- Content Card -->
            <div :class="['card ml-12 md:ml-0 flex-1']">
              <div
                class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4"
              >
                <h3 class="text-xl font-bold text-navy dark:text-light">
                  {{ job.title }}
                </h3>
                <span class="text-sm text-orange font-medium">{{
                  job.duration
                }}</span>
              </div>

              <div class="mb-4">
                <h4 class="text-lg font-semibold text-orange">
                  {{ job.company }}
                </h4>
                <p class="text-sm text-slate/70 dark:text-light/60">
                  {{ job.location }}
                </p>
              </div>

              <p class="text-slate dark:text-light/80 mb-4">
                {{ job.description }}
              </p>

              <ul class="space-y-2">
                <li
                  v-for="achievement in job.achievements"
                  :key="achievement"
                  class="flex items-start text-sm text-slate dark:text-light/80"
                >
                  <CheckIcon
                    class="w-4 h-4 text-orange mr-2 mt-0.5 flex-shrink-0"
                  />
                  {{ achievement }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { CheckIcon } from '@heroicons/vue/24/outline';
  import { experiences } from '../consts/experiences';
</script>
