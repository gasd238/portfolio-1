
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Choi EuBin",
  title: "Hi all, I'm EUBIN",
  subTitle: emoji("A passionate Software Developer 🚀 having an experience of building multiple web projects using JavaScript / Vuejs / Nodejs / Nuxt / Python and some other cool libraries and frameworks."),
  resumeLink: "https://drive.google.com/file/d/1vccCjrOkljnvfMucvQedNcWu1iBq1-fZ/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/danial1021",
  // linkedin: "https://www.linkedin.com/in/saadpasta/",
  gmail: "s18060@gsm.hs.kr",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "Skills I've experienced.",
  subTitle: "Enthusiastic developers looking to explore all technology stacks and development environments",
  skills: [
    emoji("⚡ Develop highly interactive Frontend / User Interfaces for your web and mobile applications"),
    emoji("⚡ Challenge to progressive web applications (PWA) beyond typical SPA applications"),
    emoji("⚡ Developers who want to challenge and solve in any development environment")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "vuejs",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "c",
      fontAwesomeClassname: "fab fa-cuttlefish"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "yarn",
      fontAwesomeClassname: "fab fa-yarn"
    },
    {
      skillName: "database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "raspberry-pi",
      fontAwesomeClassname: "fab fa-raspberry-pi"
    },
    {
      skillName: "windows",
      fontAwesomeClassname: "fab fa-windows"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "macos",
      fontAwesomeClassname: "fab fa-apple"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "75%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "COMFORTABLE LAPTAP CHECK",  
      company: "1) GSM 코딩 콘테스트",
      companylogo: require("./assets/images/arduino.png"),
      date: "Aug 2018 - Oct 2018",
      desc: "The laptop locker was created to complement the existing inconvenient dorm notebook storage box.",
      descBullets: [
        "Various modules and woodlocks were used.",
        "You can use Bluetooth-connected apps to open and close doors."
      ],
      // photo: require("./assets/images/escape.jpg"),
    },
    {
      role: "NEMV",  
      company: "2) network교과 프로젝트",
      companylogo: require("./assets/images/node.png"),
      date: " Jul 2019 - Aug 2019",
      desc: "After learning nodejs, I made a bulletin board site for the student community using vuejs.",
      descBullets: [
        "Using wysiwyg editor, filepond",
        "Whether the page can be accessed according to authority"
      ],
      // photo: require("./assets/images/escape.jpg"),
    },
    {
      role: "ESCAPE IS HOPE",  
      company: "2) GSM 프로젝트",
      companylogo: require("./assets/images/vue.jpg"),
      date: "Dec 2019 – Jan 2020",
      desc: "Teachers checked the current location of students and took care of the number of early leave. The web was created to solve such difficulties.",
      descBullets: [
        "Students can post messages on the boards of each class in advance so teachers can check them out.",
        "If you check on the web when you come back to school after going out, you don't need to be examined separately."
      ]
      // photo: require("./assets/images/facebookLogo.png"),
    },
    {
      role: "저 여기서 내려요(진행중)",  
      company: "3) 팀프로젝트",
      companylogo: require("./assets/images/pwa.png"),
      date: "May 2020 – Jul 2020",
      desc: "This project was made for those who couldn't get off the bus, and also for convenient use by providing a station reservation function to get off the bus.",
      descBullets: [
        "PWA based web app",
        "We will make a model with a 3D printer.",
        "Using the wifi router and the nfc machine in the bus",
        "In addition, Raspberry will be used as a server and modified bus bell will be used."
      ]
      // photo: require("./assets/images/escape.jpg"),
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Project Photo"),
  subtitle: "Achievements, Photo, Award and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "COMFORTABLE LAPTAP CHECK",
      subtitle: "I realized the meaning of the team project by winning second place in the coding contest.",
      image: require("./assets/images/laptap.jpg"),
      footerLink: [
        { name: "Award", url: "https://drive.google.com/file/d/1e9xikRJoIAh3d5z0REAt63Y7ABEB_7-2/view?usp=sharing" }
      ]
    },
    {
      title: "NEMV",
      subtitle: "When everything was the first time, I helped and cooperated with my friend who was having a hard time coding, and I was refreshed by trying my best.",
      image: require("./assets/images/spa.png"),
      footerLink: [{ name: "source", url: "https://github.com/danial1021/nemv" }]
    },

    {
      title: "ESCAPE IS HOPE",
      subtitle: "As a Team Leader, I learned to lead the team, and also realized that plans and meetings were important.",
      image: require("./assets/images/escape.jpg"),
      footerLink: [
        { name: "source", url: "https://github.com/danial1021/2019GSM_FESTIVAL" }
      ]
    },

    {
      title: "GETTING OFF HERE",
      subtitle: "Currently, specific plans and development directions and basic designs are in progress.(PWA-challenge)",
      image: require("./assets/images/getting_logo.svg"),
      footerLink: [
        { name: "source", url: "https://github.com/danial1021/getting-off-here" }
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "danial1021", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};
console.log(process.env.REACT_APP_GITHUB_TOKEN);
// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Would you like to story or say hello with interest in me? My inbox is open to the Shift Information Communication.",
  number: "+82-01056362502",
  email_address: "s18060@gsm.hs.kr"
};

//Twitter Section

const twitterDetails = {

  userName : "twitter"//Replace "twitter" with your twitter username without @
  
};
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, achievementSection, podcastSection, contactInfo , twitterDetails};
