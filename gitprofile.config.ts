// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'dinasquare', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/profile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 4, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['dinasquare/AIML_Work', 'dinasquare/Emotion_Recognition'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Emotion Rcognition',
          description:
            'Developed an emotion recognition system using EfficientNetB0 classification of facial emotions',
          imageUrl:
            'https://img.freepik.com/free-photo/face-expression-emotional-people-concept_53876-127869.jpg?t=st=1723540613~exp=1723544213~hmac=5e0dc240a986c7ca47d38bc4f8c80da8e44c36118e8380487ef03bd73dfe8f31&w=740',
          link: 'https://github.com/dinasquare/Emotion_Recognition',
        },
        {
          title: 'AI/ML Work',
          description:
            'Compiled a diverse collection of AI/ML projects demonstrating various algorithms and techniques..',
          imageUrl:
            'https://img.freepik.com/free-vector/neural-network-black-outline_78370-3686.jpg?t=st=1723544816~exp=1723548416~hmac=6defc64a2a02d131ca8fa68ab2429bfcce249e89e5726320a6091e40fb0de29e&w=740',
          link: 'https://github.com/dinasquare/AIML_Work',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Gauraangi Praakash',
    description: 'AI/ML Enthusiast',
    imageURL: 'srcassetsprofile',
  },
  social: {
    linkedin: 'gauraangi',
    twitter: 'Gauraangi',
    googlescholar:'https://scholar.google.co.in/citations?view_op=list_works&hl=en&user=8Pbd6agAAAAJ',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: 'dinasquare.exe',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '7572005777',
    email: 'gauraangi25@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1UP_c1LTA29S95B11nrRo_YgZ2G4gZKSr/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Java',
    'Python',
    'Machine Learning',
    'JavaScript',
    'Node.js',
    'Git',
  ],
  experiences: [
    {
      company: 'Indian Institute of Technology(IIT) Kanpur',
      position: 'Intern',
      from: 'June 2024',
      to: 'Present',
      companyLink: 'https://www.iitk.ac.in/',
    },
    {
      company: 'YOKO Solution Pvt Ltd',
      position: 'AI Intern',
      from: 'May 2024',
      to: 'July 2024',
      companyLink: 'https://www.itsyoko.com/',
    },
    {
      company: 'Indian Institute of Technology(IIT) Kanpur',
      position: 'Intern',
      from: 'June 2023',
      to: 'August 2023',
      companyLink: 'https://www.iitk.ac.in/',
    },
  ],
  certifications: [
    {
      name: 'Google AI Essentials',
      year: 'July 2024',
      link: 'https://www.credly.com/badges/05f6840e-7a5a-4fdf-98a7-2b226cb56586/public_url',
    },
    {
      name: 'CISCO Python Essentials 1',
      year: 'May 2024',
      link: 'https://www.credly.com/badges/f95c16f9-88b1-440c-87e8-3aeca7a9807b/public_url',
    },
    {
      name: 'CISCO Python Essentials 2',
      year: 'May 2024',
      link: 'https://www.credly.com/badges/f95c16f9-88b1-440c-87e8-3aeca7a9807b/public_url',
    },
  ],
  educations: [
    {
      institution: 'Amity University Lucknow',
      degree:
        'B.Tech CSE with Honours in Artificial Intelligence and Machine Learning',
      from: '2021',
      to: '2025',
      cgpa: '8.5'
    },
  ],
  publications: [
    {
      title: 'Predictive Modeling for Chronic Diseases',
      conferenceName: '',
      journalName: 'European Chemical Bulletin',
      authors: 'DPK, Gauraangi Praakash, Prof. Arnab Bhattacharya',
      link: 'https://naeeem.shop/uploads/paper/1bccc5ed07e3fbb291a5d132b48ba2aa.pdf',
      description:
        'This paper discusses the application of machine learning techniques, specifically K-Nearest Neighbors (KNN) and Convolutional Neural Networks (CNN), to predict and manage chronic diseases by leveraging health-related data, enhancing prediction accuracy, and empowering patients through mobile applications.',
    },
    {
      title: 'A Biometric-Based Encryption Method for Secure Data Sharing in Cloud Environment',
      conferenceName: 'SNSFAIT',
      journalName: '',
      authors: 'Gauraangi Praakash, Pooja Khanna, Sachin Kumar, Pragya',
      link: 'https://www.bibsonomy.org/bibtex/1944b86fd96d4a152ca4e3d87d5f2ea75',
      description:
        'This research article explores the use of Revocable Identity-Based Encryption (IBE) in cloud computing, highlighting its efficiency in secure data management and the reduction of processing time through a Generalized Set Product (GSP) technique.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'synthwave',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made by Gauraangi 🦕`,

  enablePWA: true,
};

export default CONFIG;
