<template>
  <div class="gap-6">
    <!-- Section Header -->
    <div class="flex items-center justify-between mb-6">
      <a
        target="_blank"
        rel="noopener noreferrer"
        :href="url"
        class="flex items-end space-x-2"
      >
        <component :is="platformIcon" class="w-12 h-12 text-orange" />
        <h3 class="text-2xl font-bold text-navy dark:text-light">
          {{ platformName }}
        </h3>
      </a>
    </div>

    <!-- Loading State -->
    <div v-if="loading && posts.length === 0" class="flex justify-center py-12">
      <div
        class="animate-spin rounded-full h-12 w-12 border-b-2 border-orange"
      ></div>
    </div>

    <!-- Error State -->
    <div
      v-else-if="error"
      class="text-center py-12 text-slate dark:text-light/70"
    >
      <p>{{ error }}</p>
    </div>

    <!-- Posts Slider -->
    <div v-else-if="posts.length > 0" class="relative">
      <div
        ref="sliderRef"
        class="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory scroll-smooth"
        style="scrollbar-width: none; -ms-overflow-style: none"
      >
        <PostCard
          v-for="post in posts"
          :key="post.id"
          :post="post"
          class="snap-start"
        />
        <!-- Load More Button -->
        <div v-if="hasMore" class="flex justify-center mt-auto mb-auto">
          <button
            @click="loadMore"
            :disabled="loading"
            class="btn btn-primary h-12 w-36 mr-10"
          >
            <span v-if="loading">Loading...</span>
            <span v-else>Load More</span>
          </button>
        </div>

        <!-- Shadow -->
        <div
          class="h-[95%] w-12 bg-gradient-to-r from-transparent to-black/15 absolute right-0"
        />
      </div>
    </div>

    <!-- Empty State -->
    <div v-else class="text-center py-12 text-slate dark:text-light/70">
      <p>No posts available yet.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, type Component } from 'vue';
  import PostCard from './PostCard.vue';
  import type { Post } from '@/types/blog';

  const props = defineProps<{
    platformName: string;
    platformIcon: Component;
    fetchFunction: (
      username: string,
      page: number
    ) => Promise<{ posts: Post[]; hasMore: boolean }>;
    username: string;
    url: string;
  }>();

  const posts = ref<Post[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);
  const hasMore = ref(false);
  const currentPage = ref(1);
  const sliderRef = ref<HTMLElement | null>(null);

  const loadPosts = async (page: number): Promise<void> => {
    loading.value = true;
    error.value = null;

    try {
      const response = await props.fetchFunction(props.username, page);

      if (page === 1) {
        posts.value = response.posts;
      } else {
        posts.value = [...posts.value, ...response.posts];
      }

      hasMore.value = response.hasMore;
    } catch (err) {
      error.value = `Failed to load ${props.platformName} posts. Please try again later.`;
      // eslint-disable-next-line no-console
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  const loadMore = (): void => {
    currentPage.value++;
    loadPosts(currentPage.value);
  };

  onMounted(() => {
    loadPosts(1);
  });
</script>

<style scoped>
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
</style>
