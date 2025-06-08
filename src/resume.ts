import type { Resume } from "./types.js";

export const resume: Resume = {
  name: "RAHUL SANTOSH MISTRY",
  title: "Software Development Engineer | Full Stack Developer",

  contact: {
    email: "rahulmistry751@gmail.com",
    phone: "+918369074912",
    linkedin: "https://linkedin.com/in/rahul-mistry-xl", // Update with your actual LinkedIn handle
    github: "https://github.com/rahulmistry751", // Update with your actual GitHub username
    location: "Bangalore, India",
  },

  about:
    "Experienced Software Development Engineer with 2+ years of expertise in full-stack development. Specialized in React, Next.js, TypeScript, and cloud technologies. Proven track record in leading teams, implementing testing strategies, and building scalable applications with modern frameworks and tools.",

  experience: [
    {
      position: "Software Development Engineer",
      company: "Argenbright Innovation Lab",
      duration: "Dec 2022 - Present",
      location: "Bangalore, India",
      description:
        "Lead and manage both frontend and backend teams, ensuring seamless collaboration and timely delivery across projects.",
      achievements: [
        "Implemented unit testing practices using Vitest, improving test coverage and reliability across the codebase",
        "Introduced Playwright for end-to-end testing in Next.js applications, reducing manual testing time by 70%",
        "Integrated real-time chat functionality (one-on-one, group, and channel) using third-party React hooks",
        "Implemented Single Sign-On (SSO) with Azure Active Directory, improving user experience and security",
        "Ensured WCAG 2.1 accessibility compliance using semantic HTML and ARIA roles",
        "Designed microservices workflow with AWS Lambda functions for automated email generation",
        "Utilized pdfmake to dynamically generate PDF proposals, improving client engagement",
      ],
    },
    {
      position: "Game Tester",
      company: "Ubisoft",
      duration: "Mar 2022 - Dec 2022",
      location: "India",
      description:
        "Led a dynamic team, overseeing task assignments and ensuring alignment with project objectives.",
      achievements: [
        "Enhanced product quality by identifying and addressing edge case scenarios",
        "Ensured smoother user experience and minimized disruptions",
        "Maintained team coordination and met project deadlines consistently",
      ],
    },
    {
      position: "Junior Game Tester",
      company: "Ubisoft",
      duration: "Oct 2020 - Mar 2022",
      location: "India",
      description:
        "Maintained organized and efficient bug tracking systems for optimal performance.",
      achievements: [
        "Used JIRA for comprehensive bug tracking and resolution",
        "Swiftly addressed issues to maintain optimal performance and user satisfaction",
        "Developed systematic approach to quality assurance testing",
      ],
    },
  ],

  education: [
    {
      degree: "Bachelor of Engineering",
      field: "Electronics Engineering",
      institution: "Ramrao Adik Institute of Technology",
      year: "2016 - 2020",
      gpa: "7.1 CGPA",
    },
  ],

  skills: {
    "Programming Languages": [
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Go/Golang",
      "Python",
    ],
    "Frontend Frameworks": [
      "React",
      "React Native",
      "Next.js",
      "Redux",
      "Expo",
    ],
    "Styling & UI": ["MUI", "Tailwind CSS", "HTML", "CSS"],
    "Testing Tools": [
      "Vitest",
      "Playwright",
      "React Testing Library (RTL)",
      "Jest",
    ],
    "Backend & APIs": ["Nest.js", "Prisma", "GraphQL"],
    Databases: ["MySQL"],
    "Cloud & DevOps": ["Docker", "Kubernetes", "AWS", "Azure Active Directory"],
    "Tools & Others": ["GitHub", "JIRA"],
  },

  projects: [
    {
      name: "Book Alley",
      description:
        "E-commerce web-app designed as the best alley for bibliophiles with complete shopping functionality",
      tech: "React, React Router, Mockbee mock backend, Razorpay",
      achievements: [
        "Implemented authentication, cart, and wishlist functionality",
        "Integrated Razorpay Standard Web Checkout for payments",
        "Built with self-implemented component library",
      ],
    },
    {
      name: "Quiz App",
      description:
        "Interactive quiz application specifically designed for Harry Potter enthusiasts",
      tech: "React, React Router, Firebase",
      achievements: [
        "Implemented dark mode functionality",
        "Created category-wise quiz organization",
        "Built with Firebase backend integration",
      ],
    },
    {
      name: "Component Library",
      description:
        "Simple, customizable mini CSS library for rapid development",
      tech: "CSS, JavaScript",
      achievements: [
        "Created customizable and reusable components",
        "Included comprehensive utility classes",
        "Designed for easy integration and customization",
      ],
    },
  ],
};
