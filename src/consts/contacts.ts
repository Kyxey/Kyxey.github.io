import { EnvelopeIcon, PhoneIcon } from '@heroicons/vue/24/outline';
import {
  GitHubIcon,
  MediumIcon,
  GitLabIcon,
  WhatsAppIcon,
  TelegramIcon,
} from 'vue3-simple-icons';
import LinkedinIcon from '@/components/assets/img/linkedin-icon.svg';
import type { Component } from 'vue';

type ContactMethod = {
  type: string;
  icon: Component;
  items: {
    value: string;
    href: string;
    external?: boolean;
  }[];
};

type SocialLink = {
  name: string;
  handle: string;
  url: string;
  icon: Component | string;
};

const contactMethods: ContactMethod[] = [
  {
    type: 'Email',
    icon: EnvelopeIcon,
    items: [
      {
        value: 'aliazizjahan@gmail.com',
        href: 'mailto:aliazizjahan@gmail.com',
      },
      {
        value: 'maniazizjahan@gmail.com',
        href: 'mailto:maniazizjahan@gmail.com',
      },
      {
        value: 'kyxey.com@gmail.com',
        href: 'mailto:kyxey.com@gmail.com',
      },
    ],
  },
  {
    type: 'Phone',
    icon: PhoneIcon,
    items: [
      { value: '+98-912-055-0508', href: 'tel:+989120550508' },
      {
        value: 'WhatsApp',
        href: 'https://wa.me/989120550508',
        external: true,
      },
      {
        value: 'Telegram',
        href: 'https://t.me/+989120550508',
        external: true,
      },
    ],
  },
];

const socialLinks: SocialLink[] = [
  {
    name: 'Telegram',
    handle: '@kyxey',
    url: 'https://t.me/+989120550508',
    icon: TelegramIcon,
  },
  {
    name: 'WhatsApp',
    handle: '+98-912-055-0508',
    url: 'https://wa.me/989120550508',
    icon: WhatsAppIcon,
  },
  {
    name: 'GitHub',
    handle: '@kyxey',
    url: 'https://www.github.com/kyxey',
    icon: GitHubIcon,
  },
  {
    name: 'GitLab',
    handle: '@kyxey',
    url: 'https://www.gitlab.com/kyxey',
    icon: GitLabIcon,
  },
  {
    name: 'LinkedIn',
    handle: '@kyxey',
    url: 'https://www.linkedin.com/in/kyxey',
    icon: LinkedinIcon,
  },
  {
    name: 'Medium',
    handle: '@kyxey',
    url: 'https://kyxey.medium.com',
    icon: MediumIcon,
  },
];

export { contactMethods, socialLinks, type ContactMethod, type SocialLink };
