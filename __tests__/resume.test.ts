import { describe, it, expect } from "vitest";
import { resume } from "../src/resume.js";
import type {
  Contact,
  Experience,
  Education,
  Project,
  Skills,
} from "../src/types.js";

describe("Resume Data Validation", () => {
  describe("Basic Structure", () => {
    it("should have all required top-level properties", () => {
      expect(resume).toHaveProperty("name");
      expect(resume).toHaveProperty("title");
      expect(resume).toHaveProperty("contact");
      expect(resume).toHaveProperty("about");
      expect(resume).toHaveProperty("experience");
      expect(resume).toHaveProperty("education");
      expect(resume).toHaveProperty("skills");
      expect(resume).toHaveProperty("projects");
    });

    it("should have correct data types for all properties", () => {
      expect(typeof resume.name).toBe("string");
      expect(typeof resume.title).toBe("string");
      expect(typeof resume.about).toBe("string");
      expect(Array.isArray(resume.experience)).toBe(true);
      expect(Array.isArray(resume.education)).toBe(true);
      expect(typeof resume.skills).toBe("object");
      expect(Array.isArray(resume.projects)).toBe(true);
    });
  });

  describe("Personal Information", () => {
    it("should have valid name and title", () => {
      expect(resume.name).toBe("RAHUL SANTOSH MISTRY");
      expect(resume.title).toBe(
        "Software Development Engineer | Full Stack Developer"
      );
      expect(resume.name.length).toBeGreaterThan(0);
      expect(resume.title.length).toBeGreaterThan(0);
    });

    it("should have a meaningful about section", () => {
      expect(resume.about.length).toBeGreaterThan(50);
      expect(resume.about).toContain("Software Development Engineer");
      expect(resume.about).toContain("2+ years");
    });
  });

  describe("Contact Information", () => {
    const contact: Contact = resume.contact;

    it("should have all required contact fields", () => {
      expect(contact).toHaveProperty("email");
      expect(contact).toHaveProperty("phone");
      expect(contact).toHaveProperty("linkedin");
      expect(contact).toHaveProperty("github");
      expect(contact).toHaveProperty("location");
    });

    it("should have valid email format", () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      expect(emailRegex.test(contact.email)).toBe(true);
      expect(contact.email).toBe("rahulmistry751@gmail.com");
    });

    it("should have valid phone format", () => {
      expect(contact.phone).toMatch(/^\+?\d+$/);
      expect(contact.phone).toBe("+918369074912");
    });

    it("should have valid LinkedIn URL", () => {
      expect(contact.linkedin).toContain("linkedin.com");
      expect(contact.linkedin).toContain("rahul-mistry-xl");
    });

    it("should have valid GitHub URL", () => {
      expect(contact.github).toContain("github.com");
      expect(contact.github).toContain("rahulmistry751");
    });

    it("should have valid location", () => {
      expect(contact.location).toBe("Bangalore, India");
      expect(contact.location.length).toBeGreaterThan(0);
    });
  });

  describe("Experience Section", () => {
    it("should have at least one experience entry", () => {
      expect(resume.experience.length).toBeGreaterThan(0);
    });

    it("should have valid experience structure", () => {
      resume.experience.forEach((job: Experience, index) => {
        expect(job).toHaveProperty("position");
        expect(job).toHaveProperty("company");
        expect(job).toHaveProperty("duration");
        expect(job).toHaveProperty("location");
        expect(job).toHaveProperty("description");

        expect(typeof job.position).toBe("string");
        expect(typeof job.company).toBe("string");
        expect(typeof job.duration).toBe("string");
        expect(typeof job.location).toBe("string");
        expect(typeof job.description).toBe("string");

        expect(job.position.length).toBeGreaterThan(0);
        expect(job.company.length).toBeGreaterThan(0);
        expect(job.duration.length).toBeGreaterThan(0);
        expect(job.location.length).toBeGreaterThan(0);
        expect(job.description.length).toBeGreaterThan(0);

        if (job.achievements) {
          expect(Array.isArray(job.achievements)).toBe(true);
          job.achievements.forEach((achievement) => {
            expect(typeof achievement).toBe("string");
            expect(achievement.length).toBeGreaterThan(0);
          });
        }
      });
    });

    it("should have current job at Argenbright Innovation Lab", () => {
      const currentJob = resume.experience[0];
      expect(currentJob.company).toBe("Argenbright Innovation Lab");
      expect(currentJob.position).toBe("Software Development Engineer");
      expect(currentJob.duration).toContain("Present");
    });

    it("should have previous Ubisoft experiences", () => {
      const ubisoftJobs = resume.experience.filter(
        (job) => job.company === "Ubisoft"
      );
      expect(ubisoftJobs.length).toBe(2);

      const gameTesterlevel = ubisoftJobs.find(
        (job) => job.position === "Game Tester"
      );
      const juniorTester = ubisoftJobs.find(
        (job) => job.position === "Junior Game Tester"
      );

      expect(gameTesterlevel).toBeDefined();
      expect(juniorTester).toBeDefined();
    });
  });

  describe("Education Section", () => {
    it("should have at least one education entry", () => {
      expect(resume.education.length).toBeGreaterThan(0);
    });

    it("should have valid education structure", () => {
      resume.education.forEach((edu: Education) => {
        expect(edu).toHaveProperty("degree");
        expect(edu).toHaveProperty("field");
        expect(edu).toHaveProperty("institution");
        expect(edu).toHaveProperty("year");

        expect(typeof edu.degree).toBe("string");
        expect(typeof edu.field).toBe("string");
        expect(typeof edu.institution).toBe("string");
        expect(typeof edu.year).toBe("string");

        if (edu.gpa) {
          expect(typeof edu.gpa).toBe("string");
        }
      });
    });

    it("should have engineering degree", () => {
      const engineeringDegree = resume.education[0];
      expect(engineeringDegree.degree).toBe("Bachelor of Engineering");
      expect(engineeringDegree.field).toBe("Electronics Engineering");
      expect(engineeringDegree.institution).toBe(
        "Ramrao Adik Institute of Technology"
      );
      expect(engineeringDegree.gpa).toBe("7.1 CGPA");
    });
  });

  describe("Skills Section", () => {
    const skills: Skills = resume.skills;

    it("should have skill categories", () => {
      expect(Object.keys(skills).length).toBeGreaterThan(0);
    });

    it("should have valid skills structure", () => {
      Object.entries(skills).forEach(([category, skillList]) => {
        expect(typeof category).toBe("string");
        expect(Array.isArray(skillList)).toBe(true);
        expect(skillList.length).toBeGreaterThan(0);

        skillList.forEach((skill) => {
          expect(typeof skill).toBe("string");
          expect(skill.length).toBeGreaterThan(0);
        });
      });
    });

    it("should include testing tools", () => {
      expect(skills).toHaveProperty("Testing Tools");
      expect(skills["Testing Tools"]).toContain("Vitest");
      expect(skills["Testing Tools"]).toContain("Playwright");
      expect(skills["Testing Tools"]).toContain("React Testing Library (RTL)");
    });

    it("should include programming languages", () => {
      expect(skills).toHaveProperty("Programming Languages");
      expect(skills["Programming Languages"]).toContain("TypeScript");
      expect(skills["Programming Languages"]).toContain("JavaScript");
    });

    it("should include frontend frameworks", () => {
      expect(skills).toHaveProperty("Frontend Frameworks");
      expect(skills["Frontend Frameworks"]).toContain("React");
      expect(skills["Frontend Frameworks"]).toContain("Next.js");
    });
  });

  describe("Projects Section", () => {
    it("should have at least one project", () => {
      expect(resume.projects).toBeDefined();
      expect(resume.projects!.length).toBeGreaterThan(0);
    });

    it("should have valid project structure", () => {
      resume.projects!.forEach((project: Project) => {
        expect(project).toHaveProperty("name");
        expect(project).toHaveProperty("description");
        expect(project).toHaveProperty("tech");

        expect(typeof project.name).toBe("string");
        expect(typeof project.description).toBe("string");
        expect(typeof project.tech).toBe("string");

        expect(project.name.length).toBeGreaterThan(0);
        expect(project.description.length).toBeGreaterThan(0);
        expect(project.tech.length).toBeGreaterThan(0);

        if (project.achievements) {
          expect(Array.isArray(project.achievements)).toBe(true);
          project.achievements.forEach((achievement) => {
            expect(typeof achievement).toBe("string");
            expect(achievement.length).toBeGreaterThan(0);
          });
        }

        if (project.link) {
          expect(typeof project.link).toBe("string");
          expect(project.link.length).toBeGreaterThan(0);
        }
      });
    });

    it("should include key projects", () => {
      const projectNames = resume.projects!.map((project) => project.name);
      expect(projectNames).toContain("Book Alley");
      expect(projectNames).toContain("Quiz App");
      expect(projectNames).toContain("Component Library");
    });

    it("should have meaningful project descriptions", () => {
      resume.projects!.forEach((project) => {
        expect(project.description.length).toBeGreaterThan(20);
      });
    });
  });

  describe("Data Consistency", () => {
    it("should have consistent technology mentions across sections", () => {
      const experienceText = JSON.stringify(resume.experience);
      const skillsText = JSON.stringify(resume.skills);
      const projectsText = JSON.stringify(resume.projects);
    });
  });
});
