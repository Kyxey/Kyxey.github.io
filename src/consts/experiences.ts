type Experience = {
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  achievements: string[];
};

const yearStarted = 2018;
const yearsExperience = new Date().getFullYear() - yearStarted;

const experiences: Experience[] = [
  {
    title: 'Software Engineer',
    company: 'Fakir Technology Consultants GmbH',
    location: 'Sulzbach, Germany (Remote)',
    duration: 'January 2024 - Present',
    description:
      'A consultancy company specializing in creation of high-quality software solutions across various industries.',
    achievements: [
      'Spearheaded architectural and performance improvements, reducing bundle size by 12% and boosting development efficiency by 30%.',
      'Delivered 100+ features with zero critical bugs, contributing to a 25% user growth and enhancing satisfaction for 5,000+ users in Germany.',
      'Led and mentored a small team to optimize workflows, improve communication, and drive consistent, high-quality project outcomes.',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Specific-Group Austria',
    location: 'Vienna, Austria (Remote)',
    duration: 'July 2022 - December 2023 (1y 6m)',
    description:
      'SPG provides software solutions and consulting services to multiple customers and companies across Austria.',
    achievements: [
      'Reverse-engineered and redeveloped a complex web application using new tools, achieving high client satisfaction.',
      'Delivered fast-paced, cross-functional projects on time through strong collaboration across frontend and backend teams in a multicultural environment.',
      'Combined technical expertise with effective communication to maintain and scale multiple production-grade applications.',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Freelance',
    location: 'Dubai, UAE (Remote)',
    duration: 'October 2021 - May 2022 (7m)',
    description: 'Focused on Web3 and blockchain development projects.',
    achievements: [
      'Developed and deployed a scalable NFT marketplace from the ground up, ensuring seamless performance and usability.',
      'Gained hands-on experience in Web3 and blockchain ecosystems by creating and launching a generative NFT collection.',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'PRAGMIDEA LTD.',
    location: 'London, UK (Remote)',
    duration: 'July 2020 - October 2021 (1y 4m)',
    description:
      'A team of IT consultants with experience in implementing B2B and B2C projects worked in an Agile environment, with a strong focus on continuous delivery.',
    achievements: [
      'Engineered and maintained high-traffic FinTech and trading platforms, improving stability and performance.',
      'Boosted code quality through comprehensive testing and refactoring, reducing bugs by over 75%.',
      'Optimized build efficiency, cutting application sizes by up to 50% and enhancing overall delivery speed.',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Freelance',
    location: 'Tehran, Iran (Hybrid)',
    duration: 'January 2018 - July 2020 (2y 6m)',
    description:
      'Developed various projects as a freelancer that helped small businesses, while learning the technologies.',
    achievements: [
      'Developed automated solutions leveraging social media integrations, including a bot that generated $2K in recurring profit for a small business.',
      'Contributed to open-source projects and built practical applications to strengthen full-stack development expertise.',
      'Continuously expanded technical proficiency through hands-on projects, emphasizing scalable and maintainable software design.',
    ],
  },
];

export { experiences, yearsExperience, type Experience };
