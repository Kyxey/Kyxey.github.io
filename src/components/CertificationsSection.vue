<template>
  <section class="py-20 bg-light dark:bg-navy">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="section-title">Certifications</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(cert, index) in certifications"
          :key="index"
          class="card group hover:scale-105 transition-transform duration-300 flex flex-col justify-between gap-2"
        >
          <div class="flex items-start h-20">
            <div
              class="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center mr-4"
            >
              <ShieldCheckIcon class="w-6 h-6 text-orange" />
            </div>
            <div class="flex-1">
              <h3
                class="font-bold text-navy dark:text-light text-sm leading-tight"
              >
                {{ cert.title }}
              </h3>
              <a
                :href="cert.provider.url"
                target="_blank"
                rel="noopener noreferrer"
                class="text-xs text-slate dark:text-light/70 mt-1 underline"
              >
                {{ cert.provider.name }}
              </a>
            </div>
          </div>

          <p class="text-sm text-slate dark:text-light/80 mb-4">
            {{ cert.description }}
          </p>

          <a
            :href="cert.link"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center text-orange hover:text-orange/80 font-medium text-sm transition-colors duration-300"
          >
            View Certificate
            <ArrowTopRightOnSquareIcon class="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import {
    ShieldCheckIcon,
    ArrowTopRightOnSquareIcon,
  } from '@heroicons/vue/24/outline';
  import { certifications } from '../consts/certifications';
</script>
