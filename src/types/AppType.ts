export interface Data {
  _id: string;
  githubUsername: string;
  name: string;
  designation: string[];
  avatarUrl: string;
  projects: Project[];
  experiences: Experience[];
  resumeUrl: string;
  summary: string;
  education: Education[];
  skill: Skill[];
  language: string[];
  interest: string[];
  contact: Contact;
}

export interface Education {
  degree: string;
  field: string;
  year: string;
  university: string;
  relevant_coursework: string[];
  country: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  year: string;
  companyLink: string;
  desc: string;
  keyword: string[];
}

export interface Project {
  title: string;
  link: string;
  description: string;
  tags: string[];
  doc: string
}

export interface Skill {
  tech: string;
  tech_list: string[];
}

export interface Contact {
  email: string;
  phone: string;
  address: string;
  socialLinks: {
    linkedin: string;
    github: string;
  };
}
