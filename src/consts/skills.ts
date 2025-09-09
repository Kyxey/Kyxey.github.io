import {
  CodeBracketIcon,
  ServerIcon,
  DevicePhoneMobileIcon,
  ShieldCheckIcon,
} from '@heroicons/vue/24/outline';
import {
  JavaScriptIcon,
  TypeScriptIcon,
  ReactIcon,
  VueDotjsIcon,
  NodeDotjsIcon,
  MongoDbIcon,
  PostgreSqlIcon,
  DockerIcon,
  GitIcon,
  TailwindCssIcon,
  NextDotjsIcon,
  NestJsIcon,
  GraphQlIcon,
  PythonIcon,
  RustIcon,
  GoIcon,
  LinuxIcon,
  Html5Icon,
  CssIcon,
  BootstrapIcon,
  ElmIcon,
  SassIcon,
  CIcon,
  CPlusPlusIcon,
  MySqlIcon,
  PhpIcon,
  Web3DotjsIcon,
  KubernetesIcon,
  WordPressIcon,
  JQueryIcon,
  CyberDefendersIcon,
} from 'vue3-simple-icons';
import type { Component } from 'vue';

type Skill = {
  name: string;
  icon?: Component;
};

type Language = {
  name: string;
  level: string;
  percentage: number;
};

type SkillCategory = {
  title: string;
  icon: Component;
  skills: string[];
};

const technicalSkills: Skill[] = [
  { name: 'JavaScript', icon: JavaScriptIcon },
  { name: 'TypeScript', icon: TypeScriptIcon },
  { name: 'React', icon: ReactIcon },
  { name: 'Vue.js', icon: VueDotjsIcon },
  { name: 'Node.js', icon: NodeDotjsIcon },
  { name: 'Next.js', icon: NextDotjsIcon },
  { name: 'NestJS', icon: NestJsIcon },
  { name: 'TailwindCSS', icon: TailwindCssIcon },
  { name: 'MongoDB', icon: MongoDbIcon },
  { name: 'PostgreSQL', icon: PostgreSqlIcon },
  { name: 'GraphQL', icon: GraphQlIcon },
  { name: 'Docker', icon: DockerIcon },
  { name: 'Git', icon: GitIcon },
  { name: 'Python', icon: PythonIcon },
  { name: 'Rust', icon: RustIcon },
  { name: 'Go', icon: GoIcon },
  { name: 'Linux', icon: LinuxIcon },
  { name: 'HTML', icon: Html5Icon },
  { name: 'CSS', icon: CssIcon },
  { name: 'React Native', icon: ReactIcon },
  { name: 'Bootstrap', icon: BootstrapIcon },
  { name: 'Elm', icon: ElmIcon },
  { name: 'SASS', icon: SassIcon },
  { name: 'C', icon: CIcon },
  { name: 'C++', icon: CPlusPlusIcon },
  { name: 'MySQL', icon: MySqlIcon },
  { name: 'PHP', icon: PhpIcon },
  { name: 'Web3', icon: Web3DotjsIcon },
  { name: 'K8', icon: KubernetesIcon },
  { name: 'WordPress', icon: WordPressIcon },
  { name: 'jQuery', icon: JQueryIcon },
  { name: 'Cybersecurity', icon: CyberDefendersIcon },
];

const languages: Language[] = [
  { name: 'Persian', level: 'Native', percentage: 100 },
  { name: 'English', level: 'Bilingual', percentage: 95 },
  { name: 'German', level: 'Intermediate', percentage: 60 },
];

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: CodeBracketIcon,
    skills: ['React', 'Vue.js', 'Next.js', 'TypeScript', 'TailwindCSS', 'SASS'],
  },
  {
    title: 'Backend',
    icon: ServerIcon,
    skills: ['Node.js', 'NestJS', 'PostgreSQL', 'MongoDB', 'GraphQL', 'Docker'],
  },
  {
    title: 'Mobile',
    icon: DevicePhoneMobileIcon,
    skills: ['React Native', 'Mobile Development', 'Cross-platform'],
  },
  {
    title: 'Security',
    icon: ShieldCheckIcon,
    skills: ['Cybersecurity', 'Network Security', 'Anonymous Browsing'],
  },
];

export { technicalSkills, languages, skillCategories };
