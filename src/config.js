module.exports = {
  siteTitle: 'Alexander Luzin | Frontend Developer',
  siteDescription:
    'Software Developer, who loves learning new things and helping tech beginners.',
  siteKeywords:
    'Alexander Luzin, Alexander, Luzin, vmeset, software developer, software engineer, web developer, javascript developer, frontend developer, react, redux, nextjs',
  siteUrl: 'https://vmeset.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Alexander Luzin',
  location: 'Krasnodar, Russia',
  email: 'vmeset@gmail.com',
  github: 'https://github.com/vmeset',
  twitterHandle: '@vmeset',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/vmeset',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/vmeset/',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/vmeset',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/vmeset',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/vmeset',
    },
  ],

  navLinks: [
    {
      name: 'Обо мне',
      url: '/#about',
    },
    {
      name: 'Мой опыт',
      url: '/#jobs',
    },
    {
      name: 'Мои проекты',
      url: '/#projects',
    },
    {
      name: 'Контакты',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
