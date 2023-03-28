//  icons
import {
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiDribbble,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
  FiLinkedin,
} from 'react-icons/fi';

// companies icons
import FreelancerBrandIcon from './assets/img/brands/brand1.png';
import UpworkBrandIcon from './assets/img/brands/brand3.png';

// projects images
import Project1 from './assets/img/projects/ai-cohort.jpg';
import Project2 from './assets/img/projects/sort.jpg';
import Project3 from './assets/img/projects/portfolio.jpg';
import Project4 from './assets/img/projects/mult1.jpg';

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/nextjs.png';
import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/git.png';
import SkillImg8 from './assets/img/skills/figma.png';
import SkillImg9 from './assets/img/skills/c-sharp.png';


// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'services',
    href: 'services',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiLinkedin />,
    href: 'https://www.linkedin.com/in/david-nkana-20bb53210/',
    target: '_blank',
  },
  {
    icon: <FiGithub />,
    href: 'http://github.com/davidNkana/',
    target: '_blank',
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: '',
  },
  {
    img: UpworkBrandIcon,
    href: '',
  },
];

// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'AI Cohort',
    description: 'AI Cohort is a natural language processing (NPL) tool. It uses machine learning to generate human-like answers to prompts by referring to large amounts of text in its training examples. It is made with HTML, CSS and Javascript (Express, Node.js and OpenAI application programming interface)',
    category: 'web development',
    github: 'GitHub',
    project: 'Project',
    target: '_blank',
    hrefProject: 'https://ai-cohort.vercel.app/',
    href: 'https://github.com/DavidNkana/AI-Cohort2'
  },
  {
    id: '2',
    image: Project2,
    name: 'Sorting algorithms visualizer',
    description: 'This project is a graphical user interface (GUI) that allows users to compare the functionality and effeciency of different sorting algorithms. It is made with HTML, CSS and Vanilla Javacscript with 5 algorithms (Bubble Sort, Selection Sort, Insertion Sort, Quick Sort and Merge Sort)',
    category: 'web development',
    github: 'GitHub',
    project: 'Project',
    target: '_blank',
    href: 'https://github.com/DavidNkana/Sorting-Algorithms-Visualisation',
    hrefProject: 'https://sorting-algorithms-visualisation.netlify.app/'

  },
  {
    id: '3',
    image: Project3,
    name: 'My Portfolio Website',
    description: " This portfolio was built with React.js, Tailwind.css amd emailJS for the form, combining the latest web technologies to create a mobile-friendly, visually appealing portfolio that effectively displays and showcases my front-end developer experiences.",
    category: 'web development',
    github: 'GitHub',
    project: 'Project',
    target: '_blank',
    href: 'https://github.com/DavidNkana/my-portfolio-website',
    hrefProject: 'https://davidnkana.vercel.app/'
  },
  {
    id: '4',
    image: Project4,
    name: 'Mult',
    description: "Mult is a 3D, first-person shooter game with incredible graphics and a captivating story. The game features the protagonist, tasked with battling multiple enemies throughout the journey. The development of this game involves working with Unity and C#. After 3 months of development time I'm confident that the final product will be something you won't forget anytime soon! ",
    category: 'game development',
    more: 'Learn More',
    coming: 'Coming soon',
  },
];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'web development',
  },
  {
    name: 'game development',
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
  {
    image: SkillImg9,
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'Web Design',
    description:
      'Web design is the process of creating websites for the internet. It involves a variety of disciplines including web programming, graphic design, typography, layout and content creation. The goal is to create an aesthetically pleasing and easy-to-navigate website that can be viewed on multiple devices such as mobile phones, laptops and desktop computers.',
  },
  {
    icon: <FiLayout />,
    name: 'Responsive Design',
    description:
      ' Responsive design is a web development approach that creates dynamic changes to the appearance of a website, depending on the screen size and orientation of the device being used to view it. This method uses proportion-based grids and flexible images or video, to allow for optimized scaleability across devices. It also allows for websites to be seen in their original form on different sized screens, such as mobile phones, tablets, laptops and desktops.',
  },
  {
    icon: <FiSettings />,
    name: 'Web Development',
    description:
      ' Web Development is the process of building, creating, and maintaining websites or web applications. It encompasses a variety of tasks such as designing a website layout, coding in HTML and CSS, writing content, optimizing code for search engine optimization (SEO), incorporating interactivity with JavaScript and more. Web Development also involves server configuration and maintenance so that the website is secure and can be accessed by the public.',
  },
  {
    icon: <FiSettings />,
    name: 'Game Development',
    description:
      'Game Development is the process of designing, programming, and producing a video game. This process typically involves developing the concept of a game, designing artwork and graphics, writing code for characters, levels and rules of play, testing the game to make sure it works correctly and tweaking it until it meets the project requirements set by the development team.',
  },
];


// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'React out.',
    description: 'Email me at davidnkana74@gmail.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Lusaka, Zambia',
  },
];
