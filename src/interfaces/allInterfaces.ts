// hero
export interface IHero {
  titles: string[];
  imagesUrl: string;
  resumeUrl: string;
}

// about
export interface IAbout {
  me: string;
  interests: string;
  education: string;
}

// experience
export interface IExperience {
  company: string;
  position: string;
  duration: string;
  servedTime: string;
  details: string;
}

// service
export interface IService {
  title: string;
  description: string;
  tools: string[];
}

// skill
export interface ISkillDetails {
  name: string;
  icon: React.ReactNode;
  description: string;
  experience: number;
  projects: number;
  proficiency: string;
  position: {
    left: string;
    right: string;
  };
}

export interface ITechnology {
  name: string;
  details: string;
}

export interface ISkillInfo {
  title: string;
  description: string;
  technologies: ITechnology[];
}

export interface ISkillCategory {
  Frontend: ISkillInfo;
  Backend: ISkillInfo;
  Database: ISkillInfo;
  Tools: ISkillInfo;
}

export interface ISkills {
  skillsData: ISkillDetails[];
  skillsDetails: ISkillCategory;
}

// projects
export interface IProjects {
  title: string;
  description: string[];
  links: {
    gitFront: string;
    gitback: string;
    live: string;
    server: string;
  };
  images: string[];
}

// Footer
export interface IContact {
  icon: React.ReactNode;
  info: string;
}
export interface ISocial {
  icon: React.ReactNode;
  handle: string;
}
export interface IFooter {
  contact: IContact[];
  social: ISocial[];
}
