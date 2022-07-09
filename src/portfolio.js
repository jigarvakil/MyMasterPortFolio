/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Jigar Vakil's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Jigar Vakil Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Jigar Vakil",
  logo_name: "JigarVakil",
  nickname: "CyberTros",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/open?id=1XYpYhLeqCdyx_q6l0bQoC7RgwQjAjXPf",
  portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "https://github.com/ashutosh1919",
};

const socialMediaLinks = [

  {
    name: "Github",
    link: "https://github.com/jigarvakil",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/dev-jigarvakil/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:jigarvakil011@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/jigarvakil_",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/jigss.0011",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/jigarvakil_/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Creating application backend in Node, Express & PHP",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Bulma",
          fontAwesomeClassname: "simple-icons:bulma",
          style: {
            color: "#00D1B2",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#000",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Adnroid",
          fontAwesomeClassname: "simple-icons:android",
          style: {
            color: "#3bb273",
          },
        },
        
      ],
    },
    {
      title: "Deployment & Hosting",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Hosting and maintaining websites on live URLs along with integration of databases",
        "⚡ Deploying websites and custom domains using Netlify",
        "⚡ Setting up FTP and do live changes to websites",
      ],
      softwareSkills: [
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#3bc2b1",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#430098",
          },
        },
        {
          skillName: "Github Pages",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#000",
          },
        },
        {
          skillName: "Go Daddy",
          fontAwesomeClassname: "simple-icons:godaddy",
          style: {
            color: "#000",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ I also have little bit knowledge about UI/UX designing",
        "⚡ Creating the flow of application functionalities to optimize user experience in Figma",
      ],
      softwareSkills: [
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "SoloLearn",
      iconifyClassname: "simple-icons:sololearn",
      style: {
        color: "#149EF2",
      },
      profileLink: "https://www.sololearn.com/profile/7700984",
    },
    {
      siteName: "Coursera",
      iconifyClassname: "simple-icons:coursera",
      style: {
        color: "#0056D2",
      },
      profileLink: "",
    },
    {
      siteName: "Cisco",
      iconifyClassname: "simple-icons:cisco",
      style: {
        color: "#1BA0D7",
      },
      profileLink: "",
    },
    {
      siteName: "Oracle",
      iconifyClassname: "simple-icons:oracle",
      style: {
        color: "#F80000",
      },
      profileLink: "",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Parul University",
      subtitle: "Master of Computer Application",
      logo_path: "parul-university3698.jpg",
      alt_name: "pu",
      duration: "2020 - 2022",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "http://paruluniversity.ac.in",
    },
    {
      title: "Veer Narmad South Gujarat University",
      subtitle: "Bachelor of Computer Application",
      logo_path: "vnsgu.jpg",
      alt_name: "vnsgu",
      duration: "2016 - 2019",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "http://paruluniversity.ac.in",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Introduction to Cybersecurity ",
      subtitle: "- Cisco Networking Academy",
      logo_path: "cisco.png",
      certificate_link:
        "",
      alt_name: "cisco",
      color_code: "#c8f7f5",
    },
    {
      title: "Google Analytics for Beginners",
      subtitle: "- Google Analytics Academy",
      logo_path: "google_logo.png",
      certificate_link:
        "https://analytics.google.com/analytics/academy/certificate/cz9xhXhmQlSn0PM-2hHdPg",
      alt_name: "Google",
      color_code: "#fcd5d7",
    },
    {
      title: "International Cyber Conflicts",
      subtitle: "- State University Of New York",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/S5%20DHBGPJQNQ9",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Git & Github",
      subtitle: "",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "udemy",
      color_code: "#FFBB0099",
    },
    {
      title: "Understanding the RF Path",
      subtitle: "- CommScope",
      logo_path: "CommScope-logo.jpg",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#fff",
    },
    
    {
      title: "Java Innovations Badge",
      subtitle: "- Oracle",
      logo_path: "oracle.jpg",
      certificate_link:
        "",
      alt_name: "Coursera",
      color_code: "#f60003",
    },
    
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Software Developer",
          company: "La Net Team Software Solutions PVT. LTD.",
          company_url: "https://lanetteam.com/  ",
          logo_path: "lanet.jpeg",
          duration: "May 2022 - PRESENT",
          location: "Surat, Gujarat",
          description:
            "I am working on ReactJS, NodeJS, ExpressJS, etc.",
          color: "#0879bf",
        },
        {
          title: "PHP Developer/ Project Trainer",
          company: "Net-x IIt",
          company_url: "https://www.facebook.com/netxiit120/",
          logo_path: "netx.png",
          duration: "May 2017 - March 2020",
          location: "Surat, Gujarat",
          description:
            "I have created many web-applications and websites.Train Students of BCA/BSC.IT/MCA students and Also done research and Development",
          color: "#9b1578",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Software Developer Trainee",
          company: "La Net Team Software Solutions PVT. LTD.",
          company_url: "https://lanetteam.com/  ",
          logo_path: "lanet.jpeg",
          duration: "Nov 2021 - May 2022",
          location: "Surat, Gujarat",
          description:
            "I am working on ReactJS, NodeJS, ExpressJS, etc.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Head Student Placement Coordinator",
          company: "Parul University",
          company_url:
            "https://paruluniversity.ac.in/",
          logo_path: "parul-university3698.jpg",
          duration: "Aug 2020 - Nov 2021",
          location: "Vadodara, Gujarat",
          description:
            "We have well established Placement Cell in college which is directly associated with many companies. I have managed and Organized many placement activities and also responsible for maintaining students placements.",
          color: "#0C9D58",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "Jan 2020 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many projects.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "jigarvakil.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with your query.",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Barbodhan, Surat , Gujarat - 395005",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://www.google.com/maps/place/Barbodhan,+Gujarat+395005/data=!4m2!3m1!1s0x3be1b34f170becdd:0x3ed58a7a102058cc?sa=X&ved=2ahUKEwi7rYOwpuv4AhWEaGwGHaIpA1kQ8gF6BAhMEAE",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 9824619885",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
};
