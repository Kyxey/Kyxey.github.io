<template>
  <section class="py-20 bg-light dark:bg-navy">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="section-title">Education</h2>

      <div class="space-y-8">
        <div
          v-for="(education, index) in educationList"
          :key="index"
          class="card"
        >
          <div
            class="flex flex-col md:flex-row md:items-center md:justify-between mb-4"
          >
            <div>
              <h3 class="text-xl font-bold text-navy dark:text-light mb-2">
                {{ education.degree }}
              </h3>
              <p class="text-slate dark:text-light/80">{{ education.field }}</p>
            </div>
            <div class="text-right mt-4 md:mt-0">
              <div class="text-slate dark:text-light font-semibold">
                {{ education.duration }}
              </div>
              <div class="text-sm text-slate dark:text-light/70">
                {{ education.institution }}
              </div>
              <div class="text-sm text-slate/70 dark:text-light/60">
                {{ education.location }}
              </div>
            </div>
          </div>

          <div
            class="flex items-center justify-between pt-4 border-t border-slate/20 dark:border-light/20"
          >
            <div class="flex items-center">
              <AcademicCapIcon class="w-5 h-5 text-orange mr-2" />
              <span class="text-sm text-slate dark:text-light/80">Grade</span>
            </div>
            <div class="text-lg font-bold text-orange">
              {{ education.grade }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { AcademicCapIcon } from '@heroicons/vue/24/outline';
  import { educationList } from '../consts/educations';
</script>
