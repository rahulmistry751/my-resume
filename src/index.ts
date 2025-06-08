#!/usr/bin/env node

import chalk from "chalk";
import boxen from "boxen";
import { resume } from "./resume.js";
import type { Resume, Experience, Education, Project } from "./types.js";

class ResumeRenderer {
  private resume: Resume;

  constructor(resumeData: Resume) {
    this.resume = resumeData;
  }

  private createHeader(): string {
    return chalk.bold.cyan(`
                                           ${this.resume.name}                                   
                                           ${this.resume.title}                                
╚═══════════════════════════════════════════════════════════════════════════════╝
    `);
  }

  private createContact(): string {
    return chalk.yellow(`
📧 Email: ${this.resume.contact.email}
📱 Phone: ${this.resume.contact.phone}
🌐 LinkedIn: ${this.resume.contact.linkedin}
🔗 GitHub: ${this.resume.contact.github}
📍 Location: ${this.resume.contact.location}
    `);
  }

  private createAbout(): string {
    return chalk.white(`
${chalk.bold.green("ABOUT")}
${chalk.dim("─".repeat(80))}
${this.resume.about}
    `);
  }

  private createExperience(): string {
    const experienceEntries = this.resume.experience
      .map(
        (job: Experience) => `
${chalk.bold.yellow(job.position)} at ${chalk.bold.blue(job.company)}
${chalk.dim(job.duration)} | ${chalk.dim(job.location)}
${job.description}
${
  job.achievements
    ? job.achievements.map((achievement) => `• ${achievement}`).join("\n")
    : ""
}
    `
      )
      .join("\n");

    return chalk.white(`
${chalk.bold.green("EXPERIENCE")}
${chalk.dim("─".repeat(80))}
${experienceEntries}
    `);
  }

  private createEducation(): string {
    const educationEntries = this.resume.education
      .map(
        (edu: Education) => `
${chalk.bold.yellow(edu.degree)} in ${chalk.bold.blue(edu.field)}
${edu.institution} | ${chalk.dim(edu.year)}
${edu.gpa ? `GPA: ${edu.gpa}` : ""}
    `
      )
      .join("\n");

    return chalk.white(`
${chalk.bold.green("EDUCATION")}
${chalk.dim("─".repeat(80))}
${educationEntries}
    `);
  }

  private createSkills(): string {
    const skillsEntries = Object.entries(this.resume.skills)
      .map(
        ([category, skillList]) => `
${chalk.bold.yellow(category)}: ${skillList.join(", ")}
    `
      )
      .join("");

    return chalk.white(`
${chalk.bold.green("SKILLS")}
${chalk.dim("─".repeat(80))}
${skillsEntries}
    `);
  }

  private createProjects(): string {
    if (!this.resume.projects || this.resume.projects.length === 0) {
      return "";
    }

    const projectEntries = this.resume.projects
      .map(
        (project: Project) => `
${chalk.bold.yellow(project.name)} | ${chalk.dim(project.tech)}
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

    return chalk.white(`
${chalk.bold.green("KEY PROJECTS")}
${chalk.dim("─".repeat(80))}
${projectEntries}
    `);
  }

  private createFooter(): string {
    return chalk.dim(`
${"─".repeat(80)}
${chalk.italic("Generated via npx @rahul-mistry-dev")}
${chalk.italic("Last updated: " + new Date().toLocaleDateString())}
    `);
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

    // Display in a nice box
    console.log(
      boxen(fullResume, {
        padding: 1,
        margin: 1,
        borderStyle: "double",
        borderColor: "cyan",
      })
    );

    // Add some interactive elements
    console.log(
      chalk.bold.magenta(
        "\n🚀 Want to connect? Reach out via LinkedIn or email!"
      )
    );
    console.log(
      chalk.dim(
        "💡 Tip: Check out my GitHub for more projects and contributions."
      )
    );
    console.log(
      chalk.cyan("🎯 Open to exciting opportunities in full-stack development!")
    );
  }
}

// Main execution
function main(): void {
  try {
    const renderer = new ResumeRenderer(resume);
    renderer.render();
  } catch (error) {
    console.error(chalk.red("Error displaying resume:"), error);
    process.exit(1);
  }
}

// Run the resume display
main();
