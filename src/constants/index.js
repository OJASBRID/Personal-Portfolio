import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,

  gamedev,
  esports,
  smss,
 
  bs1,
  Udghosh,
  puzzlerunner,
  neo,
  
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Game Developer",
    icon: web,
  },
  {
    title: "Programmer",
    icon: mobile,
  },
  {
    title: "Robotics",
    icon: backend,
  },
  {
    title: "Mechanical Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Summer Research Intern",
    company_name: " Smart Materials, Structures and Systems Lab",
    icon: smss,
    iconBg: "#FFFFFF",
    date: "May 2023 - Jul 2023",
    points: [
      "Learned and implemented various functionalities such as Face Recognition, Iris Tracking, Voice Recognition, Text to speech conversion, Language Translation and Chatbot, through use of various libraries, models and API in python, using ROS2",
      "Worked on various hardware components such as Raspberry Pi, sound sensors, Distance Sensor, display and Servo Motors",
      "Built the complete backend and assembled an autonomous robot able to respond to humans through voice commands",
      "Postprocessing and analysis of data collected and accordingly modify robot’s responses to enhance child’s engagemen",
      
    ],
  },
  {
    title: "Coordinator",
    company_name: "Game Development Club, IIT Kanpur",
    icon: gamedev,
    iconBg: "#FFFFFF",
    date: "Mar 2023 - Present",
    points: [
      "Spearheaded a 3-tier team of 30+ members responsible for the conduction and planning of lectures, competitions and workshops",
      "Coordinating with the SnT Core Team to conduct Summer Projects 2022 for 200+ students on topics such as Introduction to Game Development, Smart Games using AI, Game Anti Cheat Client, Game Art and FX , Graphics and Shaders: 3D Renderer",
      "Conducted interactive workshop on strategy game design, attended by diverse audience of 50+ from campus community",
      "Conducted Fresher’s bootcamp workshop on programming and version control attended by 100+ students from campus community",
      "Secured a funding of INR 1 Lakh+ for 60 web games from Vizuara as a result of successful Industrial Collaboration",
    ],
  },
  {
    title: "Senior Executive",
    company_name: "Udghosh'22 , IIT Kanpur",
    icon: Udghosh,
    iconBg: "#FFFFFF",
    date: "Aug 2022 - Oct 2022",
    points: [
      "Guided and helped participants with facilities and accomodation during the annual sports festival over the span of three days",
      "Assisted in conduction of pre-festival Esports events with participation of over 500 students from all over the country",
      "Conducted Udaan, a sports festival for differently abled people involving cricket, chess and carrom competitions",
    ],
  },
  {
    title: "Secretary",
    company_name: "Esports Society, IIT Kanpur",
    icon: esports,
    iconBg: "#000000",
    date: "Apr 22 - Feb 23",
    points: [
      " Conducted Valorush, an Inter-IIT Valorant tournament in attended by 300+ students across 20 IITs over the span of a week",
      " Partnered with SKOAR college gaming club to conduct event with multiple games such as BGMI, Asphalt and Rocket League",
      " Organized FIFA 23 tournament in partnership with Chemin Esports and Federation of Esports Association India",
      " Secured sponsorship of INR 1.5Lakh+ from multiple sponsors such as Red Bull and Winzo for conducting events",
      
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Berserker",
    description:
      "Berserker is a first person 3d shooter survival Game developed in Unity. It combines zombie shooter with time based maze solving.",
    tags: [
      {
        name: "Unity",
        color: "blue-text-gradient",
      },
      {
        name: "C#",
        color: "green-text-gradient",
      },
      {
        name: "Blender",
        color: "pink-text-gradient",
      },
    ],
    image: bs1,
    source_code_link: "https://github.com/OJASBRID/Berserker",
  },
  {
    name: "Puzzle Runner",
    description:
      "A simple two player game,with the objective to reach the centre of maze as quickly as possible. Player have to collect the keys to open the doors to reach the centre",
    tags: [
      {
        name: "Unity",
        color: "blue-text-gradient",
      },
      {
        name: "C#",
        color: "green-text-gradient",
      },
      {
        name: "Illustrator",
        color: "pink-text-gradient",
      },
    ],
    image: puzzlerunner,
    source_code_link: "https://github.com/OJASBRID/Puzzle-Runner",
  },
  {
    name: "Neo",
    description:
      "A social robot with capability to follow voice , scan text,  detect humans,gauge interest and respond appropriately.",
    tags: [
      {
        name: "ROS2",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "text-to-speech",
        color: "pink-text-gradient",
      },
    ],
    image: neo,
    source_code_link: "#",
  },
];

export { services, technologies, experiences, testimonials, projects };
