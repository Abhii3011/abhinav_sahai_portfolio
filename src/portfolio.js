/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Abhinav Sahai",
  title: "Hi all, I'm Abhinav",
  subTitle: emoji(
    "Full Stack Developer 🚀 with more than a year of experience at Incedo, working for Verizon, a leading US-based telecom company. I have expertise in Java, React, Spring Boot, and Python."
  ),
  resumeLink: "https://drive.google.com/file/d/1r205RbnQjCgJCH6E94yE4REQPC_mv4Fh/view?usp=sharing", 
  displayGreeting: true
};





// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Abhii3011",
  linkedin: "https://www.linkedin.com/in/abhinav-sahai--/",
  gmail: "sahaiabhinav7@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@sahaiabhinav7",
  gfg:"https://www.geeksforgeeks.org/user/abhinavsahaiue194093eee/",
  leetcode:"https://leetcode.com/u/abhinavsahai/",

  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};




// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO LOVES BUILDING SCALABLE APPLICATIONS",
  skills: [
    emoji("⚡ Develop robust Java backend services with Spring Boot"),
    emoji("⚡ Build responsive front-end interfaces using React and Material-UI"),
    emoji("⚡ Automate deployment processes with Python and Shell scripting"),
    emoji("⚡ Write unit and UI test cases using JUnit, Mockito, and Cypress"),
    emoji("⚡ Upgrade frameworks and migrate components for improved UI/UX")
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
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "UIET, Panjab University Chandigarh",
      logo: require("./assets/images/uiet.png"),
      subHeader: "Bachelor of Engineering in Electrical & Electronics",
      duration: "2019 - 2023",
      desc: "CGPA: 7.73/10. Led data analytics team and worked on real-world datasets.",
      descBullets: [
        "Developed problem-solving, teamwork, and presentation skills.",
        "Worked on machine learning projects and data analytics challenges."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

// Tech Stack & Proficiency
const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Frontend/Design", progressPercentage: "75%" },
    { Stack: "Backend Development", progressPercentage: "90%" },
    { Stack: "Deployment Automation", progressPercentage: "60%" },
    { Stack: "Testing & Debugging", progressPercentage: "80%" }
  ],
  displayCodersrank: false
};



// Work Experience
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Software Engineer",
      company: "Incedo Inc.",
      companylogo: require("./assets/images/incedo.png"),
      date: "Sep 2023 - Present",
      descBullets: [
        "Developed and refactored Java backend functionalities, ensuring code quality.",
        "Upgraded React and Spring Boot frameworks, migrated canvas components to MUI.",
        "Automated deployment processes using Python, reducing manual work.",
        "Wrote Cypress test cases for UI and API testing.",
        "Addressed security vulnerabilities in Java applications."
      ]
    },
    {
      role: "Freelancer - Web Dev & Content Creation",
      company: "Self-Employed",
      companylogo: require("./assets/images/freelance.png"),
      date: "June 2021 - Dec 2022",
      descBullets: [
        "Developed full-stack web applications for small businesses.",
        "Worked closely with clients to customize and optimize web solutions."
      ]
    }
  ]
};




/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME OF MY PERSONAL AND TEAM PROJECTS",
  projects: [
    // {
    //   image: require("./assets/images/tastebud.jpeg"),
    //   projectName: "Tastebud",
    //   projectDesc: "A recipe generator and exploration tool enabling users to discover personalized recipes based on ingredients, cuisine preferences, and dietary needs.",
    //   footerLink: [
    //     {
    //       name: "Visit Website",
    //       url: "https://github.com/AbhinavSahai/TasteBud-AI"
    //     }
    //   ]
    // },
    // {
    //   image: require("./assets/images/brain.jpeg"),
    //   projectName: "Tumortrack",
    //   projectDesc: "Developed a brain tumor classification system with the Xception CNN model, achieving 99.16% accuracy on MRI scans",
    //   footerLink: [
    //     {
    //       name: "Visit Website",
    //       url: "https://colab.research.google.com/drive/1RkxKmpnk5F-dIsgAe4GtMdTvHdsYSrqi?usp=sharing"
    //     }
    //   ]
    // },
    // {
    //   image: require("./assets/images/spam.png"),
    //   projectName: "SMS spam detector",
    //   projectDesc: " This project implements a SMS spam detector using Machine Learning algorithms, primarily based on the Multinomial Naive Bayes algorithm",
    //   footerLink: [
    //     {
    //       name: "Visit Website",
    //       url: "https://github.com/AbhinavSahai/sms-spam-detector"
    //     }
    //   ]
    // },
    // {
    //   image: require("./assets/images/web4.png"),
    //   projectName: "People Counter",
    //   projectDesc: " Utilizes the YOLO (You Only Look Once) object detection model to count the number of people moving in two directions in a video stream",
    //   footerLink: [
    //     {
    //       name: "Visit Website",
    //       url: "https://github.com/AbhinavSahai/People-Counter"
    //     }
      // ]
    // }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle: "Recognitions, Certifications, and Key Milestones in My Career",

  achievementsCards: [
    {
      title: "Google Professional Data Analytics Certification",
      subtitle: "Completed a 6-month intensive Google-certified Data Analytics course.",
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
      imageAlt: "NPTEL Cloud Computing",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1xVNa1QOmjxgdwqyPw_SnmWJEfHyOts32/view?usp=sharing"
        }
      ]
    },
    {
      title: "Summer Training 2021 - Data Analysis",
      subtitle: "Completed an in-depth training program focused on Data Analysis.",
      image: require("./assets/images/data-analysis.png"),
      imageAlt: "Data Analysis Training",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/10G1aeS7tWIJJSv8UPjDf_4vSc3Lu-jCl/view?usp=sharing"
        }
      ]
    },
    {
      title: "Full Stack Web Development Course (Udemy - 60 Hours)",
      subtitle: "Completed a comprehensive Full Stack Web Development course covering frontend and backend technologies.",
      image: require("./assets/images/udemy.png"),
      imageAlt: "Udemy Full Stack",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1HDI37a00EUR6b0aB5OS9RsKU3qdwaUeZ/view?usp=sharing"
        }
      ]
    },
    {
      title: "Prism Pride Month Supporter - NSS UIET",
      subtitle: "Recognized for contributions in supporting diversity and inclusivity during Pride Month.",
      image: require("./assets/images/prism-pride.png"),
      imageAlt: "Prism Pride Supporter",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1H2pQoO0axTVwKAbSEBavrerhZR2_gvPc/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@sahaiabhinav7/convolutional-neural-networks-cnns-c88e27bd6efb",
      title: "Convolutional Neural Networks (CNNs)",
      description:
        "Neural networks are modeled after our brains. There are individual nodes that form the layers in the network, just like the neurons in our brains connect different areas."
    },
    {
      url: "https://medium.com/@sahaiabhinav7/react-hooks-7f557754fd09",
      title: "React Hooks",
      description:
        "Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed."
    },
    {
      url: "https://medium.com/@sahaiabhinav7/introduction-to-docker-33dac44e4e01",
      title: "Introduction to Docker",
      description:
        "Docker is a set of platforms as a service (PaaS) products that use the Operating system level virtualization to deliver software in packages called containers."
    },
    {
      url: "https://medium.com/@sahaiabhinav7/json-zero-to-hero-4930ea0cb30e",
      title: "JSON — Introduction",
      description:
        "JSON stands for JavaScript Object Notation.JSON is a text format for storing and transporting data.JSON is “self-describing” and easy to understand."
    },
    {
      url: "https://medium.com/@sahaiabhinav7/python-mysql-98a8265e00d6",
      title: "Python MySQL",
      description:
        "Python can be used in database applications.Python needs a MySQL driver to access the MySQL database.I will use the driver “MySQL Connector” and recommend that you use PIP to install “MySQL Connector”."
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "SOCIAL WORK",
  subtitle: emoji("Giving back to society through education and sustainability initiatives 🌍✨"),
  talks: [
    {
      title: "Aazadi Project - Teaching Initiative",
      subtitle:
        "Taught underprivileged children and their uneducated mothers, empowering them with basic education and life skills.",
      image_url: "https://drive.google.com/drive/folders/1_QLxb3YHTDNWWjak6b7y2RrN9eR2n6Ss?usp=sharing" // Replace with actual image URL
    },
    {
      title: "Raddi Se Pragati - Sustainable Innovation",
      subtitle:
        "Collected waste materials and transformed them into useful and artistic creations, promoting sustainability and environmental awareness.",
      image_url: "https://drive.google.com/drive/folders/1_QLxb3YHTDNWWjak6b7y2RrN9eR2n6Ss?usp=sharing" // Replace with actual image URL
    }
  ],
  display: true
};



// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 7905271931 ",
     email_address: "sahaiabhinav7@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
