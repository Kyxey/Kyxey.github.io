type Education = {
  degree: string;
  field: string;
  institution: string;
  location: string;
  duration: string;
  grade: string;
};

const educationList: Education[] = [
  {
    degree: 'Master of Science (MSSE)',
    field: 'Software Engineering',
    institution: 'Islamic Azad University',
    location: 'Tehran, Iran',
    duration: 'October 2021 - August 2025 (3y 10m)',
    grade: '17.70 / 20.00',
  },
  {
    degree: 'Bachelor of Science (BSE)',
    field: 'Software Engineering',
    institution: 'Shamsipour Technical and Vocational College',
    location: 'Tehran, Iran',
    duration: 'January 2018 - July 2020 (2y 8m)',
    grade: '16.05 / 20.00',
  },
  {
    degree: 'Associate of Applied Science (AAS)',
    field: 'Information Technology',
    institution: 'Shamsipour Technical and Vocational College',
    location: 'Tehran, Iran',
    duration: 'September 2015 - January 2018 (2y 3m)',
    grade: '17.18 / 20.00',
  },
];

export { educationList, type Education };
