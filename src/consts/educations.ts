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
    degree: "Master's Degree",
    field: 'Computer Software Engineering',
    institution: 'Islamic Azad University',
    location: 'Tehran, Iran',
    duration: 'October 2021 - August 2025',
    grade: '17.70 / 20.00',
  },
  {
    degree: "Bachelor's Degree",
    field: 'Computer Software Engineering',
    institution: 'Shamsipour Technical and Vocational College',
    location: 'Tehran, Iran',
    duration: 'January 2018 - July 2020',
    grade: '16.05 / 20.00',
  },
  {
    degree: "Associate's Degree",
    field: 'Information Technology',
    institution: 'Shamsipour Technical and Vocational College',
    location: 'Tehran, Iran',
    duration: 'September 2015 - January 2018',
    grade: '17.18 / 20.00',
  },
];

export { educationList, type Education };
