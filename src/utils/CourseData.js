import m1 from "../assets/Compaines/ansible.webp";
import m2 from "../assets/Compaines/aws.webp";
import m3 from "../assets/Compaines/azure.webp";
import m4 from "../assets/Compaines/Chef.webp";
import m5 from "../assets/Compaines/docker.webp";
import m6 from "../assets/Compaines/git.webp";
import m7 from "../assets/Compaines/jenkins.webp";
import m8 from "../assets/Compaines/kubernetes.webp";
import m9 from "../assets/Compaines/linux.webp";
import m10 from "../assets/Compaines/nexus.webp";
import m11 from "../assets/Compaines/terraform.webp";
import m12 from "../assets/Compaines/slack.webp";
import m13 from "../assets/Compaines/trello.webp";
import m14 from "../assets/Compaines/azure.webp";
import m15 from "../assets/Compaines/cgpt.webp";
import m16 from "../assets/Compaines/githubgl.png";
import m17 from "../assets/Compaines/seleniu.webp";

import javabanner from "../assets/javabanner.webp";
import uiuxbanner from "../assets/uiuximage.jpg";


export const courseData = [
  {
    course: "java",
    headerTitle: "Java Training & Certification",
    headerImage: javabanner,
    title: "Java Course Curriculum",
    subTitle: "It stretches your mind, think better and create even better.",
    courseList: [
      "Fundamentals of IT",
      "Core JAVA",
      "Advanced JAVA",
      "SpringBoot & MicroServices",
      "DevOps & Cloud For JAVA",
    ],
    accordionData: [
      {
        maintitle: "Fundamentals of IT",
        subdata: [
          {
            module: "Module 1",
            title: "Applications & Web Technologies",
            topics: [
              {
                name: "1. What is an Application?",
                description: "Overview of applications and their significance.",
              },
              {
                name: "2. Types of Applications",
                description:
                  "Classification and examples of various application types.",
              },
              {
                name: "3. Fundamentals of Web Applications",
                description:
                  "Basic concepts and components of web applications.",
              },
              {
                name: "4. Web Application Architecture",
                description:
                  "Structure and design patterns in web application architecture.",
              },
              {
                name: "5. Web Technologies used in Projects",
                description:
                  "Key technologies and frameworks used in web application development.",
              },
            ],
          },
          {
            module: "Module 2",
            title: "Software Development Life Cycle(SDLC)",
            topics: [
              {
                name: "1. Introduction to Software Development Life Cycle",
                description: "The phases, importance, and overview of SDLC.",
              },
              {
                name: "2. Application Lifecycle Management - ALM",
                description: "Tools, processes, and overview of ALM.",
              },
              {
                name: "3. SDLC Methodologies",
                description:
                  "Examination of different methodologies used in software development.",
              },
              {
                name: "4. DevOps Process",
                description:
                  "Understanding the principles, practices, and benefits of DevOps.",
              },
            ],
          },
          {
            module: "Module 3",
            title: "Agile and Scrum",
            topics: [
              {
                name: "1. Introduction To Agile & Scrum",
                description:
                  "Fundamental overview of Agile methodologies and the Scrum framework.",
              },
              {
                name: "2. The Principles of Agile Methodology",
                description:
                  "Core principles of Agile focusing on iterative development and customer collaboration.",
              },
              {
                name: "3. Scrum Framework: Roles, Artifacts, and Events",
                description:
                  "Key components of Scrum, including its roles, artifacts, and structured events.",
              },
              {
                name: "4. Implementing Agile with Scrum",
                description:
                  "Strategies for applying Agile and Scrum practices in software development projects.",
              },
              {
                name: "5. Agile Project Management Best Practices",
                description:
                  "Essential practices for leading Agile projects, emphasizing communication and continuous improvement.",
              },
            ],
          },
        ],
      },
      {
        maintitle: "Core Java",
        subdata: [
          {
            module: "Module 1",
            title: "Introduction to Java",
            topics: [
              {
                name: "1. History and key features of Java",
              },
              {
                name: "2. Java compared to other programming languages",
              },
              {
                name: "3. Installation of Java and IDE setup",
              },
              {
                name: "4. Writing and running the Hello World program",
              },
              {
                name: "5. Overview of JVM, JRE, and JDK",
              },
            ],
          },
          {
            module: "Module 2",
            title: "Understanding Java's Core",
            topics: [
              {
                name: "1. Variables, data types, and operators in Java",
              },
              {
                name: "2. Control structures including loops and conditional statements",
              },
              {
                name: "3. Basic Input/Output operations in Java",
              },
              {
                name: "4. Java coding conventions and best practices",
              },
            ],
          },
          {
            module: "Module 3",
            title: "Object-Oriented Programming Basics",
            topics: [
              {
                name: "1. Introduction to classes, objects, and methods",
              },
              {
                name: "2. Understanding inheritance and its types",
              },
              {
                name: "3. Exploring polymorphism: method overloading and overriding",
              },
              {
                name: "4. Abstract classes and interfaces",
              },
            ],
          },
          {
            module: "Module 4",
            title: " Deep Dive into OOPS",
            topics: [
              {
                name: "1. Encapsulation and its importance",
              },
              {
                name: "2. Access modifiers: public, private, protected, and default",
              },
              {
                name: "3. Non-access modifiers: static, final, abstract, synchronized",
              },
              {
                name: "4. Constructors, destructors, and their roles in Java classes",
              },
            ],
          },
          {
            module: "Module 5",
            title: "Java Data Management",
            topics: [
              {
                name: "1. Working with arrays and array operations",
              },
              {
                name: "2. String manipulation with Strings and StringBuilder",
              },
              {
                name: "3. Basics of regular expressions in Java",
              },
              {
                name: "4. Introduction to the Collections framework",
              },
            ],
          },
        ],
      },
      {
        maintitle: "Advanced Java Development",
        subdata: [
          {
            module: "Module 1",
            title: "Exception Handling and Multithreading",
            topics: [
              {
                name: "1. Basics of exception handling using try-catch and finally",
              },
              {
                name: "2. Creating custom exception classes",
              },
              {
                name: "3. Fundamentals of multithreading and thread lifecycle",
              },
              {
                name: "4. Synchronization and inter-thread communication techniques",
              },
            ],
          },
          {
            module: "Module 2",
            title: "Advanced Data Handling",
            topics: [
              {
                name: "1. Deep dive into the Collections framework",
              },
              {
                name: "2. Using generics in Java",
              },
              {
                name: "3. Introduction to Stream API and lambda expressions",
              },
              {
                name: "4. File I/O operations and understanding the New I/O (NIO)",
              },
            ],
          },
          {
            module: "Module 3",
            title: "Java Enterprise Essentials",
            topics: [
              {
                name: "1. Database interactions using JDBC",
              },
              {
                name: "2. Introduction to Servlets and JSP",
              },
              {
                name: "3. Overview of Maven as a build and dependency management tool",
              },
              {
                name: "4. Advanced enterprise patterns and practices",
              },
            ],
          },
          {
            module: "Module 4",
            title: "Working with Hibernate and ORM",
            topics: [
              {
                name: "1. ORM concepts and integration with Hibernate",
              },
              {
                name: "2. Configuration, session management, and advanced querying with Hibernate",
              },
              {
                name: "3. Advanced mapping techniques in Hibernate",
              },
              {
                name: "4. Performance tuning and caching mechanisms",
              },
            ],
          },
          {
            module: "Module 5",
            title: "Introduction to Spring Framework",
            topics: [
              {
                name: "1. Core principles of IoC and DI in Spring",
              },
              {
                name: "2. Building web applications with Spring MVC",
              },
              {
                name: "3. Data access with Spring Data",
              },
              {
                name: "4. Introduction to aspect-oriented programming with Spring AOP",
              },
            ],
          },
        ],
      },
      {
        maintitle: "Spring Boot & MicroServices",
        subdata: [
          {
            module: "Module 1",
            title: "Spring Boot Fundamentals",
            topics: [
              {
                name: "1. Introduction and setup of Spring Boot",
              },
              {
                name: "2. Configuration and customization in Spring Boot",
              },
              {
                name: "3. Developing RESTful services with Spring Boot",
              },
              {
                name: "4. Data access and integration with databases",
              },
            ],
          },
          {
            module: "Module 2",
            title: " Microservices with Spring Boot",
            topics: [
              {
                name: "1. Basics of microservices architecture",
              },
              {
                name: "2. Creating and deploying microservices with Spring Boot",
              },
              {
                name: "3. Implementing service discovery and using an API gateway",
              },
              {
                name: "4. Ensuring fault tolerance and resilience in microservices",
              },
            ],
          },
          {
            module: "Module 3",
            title: " Advanced Spring Boot Features",
            topics: [
              {
                name: "1. Advanced REST API development techniques",
              },
              {
                name: "2. Dockerization of Spring Boot applications",
              },
              {
                name: "3. Overview of Spring Cloud services",
              },
              {
                name: "4. Building reactive microservices with Spring Boot and WebFlux",
              },
            ],
          },
          {
            module: "Module 4",
            title: " Modern Development Practices",
            topics: [
              {
                name: "1. Implementing CI/CD pipelines for Spring Boot applications",
              },
              {
                name: "2. Security practices in Java and Spring applications",
              },
              {
                name: "3. Monitoring and logging in microservices",
              },
              {
                name: "4. Ensuring code quality with static analysis tools",
              },
            ],
          },
          {
            module: "Module 5",
            title: " Reactive Programming and Beyond",
            topics: [
              {
                name: "1. Fundamentals of reactive programming with Spring WebFlux",
              },
              {
                name: "2. Managing backpressure in reactive streams",
              },
              {
                name: "3. Securing reactive applications",
              },
              {
                name: "4. Best practices for developing reactive applications",
              },
            ],
          },
        ],
      },
      {
        maintitle: "Cloud & DevOps For JAVA",
        subdata: [
          {
            module: "Module 1",
            title: " Introduction to Cloud Computing for Developers",
            topics: [
              {
                name: "1. Cloud Computing Basics",
                description:
                  "Understanding cloud computing: Definitions, service models (IaaS, PaaS, SaaS), and deployment models (public, private, hybrid, multicloud).",
              },
              {
                name: "2. Cloud Service Providers Overview",
                description:
                  "Introduction to major cloud platforms (e.g., AWS, Azure, Google Cloud), focusing on their core services relevant to developers.",
              },
              {
                name: "3. Cloud-based Development Environments",
                description:
                  "Setting up and utilizing cloud-based IDEs and development tools to streamline development workflows.",
              },
              {
                name: "4. Deploying Applications on the Cloud",
                description:
                  "Basic concepts of application deployment on the cloud, including containerization basics with Docker and initial orchestration concepts.",
              },
            ],
          },
          {
            module: "Module 2",
            title: " DevOps for Full Stack Developers",
            topics: [
              {
                name: "1. Understanding DevOps",
                description:
                  "The philosophy, practices, and benefits of DevOps in modern software development, emphasizing collaboration, automation, and integration.",
              },
              {
                name: "2. Version Control with Git",
                description:
                  "Deep dive into using Git for source code management, including best practices for branches, commits, merges, and pull requests.",
              },
              {
                name: "3. Continuous Integration/Continuous Deployment (CI/CD)",
                description:
                  "Introduction to CI/CD pipelines, overview of tools ( GitHub Actions), and setting up basic pipelines for automated testing and deployment.",
              },
              {
                name: "4. Monitoring and Feedback",
                description:
                  "Basics of application monitoring, log management, and utilizing feedback for continuous improvement.",
              },
            ],
          },
          {
            module: "Module 3",
            title: " Infrastructure and Configuration Management",
            topics: [
              {
                name: "1. Containers and Docker",
                description:
                  "Introduction to containers, Docker fundamentals, creating Docker https://www.digitaledify.ai/images, and container management basics.",
              },
              {
                name: "2. Managing Application Infrastructure",
                description:
                  "Basic strategies for managing infrastructure as part of the application lifecycle, including introduction to infrastructure as code (IaC) principles.",
              },
            ],
          },
          {
            module: "Module 4",
            title: " Building and Deploying Scalable Web Applications",
            topics: [
              {
                name: "1. Scalable Application Design",
                description:
                  "Principles of designing scalable applications that can grow with user demand, focusing on microservices architecture and stateless application design.",
              },
              {
                name: "2. Cloud-native Services for Developers",
                description:
                  "Leveraging cloud-native services (e.g., AWS Lambda, Azure Functions, Google Cloud Run) for building and deploying applications.",
              },
              {
                name: "3. Databases in the Cloud",
                description:
                  "Overview of cloud database services (SQL and NoSQL) and integrating them into web applications.",
              },
              {
                name: "4. Security Basics in Cloud and DevOps",
                description:
                  "Understanding security best practices in cloud environments and throughout the DevOps pipeline.",
              },
            ],
          },
          {
            module: "Module 5",
            title: " Project Collaboration and DevOps Practices",
            topics: [
              {
                name: "1. Agile and Scrum Methodologies",
                description:
                  "Incorporating Agile and Scrum practices into team collaboration for efficient project management.",
              },
              {
                name: "2. Code Review and Collaboration Tools",
                description:
                  "Utilizing code review processes and collaboration tools GitHub, to enhance code quality and team productivity.",
              },
              {
                name: "3. Automation in Development",
                description:
                  "Exploring automation beyond CI/CD, including automated testing frameworks, database migrations, and environment setup.",
              },
              {
                name: "4. DevOps Culture and Best Practices",
                description:
                  "Cultivating a DevOps culture within teams, embracing continuous learning, and adopting industry best practices for sustainable development.",
              },
            ],
          },
        ],
      },
    ],
    imageData: [
      { id: 1, src: m1 },
      { id: 2, src: m2 },
      { id: 3, src: m3 },
      { id: 4, src: m4 },
      { id: 5, src: m5 },
      { id: 6, src: m6 },
      { id: 7, src: m7 },
      { id: 8, src: m8 },
      { id: 9, src: m9 },
      { id: 10, src: m10 },
      { id: 11, src: m11 },
      { id: 12, src: m12 },
      { id: 13, src: m13 },
      { id: 14, src: m14 },
      { id: 15, src: m15 },
      { id: 16, src: m16 },
      { id: 17, src: m17 },
    ],
  },
  {
    course: "ui_ux_design",
    headerTitle: "UI/UX Design Course Training",
    headerImage: uiuxbanner,
    title: "UI/UX Design Course Curriculum",
    subTitle: "It stretches your mind, think better and create even better.",
    courseList: [
      "Foundations of Design",
      "Design Thinking",
      "Figma for UX",
      "UX Portfolio",
      "Resume Preparation",
    ],
    accordionData: [
      {
        maintitle: "UI/UX Design Course",
        subdata: [
          {
            module: "Module 1",
            title: " Introduction to UI/UX Design",
            topics: [
              {
                description: "Understanding Fundamentals : Learn the basics of UI (User Interface) and UX (User Experience) design.",
              },
              {
                description: "Differentiating Principles : Understand the differences and interdependencies between UI and UX design principles.",
              },
              {
                description:
                  "User-Centered Design : Introduction to user-centered design principles that prioritize the user's needs and experience.",
              },
              {
                description:
                  "Design Tools Overview : Get acquainted with popular design tools and software used in the industry.",
              },

            ],
          },
          {
            module: "Module 2",
            title: " Figma Basics: Interface and Tools",
            topics: [
              {
                description: "Figma Interface : Explore Figma’s Layers panel, Properties panel, Toolbar, and Canvas.",
              },
              {
                description: "Frames vs. Shapes : Understand the differences and appropriate uses of Frames and Shapes in Figma.",
              },
              {
                description:
                  "Basic Tools : Learn to use Selection, Drawing, Text, and Shape tools.",
              },
              {
                description:
                  "Figma Shortcuts : Introduction to keyboard shortcuts that enhance workflow efficiency.",
              },

            ],
          },
          {
            module: "Module 3",
            title: " Advanced Figma Techniques",
            topics: [
              {
                description: "Auto Layout : Understand the purpose, benefits, and usage of Auto Layout.",
              },
              {
                description: "Auto Layout Features : Learn resizing constraints, padding, and spacing.",
              },
              {
                description:
                  "Responsive Design : Practice creating responsive designs using Auto Layout.",
              },
              {
                description:
                  "Command Line Interface",
              },
              {
                description:
                  "Components : Understand the concept of components and their importance; create and use master components and instances.",
              },
              {
                description:
                  "Component Variants : Explore variants for handling design variations and states.",
              },
              {
                description:
                  "Best Practices : Organizing and managing components and variants effectively.",
              },

            ],
          },
          {
            module: "Module 4",
            title: "Design Systems and Component Libraries",
            topics: [
              {
                description: "Introduction to Design Systems : Understand their role in maintaining design consistency.",
              },
              {
                description: "Creating Design Systems in Figma : Organize styles, components, and assets efficiently.",
              },
              {
                description:
                  "Component Libraries : Build and manage libraries for efficient design reuse.",
              },
              {
                description:
                  "Dynamic Content Handling : Implement Auto Layout in component design.",
              },
            ],
          },
          {
            module: "Module 5",
            title: "Prototyping with Advanced Features",
            topics: [
              {

                description: "Interactive Prototypes : Utilize components and variants for creating interactive designs.",
              },
              {
                description: "Advanced Prototyping Features : Learn features such as overlays and interactive transitions.",
              },
              {
                description:
                  "User Testing : Conduct user testing on dynamic components and prototypes.",
              },

            ],
          },
          {
            module: "Module 6",
            title: " Visual Design Principles and UX Laws",
            topics: [
              {
                name: "Part 1: Visual Design Principles",
                description: "Fundamentals of Visual Design : Delve into typography, color theory, layout, and imagery.",
              },
              {
                description: "Creating Engaging Experiences : Understand how these principles contribute to user engagement.",
              },
              {
                description:
                  "Hands-On Exercises : Apply visual design principles in Figma through exercises and projects.",
              },
              {
                name: "Part 2: UX Laws and Guidelines",
                description: "Key UX Laws : Overview of Hick's Law, Fitts's Law, and Gestalt Principles.",
              },
              {
                description: "Influence on User Behavior : Discuss how these laws affect user behavior and perception.",
              },
              {
                description:
                  "Figma Prototypes Analysis : Analyze design choices based on UX laws and guidelines.",
              },

            ],
          },
        ],
      },
      {
        maintitle: "Core JavaUX Portfolio Curriculum",
        subdata: [
          {
            module: "Module 1",
            title: "  Introduction to Design Thinking",
            topics: [
              {
                description: "Definition and Principles : Learn what Design Thinking is and its core principles.",
              },
              {
                description: "Iterative Process : Understand the iterative nature of the Design Thinking process.",
              },
              {
                description:
                  "Industry Applications : Explore how Design Thinking is applied across various industries.",
              },
              {
                description:
                  "Foundational Element : Introduction to empathy as a crucial element in Design Thinking.",
              },
            ],
          },
          {
            module: "Module 2",
            title: "Empathize Phase",
            topics: [
              {
                description: "Purpose and Methods : Understand the purpose and methods of the Empathize phase.",
              },
              {
                description: "User Research Techniques : Conduct interviews, observations, and surveys to gather insights.",
              },
              {
                description:
                  "Empathy Maps and Personas : Develop these tools based on user research findings.",
              },
              {
                description:
                  "Practice Exercises : Hands-on exercises to practice empathy-building skills.",
              },
            ],
          },
          {
            module: "Module 3",
            title: "Define Phase",
            topics: [
              {
                description: "Framing the Problem Statement : Learn to articulate a clear problem statement.",
              },
              {
                description: "Synthesizing Data : Techniques for synthesizing user research data into actionable insights.",
              },
              {
                description:
                  "Brainstorming Solutions : Introduction to brainstorming techniques for generating solutions.",
              },

            ],
          },
          {
            module: "Module 4",
            title: " Ideate Phase",
            topics: [
              {
                description: "Generating Creative Solutions : Understand the purpose of the Ideate phase.",
              },
              {
                description: "Divergent Thinking : Techniques for brainstorming, mind mapping, and sketching.",
              },
              {
                description:
                  "Encouraging Creativity : Encourage wild ideas and fostering a suspension of judgment.",
              },
              {
                description:
                  "Collaborative Exercises : Team-based ideation exercises to enhance creativity.",
              },

            ],
          },
          {
            module: "Module 5",
            title: "  Prototype Phase",
            topics: [
              {
                description: "Building Tangible Solutions : Understanding rapid prototyping techniques.",
              },
              {
                description: "Building Tangible Solutions : Understanding rapid prototyping techniques.",
              },
              {
                description:
                  "Iterative Process : Emphasize the importance of iteration and feedback in prototyping.",
              },

            ],
          },
          {
            module: "Module 6",
            title: "Test Phase ",
            topics: [
              {
                description: "Gathering Feedback : Techniques for usability testing and collecting user feedback.",
              },
              {
                description: "Analyzing Results : Learn to analyze test results and identify areas for improvement.",
              },
              {
                description:
                  "Prototype Iteration : Iteratively refine prototypes based on user feedback.",
              },

            ],
          },
          {
            module: "Module 7",
            title: " Integrating Design Thinking into Practice ",
            topics: [
              {
                description: "Organizational Strategies : Strategies for integrating Design Thinking into an organization’s culture.",
              },
              {
                description: "Overcoming Challenges : Address common challenges in implementing Design Thinking.",
              },
              {
                description:
                  "Case Studies : Examine successful Design Thinking projects.",
              },
              {
                description:
                  "Lifelong Learning : Develop a mindset for continuous learning and innovation through Design Thinking.",
              },

            ],
          },
        ],
      },

    ],
  }
];
