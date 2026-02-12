<template>
  <div
    class="min-h-screen transition-colors duration-300 flex flex-col justify-between bg-white dark:bg-slate/15"
  >
    <AppHeader :active-section="'blog'" @navigate="handleNavigation" />

    <main class="pt-24 pb-20 bg-transparent">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Page Header -->
        <div class="text-center mb-16">
          <h1 class="section-title">Blog & Articles</h1>
          <p class="text-lg text-slate dark:text-light/80 max-w-2xl mx-auto">
            Explore my latest posts across different platforms
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
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router';
  import AppHeader from '../components/AppHeader.vue';
  import AppFooter from '../components/AppFooter.vue';
  import BlogSection from '../components/BlogSection.vue';
  import { fetchMediumPosts } from '../services/blogService';
  import { socialLinks } from '@/consts/contacts';

  // Platform icons
  import { MediumIcon } from 'vue3-simple-icons';

  const router = useRouter();

  // Social media usernames from config
  const mediumUsername =
    socialLinks.find(sL => sL.name === 'Medium')?.handle ?? '';

  // Social media URLs from config
  const mediumURL = socialLinks.find(sL => sL.name === 'Medium')?.url ?? '';

  const handleNavigation = (sectionId: string): void => {
    if (sectionId === 'blog') {
      // Already on blog page, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Navigate to home page with hash
      router.push({ path: '/', hash: `#${sectionId}` });
    }
  };
</script>
