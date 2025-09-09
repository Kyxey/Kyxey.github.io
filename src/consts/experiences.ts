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
    title: 'Remote Software Engineer',
    company: 'Fakir Technology Consultants GmbH',
    location: 'Sulzbach, Germany',
    duration: 'January 2024 - Present',
    description:
      "Fakir Technology Consultants GmbH is a human-first software consultancy company which focuses on implementing values that make people's lives easier.",
    achievements: [
      'Utilized the power of JavaScript and TypeScript to help on the growth of a startup project.',
      'Worked with NX to make the cooperation of a React frontend and a NestJS backend easier.',
      'Accompanied an interesting, and fast-growing startup team on a remote-first manner.',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Specific-Group Austria',
    location: 'Vienna, Austria',
    duration: 'July 2022 - December 2023',
    description:
      'SPG provides software solutions and consulting services to multiple customers and companies across Austria.',
    achievements: [
      'Studied and utilized Elm programming language and Google Cloud Platform services on multiple B2B projects.',
      "Converted some web applications from React and some other frontend frameworks to Elm, as per the customer's request.",
      'Designed and implemented multiple backend and API services using NodeJS (TypeScript), Prisma (PostgreSQL), ExpressJS and OpenAPI (Swagger).',
    ],
  },
  {
    title: 'Freelance Remote Software Engineer',
    company: 'Self-Employed',
    location: 'Dubai, UAE',
    duration: 'October 2021 - May 2022',
    description: 'Focused on Web3 and blockchain development projects.',
    achievements: [
      'Built up noornft.io marketplace and bordo.network from zero (Both projects are currently offline).',
      'Constructed a Cardano-based NFT marketplace from scratch using JQuery, Bootstrap and Gulp.',
      'Learned about Web3 and NFTs by launching a generative Polygon-based NFT collection, made with NodeJS.',
    ],
  },
  {
    title: 'Remote Software Engineer',
    company: 'PRAGMIDEA LTD.',
    location: 'London, UK',
    duration: 'July 2020 - October 2021',
    description:
      'The company provides software solutions to the most demanding FinTech businesses around the world.',
    achievements: [
      'Worked as the full-stack software engineer on a couple of the busiest FinTech and trading platforms.',
      'Generated an average of 60% test code coverage across several applications using Cypress, Jest and React Testing Library.',
      'Created a few internal projects using NextJS, Tailwind CSS and NestJS.',
      'Accompanied the team in refactoring and reducing the bugs across all of our applications by more than 75%.',
      'Decreased the build size of a few of our applications by around 50%.',
    ],
  },
  {
    title: 'Freelance Software Engineer',
    company: 'Self-Employed',
    location: 'Tehran, Iran',
    duration: 'January 2018 - July 2020',
    description:
      'Developed various projects and contributed to open-source community.',
    achievements: [
      'Developed Delta Insta Telegram Bot, Chopen FE, Dextractor, Sixmim, Monaxon, and NajmX Crypto Wallet (currently offline).',
      'Experienced working with social media APIs. Generated a total of $2K ongoing profit for a small home business by creating a Telegram bot.',
      'Committed to the open-source society. Learned Javascript, Typescript, ReactJS, NodeJS, NestJS, Tailwind CSS, and other frameworks and libraries by building practical projects.',
    ],
  },
];

export { experiences, yearsExperience, type Experience };
