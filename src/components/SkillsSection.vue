<template>
  <section class="py-20 bg-white dark:bg-slate/10">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="section-title">Skills & Languages</h2>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <!-- Technical Skills -->
        <div class="lg:col-span-2">
          <h3 class="text-2xl font-bold text-navy dark:text-light mb-6">
            Technical Skills
          </h3>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div
              v-for="skill in technicalSkills"
              :key="skill.name"
              class="group relative"
            >
              <div
                class="card text-center p-4 hover:scale-105 transition-transform duration-300"
              >
                <component
                  v-if="skill.icon"
                  :is="skill.icon"
                  class="w-8 h-8 mx-auto mb-2 text-orange group-hover:scale-110 transition-transform duration-300"
                />
                <div
                  v-else
                  class="w-8 h-8 mx-auto mb-2 bg-orange rounded-lg flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform duration-300"
                >
                  {{ skill.name.charAt(0) }}
                </div>
                <div class="text-sm font-medium text-slate dark:text-light/90">
                  {{ skill.name }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Languages -->
        <div>
          <h3 class="text-2xl font-bold text-navy dark:text-light mb-6">
            Languages
          </h3>
          <div class="space-y-4">
            <div
              v-for="language in languages"
              :key="language.name"
              class="card p-4"
            >
              <div class="flex items-center justify-between mb-2">
                <span class="font-medium text-slate dark:text-light/90">{{
                  language.name
                }}</span>
                <span class="text-sm text-orange font-semibold">{{
                  language.level
                }}</span>
              </div>
              <div class="w-full bg-gray-200 dark:bg-slate/30 rounded-full h-2">
                <div
                  class="bg-gradient-to-r from-orange to-orange/50 h-2 rounded-full transition-all duration-1000 ease-out"
                  :style="{ width: language.percentage + '%' }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Skill Categories -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="category in skillCategories"
          :key="category.title"
          class="card text-center"
        >
          <component
            :is="category.icon"
            class="w-12 h-12 mx-auto mb-4 text-orange"
          />
          <h4 class="text-lg font-bold text-navy dark:text-light mb-3">
            {{ category.title }}
          </h4>
          <ul class="space-y-1">
            <li
              v-for="skill in category.skills"
              :key="skill"
              class="text-sm text-slate dark:text-light/80"
            >
              {{ skill }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import {
    technicalSkills,
    languages,
    skillCategories,
  } from '../consts/skills';
</script>
