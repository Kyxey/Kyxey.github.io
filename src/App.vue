<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
    <header class="bg-white shadow-sm border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center py-6">
          <div class="flex items-center">
            <h1 class="text-2xl font-bold text-gray-900">Kyxey</h1>
          </div>
          <nav class="hidden md:flex space-x-8">
            <a
              v-for="item in navigationItems"
              :key="item.name"
              :href="item.href"
              class="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              {{ item.name }}
            </a>
          </nav>
        </div>
      </div>
    </header>

    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="text-center">
        <h2 class="text-4xl font-bold text-gray-900 mb-4">
          Welcome to My Website
        </h2>
        <p class="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          This is a modern Vue.js application built with TypeScript, Tailwind
          CSS, and strict development tools for the best development experience.
        </p>
        <div class="flex justify-center space-x-4">
          <button
            @click="incrementCounter"
            class="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
          >
            Count: {{ counter }}
          </button>
          <button
            @click="resetCounter"
            class="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
          >
            Reset
          </button>
        </div>
      </div>

      <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="feature in features"
          :key="feature.title"
          class="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
        >
          <div
            class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4"
          >
            <component :is="feature.icon" class="w-6 h-6 text-primary-600" />
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">
            {{ feature.title }}
          </h3>
          <p class="text-gray-600">{{ feature.description }}</p>
        </div>
      </div>
    </main>

    <footer class="bg-white border-t border-gray-200 mt-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="text-center text-gray-500">
          <p>&copy; 2024 Kyxey. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  // Reactive data
  const counter = ref<number>(0);

  // Navigation items
  const navigationItems = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Projects', href: '#' },
    { name: 'Contact', href: '#' },
  ] as const;

  // Feature cards
  const features = [
    {
      title: 'Vue.js 3',
      description:
        'Built with the latest Vue.js 3 Composition API for modern reactive applications.',
      icon: 'div', // Placeholder for icon component
    },
    {
      title: 'TypeScript',
      description:
        'Full TypeScript support with strict type checking for better development experience.',
      icon: 'div', // Placeholder for icon component
    },
    {
      title: 'Tailwind CSS',
      description:
        'Utility-first CSS framework for rapid UI development with custom design system.',
      icon: 'div', // Placeholder for icon component
    },
  ] as const;

  // Methods
  const incrementCounter = (): void => {
    counter.value++;
  };

  const resetCounter = (): void => {
    counter.value = 0;
  };
</script>
