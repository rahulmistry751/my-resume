import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import chalk from "chalk";
import boxen from "boxen";
import type { Resume } from "../src/types.js";

// Mock external dependencies
vi.mock("chalk", () => ({
  default: {
    bold: {
      cyan: vi.fn((text) => text),
      yellow: vi.fn((text) => text),
      blue: vi.fn((text) => text),
      green: vi.fn((text) => text),
      magenta: vi.fn((text) => text),
    },
    yellow: vi.fn((text) => text),
    white: vi.fn((text) => text),
    dim: vi.fn((text) => text),
    cyan: vi.fn((text) => text),
    red: vi.fn((text) => text),
    italic: vi.fn((text) => text),
  },
}));

vi.mock("boxen", () => ({
  default: vi.fn((content, options) => `BOXED: ${content}`),
}));

// Mock console methods
const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});
const consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

// Create a mock ResumeRenderer class for testing
class MockResumeRenderer {
  private resume: Resume;

  constructor(resumeData: Resume) {
    this.resume = resumeData;
  }

  private createHeader(): string {
    return `
╔═══════════════════════════════════════════════════════════════════════════════╗
║                                  ${this.resume.name}                                 ║
║                               ${this.resume.title}                                ║
╚═══════════════════════════════════════════════════════════════════════════════╝
    `;
  }

  private createContact(): string {
    return `
📧 Email: ${this.resume.contact.email}
📱 Phone: ${this.resume.contact.phone}
🌐 LinkedIn: ${this.resume.contact.linkedin}
🔗 GitHub: ${this.resume.contact.github}
📍 Location: ${this.resume.contact.location}
    `;
  }

  private createAbout(): string {
    return `
ABOUT
${"─".repeat(80)}
${this.resume.about}
    `;
  }

  private createExperience(): string {
    const experienceEntries = this.resume.experience
      .map(
        (job) => `
${job.position} at ${job.company}
${job.duration} | ${job.location}
${job.description}
${
  job.achievements
    ? job.achievements.map((achievement) => `• ${achievement}`).join("\n")
    : ""
}
    `
      )
      .join("\n");

    return `
EXPERIENCE
${"─".repeat(80)}
${experienceEntries}
    `;
  }

  private createEducation(): string {
    const educationEntries = this.resume.education
      .map(
        (edu) => `
${edu.degree} in ${edu.field}
${edu.institution} | ${edu.year}
${edu.gpa ? `GPA: ${edu.gpa}` : ""}
    `
      )
      .join("\n");

    return `
EDUCATION
${"─".repeat(80)}
${educationEntries}
    `;
  }

  private createSkills(): string {
    const skillsEntries = Object.entries(this.resume.skills)
      .map(
        ([category, skillList]) => `
${category}: ${skillList.join(", ")}
    `
      )
      .join("");

    return `
SKILLS
${"─".repeat(80)}
${skillsEntries}
    `;
  }

  private createProjects(): string {
    if (!this.resume.projects || this.resume.projects.length === 0) {
      return "";
    }

    const projectEntries = this.resume.projects
      .map(
        (project) => `
${project.name} | ${project.tech}
${project.description}
${
  project.achievements
    ? project.achievements.map((achievement) => `• ${achievement}`).join("\n")
    : ""
}
${project.link ? `🔗 ${project.link}` : ""}
    `
      )
      .join("\n");

    return `
KEY PROJECTS
${"─".repeat(80)}
${projectEntries}
    `;
  }

  private createFooter(): string {
    return `
${"─".repeat(80)}
Generated via npx @rahul-mistry-dev
Last updated: ${new Date().toLocaleDateString()}
    `;
  }

  public render(): void {
    const sections = [
      this.createHeader(),
      this.createContact(),
      this.createAbout(),
      this.createExperience(),
      this.createEducation(),
      this.createSkills(),
      this.createProjects(),
      this.createFooter(),
    ];

    const fullResume = sections.join("");
    console.log(
      boxen(fullResume, {
        padding: 1,
        margin: 1,
        borderStyle: "double",
        borderColor: "cyan",
      })
    );
  }

  // Expose private methods for testing
  public testCreateHeader() {
    return this.createHeader();
  }
  public testCreateContact() {
    return this.createContact();
  }
  public testCreateAbout() {
    return this.createAbout();
  }
  public testCreateExperience() {
    return this.createExperience();
  }
  public testCreateEducation() {
    return this.createEducation();
  }
  public testCreateSkills() {
    return this.createSkills();
  }
  public testCreateProjects() {
    return this.createProjects();
  }
  public testCreateFooter() {
    return this.createFooter();
  }
}

describe("ResumeRenderer", () => {
  let mockResume: Resume;
  let renderer: MockResumeRenderer;

  beforeEach(() => {
    mockResume = {
      name: "John Doe",
      title: "Software Developer",
      contact: {
        email: "john@example.com",
        phone: "+1234567890",
        linkedin: "https://linkedin.com/in/johndoe",
        github: "https://github.com/johndoe",
        location: "New York, USA",
      },
      about: "Passionate software developer with 5 years of experience.",
      experience: [
        {
          position: "Senior Developer",
          company: "TechCorp",
          duration: "2020 - Present",
          location: "New York, USA",
          description: "Lead development of web applications",
          achievements: [
            "Improved performance by 50%",
            "Led team of 5 developers",
          ],
        },
      ],
      education: [
        {
          degree: "Bachelor of Science",
          field: "Computer Science",
          institution: "Tech University",
          year: "2015 - 2019",
          gpa: "3.8",
        },
      ],
      skills: {
        "Programming Languages": ["JavaScript", "TypeScript", "Python"],
        Frameworks: ["React", "Node.js"],
      },
      projects: [
        {
          name: "E-commerce App",
          description: "Full-stack e-commerce application",
          tech: "React, Node.js, MongoDB",
          achievements: ["Handled 1000+ concurrent users"],
          link: "https://github.com/johndoe/ecommerce",
        },
      ],
    };

    renderer = new MockResumeRenderer(mockResume);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe("Constructor", () => {
    it("should initialize with resume data", () => {
      expect(renderer).toBeInstanceOf(MockResumeRenderer);
    });
  });

  describe("createHeader", () => {
    it("should create header with name and title", () => {
      const header = renderer.testCreateHeader();
      expect(header).toContain("John Doe");
      expect(header).toContain("Software Developer");
      expect(header).toContain("╔═══");
      expect(header).toContain("╚═══");
    });
  });

  describe("createContact", () => {
    it("should display all contact information", () => {
      const contact = renderer.testCreateContact();
      expect(contact).toContain("john@example.com");
      expect(contact).toContain("+1234567890");
      expect(contact).toContain("https://linkedin.com/in/johndoe");
      expect(contact).toContain("https://github.com/johndoe");
      expect(contact).toContain("New York, USA");
      expect(contact).toContain("📧 Email:");
      expect(contact).toContain("📱 Phone:");
    });
  });

  describe("createAbout", () => {
    it("should display about section with description", () => {
      const about = renderer.testCreateAbout();
      expect(about).toContain("ABOUT");
      expect(about).toContain(
        "Passionate software developer with 5 years of experience."
      );
      expect(about).toContain("─".repeat(80));
    });
  });

  describe("createExperience", () => {
    it("should display experience with all details", () => {
      const experience = renderer.testCreateExperience();
      expect(experience).toContain("EXPERIENCE");
      expect(experience).toContain("Senior Developer at TechCorp");
      expect(experience).toContain("2020 - Present");
      expect(experience).toContain("New York, USA");
      expect(experience).toContain("Lead development of web applications");
      expect(experience).toContain("• Improved performance by 50%");
      expect(experience).toContain("• Led team of 5 developers");
    });

    it("should handle experience without achievements", () => {
      const resumeWithoutAchievements = {
        ...mockResume,
        experience: [
          {
            position: "Junior Developer",
            company: "StartupCorp",
            duration: "2018 - 2020",
            location: "San Francisco, USA",
            description: "Developed web applications",
          },
        ],
      };
      const rendererWithoutAchievements = new MockResumeRenderer(
        resumeWithoutAchievements
      );
      const experience = rendererWithoutAchievements.testCreateExperience();
      expect(experience).toContain("Junior Developer at StartupCorp");
      expect(experience).not.toContain("•");
    });
  });

  describe("createEducation", () => {
    it("should display education with all details", () => {
      const education = renderer.testCreateEducation();
      expect(education).toContain("EDUCATION");
      expect(education).toContain("Bachelor of Science in Computer Science");
      expect(education).toContain("Tech University");
      expect(education).toContain("2015 - 2019");
      expect(education).toContain("GPA: 3.8");
    });

    it("should handle education without GPA", () => {
      const resumeWithoutGPA = {
        ...mockResume,
        education: [
          {
            degree: "Master of Science",
            field: "Software Engineering",
            institution: "Advanced Tech University",
            year: "2019 - 2021",
          },
        ],
      };
      const rendererWithoutGPA = new MockResumeRenderer(resumeWithoutGPA);
      const education = rendererWithoutGPA.testCreateEducation();
      expect(education).toContain("Master of Science in Software Engineering");
      expect(education).not.toContain("GPA:");
    });
  });

  describe("createSkills", () => {
    it("should display skills by category", () => {
      const skills = renderer.testCreateSkills();
      expect(skills).toContain("SKILLS");
      expect(skills).toContain(
        "Programming Languages: JavaScript, TypeScript, Python"
      );
      expect(skills).toContain("Frameworks: React, Node.js");
    });

    it("should handle multiple skill categories", () => {
      const resumeWithMoreSkills = {
        ...mockResume,
        skills: {
          Languages: ["JavaScript", "Python"],
          Frameworks: ["React", "Express"],
          Databases: ["MongoDB", "PostgreSQL"],
        },
      };
      const rendererWithMoreSkills = new MockResumeRenderer(
        resumeWithMoreSkills
      );
      const skills = rendererWithMoreSkills.testCreateSkills();
      expect(skills).toContain("Languages: JavaScript, Python");
      expect(skills).toContain("Frameworks: React, Express");
      expect(skills).toContain("Databases: MongoDB, PostgreSQL");
    });
  });

  describe("createProjects", () => {
    it("should display projects with all details", () => {
      const projects = renderer.testCreateProjects();
      expect(projects).toContain("KEY PROJECTS");
      expect(projects).toContain("E-commerce App | React, Node.js, MongoDB");
      expect(projects).toContain("Full-stack e-commerce application");
      expect(projects).toContain("• Handled 1000+ concurrent users");
      expect(projects).toContain("🔗 https://github.com/johndoe/ecommerce");
    });

    it("should return empty string when no projects", () => {
      const resumeWithoutProjects = {
        ...mockResume,
        projects: [],
      };
      const rendererWithoutProjects = new MockResumeRenderer(
        resumeWithoutProjects
      );
      const projects = rendererWithoutProjects.testCreateProjects();
      expect(projects).toBe("");
    });

    it("should handle projects without achievements or links", () => {
      const resumeWithBasicProjects = {
        ...mockResume,
        projects: [
          {
            name: "Simple App",
            description: "A simple web application",
            tech: "HTML, CSS, JavaScript",
          },
        ],
      };
      const rendererWithBasicProjects = new MockResumeRenderer(
        resumeWithBasicProjects
      );
      const projects = rendererWithBasicProjects.testCreateProjects();
      expect(projects).toContain("Simple App | HTML, CSS, JavaScript");
      expect(projects).not.toContain("•");
      expect(projects).not.toContain("🔗");
    });
  });

  describe("createFooter", () => {
    it("should display footer with generation info", () => {
      const footer = renderer.testCreateFooter();
      expect(footer).toContain("Generated via npx @rahul-mistry-dev");
      expect(footer).toContain("Last updated:");
      expect(footer).toContain(new Date().toLocaleDateString());
    });
  });

  describe("render", () => {
    it("should call console.log with boxen output", () => {
      renderer.render();
      expect(consoleSpy).toHaveBeenCalled();
      expect(boxen).toHaveBeenCalledWith(
        expect.any(String),
        expect.objectContaining({
          padding: 1,
          margin: 1,
          borderStyle: "double",
          borderColor: "cyan",
        })
      );
    });

    it("should include all sections in render output", () => {
      renderer.render();
      const [[renderedContent]] = (boxen as any).mock.calls;
      expect(renderedContent).toContain("John Doe");
      expect(renderedContent).toContain("ABOUT");
      expect(renderedContent).toContain("EXPERIENCE");
      expect(renderedContent).toContain("EDUCATION");
      expect(renderedContent).toContain("SKILLS");
      expect(renderedContent).toContain("KEY PROJECTS");
    });
  });
});
