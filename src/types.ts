export interface Contact {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  location: string;
}

export interface Experience {
  position: string;
  company: string;
  duration: string;
  location: string;
  description: string;
  achievements?: string[];
}

export interface Education {
  degree: string;
  field: string;
  institution: string;
  year: string;
  gpa?: string;
}

export interface Project {
  name: string;
  description: string;
  tech: string;
  link?: string;
  achievements?: string[];
}

export interface Skills {
  [category: string]: string[];
}

export interface Resume {
  name: string;
  title: string;
  contact: Contact;
  about: string;
  experience: Experience[];
  education: Education[];
  skills: Skills;
  projects?: Project[];
}
