<template>
  <div
    class="min-w-full max-w-full overflow-hidden mx-auto bg-white flex flex-col p-6 gap-3 min-h-screen"
  >
    <!-- Name and title -->
    <div>
      <h1 class="font-bold text-4xl">Ali Azizjahan</h1>
      <p class="font-semibold text-sm text-slate">Software Engineer</p>
    </div>

    <!-- Contact info -->
    <div class="flex">
      <div v-for="contactMethod in contactMethods" :key="contactMethod.type">
        <a
          target="_blank"
          :href="contactMethod.items[0]?.href ?? ''"
          class="flex items-center justify-between gap-1 mr-3"
        >
          {{ contactMethod.items[0]?.value }} |
        </a>
      </div>
      <div>
        <a
          target="_blank"
          :href="linkedinSocial?.url ?? ''"
          class="flex items-center justify-between gap-1 mr-3"
        >
          {{ linkedinSocial?.friendlyURL }} |
        </a>
      </div>
      <div>
        <a
          target="_blank"
          :href="portfolio.url"
          class="flex items-center justify-between gap-1 mr-3"
        >
          {{ portfolio.friendlyURL }}
        </a>
      </div>
    </div>

    <div class="flex flex-col py-3 gap-4">
      <!-- Summary -->
      <section>
        <h3 :class="styles.sectionTitle">SUMMARY</h3>
        <p class="leading-tight">{{ summary }}</p>
      </section>

      <!-- Skills -->
      <section>
        <h3 :class="styles.sectionTitle">SKILLS</h3>
        <div>
          <span
            v-for="technicalSkill in technicalSkills"
            :key="technicalSkill.name"
            class="leading-loose mr-1 mb-1 px-1 rounded border inline-block"
          >
            {{ technicalSkill.name }}
          </span>
        </div>
      </section>

      <!-- Experiences -->
      <section>
        <h3 :class="styles.sectionTitle">EXPERIENCES</h3>
        <div
          class="flex flex-col mb-3 leading-tight"
          v-for="experience in experiences"
          :key="experience.company"
        >
          <p class="flex justify-between">
            <span>
              <b>{{ experience.company }}</b> - {{ experience.location }}
            </span>
            <span class="text-slate text-sm">{{ experience.duration }}</span>
          </p>
          <p class="text-sm text-slate">
            {{ experience.title }}
          </p>

          <p class="mb-1">{{ experience.description }}</p>
          <p v-for="achievement in experience.achievements" :key="achievement">
            • {{ achievement }}
          </p>
        </div>
      </section>

      <!-- Educations -->
      <section>
        <h3 :class="styles.sectionTitle">EDUCATIONS</h3>
        <div
          v-for="education in educationList"
          class="mb-3 leading-tight"
          :key="education.degree"
        >
          <p>
            <b>{{ education.degree }}</b> in {{ education.field }} (GPA:
            {{ education.grade }})
          </p>
          <p class="flex justify-between text-sm text-slate">
            <span>{{ education.institution }} - {{ education.location }}</span>
            <span>{{ education.duration }}</span>
          </p>
        </div>
      </section>

      <!-- Languages -->
      <section>
        <h3 :class="styles.sectionTitle">LANGUAGES</h3>
        <div class="flex justify-between">
          <div v-for="language in languages" :key="language.name">
            <span>{{ language.name }}</span>
            <span class="text-sm text-slate"> ({{ language.level }})</span>
          </div>
        </div>
      </section>

      <!-- Certificates -->
      <section>
        <h3 :class="styles.sectionTitle">CERTIFICATES</h3>
        <div
          v-for="certificate in certifications"
          class="flex justify-between"
          :key="certificate.title"
        >
          <a :href="certificate.link">{{ certificate.title }}</a>
          <a
            target="_blank"
            :href="certificate.provider.url"
            class="text-sm text-slate"
            >{{ certificate.provider.name }}</a
          >
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { contactMethods, socialLinks, portfolio } from '@/consts/contacts';
  import { summary } from '@/consts/summary';
  import { technicalSkills, languages } from '@/consts/skills';
  import { experiences } from '@/consts/experiences';
  import { educationList } from '@/consts/educations';
  import { certifications } from '@/consts/certifications';

  const linkedinSocial = socialLinks.find(sL => sL.name === 'LinkedIn');

  const styles = {
    sectionTitle: 'font-bold text-navy border-b border-b-2 mb-1 text-lg',
  };
</script>
