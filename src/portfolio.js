/* Change this file to get your personal Portfolio */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section
const illustration = { animated: true };

const greeting = {
  username: "Abhinav Sahai",
  title: "Hi all, I'm Abhinav",
  subTitle: emoji(
    "Full Stack Software Engineer with 2+ years of experience (Incedo – Verizon) building scalable backend systems, microservices, automation pipelines, and real-time data ingestion platforms. Strong in Java, Spring Boot, React, Python automation, MemSQL pipelines, S3 ingestion, CI/CD, and production monitoring."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1Xa-SQQErFzQjazpX_G_3tOd0V-7nT-16/view?usp=sharing",
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/Abhii3011",
  linkedin: "https://www.linkedin.com/in/abhinav-sahai--/",
  gmail: "sahaiabhinav7@gmail.com",
  medium: "https://medium.com/@sahaiabhinav7",
  gfg: "https://www.geeksforgeeks.org/user/abhinavsahaiue194093eee/",
  leetcode: "https://leetcode.com/u/abhinavsahai/",
  display: true
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK ENGINEER WHO BUILDS HIGH-PERFORMANCE SYSTEMS",
  skills: [
    emoji("⚡ Build scalable backend services using Java, Spring Boot, multithreading, and REST APIs"),
    emoji("⚡ Work on real-time ingestion systems, data pipelines, and distributed components"),
    emoji("⚡ Create automation workflows using Python, Shell scripting, Jenkins, and CI/CD"),
    emoji("⚡ Develop modern frontends using React (16 → 18), MUI, and JavaScript"),
    emoji("⚡ Design monitoring dashboards and observability using Grafana & Prometheus"),
    emoji("⚡ Skilled in prompt engineering, GitHub Copilot, Gemini, and LLM-driven development")
  ],

  softwareSkills: [
    { skillName: "Java", fontAwesomeClassname: "fab fa-java" },
    { skillName: "Spring Boot", fontAwesomeClassname: "fas fa-leaf" },
    { skillName: "React", fontAwesomeClassname: "fab fa-react" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "HTML5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "MUI", fontAwesomeClassname: "fas fa-paint-brush" },
    { skillName: "Cypress", fontAwesomeClassname: "fas fa-vial" },
    { skillName: "JUnit", fontAwesomeClassname: "fas fa-bug" },
    { skillName: "Mockito", fontAwesomeClassname: "fas fa-robot" },
    { skillName: "GitHub", fontAwesomeClassname: "fab fa-github" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" }
  ],
  display: true
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "UIET, Panjab University Chandigarh",
      logo: require("./assets/images/uiet.png"),
      subHeader: "Bachelor of Engineering in Electrical & Electronics",
      duration: "2019 - 2023",
      desc: "CGPA: 7.73/10. Led the college Data Analytics Team and worked on real-world datasets.",
      descBullets: [
        "Hands-on experience in data analytics and ML projects.",
        "Developed strong problem-solving and teamwork skills."
      ]
    }
  ]
};

// Tech Stack (Bars)
const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Backend Development", progressPercentage: "90%" },
    { Stack: "Frontend / React", progressPercentage: "75%" },
    { Stack: "Real-Time Ingestion & Pipelines", progressPercentage: "80%" },
    { Stack: "Automation & DevOps", progressPercentage: "70%" },
    { Stack: "Testing & Debugging", progressPercentage: "85%" }
  ],
  displayCodersrank: false
};

// Work Experience
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Software Engineer",
      company: "Incedo Inc. (Client: Verizon)",
      companylogo: require("./assets/images/incedo.png"),
      date: "Sep 2023 - Present",
      descBullets: [
        "Designed a parserless real-time ingestion system converting XML → JSON via Python, loading into MemSQL pipelines, and processing with stored procedures.",
        "Improved ingestion efficiency and reduced cloud compute costs by 50%+.",
        "Developed scalable Spring Boot microservices with multi-threaded architecture.",
        "Migrated frontend from React 16 → 18 and replaced Canvas components with MUI.",
        "Built Grafana dashboards and Prometheus metrics for system-level observability.",
        "Automated Java loader deployments using Python + Jenkins CI/CD pipelines.",
        "Resolved critical security vulnerabilities and enhanced logging & alerting."
      ]
    },
    {
      role: "Freelancer — Web Developer & Content Creator",
      company: "Self-Employed",
      companylogo: require("./assets/images/freelance.png"),
      date: "June 2021 - Dec 2022",
      descBullets: [
        "Developed full-stack web applications for small businesses.",
        "Created technical content and delivered customized web solutions."
      ]
    }
  ]
};

// Open Source
const openSource = {
  showGithubProfile: "true",
  display: true
};

// Projects (kept disabled)
const bigProjects = {
  title: "Projects",
  subtitle: "PERSONAL & TEAM PROJECTS",
  projects: [],
  display: false
};

// Achievements / Certifications
const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle: "Recognitions, certifications, and milestones",

  achievementsCards: [
    {
      title: "Google Professional Data Analytics Certification",
      subtitle: "Completed Google-certified 6-month Data Analytics specialization.",
      image: require("./assets/images/google-data.png"),
      imageAlt: "Google Data Analytics",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1j3oYI_CkHRRkjNcmsQT-fHep0PhiR5EM/view?usp=sharing"
        }
      ]
    },
    {
      title: "NPTEL Cloud Computing Certification",
      subtitle: "Successfully completed NPTEL Cloud Computing course.",
      image: require("./assets/images/nptel.png"),
      imageAlt: "NPTEL Cloud",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1xVNa1QOmjxgdwqyPw_SnmWJEfHyOts32/view?usp=sharing"
        }
      ]
    },
    {
      title: "Data Analysis Training (Summer 2021)",
      subtitle: "Completed an in-depth training program in Python and data analysis.",
      image: require("./assets/images/data-analysis.png"),
      imageAlt: "Data Analysis",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/10G1aeS7tWIJJSv8UPjDf_4vSc3Lu-jCl/view?usp=sharing"
        }
      ]
    },
    {
      title: "Full Stack Web Development (Udemy – 60 Hours)",
      subtitle: "Complete full-stack web development training.",
      image: require("./assets/images/udemy.png"),
      imageAlt: "Udemy",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1HDI37a00EUR6b0aB5OS9RsKU3qdwaUeZ/view?usp=sharing"
        }
      ]
    },
    {
      title: "Prism Pride Month Supporter – NSS UIET",
      subtitle: "Recognized for contributions supporting diversity & inclusion.",
      image: require("./assets/images/prism-pride.png"),
      imageAlt: "Prism Pride",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1H2pQoO0axTVwKAbSEBavrerhZR2_gvPc/view?usp=sharing"
        }
      ]
    }
  ],
  display: true
};

// Blogs
const blogSection = {
  title: "Blogs",
  subtitle:
    "I love writing technical articles and sharing what I learn.",
  displayMediumBlogs: "true",

  blogs: [
    {
      url: "https://medium.com/@sahaiabhinav7/convolutional-neural-networks-cnns-c88e27bd6efb",
      title: "Convolutional Neural Networks (CNNs)",
      description: "Deep learning fundamentals explained simply."
    },
    {
      url: "https://medium.com/@sahaiabhinav7/react-hooks-7f557754fd09",
      title: "React Hooks",
      description: "Simplifying modern React development."
    },
    {
      url: "https://medium.com/@sahaiabhinav7/introduction-to-docker-33dac44e4e01",
      title: "Introduction to Docker",
      description: "Understanding containers and deployments."
    },
    {
      url: "https://medium.com/@sahaiabhinav7/json-zero-to-hero-4930ea0cb30e",
      title: "JSON — Introduction",
      description: "A beginner-friendly guide."
    },
    {
      url: "https://medium.com/@sahaiabhinav7/python-mysql-98a8265e00d6",
      title: "Python MySQL",
      description: "Connecting Python with MySQL databases."
    }
  ],
  display: true
};

// Talks / Social Work
const talkSection = {
  title: "SOCIAL WORK",
  subtitle: emoji(
    "Giving back through education, sustainability, and community initiatives 🌍✨"
  ),
  talks: [
    {
      title: "Aazadi Project - Teaching Initiative",
      subtitle:
        "Taught underprivileged children and their mothers—basic education, awareness, and empowerment.",
      image_url:
        "https://drive.google.com/drive/folders/1_QLxb3YHTDNWWjak6b7y2RrN9eR2n6Ss?usp=sharing"
    },
    {
      title: "Raddi Se Pragati - Sustainable Innovation",
      subtitle:
        "Collected waste materials and turned them into useful products to promote environmental sustainability.",
      image_url:
        "https://drive.google.com/drive/folders/1_QLxb3YHTDNWWjak6b7y2RrN9eR2n6Ss?usp=sharing"
    }
  ],
  display: true
};

// Podcast (Disabled)
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT TECHNOLOGY",
  podcast: [],
  display: false
};

// Contact
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Want to discuss a project or just say hi? Feel free to reach out.",
  number: "+91 7905271931",
  email_address: "sahaiabhinav7@gmail.com"
};

// Twitter Section (Disabled)
const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
