<template>
  <section
    class="min-h-screen flex items-center justify-center bg-gradient-primary relative overflow-hidden"
  >
    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
    >
      <div class="animate-fade-in">
        <!-- Profile Image -->
        <div class="mb-8">
          <img
            src="https://gravatar.com/avatar/801a1a0819b49baab04814d4e0bcd5e0efd46c7c2758cdc2d98007b16870ed69.jpg?size=512"
            alt="Ali Azizjahan (Kyxey)"
            class="w-48 h-48 md:w-52 md:h-52 rounded-full mx-auto shadow-2xl border-2 border-orange animate-slide-up"
            loading="eager"
          />
        </div>

        <!-- Name and Title -->
        <h1
          class="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 animate-slide-up"
        >
          Ali Azizjahan
          <span
            class="block text-2xl md:text-3xl lg:text-4xl text-orange font-medium mt-2"
          >
            (Kyxey)
          </span>
        </h1>

        <p
          class="text-xl md:text-2xl text-light/90 mb-8 max-w-xl mx-auto animate-slide-up"
        >
          Software Engineer with {{ yearsExperience }}+ years of industry-proven
          work experience
        </p>

        <!-- CTA Buttons -->
        <div
          class="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up"
        >
          <button @click="scrollToContact" class="btn btn-primary">
            <EnvelopeIcon class="w-5 h-5 mr-2" />
            Get In Touch
          </button>
          <a
            href="/Resume-Ali-Azizjahan.pdf"
            target="_blank"
            class="btn btn-secondary"
          >
            <DocumentArrowDownIcon class="w-5 h-5 mr-2" />
            Download Resume
          </a>
        </div>
      </div>
    </div>
    <!-- Scroll Indicator -->
    <a href="#summary">
      <div
        class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDownIcon class="w-6 h-6 text-light/70 -mb-4" />
        <ChevronDownIcon class="w-6 h-6 text-light/70 -mb-4" />
        <ChevronDownIcon class="w-6 h-6 text-light/70" />
      </div>
    </a>
  </section>
</template>

<script setup lang="ts">
  import {
    EnvelopeIcon,
    DocumentArrowDownIcon,
    ChevronDownIcon,
  } from '@heroicons/vue/24/outline';
  import { yearsExperience } from '../consts/experiences';

  const scrollToContact = (): void => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const headerHeight = 80;
      const elementPosition = contactSection.offsetTop - headerHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };
</script>
