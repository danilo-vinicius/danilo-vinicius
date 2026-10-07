import {
  faRobot,
  faBrain,
  faChartPie,
  faDatabase,
  faBullseye,
  faCogs,
  faRocket,
  faPlay,
  faDownload,
  faBolt,
  faSearch,
  faClock,
  faServer,
  faChartBar,
  faFileExcel,
  faCalculator,
  faMicrochip,
  faProjectDiagram,
  faLaptopCode,
  faBriefcase,
  faGraduationCap,
  faUniversity,
  faCalendarAlt,
  faCheckCircle,
  faCode,
  faUser,
  faHome,
  faEnvelope,
  faBars,
  faMoon,
  faSun,
  faFileDownload,
  faArrowDown
} from '@fortawesome/free-solid-svg-icons';

import {
  faPython,
  faGithub,
  faGitAlt
} from '@fortawesome/free-brands-svg-icons';

const iconMap = {
  'fas fa-robot': faRobot,
  'fas fa-brain': faBrain,
  'fas fa-chart-pie': faChartPie,
  'fas fa-database': faDatabase,
  'fas fa-bullseye': faBullseye,
  'fas fa-cogs': faCogs,
  'fas fa-rocket': faRocket,
  'fas fa-play': faPlay,
  'fas fa-download': faDownload,
  'fas fa-bolt': faBolt,
  'fas fa-search': faSearch,
  'fas fa-clock': faClock,
  'fas fa-server': faServer,
  'fas fa-chart-bar': faChartBar,
  'fas fa-file-excel': faFileExcel,
  'fas fa-calculator': faCalculator,
  'fas fa-microchip': faMicrochip,
  'fas fa-project-diagram': faProjectDiagram,
  'fas fa-laptop-code': faLaptopCode,
  'fas fa-briefcase': faBriefcase,
  'fas fa-graduation-cap': faGraduationCap,
  'fas fa-university': faUniversity,
  'fas fa-calendar-alt': faCalendarAlt,
  'fas fa-check-circle': faCheckCircle,
  'fas fa-code': faCode,
  'fas fa-user': faUser,
  'fas fa-home': faHome,
  'fas fa-envelope': faEnvelope,
  'fas fa-bars': faBars,
  'fas fa-moon': faMoon,
  'fas fa-sun': faSun,
  'fas fa-file-download': faFileDownload,
  'fas fa-arrow-down': faArrowDown,
  'fab fa-python': faPython,
  'fab fa-github': faGithub,
  'fab fa-git-alt': faGitAlt
};

export const getIcon = (iconInput) => {
  if (!iconInput) return faCode;
  if (typeof iconInput === 'object') return iconInput;
  return iconMap[iconInput] || faCode;
};
