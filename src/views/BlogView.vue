<template>
  <section class="py-20 bg-light dark:bg-navy">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="section-title">Blog & Articles</h2>

      <div class="text-center mb-12">
        <p class="text-lg text-slate dark:text-light/80 max-w-2xl mx-auto">
          Explore my latest posts across different platforms.
        </p>
      </div>

      <!-- Blog Sections -->
      <div class="space-y-16">
        <!-- Medium Section -->
        <BlogSection
          platform="medium"
          platform-name="Medium"
          :platform-icon="MediumIcon"
          :fetch-function="fetchMediumPosts"
          :username="mediumUsername"
          :url="mediumURL"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import BlogSection from '../components/BlogSection.vue';
  import { fetchMediumPosts } from '../services/blogService';
  import { socialLinks } from '@/consts/contacts';

  // Platform icons
  import { MediumIcon } from 'vue3-simple-icons';

  // Social media usernames from config
  const mediumUsername =
    socialLinks.find(sL => sL.name === 'Medium')?.handle ?? '';

  // Social media URLs from config
  const mediumURL = socialLinks.find(sL => sL.name === 'Medium')?.url ?? '';
</script>
