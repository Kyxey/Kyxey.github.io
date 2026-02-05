<template>
  <a
    :href="post.url"
    target="_blank"
    rel="noopener noreferrer"
    class="card block group w-[300px] flex-shrink-0"
  >
    <!-- Image/Video Section -->
    <div
      class="relative w-full h-48 bg-slate/10 dark:bg-slate/30 rounded-lg overflow-hidden mb-4"
    >
      <img
        v-if="post.imageUrl"
        :src="post.imageUrl"
        :alt="post.title"
        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        @error="handleImageError"
      />
      <div
        v-else
        class="w-full h-full flex items-center justify-center text-slate/50 dark:text-light/30"
      >
        <DocumentTextIcon class="w-16 h-16" />
      </div>

      <!-- Platform Badge -->
      <div
        class="absolute top-2 right-2 px-3 py-1 rounded-full text-xs font-semibold uppercase backdrop-blur-sm"
        :class="platformBadgeClass"
      >
        {{ post.platform }}
      </div>
    </div>

    <!-- Content Section -->
    <div class="space-y-3">
      <!-- Date -->
      <div class="flex items-center text-sm text-slate/70 dark:text-light/60">
        <CalendarIcon class="w-4 h-4 mr-2" />
        {{ formattedDate }}
      </div>

      <!-- Title -->
      <h3
        class="text-lg font-bold text-navy dark:text-light line-clamp-2 group-hover:text-orange transition-colors duration-300"
      >
        {{ post.title }}
      </h3>

      <!-- Excerpt -->
      <p class="text-sm text-slate dark:text-light/80 line-clamp-3">
        {{ post.excerpt }}
      </p>

      <!-- Read More Link -->
      <div
        class="flex items-center text-orange font-medium text-sm group-hover:translate-x-1 transition-transform duration-300"
      >
        Read more
        <ArrowRightIcon class="w-4 h-4 ml-1" />
      </div>
    </div>
  </a>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import {
    CalendarIcon,
    ArrowRightIcon,
    DocumentTextIcon,
  } from '@heroicons/vue/24/outline';
  import type { Post } from '../types/blog';

  const props = defineProps<{
    post: Post;
  }>();

  const formattedDate = computed(() => {
    const date = new Date(props.post.publishedAt);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  });

  const platformBadgeClass = computed(() => {
    switch (props.post.platform) {
      case 'medium':
        return 'bg-black/80 text-white';
      case 'linkedin':
        return 'bg-[#0077B5]/80 text-white';
      case 'x':
        return 'bg-black/80 text-white';
      default:
        return 'bg-slate/80 text-white';
    }
  });

  const handleImageError = (event: Event): void => {
    const target = event.target as HTMLImageElement;
    target.style.display = 'none';
  };
</script>
