// Import images for skills
import ReactLogo from '../images/skills/react.png';
import HTMLLogo from '../images/skills/html.png';
import CSSLogo from '../images/skills/css.png';
import JavaScriptLogo from '../images/skills/javascript.png';
import NodeJsLogo from '../images/skills/nodejs.png';
import PythonLogo from '../images/skills/python.png';
import MySQLLogo from '../images/skills/mysql.png';
import FirebaseLogo from '../images/skills/firebase.png';
import JavaLogo from '../images/skills/java.png';
import GitHubLogo from '../images/skills/github.png';
import VSCodeLogo from '../images/skills/vscode.png';
import FigmaLogo from '../images/skills/figma.png';

// Import images for experiences
import NavalLogo from '../images/experiences/naval.png';
import GirlsGoCyberLogo from '../images/experiences/girlsgocyber.png';
import HackBILogo from '../images/experiences/hackbi.png';

// Import images for education
import VirginiaTechLogo from '../images/education/virginiatech.png';

// Import statements for project images
import todoListLogo from '../images/projects/todolist.png';
import connect4Logo from '../images/projects/connect4.png';
import ticTacToeLogo from '../images/projects/tictactoe.png';

export const Bio = {
  name: "Courtney Quinn",
  roles: [
    "Full Stack Developer",
    "Student at Virginia Tech",
    "Software Engineer",
    "Programmer",
  ],
  description: "I am a passionate software developer with a focus on full stack development. I am currently pursuing a degree in Computer Science at Virginia Tech, where I am developing my skills in software development and machine learning.",
  github: "https://github.com/Courtneyquinn123",
  resume: "https://drive.google.com/file/d/1FYefYFCWwKnHhp8XgC4NObmfa5FYNXBL/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/courtney-q/",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      { name: "React Js", image: ReactLogo },
      { name: "HTML", image: HTMLLogo },
      { name: "CSS", image: CSSLogo },
      { name: "JavaScript", image: JavaScriptLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node Js", image: NodeJsLogo },
      { name: "Python", image: PythonLogo },
      { name: "MySQL", image: MySQLLogo },
      { name: "Firebase", image: FirebaseLogo },
    ],
  },
  {
    title: "Others",
    skills: [
      { name: "Java", image: JavaLogo },
      { name: "GitHub", image: GitHubLogo },
      { name: "VS Code", image: VSCodeLogo },
      { name: "Figma", image: FigmaLogo },
    ],
  },
];

export const experiences = [
  {
    role: "Software Engineer Intern",
    company: "Naval Warfare Center",
    date: "June 2023 - August 2023",
    desc: "Led the development of data optimization tools, improving operational efficiency and mission safety.",
    skills: ["Python", "SQL", "System Integration"],
    image: NavalLogo,
  },
  {
    role: "Chapter Founder and Leader",
    company: "GirlsGoCyber",
    date: "2018 - 2022",
    desc: "Founded and grew the chapter, leading to national recognition in cybersecurity competitions.",
    skills: ["Leadership", "Cybersecurity", "Community Building"],
    image: GirlsGoCyberLogo,
  },
  {
    role: "Lead Organizer",
    company: "HackBI (Hack Bishop Ireton)",
    date: "2018 - 2022",
    desc: "Spearheaded the annual hackathon, overseeing all aspects of event planning and execution.",
    skills: ["Event Management", "Team Coordination", "Logistics"],
    image: HackBILogo,
  },
];

// Education data
export const education = [
  {
    school: "Virginia Polytechnic Institute and State University",
    degree: "B.S. in Computer Science",
    date: "2022 - Expected 2025",
    desc: "Pursuing a degree in Computer Science, focusing on software development, cybersecurity, and machine learning.",
    image: VirginiaTechLogo, 
    grade: "3.2 GPA",
  },
];

// Projects data
export const projects = [
  {
    id: 0,
    title: "To-Do List Application",
    date: "2024",
    description: "A dynamic To-Do List app for task management...",
    image: todoListLogo,
    tags: ["HTML", "CSS", "JavaScript"],
    category: "Web App",
    github: "https://github.com/Courtneyquinn123/ToDoList",
    webapp: "https://courtneyquinn123.github.io/ToDoList"
  },
  {
    id: 1,
    title: "Connect Four",
    date: "2024",
    description: "Classic Connect Four game reimagined in a web app...",
    image: connect4Logo,
    tags: ["HTML", "CSS", "JavaScript"],
    category: "Web App",
    github: "https://github.com/Courtneyquinn123/Connect4",
    webapp: "https://courtneyquinn123.github.io/Connect4"
  },
  {
    id: 2,
    title: "Tic-Tac-Toe",
    date: "2024",
    description: "Web-based Tic-Tac-Toe game allowing two players to compete...",
    image: ticTacToeLogo,
    tags: ["HTML", "CSS", "JavaScript"],
    category: "Web App",
    github: "https://github.com/Courtneyquinn123/TicTacToe",
    webapp: "https://courtneyquinn123.github.io/TicTacToe"
  }
  // Add more projects as necessary
];

export const TimeLineData = [
  { year: 2018, text: "Founded GirlsGoCyber Chapter." },
  { year: 2019, text: "Led team to first in Virginia Cyberstart Competition." },
  { year: 2020, text: "Recognized by governor for cybersecurity achievements." },
  { year: 2021, text: "Started Computer Science at Virginia Tech." },
  { year: 2022, text: "Interned at Naval Warfare Center, improving data systems." },
  { year: 2023, text: "Engaged in AWS DeepRacer for machine learning skills." },
  { year: 2024, text: "Promoted diversity in tech at Virginia Tech." },
];

