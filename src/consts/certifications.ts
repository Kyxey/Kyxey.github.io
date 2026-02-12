type Certification = {
  title: string;
  provider: {
    name: string;
    url: string;
  };
  description: string;
  link: string;
};

const certifications: Certification[] = [
  {
    title: 'The Complete Cyber Security Course - Volume 1',
    provider: {
      name: 'StationX',
      url: 'https://stationx.net',
    },
    description:
      'Hackers Exposed - Comprehensive cybersecurity fundamentals and threat analysis.',
    link: 'https://docs.google.com/feeds/download/presentations/Export?id=11zXvG8LhcGnGnd-NtbhYer8pbHzMF3mrQdm-qQwRm6Y&exportFormat=pdf',
  },
  {
    title: 'The Complete Cyber Security Course - Volume 2',
    provider: {
      name: 'StationX',
      url: 'https://stationx.net',
    },
    description:
      'Network Security - Advanced network protection and security protocols.',
    link: 'https://docs.google.com/feeds/download/presentations/Export?id=1GPiGe-wF1wxjEpkMoiLzHLEKLPqQ7zghgdMLVNg0T6Y&exportFormat=pdf',
  },
  {
    title: 'The Complete Cyber Security Course - Volume 3',
    provider: {
      name: 'StationX',
      url: 'https://stationx.net',
    },
    description:
      'Anonymous Browsing - Privacy protection and secure browsing techniques.',
    link: 'https://docs.google.com/feeds/download/presentations/Export?id=17cG0aVCpImo7OXGPPgybaxFbaGoZVSryZTGeJc_b0xA&exportFormat=pdf',
  },
  {
    title: 'Foundation - Introduction to LangChain - Python',
    provider: {
      name: 'LangChain',
      url: 'https://langchain.com',
    },
    description:
      'Building AI Agents - Quick start using pre-built architectures and model integrations.',
    link: 'https://academy.langchain.com/certificates/plx9ngbozf',
  },
];

export { certifications, type Certification };
