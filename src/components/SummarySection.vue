<template>
  <section class="py-20 bg-light dark:bg-navy">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="section-title">Summary</h2>

      <div class="card max-w-4xl mx-auto text-center">
        <div class="prose prose-lg mx-auto dark:prose-invert">
          <p class="text-lg leading-relaxed text-slate dark:text-light/90">
            {{ summary }}
          </p>
        </div>

        <!-- Quick Stats -->
        <div
          class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-slate/20 dark:border-light/20"
        >
          <div class="text-center">
            <div class="text-3xl font-bold text-orange mb-2">
              {{ yearsExperience }}+
            </div>
            <div class="text-sm text-slate dark:text-light/70">
              Years Experience
            </div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-orange mb-2">
              {{ experiences.length }}
            </div>
            <div class="text-sm text-slate dark:text-light/70">Companies</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-orange mb-2">
              {{ totalSkills - (totalSkills % 10) }}+
            </div>
            <div class="text-sm text-slate dark:text-light/70">
              Technologies
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { experiences, yearsExperience } from '@/consts/experiences';
  import { summary } from '@/consts/summary';
  import { technicalSkills, languages } from '@/consts/skills';

  const totalSkills = technicalSkills.length + languages.length;
</script>
