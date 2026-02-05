<template>
  <div class="min-h-screen transition-colors duration-300">
    <!-- Navigation Header -->
    <AppHeader
      :navigation-items="navigationItems"
      :active-section="activeSection"
      @navigate="handleNavigation"
    />

    <!-- Main Content -->
    <main>
      <!-- Hero Section -->
      <HeroSection id="hero" />

      <!-- Summary Section -->
      <SummarySection id="summary" />

      <!-- Experience Section -->
      <ExperienceSection id="experience" />

      <!-- Education Section -->
      <EducationSection id="education" />

      <!-- Skills Section -->
      <SkillsSection id="skills" />

      <!-- Certifications Section -->
      <CertificationsSection id="certifications" />

      <!-- Contact Section -->
      <ContactSection id="contact" />
    </main>

    <!-- Footer -->
    <AppFooter />

    <!-- Scroll to Top Button -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 scale-75"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-75"
    >
      <button
        v-if="showScrollToTop"
        @click="scrollToTop"
        class="fixed bottom-8 right-8 z-40 p-3 bg-orange hover:bg-orange/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        title="Scroll to top"
      >
        <ChevronUpIcon class="w-6 h-6" />
      </button>
    </Transition>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue';
  import { useRouter, useRoute } from 'vue-router';
  import { ChevronUpIcon } from '@heroicons/vue/24/outline';
  import AppHeader from '../components/AppHeader.vue';
  import AppFooter from '../components/AppFooter.vue';
  import HeroSection from '../components/HeroSection.vue';
  import SummarySection from '../components/SummarySection.vue';
  import ExperienceSection from '../components/ExperienceSection.vue';
  import EducationSection from '../components/EducationSection.vue';
  import SkillsSection from '../components/SkillsSection.vue';
  import CertificationsSection from '../components/CertificationsSection.vue';
  import ContactSection from '../components/ContactSection.vue';

  const router = useRouter();
  const route = useRoute();

  // Navigation items
  const navigationItems: { name: string; id: string }[] = [
    { name: 'Home', id: 'hero' },
    { name: 'Summary', id: 'summary' },
    { name: 'Experience', id: 'experience' },
    { name: 'Education', id: 'education' },
    { name: 'Skills', id: 'skills' },
    { name: 'Certifications', id: 'certifications' },
    { name: 'Contact', id: 'contact' },
    { name: 'Blog', id: 'blog' },
  ];

  // Active section tracking
  const activeSection = ref<string>('hero');

  // Scroll to top button visibility
  const showScrollToTop = ref<boolean>(false);

  // Handle navigation
  const handleNavigation = (sectionId: string): void => {
    if (sectionId === 'blog') {
      router.push('/blog');
    } else {
      scrollToSection(sectionId);
    }
  };

  // Smooth scroll to section
  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Account for fixed header
      const elementPosition = element.offsetTop - headerHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };

  // Scroll to top function
  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Track active section on scroll
  const handleScroll = (): void => {
    const sections = navigationItems
      .filter(item => item.id !== 'blog')
      .map(item => item.id);
    const scrollPosition = window.scrollY + 100; // Offset for header

    // Show scroll to top button when user scrolls past hero section
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      showScrollToTop.value = window.scrollY > heroSection.offsetHeight;
    }

    for (let i = sections.length - 1; i >= 0; i--) {
      const sectionId = sections[i];
      if (sectionId) {
        const section = document.getElementById(sectionId);
        if (section && section.offsetTop <= scrollPosition) {
          activeSection.value = sectionId;
          break;
        }
      }
    }
  };

  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    // Handle hash navigation
    if (route.hash) {
      const sectionId = route.hash.substring(1);
      setTimeout(() => scrollToSection(sectionId), 100);
    }
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });
</script>
