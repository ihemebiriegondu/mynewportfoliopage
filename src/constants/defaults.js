import HeaderImg from '../assests/HeaderImg.jpg';
import IhemebiriEgonduCV from '../assests/Egonduihemebiri.pdf';

export const DEFAULT_SOCIAL_LINKS = [
  { platform: 'github', url: 'https://github.com/ihemebiriegondu' },
  { platform: 'linkedin', url: 'https://www.linkedin.com/in/ihemebiri-egondu-b86b45237' },
  { platform: 'twitter', url: 'https://twitter.com/egondu_i?s=09' },
  { platform: 'facebook', url: 'https://web.facebook.com/ihemebiriblessing.oluwafunkeegondu.3' },
];

export const DEFAULT_HOME = {
  name: 'Egondu Ihemebiri',
  jobTitle: 'Frontend Developer',
  description:
    'I build websites because it feels like magic. Type some code, refresh, and suddenly there’s something new. I’m always chasing that little spark when an idea clicks. Sometimes I work solo, sometimes with a team, but it’s always about creating something that wasn’t there yesterday.',
  heroImage: HeaderImg,
  hireMeLink: 'https://www.fiverr.com/share/L0DNY0',
  socialLinks: DEFAULT_SOCIAL_LINKS,
};

export const DEFAULT_ABOUT = {
  name: 'Egondu Ihemebiri',
  nationality: 'Nigerian',
  email: 'ihemebiriegondu@gmail.com',
  phone: '+234 903 177 1297',
  languages: ['English'],
  aboutImage: HeaderImg,
  skills: [
    'Next.js',
    'React',
    'TypeScript',
    'JavaScript',
    'SCSS',
    'Tailwind CSS',
  ],
  interests: ['Music', 'Movies', 'Food', 'Coding'],
  cvUrl: IhemebiriEgonduCV,
  education: [
    { title: '2015 - 2018', subTitle: 'HIGH SCHOOL DIPLOMA', text: '' },
    { title: '2020 - 2026', subTitle: "BACHELOR'S DEGREE", text: '' },
  ],
  experiences: [
    {
      title: 'July 2025 - Present',
      subTitle: 'Frontend developer - Errandify',
      text: 'Solely developed and maintained the frontend of Errandify’s platform using Next.js, TypeScript, and TailwindCSS.\n\nCollaborated with backend developers to integrate APIs and deliver a responsive, scalable, and user-friendly interface.',
    },
    {
      title: 'Jan 2025 - Present',
      subTitle: 'Junior frontend developer - AsoebiAfrica',
      text: 'Built and maintained user interfaces for Asoebi Africa’s platform using Next.js and TailwindCSS.\n\nCollaborated closely with designers, backend developers and fellow frontend developers to improve product quality and user experience.',
    },
    {
      title: 'Oct 2024 - Dec 2024',
      subTitle: 'Frontend developer intern - AsoebiAfrica',
      text: 'Assisted in developing and optimizing frontend components using Next.js.\n\nGained hands-on experience with TypeScript and Next.js in a production environment.',
    },
    {
      title: 'Sept 2022',
      subTitle: 'Frontend developer intern - SideHustle',
      text: 'I worked with ReactJS to create dynamic webpages and web applications.',
    },
    {
      title: 'May 2022',
      subTitle: 'Frontend developer intern - SideHustle',
      text: 'Worked with my team members in planning website development, converting mockups into useable web presence with HTML, CSS and JavaScript.',
    },
  ],
};

export const DEFAULT_CONTACT = {
  email: 'ihemebiriegondu@gmail.com',
  phone: '+234 705 028 6131',
  location: 'Lagos',
  locationUrl: 'https://goo.gl/maps/qbAsc8uDP7aNPLcY8',
  socialLinks: DEFAULT_SOCIAL_LINKS,
};

export const SOCIAL_PLATFORMS = [
  { value: 'github', label: 'GitHub' },
  { value: 'linkedin', label: 'LinkedIn' },
  { value: 'twitter', label: 'Twitter / X' },
  { value: 'facebook', label: 'Facebook' },
  { value: 'instagram', label: 'Instagram' },
  { value: 'dribbble', label: 'Dribbble' },
  { value: 'other', label: 'Other' },
];
