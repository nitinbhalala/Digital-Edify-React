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
import pythonbanr from "../assets/pythonbanr.webp";
import reactbanr from "../assets/reactbanr.webp";

//services
import classTraining from "../assets/Services/class-training.jpg";
import onlineTraining from "../assets/Services/onlinetraining.webp";
import weekendTraining from "../assets/Services/projecthub.jpg";
import corporateTraining from "../assets/Services/corporate.webp";
import oneToOneTraining from "../assets/Services/onetoone.jpg";

export const courseData = [
  {
    course: "java",
    headerTitle: "Java Training & Certification",
    headerImage: javabanner,
    courseTitle: "Why Java Training With Digital Edify?",
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
    courseTitle: "Why UI/UX Design Course?",
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
                description:
                  "Understanding Fundamentals : Learn the basics of UI (User Interface) and UX (User Experience) design.",
              },
              {
                description:
                  "Differentiating Principles : Understand the differences and interdependencies between UI and UX design principles.",
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
                description:
                  "Figma Interface : Explore Figma’s Layers panel, Properties panel, Toolbar, and Canvas.",
              },
              {
                description:
                  "Frames vs. Shapes : Understand the differences and appropriate uses of Frames and Shapes in Figma.",
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
                description:
                  "Auto Layout : Understand the purpose, benefits, and usage of Auto Layout.",
              },
              {
                description:
                  "Auto Layout Features : Learn resizing constraints, padding, and spacing.",
              },
              {
                description:
                  "Responsive Design : Practice creating responsive designs using Auto Layout.",
              },
              {
                description: "Command Line Interface",
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
                description:
                  "Introduction to Design Systems : Understand their role in maintaining design consistency.",
              },
              {
                description:
                  "Creating Design Systems in Figma : Organize styles, components, and assets efficiently.",
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
                description:
                  "Interactive Prototypes : Utilize components and variants for creating interactive designs.",
              },
              {
                description:
                  "Advanced Prototyping Features : Learn features such as overlays and interactive transitions.",
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
                description:
                  "Fundamentals of Visual Design : Delve into typography, color theory, layout, and imagery.",
              },
              {
                description:
                  "Creating Engaging Experiences : Understand how these principles contribute to user engagement.",
              },
              {
                description:
                  "Hands-On Exercises : Apply visual design principles in Figma through exercises and projects.",
              },
              {
                name: "Part 2: UX Laws and Guidelines",
                description:
                  "Key UX Laws : Overview of Hick's Law, Fitts's Law, and Gestalt Principles.",
              },
              {
                description:
                  "Influence on User Behavior : Discuss how these laws affect user behavior and perception.",
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
                description:
                  "Definition and Principles : Learn what Design Thinking is and its core principles.",
              },
              {
                description:
                  "Iterative Process : Understand the iterative nature of the Design Thinking process.",
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
                description:
                  "Purpose and Methods : Understand the purpose and methods of the Empathize phase.",
              },
              {
                description:
                  "User Research Techniques : Conduct interviews, observations, and surveys to gather insights.",
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
                description:
                  "Framing the Problem Statement : Learn to articulate a clear problem statement.",
              },
              {
                description:
                  "Synthesizing Data : Techniques for synthesizing user research data into actionable insights.",
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
                description:
                  "Generating Creative Solutions : Understand the purpose of the Ideate phase.",
              },
              {
                description:
                  "Divergent Thinking : Techniques for brainstorming, mind mapping, and sketching.",
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
                description:
                  "Building Tangible Solutions : Understanding rapid prototyping techniques.",
              },
              {
                description:
                  "Building Tangible Solutions : Understanding rapid prototyping techniques.",
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
                description:
                  "Gathering Feedback : Techniques for usability testing and collecting user feedback.",
              },
              {
                description:
                  "Analyzing Results : Learn to analyze test results and identify areas for improvement.",
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
                description:
                  "Organizational Strategies : Strategies for integrating Design Thinking into an organization’s culture.",
              },
              {
                description:
                  "Overcoming Challenges : Address common challenges in implementing Design Thinking.",
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
    course: "python",
    headerTitle: "Python Training & Certification",
    headerImage: pythonbanr,
    courseTitle: "Why Python Training With Digital Edify?",
    title: "Python Course Curriculum",
    subTitle: "It stretches your mind, think better and create even better.",
    courseList: [
      "Fundamentals of IT",
      "Basic Python",
      "Advanced Python",
      "Django Python Framework",
      "Python for DataScience",
      "DevOps & Cloud for Python Dev",
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
        maintitle: "Basic Python",
        subdata: [
          {
            module: "Module 1",
            title: "Python Introduction and Setup",
            topics: [
              {
                name: "1. Python's applicability across various domains",
              },
              {
                name: "2. Installation, environment setup, and path configuration",
              },
              {
                name: "3.  Writing and executing the first Python script",
              },
            ],
          },
          {
            module: "Module 2",
            title: "Python Fundamentals",
            topics: [
              {
                name: "1. Keywords, Identifiers, and basic syntax",
              },
              {
                name: "2. Variables, Data Types, and Operators",
              },
              {
                name: "3. Introduction to Input/Output operations",
              },
            ],
          },
          {
            module: "Module 3",
            title: "Control Structures and Functions",
            topics: [
              {
                name: "1. Conditional Statements: If, Elif, Else",
              },
              {
                name: "2. Loops: For, While, and control flow mechanisms",
              },
              {
                name: "3. Understanding and defining Functions in Python",
              },
            ],
          },
          {
            module: "Module 4",
            title: " Strings and Collections",
            topics: [
              {
                name: "1.  String operations and manipulations",
              },
              {
                name: "2. Lists and their operations",
              },
              {
                name: "3. Introduction to Tuples and Sets",
              },
            ],
          },
          {
            module: "Module 5",
            title: "Diving Deeper into Collections",
            topics: [
              {
                name: "1. Detailed exploration of Dictionaries",
              },
              {
                name: "2. Frozen Sets and their use-cases",
              },
              {
                name: "3. Advanced list comprehensions",
              },
            ],
          },
        ],
      },
      {
        maintitle: "Advanced Python",
        subdata: [
          {
            module: "Module 1",
            title: "Advanced Collections and Sequences",
            topics: [
              {
                name: "1. Advanced methods in Lists, Tuples, and Dictionaries",
              },
              {
                name: "2. Sets, Frozen Sets, and operations",
              },
              {
                name: "3. Comprehensive look into Python Collections",
              },
            ],
          },
          {
            module: "Module 2",
            title: "Functional Programming in Python",
            topics: [
              {
                name: "1. Exploring types of Functions and Arguments",
              },
              {
                name: "2. Lambda functions and their applications",
              },
              {
                name: "3. Map, Reduce, and Filter functions",
              },
            ],
          },
          {
            module: "Module 3",
            title: "File Handling and Modules",
            topics: [
              {
                name: "1. File operations and handling different file formats",
              },
              {
                name: "2. Working with Excel and CSV files in Python",
              },
              {
                name: "3. Understanding and using Python Modules and Packages",
              },
            ],
          },
          {
            module: "Module 4",
            title: "Object-Oriented Programming",
            topics: [
              {
                name: "1. Deep dive into Classes, Objects, and Methods",
              },
              {
                name: "2. Constructors, Destructors, and Types of Methods",
              },
              {
                name: "3. Inheritance, Polymorphism, and Encapsulation",
              },
            ],
          },
          {
            module: "Module 5",
            title: "Exception Handling and Regular Expressions",
            topics: [
              {
                name: "1. Exception Handling: Try, Except, Finally",
              },
              {
                name: "2. Creating and using Custom Exceptions",
              },
              {
                name: "3. Utilizing Regular Expressions for pattern matching",
              },
            ],
          },
        ],
      },
      {
        maintitle: "Django Python Framework",
        subdata: [
          {
            module: "Module 1",
            title: "Getting Started with Django",
            topics: [
              {
                name: "1. Introduction to Django and its features",
              },
              {
                name: "2. Setting up a Django project and understanding its structure",
              },
              {
                name: "3. MVC Model, creating views, and URL mapping",
              },
            ],
          },
          {
            module: "Module 2",
            title: "Django Core Concepts",
            topics: [
              {
                name: "1. Database models and migrations",
              },
              {
                name: "2. Admin interface and deploying Django applications",
              },
              {
                name: "3. Forms and handling user inputs",
              },
            ],
          },
          {
            module: "Module 3",
            title: "Advanced Django Features",
            topics: [
              {
                name: "1. Advanced URL routing and views",
              },
              {
                name: "2. Class-based views and middleware",
              },
              {
                name: "3. Working with static and media files",
              },
            ],
          },
          {
            module: "Module 4",
            title: "Django REST Framework",
            topics: [
              {
                name: "1. Building RESTful APIs with Django REST Framework",
              },
              {
                name: "2. Serializers and request handling",
              },
              {
                name: "3. Authentication and permissions in APIs",
              },
            ],
          },
          {
            module: "Module 5",
            title: " Testing and Deployment",
            topics: [
              {
                name: "1. Writing tests for Django applications",
              },
              {
                name: "2. Deployment strategies and best practices",
              },
              {
                name: "3. Configuring Django applications for production",
              },
            ],
          },
        ],
      },
      {
        maintitle: "Python for Data Science",
        subdata: [
          {
            module: "Module 1",
            title: "Data Science Foundations",
            topics: [
              {
                name: "1. Introduction to Data Science with Python",
              },
              {
                name: "2. Data manipulation with Pandas",
              },
              {
                name: "3. Data visualization with Matplotlib and Seaborn",
              },
            ],
          },
          {
            module: "Module 2",
            title: "Advanced Data Manipulation",
            topics: [
              {
                name: "1. Advanced Pandas techniques and operations",
              },
              {
                name: "2. Time Series data analysis with Pandas",
              },
              {
                name: "3. Combining, merging, and reshaping data frames",
              },
            ],
          },
          {
            module: "Module 3",
            title: " Data Visualization Deep Dive",
            topics: [
              {
                name: "1. Advanced visualization with Matplotlib",
              },
              {
                name: "2. Interactive visualizations with Plotly",
              },
              {
                name: "3. Geospatial data visualization",
              },
            ],
          },
          {
            module: "Module 4",
            title: "Introduction to Machine Learning",
            topics: [
              {
                name: "1. Basics of machine learning with Python",
              },
              {
                name: "2. Using Scikit-learn for machine learning models",
              },
              {
                name: "3. Model evaluation and validation techniques",
              },
            ],
          },
          {
            module: "Module 5",
            title: " Advanced Topics in Data Science",
            topics: [
              {
                name: "1. Introduction to Neural Networks and Deep Learning",
              },
              {
                name: "2. Working with text data and Natural Language Processing (NLP)",
              },
              {
                name: "3. Introduction to Big Data technologies with Python",
              },
            ],
          },
        ],
      },
      {
        maintitle: "Cloud & DevOps For Python",
        subdata: [
          {
            module: "Module 1",
            title: "Introduction to Cloud Computing for Developers",
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
            title: "DevOps for Full Stack Developers",
            topics: [
              {
                name: "1. Understanding DevOps",
                description:
                  "The philosophy, practices, and benefits of DevOps in modern software development, emphasizing collaboration, automation, and integration",
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
                  "Introduction to containers, Docker fundamentals, creating Docker images, and container management basics..",
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
            title: "Building and Deploying Scalable Web Applications",
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
    course: "react_js",
    headerTitle: "React JS Training & Certification",
    headerImage: reactbanr,
    courseTitle: "Why React JS Training With Digital Edify?",
    title: "React JS Course Curriculum",
    subTitle: "It stretches your mind, think better and create even better.",
    courseList: [
      "Fundamentals of IT",
      "Foundations of Web (HTML, CSS, BootStrap )",
      "JavaScript & TypeScript",
      "React Framework",
      "DevOps & Cloud",
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
        maintitle: "Foundations of Web Development",
        subdata: [
          {
            module: "Module 1",
            title: "Building Blocks of Web Design - HTML",
            intro: "TModule 1: Introduction to HTML",
            topics: [
              {
                name: "1. Basics of HTML",
                description: [
                  "The evolution and role of HTML in web development.",
                  "Understanding HTML syntax and the structure of documents.",
                ],
              },
              {
                name: "2. Core HTML Elements",
                description:
                  "Detailed look at paragraphs, headings, links, images, and their attributes.",
              },
              {
                name: "3.  Structuring Web Content",
                description: [
                  "Using lists and tables for data presentation.",
                  "The significance of semantic HTML for accessibility.",
                ],
              },
            ],
            intro1: "Module 2: Enhancing Web Pages with Forms and Multimedia",
            topics1: [
              {
                name: "1.  Interactive Forms",
                description: [
                  "Crafting forms for data collection with a variety of input types.",
                  "Basics of form validation and ensuring accessible form design.",
                ],
              },
              {
                name: "2. Embedding Multimedia",
                description: [
                  "Incorporating audio and video elements.",
                  "Embedding external resources with and other tags.",
                ],
              },
            ],
            intro2: "Module 3: Advanced HTML Features",
            topics2: [
              {
                name: "1. Modern HTML Elements",
                description: "Exploring semantic elements like.",
              },
              {
                name: "2.  Dynamic HTML with APIs",
                description:
                  "A brief overview of HTML5 APIs enhancing interactivity and web functionality.",
              },
              {
                name: "3. Reusable Web Components",
                description:
                  "Introduction to HTML templates, custom elements, and shadow DOM.",
              },
            ],
            intro3: "Module 4: Accessibility and HTML Best Practices",
            topics3: [
              {
                name: "1. Enhancing Web Accessibility",
                description:
                  "Utilizing ARIA roles and proper HTML structure to support all users.",
              },
              {
                name: "2.  Maintaining HTML Standards",
                description:
                  "Importance of validating HTML code and adhering to web standards for cross-browser compatibility.",
              },
            ],
            intro4: "Module 5: Performance, Security, and Staying Current",
            topics4: [
              {
                name: "1. Optimizing Performance",
                description:
                  "Techniques for optimizing web page loading times, such as image optimization and lazy loading.",
              },
              {
                name: "2. Web Security Fundamentals",
                description:
                  "Best practices for embedding content and managing user-generated content to prevent common security vulnerabilities.",
              },
              {
                name: "3. Keeping Up with HTML Evolution",
                description:
                  "Resources and strategies for staying updated with HTML developments and future trends.",
              },
            ],
          },
          {
            module: "Module 2",
            title: "CSS Fundamentals",
            intro: "",
            topics: [
              {
                name: "1. Foundations of CSS",
                description: [
                  "History and evolution of CSS.",
                  "How CSS works with HTML to style webpages.",
                  "The role of the CSSOM (CSS Object Model) in web rendering.",
                  "Overview of CSS specifications and how to read the CSS documentation.",
                ],
              },
              {
                name: "2. Applying CSS Styles",
                description: [
                  "Comparison of External, Internal, and Inline Styles: Use cases and best practices.",
                  "Linking stylesheets and understanding the `` tag.",
                  "The importance of CSS placement for performance and maintenance.",
                ],
              },
              {
                name: "3. CSS Syntax",
                description: [
                  "Detailed exploration of properties and values.",
                  "Writing well-structured CSS rules.",
                  "Understanding the universal selector (*) and its use cases.",
                  "Comments in CSS: Syntax and best practices for documentation.",
                ],
              },
              {
                name: "4. Selectors and Combinators",
                description: [
                  "Types of selectors: Class, ID, Attribute, Pseudo-class, and Pseudo-element selectors.",
                  "Combinators: Descendant, Child, Adjacent Sibling, and General Sibling.",
                  "Practical exercises: Using selectors to style complex layouts.",
                ],
              },
            ],
            intro1: "Module 2: Styling and the Box Model",
            topics1: [
              {
                name: "1. Understanding the Box Model",
                description: [
                  "In-depth look at content, padding, border, and margin.",
                  "Box-sizing: border-box vs. content-box.",
                  "Visualizing the box model with browser developer tools.",
                ],
              },
              {
                name: "2. Typography and Text Styling",
                description: [
                  "Font families, web-safe fonts, and @font-face rule.",
                  "Text styling properties: weight, style, spacing, shadow.",
                  "Web typography best practices for readability and accessibility.",
                ],
              },
              {
                name: "3. Units, Values, and Colors",
                description: [
                  "Absolute vs. Relative units: When and why to use each.",
                  "Color models in CSS: RGB, RGBA, HSL, HSLA, and Hexadecimal.",
                  "Implementing custom properties (CSS Variables) for theme management.",
                ],
              },
              {
                name: "4. Specificity, Inheritance, and the Cascade",
                description: [
                  "How CSS determines which rules apply: Specificity hierarchy.",
                  "Inheritance and how it affects styling.",
                  "The role of the cascade in resolving style conflicts.",
                  "Strategies to organize and structure CSS to minimize specificity conflicts.",
                ],
              },
            ],
            intro2: "Module 3: Advanced Styling Techniques",
            topics2: [
              {
                name: "1. Visual Effects",
                description: [
                  "Implementing box-shadow and text-shadow for depth and visual interest.",
                  "Using border-radius for rounded corners.",
                  "Gradient backgrounds: Linear and radial gradients.",
                ],
              },
              {
                name: "2. Background Techniques",
                description: [
                  "Complex background images and patterns.",
                  "Controlling background size, position, and repetition.",
                  "Multi-layer backgrounds and their use cases.",
                ],
              },
              {
                name: "3. Advanced Border and Outline Styling",
                description: [
                  "Border images for intricate border designs.",
                  "Styling and animating outlines as focus indicators.",
                ],
              },
              {
                name: "4. Layout Control with Overflow and Margin Collapsing",
                description: [
                  "Controlling content overflow: scroll, hidden, and auto.",
                  "Understanding when and why margin collapsing occurs.",
                  "Strategies to prevent unwanted margin collapsing.",
                ],
              },
            ],
            intro3: "Module 4: CSS Layouts and Positioning",
            topics3: [
              {
                name: "1. The Display Property",
                description: [
                  "In-depth exploration of block, inline, inline-block, none, and table.",
                  "Newer display values: flex, grid, and contents.",
                ],
              },
              {
                name: "2. CSS Positioning Techniques",
                description: [
                  "Detailed scenarios for using each positioning value.",
                  "Creating sticky headers and footers.",
                  "Overlaying content with absolute positioning.",
                ],
              },
              {
                name: "3. Floating Elements and Clearing Floats",
                description: [
                  "The role of floats in CSS layout history.",
                  "Techniques for clearing floats: clearfix hack and overflow method.",
                  "When to use floats in modern CSS..",
                ],
              },
              {
                name: "4. Handling Overflow",
                description: [
                  "Techniques for managing content overflow in containers.",
                  "Design patterns for scrollable elements.",
                ],
              },
            ],
            intro4: "Module 5: Responsive Design and Advanced CSS Features",
            topics4: [
              {
                name: "1. Flexbox and Grid Layouts",
                description: [
                  "Detailed guide to Flexbox: Properties for containers and items.",
                  "Grid Layout: Defining grid containers, grid items, and grid areas.",
                  "Use cases and practical examples: When to use Flexbox vs. Grid.",
                ],
              },
              {
                name: "2. Responsive Design Techniques",
                description: [
                  "Media Queries: Syntax and breakpoints.",
                  "Mobile-first vs. Desktop-first strategies.",
                  "Responsive images and videos: Techniques for adaptive media.",
                ],
              },
              {
                name: "3. Animations and Transitions",
                description: [
                  "Creating smooth transitions between states.",
                  "Keyframe animations: Building complex animations with @keyframes.",
                  "Performance considerations for CSS animations.",
                ],
              },
              {
                name: "4. Advanced Responsive Design",
                description: [
                  "Implementing responsive typography.",
                  "Strategies for accessible, responsive forms.",
                  "Advanced layout patterns: Masonry, column-drop, and",
                ],
              },
            ],
          },
          {
            module: "Module 3",
            title: "Bootstrap Essentials - Responsive Design",
            intro: "Topic 1: Getting Started with Bootstrap",
            topics: [
              {
                name: "1. Introduction to Bootstrap",
              },
              {
                name: "2. Setting Up Bootstrap",
              },
              {
                name: "3. Using Bootstrap CDN",
              },
              {
                name: "4. Basic Grid System",
              },
              {
                name: "5. Containers, Rows, and Columns",
              },
            ],
            intro1: "Topic 2: Bootstrap Layouts and Responsiveness",
            topics1: [
              {
                name: "1. Responsive Classes",
              },
              {
                name: "2. Typography and Utilities",
              },
              {
                name: "3. Default Typography",
              },
              {
                name: "4. Text Alignment and Display Classes",
              },
              {
                name: "5. Spacing Utilities",
              },
            ],
            intro2: "Topic 3: Navigation and Components in Bootstrap",
            topics2: [
              {
                name: "1. Navigation",
              },
              {
                name: "2. Navbar Dropdowns within Navbar",
              },
              {
                name: "3. Alerts: Basic Alerts & Dismissible Alerts",
              },
              {
                name: "4. Badges",
              },
              {
                name: "5. Button Styles & Button Groups",
              },
            ],
            intro3: "Topic 4: Advanced Bootstrap Components",
            topics3: [
              {
                name: "1. Basic Card: Card Headers and Footers",
              },
              {
                name: "2. Image Overlays in Cards",
              },
              {
                name: "3. Form Controls, Form Groups, and Layout",
              },
              {
                name: "4. Validation Feedback",
              },
              {
                name: "5. Basic Modal Setup",
              },
              {
                name: "6. Carousel with Indicators and Controls",
              },
            ],
            intro4: "Topic 5: Interactivity and Layout in Bootstrap",
            topics4: [
              {
                name: "1. Tooltips and Popovers",
              },
              {
                name: "2. Flex Container and Items",
              },
              {
                name: "3. Direction, Order, and Alignment in Flex",
              },
              {
                name: "4. Visibility Classes",
              },
            ],
          },
          {
            module: "Module 4",
            title: "JavaScript - Building Blocks to Advanced Scripts",
            intro: "Topic 1: Core JavaScript Concepts",
            topics: [
              {
                name: "1. Introduction to JavaScript",
                description: "Variables, Data Types, Operators",
              },
              {
                name: "2. Functions and Scope",
                description: [
                  "Functions, Parameters, Return Statements",
                  "Function Expressions, Default Parameters, IIFE (Immediately Invoked Function Expressions)",
                  "JavaScript Functions and Scope, Anonymous Functions, Higher-Order Functions, Callback Functions, Arrow Functions, Closures",
                ],
              },
              {
                name: "3. Control Structures and Data Handling",
                description: [
                  "Hoisting, Control Structures, Conditional Statements, Loops",
                  "Arrays - Introduction and Methods, Object Methods, Spread/Rest Operators, Array and Object Destructuring",
                ],
              },
              {
                name: "4. Strings, Dates, and Template Literals",
                description: "String Methods, Date Methods, Template Literals",
              },
              {
                name: "5. Object-Oriented Programming in JavaScript",
                description:
                  "Objects and Classes, Getters and Setters, Prototypes, Inheritance, Constructor Functions",
              },
            ],
            intro1: "Topic 2: Advanced JavaScript Features",
            topics1: [
              {
                name: "1. Deep Dive into Functions and Scope",
                description:
                  "Exploring further into Functions and Scope beyond the basics",
              },
              {
                name: "2. Asynchronous JavaScript",
                description:
                  "Introduction To AJAX, Callbacks, Promises, Async/Await",
              },
              {
                name: "3. Execution Context, Scope Chain, and Error Handling",
                description:
                  "Execution Context and Scope Chain, Error Handling (try...catch)",
              },
              {
                name: "4. Modules and Regular Expressions",
                description:
                  "Modules and Import/Export, Introduction to Regular Expressions",
              },
              {
                name: "5. Local Storage and Session Storage",
                description:
                  "Utilizing Web Storage APIs for storing data locally",
              },
            ],
            intro2: "Topic 3: Working with the Document Object Model (DOM)",
            topics2: [
              {
                name: "1. DOM Basics",
                description: "DOM Tree, Nodes, Manipulation",
              },
              {
                name: "2. Event Handling",
                description: "Event Listeners & Event Delegation",
              },
              {
                name: "3. Advanced DOM Manipulation",
                description:
                  "DOM Traversal, createElement, appendChild, insertBefore",
              },
            ],
            intro3: "Topic 4: Asynchronous Programming and APIs",
            topics3: [
              {
                name: "1. Asynchronous JavaScript Revisited",
                description:
                  "A comprehensive look into AJAX, Fetch API, Promises, and Async/Await",
              },
              {
                name: "2. Working with APIs",
                description:
                  "Understanding Web APIs, Making HTTP requests using the Fetch API, Handling responses and working with JSON, Error handling with Fetch API",
              },
            ],
            intro4: "Topic 5: Modern JavaScript Development",
            topics4: [
              {
                name: "1. Advanced Function Usage",
                description:
                  "A deeper exploration of JavaScript's functional programming aspects",
              },
              {
                name: "2. Error Handling and Regular Expressions",
                description:
                  "Advanced techniques for managing errors and utilizing regular expressions for data validation",
              },
              {
                name: "3. JavaScript Modules",
                description:
                  "Leveraging modules for efficient code organization and reusability",
              },
              {
                name: "4. Web Storage",
                description:
                  "Strategies for using Local Storage & Session Storage to enhance user experience",
              },
            ],
          },
          {
            module: "Module 5",
            title: "Typescript Essentials",
            intro: "Topic 1: Introduction to TypeScript and its Fundamentals",
            topics: [
              {
                name: "1. Understanding TypeScript",
                description: [
                  "What is TypeScript?",
                  "Benefits of using TypeScript",
                  "Setting up the TypeScript environment.",
                  "Introduction to the TypeScript Compiler",
                ],
              },
              {
                name: "2. The Core Concepts",
                description: [
                  "Variables in TypeScript",
                  "Basic and Complex Data Types",
                  "Type Inference and Type Compatibility.",
                ],
              },
            ],
            intro1: "Topic 2: Diving Deeper into TypeScript Types",
            topics1: [
              {
                name: "1. Working with Enums",
                description: "Enums and their uses",
              },
              {
                name: "2. Advanced Typing Features",
                description:
                  "Advanced Types: Union, Intersection, Conditional Types",
              },
              {
                name: "3. Iterating with TypeScript",
                description: "Iterators and Generators",
              },
            ],
            intro2: "Topic 3: Object-Oriented Programming with TypeScript",
            topics2: [
              {
                name: "1. OOP Fundamentals in TypeScript",
                description: [
                  "Introduction to Object-Oriented Programming concepts",
                  "Classes and Objects",
                ],
              },
              {
                name: "2. Inheritance and Polymorphism",
                description: [
                  "Inheritance: Extending Classes",
                  "Polymorphism: Method Overriding.",
                ],
              },
            ],
            intro3:
              "Topic 4: Leveraging Interfaces and Abstract Classes in TypeScript",
            topics3: [
              {
                name: "1. Interfaces: Blueprint of an Object",
                description: [
                  "Understanding Interfaces",
                  "Applying Interfaces to Classes",
                ],
              },
              {
                name: "2. Abstract Classes",
                description: [
                  "Abstract Classes and their application",
                  "Differentiating Interfaces from Abstract Classes.",
                ],
              },
            ],
            intro4: "Topic 5: Code Organization with Modules and Namespaces",
            topics4: [
              {
                name: "1. Namespaces",
                description: "Organizing code with Namespaces",
              },
              {
                name: "2. Modules: The Building Blocks",
                description: [
                  "Modules in TypeScript",
                  "Importing and Exporting Modules",
                ],
              },
            ],
          },
        ],
      },
      {
        maintitle: "REACT JS FRONTEND FRAMEWORK",
        subdata: [
          {
            module: "Module 1",
            title: "React Fundamentals and ES6",
            topics: [
              {
                name: "1. Getting Started with React",
                description: [
                  "Introduction to React and its significance in modern web development.",
                  "Setting up a React development environment.",
                ],
              },
              {
                name: "2. ES6 for React",
                description: [
                  "Essential ES6 features for React development: Arrow Functions, Let and Const, Template Literals.",
                  "Advanced ES6 features: Destructuring, Spread/Rest Operators, ES6 Modules, Promises, Async/Await.",
                ],
              },
              {
                name: "3. Functional Components and JSX",
                description: [
                  "Understanding functional components and JSX syntax.",
                  "Benefits of functional components over class components.",
                ],
              },
            ],
          },
          {
            module: "Module 2",
            title: "Developing with React Components",
            topics: [
              {
                name: "1. React Components and JSX Deep Dive",
                description:
                  "JSX syntax nuances, embedding expressions, and creating functional components.",
              },
              {
                name: "2. State and Props in React",
                description: [
                  "Managing component state with useState.",
                  "Understanding and using props for parent-child communication.",
                ],
              },
              {
                name: "3. React Hooks for Component Lifecycle",
                description:
                  "Introduction to useEffect for side effects in functional components.",
              },
            ],
          },
          {
            module: "Module 3",
            title: "Advanced React Features",
            topics: [
              {
                name: "1. Advanced Hooks and State Management",
                description:
                  "Exploring useContext, useReducer for global state management and performance optimizations with useCallback, useMemo.",
              },
              {
                name: "2. Styling and Data Fetching",
                description: [
                  "Approaches to styling: CSS Modules, Styled Components.",
                  "Fetching data from APIs using useEffect and Axios.",
                ],
              },
            ],
          },
          {
            module: "Module 4",
            title: "Application Architecture in React",
            topics: [
              {
                name: "1. Routing in React Applications",
                description:
                  "Implementing single-page applications with React Router.",
              },
              {
                name: "2. Form Handling in React",
                description:
                  "Strategies for building and managing forms efficiently.",
              },
              {
                name: "3. Global State Management with Redux",
                description:
                  "Basics of Redux for global state management in large-scale applications.",
              },
            ],
          },
          {
            module: "Module 5",
            title: "Performance Optimization and Best Practices",
            topics: [
              {
                name: "1. Optimizing React Applications",
                description:
                  "Techniques like code splitting, lazy loading with React Suspense.",
              },
              {
                name: "2. Testing React Components",
                description:
                  "Unit testing strategies using Jest and React Testing Library.",
              },
              {
                name: "3. React Best Practices",
                description:
                  "Code organization, performance optimization strategies, and maintaining coding standards.",
              },
            ],
          },
        ],
      },
      {
        maintitle: "Cloud & DevOps For ReactJS",
        subdata: [
          {
            module: "Module 1",
            title: "Introduction to Cloud Computing for Developers",
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
            ],
          },
          {
            module: "Module 2",
            title: "DevOps for Full Stack Developers",
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
            title: "Infrastructure and Configuration Management",
            topics: [
              {
                name: "1. Containers and Docker",
                description:
                  "Introduction to containers, Docker fundamentals, creating Docker images, and container management basics.",
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
            title: "Building and Deploying Scalable Web Applications",
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
            title: "Project Collaboration and DevOps Practices",
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
    course: "azure_data_engineering",
    headerTitle: "Azure Data Engineering Training & Certification",
    headerImage: javabanner,
    courseTitle: "Why Azure Data Engineering With Digital Edify?",
    title: "Azure Data Engineer Course Curriculum",
    subTitle: "It stretches your mind, think better and create even better.",
    courseList: [
      "Azure Data Engineering Fundamentals",
      "Azure Data Factory & Synapse Analytics",
      "Azure Data Lake & Stream Analytics",
      "Azure Databricks & Spark",
      "SQL for Data Analysis",
      "Python for Data Analysis",
      "Data Cloud & DevOps",
    ],
    accordionData: [
      {
        maintitle: "Azure Data Engineer Fundamentals",
        subdata: [
          {
            module: "Module 1",
            title: "Fundamentals of Data Engineering",
            topics: [
              {
                description: [
                  "What is Data Engineering",
                  "Data Engineer Roles & Responsibilities",
                  "Difference Between ETL Developer & Data Engineer",
                  "Types of Data",
                  "Steaming Vs Batch Data",
                ],
              },
            ],
          },
          {
            module: "Module 2",
            title: "Introduction to Azure Cloud Services",
            topics: [
              {
                description: [
                  "Cloud Introduction and Azure Basics",
                  "Azure Implementation Models: IaaS, PaaS, SaaS",
                  "Overview of Azure Data Engineer Role",
                  "Understanding Azure Storage Components",
                  "Introduction to Azure ETL & Streaming Components",
                ],
              },
            ],
          },
          {
            module: "Module 3",
            title: "Azure SQL Database Essentials",
            topics: [
              {
                description: [
                  "Azure SQL Server and Database Deployment",
                  "DTU vs. DWU: Understanding Performance Levels",
                  "Managing Firewall Rules and Secure SSMS Connections",
                  "Azure Account and Subscription Management",
                ],
              },
            ],
          },
          {
            module: "Module 4",
            title: "Azure Resources and Data Integration Basics",
            topics: [
              {
                description: [
                  "Azure Resources and Resource Types",
                  "Introduction to Azure Data Factory (ADF) and Azure Synapse Analytics",
                  "Basic Concepts of Data Movement and Processing",
                ],
              },
            ],
          },
        ],
      },
      {
        maintitle: "Azure Data Factory & Synapse Analytics",
        subdata: [
          {
            module: "Module 1",
            title: "Deep Dive into Azure Synapse Analytics",
            topics: [
              {
                description: [
                  "Synapse SQL Pools (Data Warehousing) and Massively Parallel Processing (MPP)",
                  "Data Movement with DMS and SQL Pool Management",
                  "Table Creations, Distributions, and Indexing for Performance",
                ],
              },
            ],
          },
          {
            module: "Module 2",
            title: "Mastering Data Factory Pipelines",
            topics: [
              {
                description: [
                  "Azure Data Factory Pipeline Architecture and Integration Runtime",
                  "Constructing ETL Pipelines with DIU Considerations",
                  "Data Flow Activities and Monitoring",
                ],
              },
            ],
          },
          {
            module: "Module 3",
            title: "Advanced Data Integration Techniques",
            topics: [
              {
                description: [
                  "Incremental Data Loading and Handling On-Premise Data Sources",
                  "Advanced ADF Features: Data Flows, ETL Logging, and Performance Tuning",
                  "Implementing CDC with ADF for Real-Time Data Capture",
                ],
              },
            ],
          },
          {
            module: "Module 4",
            title: "Synapse Analytics and Big Data Analytics",
            topics: [
              {
                description: [
                  "Topics",
                  "Integrating Spark with Synapse Analytics for Big Data Processing",
                  "Utilizing Python Notebooks and Spark Pools for Data Analysis",
                  "Performance Optimization and Data Transformation Techniques",
                ],
              },
            ],
          },
          {
            module: "Module 5",
            title: "Security, Compliance, and Workflow in Azure",
            topics: [
              {
                description: [
                  "Topics",
                  "Security Measures with Azure Active Directory and Role-Based Access Control",
                  "Managing Parameters and Security in Synapse and ADF Pipelines",
                  "Utilizing Azure OpenDatasets and Parquet Files for Advanced Analytics",
                ],
              },
            ],
          },
        ],
      },
      {
        maintitle: "Azure Data Lake & Stream Analytics",
        subdata: [
          {
            module: "Module 1",
            title: "Introduction to Azure Storage and Data Lake",
            topics: [
              {
                description: [
                  "Azure Storage Essentials: Files, Tables, and Queues",
                  "Introduction to Azure Data Lake Storage Gen2 (ADLS Gen2)",
                  "Configuring and Managing Storage Accounts",
                  "Hierarchical Namespace (HNS) and its Advantages",
                ],
              },
            ],
          },
          {
            module: "Module 2",
            title: "Operating Azure Storage Solutions",
            topics: [
              {
                description: [
                  "Managing BLOB Storage: Binary Large Objects Explained",
                  "Utilizing Azure Storage Explorer for Efficient Storage Management",
                  "Directory and File Operations in Azure Data Lake",
                  "Best Practices for Organizing Data in ADLS Gen2",
                ],
              },
            ],
          },
          {
            module: "Module 3",
            title: "Security and Access Management in Azure Storage",
            topics: [
              {
                description: [
                  "Implementing Security Measures in Azure Data Lake Storage",
                  "Access Control with Shared Access Signatures (SAS) and Access Control Lists (ACLs)",
                  "Role-Based Access Control (RBAC) in Azure Storage",
                  "Encryption, Authentication, and Compliance Features",
                ],
              },
            ],
          },
          {
            module: "Module 4",
            title: "Data Migration and Integration Strategies",
            topics: [
              {
                description: [
                  "Strategies for SQL Database Migrations to Azure",
                  "Integrating Azure SQL with Data Lake Storage",
                  "Utilizing Azure Data Factory for Data Movement and Transformation",
                  "Data Migration Tools and Techniques",
                ],
              },
            ],
          },
          {
            module: "Module 5",
            title: "Implementing Advanced Storage Features",
            topics: [
              {
                description: [
                  "Advanced Concepts in Azure Table Storage",
                  "Data Replication and Geo-Redundancy Options",
                  "Optimizing Storage Costs and Performance",
                  "Leveraging Data Lake for Big Data Analytics",
                ],
              },
            ],
          },
          {
            module: "Module 6",
            title: "Real-Time Data Processing with Azure Stream Analytics",
            topics: [
              {
                description: [
                  "Fundamentals of Azure Stream Analytics",
                  "Developing Stream Analytics Jobs for Real-Time Insights",
                  "Integrating IoT Devices with Azure for Data Streaming",
                  "Processing and Analyzing Streaming Data",
                ],
              },
            ],
          },
          {
            module: "Module 7",
            title: "Event Hubs and Event-Driven Architecture",
            topics: [
              {
                description: [
                  "Understanding Azure Event Hubs for Large-Scale Event Processing",
                  "Configuring Event Hubs and Event Hub Namespaces",
                  "Connecting Event Hubs with Azure Stream Analytics",
                  "Patterns for Real-Time and Event-Driven Data Processing",
                ],
              },
            ],
          },
          {
            module: "Module 8",
            title: "Monitoring, Performance Tuning, and Disaster Recovery",
            topics: [
              {
                description: [
                  "Monitoring Azure Storage and Stream Analytics Resources",
                  "Performance Tuning for Azure Data Services",
                  "Implementing Disaster Recovery Strategies",
                  "Using Azure Monitor and Key Vaults for Operational Excellence",
                ],
              },
            ],
          },
        ],
      },
      {
        maintitle: "Azure Databricks & Spark",
        subdata: [
          {
            module: "Module 1",
            title: "Introduction to Azure Databricks and Spark",
            topics: [
              {
                description: [
                  "Azure Cloud Overview: Understanding SaaS, PaaS, IaaS",
                  "Introduction to Azure Databricks: Configuration, Compute Resources, and Workspace Usage",
                  "Spark Clusters in Azure Databricks: Configurations, Types, and Resource Management",
                  "Databricks File System (DBFS): Utilizing Files and Tables with Spark",
                ],
              },
            ],
          },
          {
            module: "Module 2",
            title: "Data Processing with Databricks",
            topics: [
              {
                description: [
                  "Integrating Python with Spark: PySpark Basics",
                  "Data Loading Techniques: Using PySpark for Data Ingestion and Processing",
                  "Utilizing SQL in Databricks: Creating and Managing Spark Databases and Tables",
                  "Advanced Data Transformation: Working with DataFrames and Spark SQL for Data Analytics",
                ],
              },
            ],
          },
          {
            module: "Module 3",
            title: "Integrating Azure Data Lake Storage with Databricks",
            topics: [
              {
                description: [
                  "Configuring Azure Data Lake Storage (ADLS) for use with Databricks",
                  "Data Management: Reading and Writing Data to ADLS using PySpark and Scala",
                  "Secure Data Access: Managing Access and Security between Databricks and ADLS",
                ],
              },
            ],
          },
          {
            module: "Module 4",
            title: "Developing Scalable Data Pipelines",
            topics: [
              {
                description: [
                  "Understanding Databricks Architecture: Driver and Worker Nodes, RDDs, and DAGs",
                  "Building and Monitoring Databricks Jobs: Scheduling, Task Management, and Optimization",
                  "Implementing Delta Lake for Reliable Data Lakes: ACID Transactions and Performance Tuning",
                ],
              },
            ],
          },
          {
            module: "Module 5",
            title: "Advanced Analytics and Machine Learning",
            topics: [
              {
                description: [
                  "Machine Learning Fundamentals in Databricks: Using MLlib for Predictive Modeling",
                  "Data Exploration and Visualization: Leveraging Notebooks for Insights",
                  "Advanced Analytic Techniques: Utilizing Scala and Python for Complex Data Analysis",
                ],
              },
            ],
          },
          {
            module: "Module 6",
            title: "Security and Governance in Azure Databricks",
            topics: [
              {
                description: [
                  "Databricks Security: Integrating with Azure Active Directory (AD)",
                  "Managing Permissions: Workspace, Notebooks, and Data Security",
                  "Compliance and Data Governance: Best Practices in Databricks Environments",
                ],
              },
            ],
          },
          {
            module: "Module 7",
            title: "Real-Time Data Processing and Streaming",
            topics: [
              {
                description: [
                  "Streaming Data with Databricks: Concepts and Practical Applications",
                  "Integrating Azure Event Hubs with Databricks for Real-Time Analytics",
                  "Processing Live Data Streams: Building and Deploying Stream Analytics Solutions",
                ],
              },
            ],
          },
          {
            module: "Module 8",
            title: "Integration and Deployment",
            topics: [
              {
                description: [
                  "Automating Workflows with Azure Logic Apps and Databricks",
                  "CI/CD for Databricks: Automation and Version Control Integration",
                  "Deployment Strategies: Best Practices for Production Deployments in Azure",
                ],
              },
            ],
          },
        ],
      },
      {
        maintitle: "Python for Data Engineer",
        subdata: [
          {
            module: "Module 1",
            title: "Python Programming Fundamentals",
            topics: [
              {
                name: "1. Introduction to Python",
                description: [
                  "Overview of Python's history, key features, and comparison with other languages.",
                  "Setting up the Python environment, writing your first program.",
                  "Core Programming Concepts: Variables, data types, conditional statements, loops, control flow.",
                  "Introduction to strings, string manipulation, and basic functions.",
                ],
              },
            ],
          },
          {
            module: "Module 2",
            title: " Advanced Python Concepts and Collections",
            topics: [
              {
                name: "1. Deep Dive into Collections",
                description: [
                  "Understanding lists, tuples, dictionaries, sets, and frozen sets.",
                  "Functions, methods, and comprehensions for collections.",
                ],
              },
              {
                name: "2. Functional Programming in Python",
                description:
                  "Exploring function arguments, anonymous functions, and special functions (map, reduce, filter)",
              },
              {
                name: "3. Object-Oriented Programming (OOP)",
                description: [
                  "Classes, objects, constructors, destructors, inheritance, polymorphism.",
                  "Encapsulation, data hiding, magic methods, and operator overloading.",
                ],
              },
            ],
          },
          {
            module: "Module 3",
            title: "Exception Handling and File Management in Python",
            topics: [
              {
                name: "1. Mastering Exception Handling",
                description:
                  "Exception handling mechanisms, try & finally clauses, user-defined exceptions.",
              },
              {
                name: "2. File Handling Essentials",
                description:
                  "Basics of file operations, handling Excel and CSV files.",
              },
              {
                name: "3. Database Programming",
                description:
                  "Introduction to database connections and operations with MySQL.",
              },
            ],
          },
          {
            module: "Module 4",
            title: "Developing Web Applications with Python",
            topics: [
              {
                name: "1. Getting Started with Flask",
                description:
                  "Setting up Flask, creating simple applications, routing, and middleware.",
              },
              {
                name: "2. Exploring Django",
                description:
                  "Introduction to Django, MVC model, views, URL mapping.",
              },
            ],
          },
          {
            module: "Module 5",
            title: "Automation, GUI Programming, and Version Control",
            topics: [
              {
                name: "1. Automation and Scripting",
                description:
                  "Enhancing file handling, database automation, and web scraping with BeautifulSoup.",
              },
              {
                name: "2. GUI Development with TKinter",
                description:
                  "Basics of TKinter for developing desktop applications.",
              },
              {
                name: "3. Version Control with Git",
                description:
                  "Managing projects with Git, understanding repository management, commits, merging, and basic Git commands.",
              },
            ],
          },
        ],
      },
      {
        maintitle: "Data Cloud & DevOps",
        subdata: [
          {
            module: "Module 1",
            title: "Introduction to Cloud Computing and DevOps for Data",
            topics: [
              {
                description: [
                  "Cloud Computing Fundamentals: Overview of cloud service models (IaaS, PaaS, SaaS) and deployment models (public, private, hybrid).",
                  "Basics of DevOps: Understanding the DevOps culture, practices, and its significance in cloud environments.",
                  "Data on the Cloud: Exploring cloud storage solutions, databases, and big data services provided by major cloud providers (AWS, Azure, Google Cloud).",
                  "Introduction to Infrastructure as Code (IaC): Concepts and tools for managing infrastructure through code.",
                ],
              },
            ],
          },
          {
            module: "Module 2",
            title: "Cloud Data Storage and Databases",
            topics: [
              {
                description: [
                  "Cloud Storage Solutions: Differences between object storage, file storage, and block storage. Use cases for each.",
                  "Cloud Databases: Overview of relational and NoSQL database services in the cloud (e.g., AWS RDS, Azure SQL Database, Google Cloud Firestore).",
                  "Data Warehousing and Big Data Solutions: Introduction to cloud-based data warehousing services (e.g., Amazon Redshift, Google BigQuery, Azure Synapse Analytics).",
                  "Data Migration to Cloud: Strategies and tools for migrating data to cloud environments.",
                ],
              },
            ],
          },
          {
            module: "Module 3",
            title: "Automating Data Pipelines with DevOps Practices",
            topics: [
              {
                description: [
                  "Automated Data Pipelines: Designing and implementing automated data pipelines using cloud services.",
                  "Continuous Integration and Continuous Delivery (CI/CD) for Data: Applying CI/CD practices to data pipeline development, including version control, testing, and deployment strategies.",
                  "Monitoring and Logging: Tools and practices for monitoring cloud resources and data pipelines, understanding logs and metrics for troubleshooting.",
                  "Infrastructure as Code (IaC) for Data Systems: Using IaC tools (e.g., Terraform, CloudFormation) to provision and manage cloud data infrastructure.",
                ],
              },
            ],
          },
          {
            module: "Module 4",
            title: "Advanced Topics in Data Cloud and DevOps",
            topics: [
              {
                description: [
                  "Serverless Data Processing: Leveraging serverless architectures for data processing tasks (e.g., AWS Lambda, Azure Functions).",
                  "Containerization and Data Services: Using containers (e.g., Docker, Kubernetes) for deploying and scaling data applications and services in the cloud.",
                  "Machine Learning and AI in the Cloud: Introduction to cloud-based machine learning services and integrating AI capabilities into data pipelines.",
                  "Data Analytics and Visualization: Tools and services for analyzing and visualizing data directly in the cloud (e.g., Amazon QuickSight, Google Data Studio, Power BI on Azure).",
                ],
              },
            ],
          },
        ],
      },
      {
        maintitle: "SQL for Data Engineer",
        subdata: [
          {
            module: "Module 1",
            title: "SQL Fundamentals",
            topics: [
              {
                description: [
                  "Introduction to Databases and SQL: Understanding relational databases and the role of SQL.",
                  "SQL Syntax Overview: Keywords, statements, and clauses.",
                  "Basic SQL Commands: SELECT, FROM, WHERE, and ORDER BY.",
                  "Filtering Data: Using conditions to retrieve specific data (AND, OR, NOT).",
                ],
              },
            ],
          },
          {
            module: "Module 2",
            title: "Working with Multiple Tables",
            topics: [
              {
                description: [
                  "Understanding Table Relationships: Primary keys, foreign keys, and the importance of relationships in databases.",
                  "Join Operations: INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL JOIN.",
                  "Subqueries and Nested Queries: Using subqueries in the SELECT, FROM, and WHERE clauses.",
                  "Aggregating Data: Using GROUP BY and aggregate functions (COUNT, SUM, AVG, MIN, MAX).",
                ],
              },
            ],
          },
          {
            module: "Module 3",
            title: "Advanced Data Manipulation",
            topics: [
              {
                description: [
                  "Data Manipulation Commands: INSERT, UPDATE, DELETE.",
                  "Managing Tables: Creating and altering tables (CREATE TABLE, ALTER TABLE, DROP TABLE.)",
                  "Advanced Filtering Techniques: Using LIKE, IN, BETWEEN, and wildcard characters.",
                  "Working with Dates and Times: Understanding and manipulating date and time data.",
                ],
              },
            ],
          },
          {
            module: "Module 4",
            title: "Complex Queries and Optimization",
            topics: [
              {
                description: [
                  "Advanced SQL Functions: String functions, mathematical functions, and date functions.",
                  "Window Functions: Overviews of ROW_NUMBER, RANK, DENSE_RANK, LEAD, LAG, and their applications.",
                  "Query Performance Optimization: Indexes, query planning, and execution paths.",
                  "Common Table Expressions (CTEs): Writing cleaner and more readable queries with WITH clause.",
                ],
              },
            ],
          },
          {
            module: "Module 5",
            title: "SQL for Data Analysis Specifics",
            topics: [
              {
                description: [
                  "Analytical SQL for Reporting: Building complex queries to answer analytical questions.",
                  "Pivoting Data: Transforming rows to columns (PIVOT) and columns to rows (UNPIVOT).",
                  "Data Warehousing Concepts: Introduction to data warehousing practices and how they apply to SQL querying.",
                  "Integrating SQL with Data Analysis Tools: Connecting SQL databases with tools like Excel, Power BI, and Python for deeper data analysis.",
                ],
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
];

export const programsData = [
  {
    course: "full_stack_java",
    headerTitle: "Become a Full-Stack Java Developer",
    headerImage: javabanner,
    courseTitle: "Why Job Ready Program FullStack Java With Digital Edify?",
    title: "Job Ready Program FullStack Java Course Curriculum",
    subTitle: "It stretches your mind, think better and create even better.",
    courseList: [
      "Fundamentals to IT & AI",
      "Core JAVA",
      "Foundations of Web ( HTML,CSS, JS,TS)",
      "React Framework",
      "Advanced JAVA",
      "SpringBoot & MicroServices",
      "DevOps & Cloud",
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
                description: ["1", "2"],
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
        maintitle: "Foundations of Web Development",
        subdata: [
          {
            module: "Module 1",
            title: "Building Blocks of Web Design - HTML",
            intro: "Introduction to HTML",
            topics: [
              {
                name: "1.  Basics of HTML",
                description: [
                  "The evolution and role of HTML in web development.",
                  "Understanding HTML syntax and the structure of documents.",
                ],
              },
              {
                name: "2. Core HTML Elements",
                description: [
                  "Detailed look at paragraphs, headings, links, images, and their attributes.",
                ],
              },
              {
                name: "3. Structuring Web Content3. Fundamentals of multithreading and thread lifecycle3. Structuring Web Content",
                description: [
                  "Using lists and tables for data presentation.",
                  "The significance of semantic HTML for accessibility.",
                ],
              },
            ],
            intro1: "Module 2: Enhancing Web Pages with Forms and Multimedia",
            topics1: [
              {
                name: "1. Interactive Forms",
                description: [
                  "Crafting forms for data collection with a variety of input types.",
                  "Basics of form validation and ensuring accessible form design.",
                ],
              },
              {
                name: "2. Embedding Multimedia",
                description: [
                  "Incorporating audio and video elements.",
                  "Embedding external resources with ' iframe ' and other tags.",
                ],
              },
            ],
            intro2: "Module 3: Advanced HTML Features",
            topics2: [
              {
                name: "1. Modern HTML Elements",
                description:
                  "Exploring semantic elements like ' Article ', 'Section', and 'Nav'.",
              },
              {
                name: "2. Dynamic HTML with APIs",
                description:
                  "A brief overview of HTML5 APIs enhancing interactivity and web functionality.",
              },
              {
                name: "3. Reusable Web Components",
                description:
                  "Introduction to HTML templates, custom elements, and shadow DOM.",
              },
            ],
            intro3: "Module 4: Accessibility and HTML Best Practices",
            topics3: [
              {
                name: "1. Enhancing Web Accessibility",
                description:
                  "Utilizing ARIA roles and proper HTML structure to support all users.",
              },
              {
                name: "2. Maintaining HTML Standards",
                description:
                  "Importance of validating HTML code and adhering to web standards for cross-browser compatibility.",
              },
            ],
            intro4: "Module 5: Performance, Security, and Staying Current",
            topics4: [
              {
                name: "1. Optimizing Performance",
                description:
                  "Techniques for optimizing web page loading times, such as image optimization and lazy loading.",
              },
              {
                name: "2. Web Security Fundamentals",
                description:
                  "Best practices for embedding content and managing user-generated content to prevent common security vulnerabilities.",
              },
              {
                name: "3. Keeping Up with HTML Evolution",
                description:
                  "Resources and strategies for staying updated with HTML developments and future trends.",
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
    course: "full_stack_python",
    headerTitle: "Master Full-Stack Python Development with Expert Guidance",
    headerImage: javabanner,
    courseTitle: "Why Full Stack Masters Program ?",
    title: "Full stack Masters With Cloud & DevOps Curriculum",
    subTitle: "It stretches your mind, think better and create even better.",
    courseList: [
      "Fundamentals of IT",
      "Foundations of Web (HTML, CSS, BootStrap, JS, TS)",
      "React Framework",
      "Python Full Stack ( React & Python)",
      "DevOps & Cloud",
    ],
    accordionData: [
      {
        maintitle: "Applications & Web Technologies",
        subdata: [
          {
            module: "Module 1",
            title:
              "Software Development Life Cycle & Application LifeCycle Management",
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
        maintitle: "Foundations of Web Development",
        subdata: [
          {
            module: "Module 1",
            title: "Building Blocks of Web Design - HTML",
            intro: "Introduction to HTML",
            topics: [
              {
                name: "1. Basics of HTML",
                description: [
                  "The evolution and role of HTML in web development.",
                  "Understanding HTML syntax and the structure of documents.",
                ],
              },
              {
                name: "2. Core HTML Elements",
                description:
                  "Detailed look at paragraphs, headings, links, images, and their attributes.",
              },
              {
                name: "3. Structuring Web Content",
                description: [
                  "Using lists and tables for data presentation.",
                  "The significance of semantic HTML for accessibility.",
                ],
              },
            ],
            intro1: "Module 2: Enhancing Web Pages with Forms and Multimedia",
            topics1: [
              {
                name: "1. Interactive Forms",
                description: [
                  "Crafting forms for data collection with a variety of input types.",
                  "Basics of form validation and ensuring accessible form design.",
                ],
              },
              {
                name: "2. Embedding Multimedia",
                description: [
                  "Incorporating audio and video elements.",
                  "Embedding external resources with ' iframe ' and other tags.",
                ],
              },
            ],
            intro2: "Module 3: Advanced HTML Features",
            topics2: [
              {
                name: "1. Modern HTML Elements",
                description:
                  "Exploring semantic elements like ' Article ', 'Section', and 'Nav'.",
              },
              {
                name: "2. Dynamic HTML with APIs",
                description:
                  "A brief overview of HTML5 APIs enhancing interactivity and web functionality.",
              },
              {
                name: "3. Reusable Web Components",
                description:
                  "Introduction to HTML templates, custom elements, and shadow DOM.",
              },
            ],
            intro3: "Module 4: Accessibility and HTML Best Practices",
            topics3: [
              {
                name: "1. Enhancing Web Accessibility",
                description:
                  "Utilizing ARIA roles and proper HTML structure to support all users.",
              },
              {
                name: "2. Maintaining HTML Standards",
                description:
                  "Importance of validating HTML code and adhering to web standards for cross-browser compatibility.",
              },
            ],
            intro4: "Module 5: Performance, Security, and Staying Current",
            topics4: [
              {
                name: "1. Optimizing Performance",
                description:
                  "Best practices for embedding content and managing user-generated content to prevent common security vulnerabilities.",
              },
              {
                name: "2. Web Security Fundamentals",
                description:
                  "Importance of validating HTML code and adhering to web standards for cross-browser compatibility.",
              },
              {
                name: "3. Keeping Up with HTML Evolution",
                description:
                  "Resources and strategies for staying updated with HTML developments and future trends.",
              },
            ],
          },
          {
            module: "Module 2",
            title: "CSS Fundamentals",
            topics: [
              {
                name: "1. Foundations of CSS",
                description: [
                  "History and evolution of CSS.",
                  "How CSS works with HTML to style webpages.",
                  "The role of the CSSOM (CSS Object Model) in web rendering.",
                  "Overview of CSS specifications and how to read the CSS documentation.",
                ],
              },
              {
                name: "2. Applying CSS Styles",
                description: [
                  "Comparison of External, Internal, and Inline Styles: Use cases and best practices.",
                  "Linking stylesheets and understanding the tag.",
                  "The importance of CSS placement for performance and maintenance.",
                ],
              },
              {
                name: "3. CSS Syntax",
                description: [
                  "Detailed exploration of properties and values.",
                  "Writing well-structured CSS rules.",
                  "Understanding the universal selector (*) and its use cases.",
                  "Comments in CSS: Syntax and best practices for documentation.",
                ],
              },
              {
                name: "4. Selectors and Combinators",
                description: [
                  "Types of selectors: Class, ID, Attribute, Pseudo-class, and Pseudo-element selectors.",
                  "Combinators: Descendant, Child, Adjacent Sibling, and General Sibling.",
                  "Practical exercises: Using selectors to style complex layouts.",
                ],
              },
            ],
            intro1: "Module 2: Styling and the Box Model",
            topics1: [
              {
                name: "1. Understanding the Box Model",
                description: [
                  "In-depth look at content, padding, border, and margin.",
                  "Box-sizing: border-box vs. content-box.",
                  "Visualizing the box model with browser developer tools.",
                ],
              },

              {
                name: "2. Typography and Text Styling",
                description: [
                  "Font families, web-safe fonts, and @font-face rule.",
                  "Text styling properties: weight, style, spacing, shadow.",
                  "Web typography best practices for readability and accessibility.",
                ],
              },
              {
                name: "3. Units, Values, and Colors",
                description: [
                  "Absolute vs. Relative units: When and why to use each.",
                  "Color models in CSS: RGB, RGBA, HSL, HSLA, and Hexadecimal.",
                  "Implementing custom properties (CSS Variables) for theme management.",
                ],
              },
              {
                name: "4. Specificity, Inheritance, and the Cascade",
                description: [
                  "How CSS determines which rules apply: Specificity hierarchy. Inheritance and how it affects styling.",
                  "The role of the cascade in resolving style conflicts.",
                  "Strategies to organize and structure CSS to minimize specificity conflicts.",
                ],
              },
            ],
            intro2: "Module 3: Advanced Styling Techniques",
            topics2: [
              {
                name: "1. Visual Effects ,",
                description: [
                  "Implementing box-shadow and text-shadow for depth and visual interest.",
                  "Using border-radius for rounded corners.",
                  "Gradient backgrounds: Linear and radial gradients.",
                ],
              },

              {
                name: "2. Background Techniques",
                description: [
                  "Complex background images and patterns.",
                  "Controlling background size, position, and repetition.",
                  "Multi-layer backgrounds and their use cases.",
                ],
              },
              {
                name: "3. Advanced Border and Outline Styling",
                description: [
                  "Border images for intricate border designs.",
                  "Styling and animating outlines as focus indicators.",
                ],
              },
              {
                name: "4. Layout Control with Overflow and Margin Collapsing",
                description: [
                  "Controlling content overflow: scroll, hidden, and auto.",
                  "Understanding when and why margin collapsing occurs.",
                  "Strategies to prevent unwanted margin collapsing.",
                ],
              },
            ],
            intro3: "Module 4: CSS Layouts and Positioning",
            topics3: [
              {
                name: "1. The Display Property",
                description: [
                  "The Display Property",
                  "Newer display values: flex, grid, and contents.",
                ],
              },

              {
                name: "2. CSS Positioning Techniques",
                description: [
                  "Detailed scenarios for using each positioning value.",
                  "Creating sticky headers and footers.",
                  "Overlaying content with absolute positioning.",
                ],
              },
              {
                name: "3. Floating Elements and Clearing Floats",
                description: [
                  "The role of floats in CSS layout history.",
                  "Techniques for clearing floats: clearfix hack and overflow method.",
                  "When to use floats in modern CSS.",
                ],
              },
              {
                name: "4. Handling Overflow",
                description: [
                  "Techniques for managing content overflow in containers.",
                  "Design patterns for scrollable elements.",
                ],
              },
            ],
            intro4: "Module 5: Responsive Design and Advanced CSS Features",
            topics4: [
              {
                name: "1. Flexbox and Grid Layouts",
                description: [
                  "Detailed guide to Flexbox: Properties for containers and items.",
                  "Grid Layout: Defining grid containers, grid items, and grid areas.",
                  "Use cases and practical examples: When to use Flexbox vs. Grid.",
                ],
              },

              {
                name: "2. Responsive Design Techniques",
                description: [
                  "Media Queries: Syntax and breakpoints.",
                  "Mobile-first vs. Desktop-first strategies.",
                  "Responsive images and videos: Techniques for adaptive media.",
                ],
              },
              {
                name: "3. Animations and Transitions",
                description: [
                  "Creating smooth transitions between states.",
                  "Keyframe animations: Building complex animations with @keyframes.",
                  "Performance considerations for CSS animations.",
                ],
              },
              {
                name: "4. Advanced Responsive Design",
                description: [
                  "Implementing responsive typography.",
                  "Strategies for accessible, responsive forms.",
                  "Advanced layout patterns: Masonry, column-drop, and >",
                ],
              },
            ],
          },
          {
            module: "Module 3",
            title: "Bootstrap Essentials - Responsive Design",
            topics: [
              {
                name: "1. Getting Started with Bootstrap",
                description: [
                  "Introduction to Bootstrap",
                  "Setting Up Bootstrap",
                  "Using Bootstrap CDN",
                  "Basic Grid System",
                  "Containers, Rows, and Columns",
                ],
              },
              {
                name: "2. Bootstrap Layouts and Responsiveness",
                description: [
                  "Responsive Classes",
                  "Typography and Utilities",
                  "Default Typography",
                  "Text Alignment and Display Classes",
                  "Spacing Utilities",
                ],
              },
              {
                name: "3. Navigation and Components in Bootstrap",
                description: [
                  "Navigation",
                  "Navbar Dropdowns within Navbar",
                  "Alerts: Basic Alerts & Dismissible Alerts",
                  "Badges",
                  "Button Styles & Button Groups",
                ],
              },
              {
                name: "4. Advanced Bootstrap Components",
                description: [
                  "Basic Card: Card Headers and Footers",
                  "Image Overlays in Cards",
                  "Form Controls, Form Groups, and Layou",
                  "Validation Feedback",
                  "Basic Modal Setup",
                  "Carousel with Indicators and Controls",
                ],
              },
              {
                name: "5. Interactivity and Layout in Bootstrap",
                description: [
                  "Tooltips and Popovers",
                  "Flex Container and Items",
                  "Direction, Order, and Alignment in Flex",
                  "Visibility Classes",
                ],
              },
            ],
          },
          {
            module: "Module 4",
            title: " JavaScript - Building Blocks to Advanced Scripts",
            intro: "Topic 1: Core JavaScript Concepts",
            topics: [
              {
                name: "1. Introduction to JavaScript",
                description: "Variables, Data Types, Operators",
              },
              {
                name: "2. Functions and Scope",
                description: [
                  "Functions, Parameters, Return Statements",
                  "Function Expressions, Default Parameters, IIFE (Immediately Invoked Function Expressions)",
                  "JavaScript Functions and Scope, Anonymous Functions, Higher-Order Functions, Callback Functions, Arrow Functions, Closures",
                ],
              },
              {
                name: "3. Control Structures and Data Handling",
                description: [
                  "Hoisting, Control Structures, Conditional Statements, Loops",
                  "Arrays - Introduction and Methods, Object Methods, Spread/Rest Operators, Array and Object Destructuring",
                ],
              },
              {
                name: "4. Strings, Dates, and Template Literals",
                description: "Strings, Dates, and Template Literals",
              },
              {
                name: "5. Object-Oriented Programming in JavaScript",
                description:
                  "Objects and Classes, Getters and Setters, Prototypes, Inheritance, Constructor Functions",
              },
            ],
            intro1: "Topic 2: Advanced JavaScript Features",
            topics1: [
              {
                name: "1. Deep Dive into Functions and Scope",
                description:
                  "Exploring further into Functions and Scope beyond the basics",
              },
              {
                name: "2. Asynchronous JavaScript",
                description:
                  "Introduction To AJAX, Callbacks, Promises, Async/Await",
              },
              {
                name: "3. Execution Context, Scope Chain, and Error Handling",
                description:
                  "Execution Context and Scope Chain, Error Handling (try...catch)",
              },
              {
                name: "4. Modules and Regular Expressions",
                description:
                  "Modules and Import/Export, Introduction to Regular Expressions",
              },
              {
                name: "5. Local Storage and Session Storage",
                description:
                  "Utilizing Web Storage APIs for storing data locally",
              },
            ],
            intro2: "Topic 3: Working with the Document Object Model (DOM)",
            topics2: [
              {
                name: "1. DOM Basics",
                description: "DOM Tree, Nodes, Manipulation",
              },
              {
                name: "2. Event Handling",
                description: "Event Listeners & Event Delegation",
              },
              {
                name: "3. Advanced DOM Manipulation",
                description:
                  "DOM Traversal, createElement, appendChild, insertBefore",
              },
            ],
            intro3: "Topic 4: Asynchronous Programming and APIs",
            topics3: [
              {
                name: "1. Asynchronous JavaScript Revisited",
                description:
                  "A comprehensive look into AJAX, Fetch API, Promises, and Async/Await",
              },
              {
                name: "2. Working with APIs",
                description:
                  "Understanding Web APIs, Making HTTP requests using the Fetch API, Handling responses and working with JSON, Error handling with Fetch API",
              },
            ],
            intro4: "Topic 5: Modern JavaScript Development",
            topics4: [
              {
                name: "1. Advanced Function Usage",
                description:
                  "A deeper exploration of JavaScript's functional programming aspects",
              },
              {
                name: "2. Error Handling and Regular Expressions",
                description:
                  "Advanced techniques for managing errors and utilizing regular expressions for data validation",
              },
              {
                name: "3. JavaScript Modules",
                description:
                  "Leveraging modules for efficient code organization and reusability",
              },
              {
                name: "3. Web Storage",
                description:
                  "Strategies for using Local Storage & Session Storage to enhance user experience",
              },
            ],
          },
          {
            module: "Module 5",
            title: "Typescript Essentials",
            intro: "Topic 1: Introduction to TypeScript and its Fundamentals",
            topics: [
              {
                name: "1. Understanding TypeScript",
                description: [
                  "What is TypeScript?",
                  "Benefits of using TypeScript",
                  "Setting up the TypeScript environment",
                  "Introduction to the TypeScript Compiler",
                ],
              },
              {
                name: "2. The Core Concepts",
                description: [
                  "Variables in TypeScript",
                  "Basic and Complex Data Types",
                  "Type Inference and Type Compatibility",
                ],
              },
            ],
            intro1: "Topic 2: Diving Deeper into TypeScript Types",
            topics1: [
              {
                name: "1. Working with Enums",
                description: "Enums and their uses",
              },
              {
                name: "2. Advanced Typing Features",
                description:
                  "Advanced Types: Union, Intersection, Conditional Types",
              },
              {
                name: "3. Iterating with TypeScript",
                description: "Iterators and Generators",
              },
            ],
            intro2: "Topic 3: Object-Oriented Programming with TypeScript",
            topics2: [
              {
                name: "1. OOP Fundamentals in TypeScript",
                description: [
                  "Introduction to Object-Oriented Programming concepts",
                  "Classes and Objects",
                ],
              },
              {
                name: "2. Inheritance and Polymorphism",
                description: [
                  "Inheritance: Extending Classes",
                  "Polymorphism: Method Overriding",
                ],
              },
            ],
            intro3:
              "Topic 4: Leveraging Interfaces and Abstract Classes in TypeScript",
            topics3: [
              {
                name: "1. Interfaces: Blueprint of an Object",
                description: [
                  "Understanding Interfaces",
                  "Applying Interfaces to Classes",
                ],
              },
              {
                name: "2. Abstract Classes",
                description: [
                  "Abstract Classes and their application",
                  "Differentiating Interfaces from Abstract Classes",
                ],
              },
            ],
            intro4: "Topic 5: Code Organization with Modules and Namespaces",
            topics4: [
              {
                name: "1. Namespaces",
                description: "Organizing code with Namespaces",
              },
              {
                name: "2. Modules: The Building Blocks",
                description: [
                  "Modules in TypeScript",
                  "Importing and Exporting Modules",
                ],
              },
            ],
          },
        ],
      },
      {
        maintitle: "REACT JS FRONTEND FRAMEWORK",
        subdata: [
          {
            module: "Module 1",
            title: "React Fundamentals and ES6",

            topics: [
              {
                name: "1. Getting Started with React",
                description: [
                  "Introduction to React and its significance in modern web development.",
                  "Setting up a React development environment.",
                ],
              },
              {
                name: "2. ES6 for React",
                description: [
                  "Essential ES6 features for React development: Arrow Functions, Let and Const, Template Literals.",
                  "Advanced ES6 features: Destructuring, Spread/Rest Operators, ES6 Modules, Promises, Async/Await.",
                ],
              },
              {
                name: "3. Functional Components and JSX",
                description: [
                  "Understanding functional components and JSX syntax.",
                  "Benefits of functional components over class components.",
                ],
              },
            ],
          },
          {
            module: "Module 2",
            title: "Developing with React Components",
            topics: [
              {
                name: "1.  React Components and JSX Deep Dive",
                description:
                  "JSX syntax nuances, embedding expressions, and creating functional components.",
              },
              {
                name: "2. State and Props in React",
                description: [
                  "Managing component state with useState.",
                  "Understanding and using props for parent-child communication.",
                ],
              },
              {
                name: "3. React Hooks for Component Lifecycle",
                description:
                  "Introduction to useEffect for side effects in functional components.",
              },
            ],
          },
          {
            module: "Module 3",
            title: "Advanced React Features",
            topics: [
              {
                name: "1. Advanced Hooks and State Management",
                description:
                  "Exploring useContext, useReducer for global state management and performance optimizations with useCallback, useMemo.",
              },
              {
                name: "2. Styling and Data Fetching",
                description: [
                  "Approaches to styling: CSS Modules, Styled Components.",
                  "Fetching data from APIs using useEffect and Axios.",
                ],
              },
            ],
          },
          {
            module: "Module 4",
            title: "Application Architecture in React",
            topics: [
              {
                name: "1. Routing in React Applications",
                description:
                  "Implementing single-page applications with React Router.",
              },
              {
                name: "2. Form Handling in React",
                description:
                  "Strategies for building and managing forms efficiently.",
              },
              {
                name: "3. Global State Management with Redux",
                description:
                  "Basics of Redux for global state management in large-scale applications.",
              },
            ],
          },
          {
            module: "Module 5",
            title: "Performance Optimization and Best Practices",
            topics: [
              {
                name: "1. Optimizing React Applications",
                description:
                  "Techniques like code splitting, lazy loading with React Suspense.",
              },
              {
                name: "2. Testing React Components",
                description:
                  "Unit testing strategies using Jest and React Testing Library.",
              },
              {
                name: "3. React Best Practices",
                description:
                  "Code organization, performance optimization strategies, and maintaining coding standards.",
              },
            ],
          },
        ],
      },
      {
        maintitle: "Python Full Stack ( React & Python)",
        subdata: [
          {
            module: "Module 1",
            title: "Python Programming Fundamentals",
            topics: [
              {
                name: "1. Introduction to Python",
                description: [
                  "Overview of Python's history, key features, and comparison with other languages.",
                  "Setting up the Python environment, writing your first program.",
                ],
              },
              {
                name: "2. Core Programming Concepts",
                description: [
                  "Variables, data types, conditional statements, loops, control flow",
                  "Introduction to strings, string manipulation, and basic functions.",
                ],
              },
            ],
          },
          {
            module: "Module 2",
            title: "Advanced Python Concepts and Collections",
            topics: [
              {
                name: "1. Deep Dive into Collections",
                description: [
                  "Understanding lists, tuples, dictionaries, sets, and frozen sets.",
                  "Functions, methods, and comprehensions for collections.",
                ],
              },
              {
                name: "2. Functional Programming in Python",
                description:
                  "Exploring function arguments, anonymous functions, and special functions (map, reduce, filter).",
              },
              {
                name: "3.  Object-Oriented Programming (OOP)",
                description: [
                  "Classes, objects, constructors, destructors, inheritance, polymorphism.",
                  "Encapsulation, data hiding, magic methods, and operator overloading.",
                ],
              },
            ],
          },
          {
            module: "Module 3",
            title: "Exception Handling and File Management in Python",
            topics: [
              {
                name: "1. Mastering Exception Handling",
                description:
                  "Exception handling mechanisms, try & finally clauses, user-defined exceptions.",
              },
              {
                name: "2. File Handling Essentials",
                description:
                  "Basics of file operations, handling Excel and CSV files.",
              },
              {
                name: "3. Database Programming",
                description:
                  "Introduction to database connections and operations with MySQL.",
              },
            ],
          },
          {
            module: "Module 4",
            title: "Developing Web Applications with Python",
            topics: [
              {
                name: "1. Getting Started with Flask",
                description:
                  "Setting up Flask, creating simple applications, routing, and middleware.",
              },
              {
                name: "2. Exploring Django",
                description:
                  "Introduction to Django, MVC model, views, URL mapping.",
              },
            ],
          },
          {
            module: "Module 5",
            title: "Automation, GUI Programming, and Version Control",
            topics: [
              {
                name: "1. Automation and Scripting",
                description:
                  "Enhancing file handling, database automation, and web scraping with BeautifulSoup.",
              },
              {
                name: "2. GUI Development with TKinter",
                description:
                  "Basics of TKinter for developing desktop applications.",
              },
              {
                name: "3. Version Control with Git",
                description:
                  "Managing projects with Git, understanding repository management, commits, merging, and basic Git commands.",
              },
            ],
          },
        ],
      },
      {
        maintitle: "Cloud & DevOps For Fullstack Dev",
        subdata: [
          {
            module: "Module 1",
            title: "Introduction to Cloud Computing for Developers",
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
            title: "DevOps for Full Stack Developers",
            topics: [
              {
                name: "1. Understanding DevOps",
                description:
                  "The philosophy, practices, and benefits of DevOps in modern software development, emphasizing collaboration, automation, and integration.",
              },
              {
                name: "2. Version Control with Gi",
                description:
                  "Deep dive into using Git for source code management, including best practices for branches, commits, merges, and pull requests.",
              },
              {
                name: "3. Continuous Integration/Continuous Deployment (CI/CD)",
                description:
                  "Introduction to CI/CD pipelines, overview of tools (e.g., Jenkins, GitHub Actions), and setting up basic pipelines for automated testing and deployment.",
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
            title: "Infrastructure and Configuration Management",
            topics: [
              {
                name: "1. Containers and Docker",
                description:
                  "Introduction to containers, Docker fundamentals, creating Docker images, and container management basics.",
              },
              {
                name: "2. Configuration Management Tools",
                description:
                  "Overview of tools like Ansible and Chef for automating the configuration of servers and environments.",
              },
              {
                name: "3. Managing Application Infrastructure",
                description:
                  "Basic strategies for managing infrastructure as part of the application lifecycle, including introduction to infrastructure as code (IaC) principles.",
              },
              {
                name: "4. Serverless Computing Concepts",
                description:
                  "Understanding serverless computing and its implications for full stack development, including FaaS (Function as a Service) basics.",
              },
            ],
          },
          {
            module: "Module 4",
            title: "Building and Deploying Scalable Web Applications",
            topics: [
              {
                name: "1. Scalable Application Design",
                description:
                  "Principles of designing scalable applications that can grow with user demand, focusing on microservices architecture and stateless application desig",
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
            title: "Project Collaboration and DevOps Practices",
            topics: [
              {
                name: "1. Agile and Scrum Methodologies",
                description:
                  "Incorporating Agile and Scrum practices into team collaboration for efficient project management.",
              },
              {
                name: "2. Code Review and Collaboration Tools",
                description:
                  "Utilizing code review processes and collaboration tools (e.g., GitHub, GitLab) to enhance code quality and team productivity.",
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
    course: "full_stack_mern",
    headerTitle: "Dive into Full-Stack MERN Development",
    headerImage: javabanner,
    courseTitle: "Why Full Stack Masters Program ?",
    title: "Full stack Masters With Cloud & DevOps Curriculum",
    subTitle: "It stretches your mind, think better and create even better.",
    courseList: [
      "Fundamentals of IT",
      "Foundations of Web (HTML, CSS, BootStrap, JS, TS)",
      "React Framework",
      "MERN Stack ( React & Node)",
      "DevOps & Cloud",
    ],
    accordionData: [
      {
        maintitle: "Applications & Web Technologies",
        subdata: [
          {
            module: "Module 1",
            title:
              "Software Development Life Cycle & Application LifeCycle Management",
            topics: [
              {
                name: "1.  What is an Application?",
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
        maintitle: "Foundations of Web Development",
        subdata: [
          {
            module: "Module 1",
            title: "Building Blocks of Web Design - HTML",
            intro: "Introduction to HTML",
            topics: [
              {
                name: "1. Basics of HTML",
                description: [
                  "The evolution and role of HTML in web development.",
                  "Understanding HTML syntax and the structure of documents.",
                ],
              },
              {
                name: "2. Core HTML Elements",
                description:
                  "Detailed look at paragraphs, headings, links, images, and their attributes.",
              },
              {
                name: "3. Structuring Web Content",
                description: [
                  "Using lists and tables for data presentation.",
                  "The significance of semantic HTML for accessibility.",
                ],
              },
            ],
            intro1: "Module 2: Enhancing Web Pages with Forms and Multimedia",
            topics1: [
              {
                name: "1. Interactive Forms",
                description: [
                  "Crafting forms for data collection with a variety of input types.",
                  "Basics of form validation and ensuring accessible form design.",
                ],
              },
              {
                name: "2. Embedding Multimedia",
                description: [
                  "Incorporating audio and video elements.",
                  "Embedding external resources with ' iframe ' and other tags.",
                ],
              },
            ],
            intro2: "Module 3: Advanced HTML Features",
            topics2: [
              {
                name: "1. Modern HTML Elements",
                description:
                  "Exploring semantic elements like ' Article ', 'Section', and 'Nav'.",
              },
              {
                name: "2. Dynamic HTML with APIs",
                description:
                  "A brief overview of HTML5 APIs enhancing interactivity and web functionality.",
              },
              {
                name: "3. Reusable Web Components",
                description:
                  "Introduction to HTML templates, custom elements, and shadow DOM.",
              },
            ],
            intro3: "Module 4: Accessibility and HTML Best Practices",
            topics3: [
              {
                name: "1. Enhancing Web Accessibility",
                description:
                  "Utilizing ARIA roles and proper HTML structure to support all users.",
              },
              {
                name: "2. Maintaining HTML Standards",
                description:
                  "Importance of validating HTML code and adhering to web standards for cross-browser compatibility.",
              },
            ],
            intro4: "Module 5: Performance, Security, and Staying Current",
            topics4: [
              {
                name: "1. Optimizing Performance",
                description:
                  "Best practices for embedding content and managing user-generated content to prevent common security vulnerabilities.",
              },
              {
                name: "2. Web Security Fundamentals",
                description:
                  "Importance of validating HTML code and adhering to web standards for cross-browser compatibility.",
              },
              {
                name: "3. Keeping Up with HTML Evolution",
                description:
                  "Resources and strategies for staying updated with HTML developments and future trends.",
              },
            ],
          },
          {
            module: "Module 2",
            title: "CSS Fundamentals",
            topics: [
              {
                name: "1. Foundations of CSS",
                description: [
                  "History and evolution of CSS.",
                  "How CSS works with HTML to style webpages.",
                  "The role of the CSSOM (CSS Object Model) in web rendering.",
                  "Overview of CSS specifications and how to read the CSS documentation.",
                ],
              },
              {
                name: "2. Applying CSS Styles",
                description: [
                  "Comparison of External, Internal, and Inline Styles: Use cases and best practices.",
                  "Linking stylesheets and understanding the tag.",
                  "The importance of CSS placement for performance and maintenance.",
                ],
              },
              {
                name: "3. CSS Syntax",
                description: [
                  "Detailed exploration of properties and values.",
                  "Writing well-structured CSS rules.",
                  "Understanding the universal selector (*) and its use cases.",
                  "Comments in CSS: Syntax and best practices for documentation.",
                ],
              },
              {
                name: "4. Selectors and Combinators",
                description: [
                  "Types of selectors: Class, ID, Attribute, Pseudo-class, and Pseudo-element selectors.",
                  "Combinators: Descendant, Child, Adjacent Sibling, and General Sibling.",
                  "Practical exercises: Using selectors to style complex layouts.",
                ],
              },
            ],
            intro1: "Module 2: Styling and the Box Model",
            topics1: [
              {
                name: "1. Understanding the Box Model",
                description: [
                  "In-depth look at content, padding, border, and margin.",
                  "Box-sizing: border-box vs. content-box.",
                  "Visualizing the box model with browser developer tools.",
                ],
              },

              {
                name: "2. Typography and Text Styling",
                description: [
                  "Font families, web-safe fonts, and @font-face rule.",
                  "Text styling properties: weight, style, spacing, shadow.",
                  "Web typography best practices for readability and accessibility.",
                ],
              },
              {
                name: "3. Units, Values, and Colors",
                description: [
                  "Absolute vs. Relative units: When and why to use each.",
                  "Color models in CSS: RGB, RGBA, HSL, HSLA, and Hexadecimal.",
                  "Implementing custom properties (CSS Variables) for theme management.",
                ],
              },
              {
                name: "4. Specificity, Inheritance, and the Cascade",
                description: [
                  "How CSS determines which rules apply: Specificity hierarchy. Inheritance and how it affects styling.",
                  "The role of the cascade in resolving style conflicts.",
                  "Strategies to organize and structure CSS to minimize specificity conflicts.",
                ],
              },
            ],
            intro2: "Module 3: Advanced Styling Techniques",
            topics2: [
              {
                name: "1. Visual Effects ,",
                description: [
                  "Implementing box-shadow and text-shadow for depth and visual interest.",
                  "Using border-radius for rounded corners.",
                  "Gradient backgrounds: Linear and radial gradients.",
                ],
              },

              {
                name: "2. Background Techniques",
                description: [
                  "Complex background images and patterns.",
                  "Controlling background size, position, and repetition.",
                  "Multi-layer backgrounds and their use cases.",
                ],
              },
              {
                name: "3. Advanced Border and Outline Styling",
                description: [
                  "Border images for intricate border designs.",
                  "Styling and animating outlines as focus indicators.",
                ],
              },
              {
                name: "4. Layout Control with Overflow and Margin Collapsing",
                description: [
                  "Controlling content overflow: scroll, hidden, and auto.",
                  "Understanding when and why margin collapsing occurs.",
                  "Strategies to prevent unwanted margin collapsing.",
                ],
              },
            ],
            intro3: "Module 4: CSS Layouts and Positioning",
            topics3: [
              {
                name: "1. The Display Property",
                description: [
                  "The Display Property",
                  "Newer display values: flex, grid, and contents.",
                ],
              },

              {
                name: "2. CSS Positioning Techniques",
                description: [
                  "Detailed scenarios for using each positioning value.",
                  "Creating sticky headers and footers.",
                  "Overlaying content with absolute positioning.",
                ],
              },
              {
                name: "3. Floating Elements and Clearing Floats",
                description: [
                  "The role of floats in CSS layout history.",
                  "Techniques for clearing floats: clearfix hack and overflow method.",
                  "When to use floats in modern CSS.",
                ],
              },
              {
                name: "4. Handling Overflow",
                description: [
                  "Techniques for managing content overflow in containers.",
                  "Design patterns for scrollable elements.",
                ],
              },
            ],
            intro4: "Module 5: Responsive Design and Advanced CSS Features",
            topics4: [
              {
                name: "1. Flexbox and Grid Layouts",
                description: [
                  "Detailed guide to Flexbox: Properties for containers and items.",
                  "Grid Layout: Defining grid containers, grid items, and grid areas.",
                  "Use cases and practical examples: When to use Flexbox vs. Grid.",
                ],
              },

              {
                name: "2. Responsive Design Techniques",
                description: [
                  "Media Queries: Syntax and breakpoints.",
                  "Mobile-first vs. Desktop-first strategies.",
                  "Responsive images and videos: Techniques for adaptive media.",
                ],
              },
              {
                name: "3. Animations and Transitions",
                description: [
                  "Creating smooth transitions between states.",
                  "Keyframe animations: Building complex animations with @keyframes.",
                  "Performance considerations for CSS animations.",
                ],
              },
              {
                name: "4. Advanced Responsive Design",
                description: [
                  "Implementing responsive typography.",
                  "Strategies for accessible, responsive forms.",
                  "Advanced layout patterns: Masonry, column-drop, and >",
                ],
              },
            ],
          },
          {
            module: "Module 3",
            title: "Bootstrap Essentials - Responsive Design",
            topics: [
              {
                name: "1. Getting Started with Bootstrap",
                description: [
                  "Introduction to Bootstrap",
                  "Setting Up Bootstrap",
                  "Using Bootstrap CDN",
                  "Basic Grid System",
                  "Containers, Rows, and Columns",
                ],
              },
              {
                name: "2. Bootstrap Layouts and Responsiveness",
                description: [
                  "Responsive Classes",
                  "Typography and Utilities",
                  "Default Typography",
                  "Text Alignment and Display Classes",
                  "Spacing Utilities",
                ],
              },
              {
                name: "3. Navigation and Components in Bootstrap",
                description: [
                  "Navigation",
                  "Navbar Dropdowns within Navbar",
                  "Alerts: Basic Alerts & Dismissible Alerts",
                  "Badges",
                  "Button Styles & Button Groups",
                ],
              },
              {
                name: "4. Advanced Bootstrap Components",
                description: [
                  "Basic Card: Card Headers and Footers",
                  "Image Overlays in Cards",
                  "Form Controls, Form Groups, and Layou",
                  "Validation Feedback",
                  "Basic Modal Setup",
                  "Carousel with Indicators and Controls",
                ],
              },
              {
                name: "5. Interactivity and Layout in Bootstrap",
                description: [
                  "Tooltips and Popovers",
                  "Flex Container and Items",
                  "Direction, Order, and Alignment in Flex",
                  "Visibility Classes",
                ],
              },
            ],
          },
          {
            module: "Module 4",
            title: " JavaScript - Building Blocks to Advanced Scripts",
            intro: "Topic 1: Core JavaScript Concepts",
            topics: [
              {
                name: "1. Introduction to JavaScript",
                description: "Variables, Data Types, Operators",
              },
              {
                name: "2. Functions and Scope",
                description: [
                  "Functions, Parameters, Return Statements",
                  "Function Expressions, Default Parameters, IIFE (Immediately Invoked Function Expressions)",
                  "JavaScript Functions and Scope, Anonymous Functions, Higher-Order Functions, Callback Functions, Arrow Functions, Closures",
                ],
              },
              {
                name: "3. Control Structures and Data Handling",
                description: [
                  "Hoisting, Control Structures, Conditional Statements, Loops",
                  "Arrays - Introduction and Methods, Object Methods, Spread/Rest Operators, Array and Object Destructuring",
                ],
              },
              {
                name: "4. Strings, Dates, and Template Literals",
                description: "Strings, Dates, and Template Literals",
              },
              {
                name: "5. Object-Oriented Programming in JavaScript",
                description:
                  "Objects and Classes, Getters and Setters, Prototypes, Inheritance, Constructor Functions",
              },
            ],
            intro1: "Topic 2: Advanced JavaScript Features",
            topics1: [
              {
                name: "1. Deep Dive into Functions and Scope",
                description:
                  "Exploring further into Functions and Scope beyond the basics",
              },
              {
                name: "2. Asynchronous JavaScript",
                description:
                  "Introduction To AJAX, Callbacks, Promises, Async/Await",
              },
              {
                name: "3. Execution Context, Scope Chain, and Error Handling",
                description:
                  "Execution Context and Scope Chain, Error Handling (try...catch)",
              },
              {
                name: "4. Modules and Regular Expressions",
                description:
                  "Modules and Import/Export, Introduction to Regular Expressions",
              },
              {
                name: "5. Local Storage and Session Storage",
                description:
                  "Utilizing Web Storage APIs for storing data locally",
              },
            ],
            intro2: "Topic 3: Working with the Document Object Model (DOM)",
            topics2: [
              {
                name: "1. DOM Basics",
                description: "DOM Tree, Nodes, Manipulation",
              },
              {
                name: "2. Event Handling",
                description: "Event Listeners & Event Delegation",
              },
              {
                name: "3. Advanced DOM Manipulation",
                description:
                  "DOM Traversal, createElement, appendChild, insertBefore",
              },
            ],
            intro3: "Topic 4: Asynchronous Programming and APIs",
            topics3: [
              {
                name: "1. Asynchronous JavaScript Revisited",
                description:
                  "A comprehensive look into AJAX, Fetch API, Promises, and Async/Await",
              },
              {
                name: "2. Working with APIs",
                description:
                  "Understanding Web APIs, Making HTTP requests using the Fetch API, Handling responses and working with JSON, Error handling with Fetch API",
              },
            ],
            intro4: "Topic 5: Modern JavaScript Development",
            topics4: [
              {
                name: "1. Advanced Function Usage",
                description:
                  "A deeper exploration of JavaScript's functional programming aspects",
              },
              {
                name: "2. Error Handling and Regular Expressions",
                description:
                  "Advanced techniques for managing errors and utilizing regular expressions for data validation",
              },
              {
                name: "3. JavaScript Modules",
                description:
                  "Leveraging modules for efficient code organization and reusability",
              },
              {
                name: "3. Web Storage",
                description:
                  "Strategies for using Local Storage & Session Storage to enhance user experience",
              },
            ],
          },
          {
            module: "Module 5",
            title: "Typescript Essentials",
            intro: "Topic 1: Introduction to TypeScript and its Fundamentals",
            topics: [
              {
                name: "1. Understanding TypeScript",
                description: [
                  "What is TypeScript?",
                  "Benefits of using TypeScript",
                  "Setting up the TypeScript environment",
                  "Introduction to the TypeScript Compiler",
                ],
              },
              {
                name: "2. The Core Concepts",
                description: [
                  "Variables in TypeScript",
                  "Basic and Complex Data Types",
                  "Type Inference and Type Compatibility",
                ],
              },
            ],
            intro1: "Topic 2: Diving Deeper into TypeScript Types",
            topics1: [
              {
                name: "1. Working with Enums",
                description: "Enums and their uses",
              },
              {
                name: "2. Advanced Typing Features",
                description:
                  "Advanced Types: Union, Intersection, Conditional Types",
              },
              {
                name: "3. Iterating with TypeScript",
                description: "Iterators and Generators",
              },
            ],
            intro2: "Topic 3: Object-Oriented Programming with TypeScript",
            topics2: [
              {
                name: "1. OOP Fundamentals in TypeScript",
                description: [
                  "Introduction to Object-Oriented Programming concepts",
                  "Classes and Objects",
                ],
              },
              {
                name: "2. Inheritance and Polymorphism",
                description: [
                  "Inheritance: Extending Classes",
                  "Polymorphism: Method Overriding",
                ],
              },
            ],
            intro3:
              "Topic 4: Leveraging Interfaces and Abstract Classes in TypeScript",
            topics3: [
              {
                name: "1. Interfaces: Blueprint of an Object",
                description: [
                  "Understanding Interfaces",
                  "Applying Interfaces to Classes",
                ],
              },
              {
                name: "2. Abstract Classes",
                description: [
                  "Abstract Classes and their application",
                  "Differentiating Interfaces from Abstract Classes",
                ],
              },
            ],
            intro4: "Topic 5: Code Organization with Modules and Namespaces",
            topics4: [
              {
                name: "1. Namespaces",
                description: "Organizing code with Namespaces",
              },
              {
                name: "2. Modules: The Building Blocks",
                description: [
                  "Modules in TypeScript",
                  "Importing and Exporting Modules",
                ],
              },
            ],
          },
        ],
      },
      {
        maintitle: "REACT JS FRONTEND FRAMEWORK",
        subdata: [
          {
            module: "Module 1",
            title: "React Fundamentals and ES6",

            topics: [
              {
                name: "1. Getting Started with React",
                description: [
                  "Introduction to React and its significance in modern web development.",
                  "Setting up a React development environment.",
                ],
              },
              {
                name: "2. ES6 for React",
                description: [
                  "Essential ES6 features for React development: Arrow Functions, Let and Const, Template Literals.",
                  "Advanced ES6 features: Destructuring, Spread/Rest Operators, ES6 Modules, Promises, Async/Await.",
                ],
              },
              {
                name: "3. Functional Components and JSX",
                description: [
                  "Understanding functional components and JSX syntax.",
                  "Benefits of functional components over class components.",
                ],
              },
            ],
          },
          {
            module: "Module 2",
            title: "Developing with React Components",
            topics: [
              {
                name: "1.  React Components and JSX Deep Dive",
                description:
                  "JSX syntax nuances, embedding expressions, and creating functional components.",
              },
              {
                name: "2. State and Props in React",
                description: [
                  "Managing component state with useState.",
                  "Understanding and using props for parent-child communication.",
                ],
              },
              {
                name: "3. React Hooks for Component Lifecycle",
                description:
                  "Introduction to useEffect for side effects in functional components.",
              },
            ],
          },
          {
            module: "Module 3",
            title: "Advanced React Features",
            topics: [
              {
                name: "1. Advanced Hooks and State Management",
                description:
                  "Exploring useContext, useReducer for global state management and performance optimizations with useCallback, useMemo.",
              },
              {
                name: "2. Styling and Data Fetching",
                description: [
                  "Approaches to styling: CSS Modules, Styled Components.",
                  "Fetching data from APIs using useEffect and Axios.",
                ],
              },
            ],
          },
          {
            module: "Module 4",
            title: "Application Architecture in React",
            topics: [
              {
                name: "1. Routing in React Applications",
                description:
                  "Implementing single-page applications with React Router.",
              },
              {
                name: "2. Form Handling in React",
                description:
                  "Strategies for building and managing forms efficiently.",
              },
              {
                name: "3. Global State Management with Redux",
                description:
                  "Basics of Redux for global state management in large-scale applications.",
              },
            ],
          },
          {
            module: "Module 5",
            title: "Performance Optimization and Best Practices",
            topics: [
              {
                name: "1. Optimizing React Applications",
                description:
                  "Techniques like code splitting, lazy loading with React Suspense.",
              },
              {
                name: "2. Testing React Components",
                description:
                  "Unit testing strategies using Jest and React Testing Library.",
              },
              {
                name: "3. React Best Practices",
                description:
                  "Code organization, performance optimization strategies, and maintaining coding standards.",
              },
            ],
          },
        ],
      },
      {
        maintitle: "MERN Stack ( Node, Express, MongoDB)",
        subdata: [
          {
            module: "Module 1",
            title: "Introduction to Node.js and JavaScript Essentials",
            topics: [
              {
                name: "1. Foundations of Node.js",
                description:
                  "Introduction to Node.js, its architecture, setup, and the Node.js ecosystem.",
              },
              {
                name: "2. JavaScript and ES6+ for Node.js",
                description:
                  "Covering JavaScript basics and ES6+ features essential for Node.js development.",
              },
              {
                name: "3. Node.js Runtime Deep Dive",
                description:
                  "Exploring the event loop, non-blocking I/O, and built-in modules crucial for Node.js applications.",
              },
            ],
          },
          {
            module: "Module 2",
            title: "Web Development with Express.js and Data Handling",
            topics: [
              {
                name: "1. Express.js Fundamentals",
                description:
                  "Setting up an Express server, routing, middleware, and serving static files.",
              },
              {
                name: "2.  Data Handling in Node.js",
                description:
                  "JSON data handling, file system operations, and basics of integrating SQL and NoSQL databases.",
              },
            ],
          },
          {
            module: "Module 3",
            title: "API Development and Security in Node.js",
            topics: [
              {
                name: "1. RESTful API Development",
                description:
                  "Designing and implementing RESTful APIs, documentation, and testing strategies.",
              },
              {
                name: "2. Securing Node.js Applications",
                description:
                  "Authentication methods, implementing JWT and OAuth, and security best practices",
              },
            ],
          },
          {
            module: "Module 4",
            title: "Advanced Node.js Development",
            topics: [
              {
                name: "1. Advanced Asynchronous Patterns and Real-Time Communication",
                description:
                  "Utilizing advanced asynchronous patterns, WebSockets for real-time communication.",
              },
              {
                name: "2. Node.js Application Security and Performance",
                description:
                  "Enhancing application security, deployment strategies, and performance optimization.",
              },
            ],
          },
          {
            module: "Module 5",
            title: "MongoDB Essentials and Integration with Node.js",
            topics: [
              {
                name: "1. MongoDB Basics and CRUD Operations",
                description:
                  "Introduction to MongoDB, basic operations, CRUD operations, and understanding ObjectIds and Indexes.",
              },
              {
                name: "2. Aggregation and Data Modeling in MongoDB",
                description:
                  "Utilizing MongoDB's aggregation capabilities and strategies for effective data modeling.",
              },
              {
                name: "3. Integrating MongoDB with Node.js",
                description:
                  "Establishing connections using MongoClient and Mongoose, conducting database operations, and optimizing CRUD operations in a Node.js environment.",
              },
            ],
          },
        ],
      },
      {
        maintitle: "Cloud & DevOps For Fullstack Dev",
        subdata: [
          {
            module: "Module 1",
            title: "Introduction to Cloud Computing for Developers",
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
            title: "DevOps for Full Stack Developers",
            topics: [
              {
                name: "1. Understanding DevOps",
                description:
                  "The philosophy, practices, and benefits of DevOps in modern software development, emphasizing collaboration, automation, and integration.",
              },
              {
                name: "2. Version Control with Gi",
                description:
                  "Deep dive into using Git for source code management, including best practices for branches, commits, merges, and pull requests.",
              },
              {
                name: "3. Continuous Integration/Continuous Deployment (CI/CD)",
                description:
                  "Introduction to CI/CD pipelines, overview of tools (e.g., Jenkins, GitHub Actions), and setting up basic pipelines for automated testing and deployment.",
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
            title: "Infrastructure and Configuration Management",
            topics: [
              {
                name: "1. Containers and Docker",
                description:
                  "Introduction to containers, Docker fundamentals, creating Docker images, and container management basics.",
              },
              {
                name: "2. Configuration Management Tools",
                description:
                  "Overview of tools like Ansible and Chef for automating the configuration of servers and environments.",
              },
              {
                name: "3. Managing Application Infrastructure",
                description:
                  "Basic strategies for managing infrastructure as part of the application lifecycle, including introduction to infrastructure as code (IaC) principles.",
              },
              {
                name: "4. Serverless Computing Concepts",
                description:
                  "Understanding serverless computing and its implications for full stack development, including FaaS (Function as a Service) basics.",
              },
            ],
          },
          {
            module: "Module 4",
            title: "Building and Deploying Scalable Web Applications",
            topics: [
              {
                name: "1. Scalable Application Design",
                description:
                  "Principles of designing scalable applications that can grow with user demand, focusing on microservices architecture and stateless application desig",
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
            title: "Project Collaboration and DevOps Practices",
            topics: [
              {
                name: "1. Agile and Scrum Methodologies",
                description:
                  "Incorporating Agile and Scrum practices into team collaboration for efficient project management.",
              },
              {
                name: "2. Code Review and Collaboration Tools",
                description:
                  "Utilizing code review processes and collaboration tools (e.g., GitHub, GitLab) to enhance code quality and team productivity.",
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
    course: "full_stack_ai_data_science",
    headerTitle: "Become an AI & Data Science Expert with Our Program",
    headerImage: javabanner,
    courseTitle: "Why AI & Data Science Expert ?",
    title: "Fullstack AI & Data Science Course Curriculum",
    subTitle: "It stretches your mind, think better and create even better.",
    courseList: [
      "Fundamentals Of Data & IT",
      "Python for AI",
      "Math & Stat for AI",
      "Machine Learning",
      "Deep Learning",
      "AI Application & GEN AI",
      "Cloud & DevOps for AI",
    ],
    accordionData: [
      {
        maintitle: "Fundamentals of Data & IT",
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
        maintitle: "Python for AI",
        subdata: [
          {
            module: "Module 1",
            title: "Python Basics for AI",
            intro: "Topics Covered:",
            topics: [
              {
                description: [
                  "Python Syntax and Basic Constructs",
                  "Control Flow and Functions",
                  "Object-Oriented Programming in Python",
                ],
              },
            ],
            intro1: "Module 2: Enhancing Web Pages with Forms and Multimedia",
            topics1: [
              {
                name: "1. Interactive Forms",
                description: [
                  "Crafting forms for data collection with a variety of input types.",
                  "Basics of form validation and ensuring accessible form design.",
                ],
              },
              {
                name: "2. Embedding Multimedia",
                description: [
                  "Incorporating audio and video elements.",
                  "Embedding external resources with ' iframe ' and other tags.",
                ],
              },
            ],
            intro2: "Module 3: Advanced HTML Features",
            topics2: [
              {
                name: "1. Modern HTML Elements",
                description:
                  "Exploring semantic elements like ' Article ', 'Section', and 'Nav'.",
              },
              {
                name: "2. Dynamic HTML with APIs",
                description:
                  "A brief overview of HTML5 APIs enhancing interactivity and web functionality.",
              },
              {
                name: "3. Reusable Web Components",
                description:
                  "Introduction to HTML templates, custom elements, and shadow DOM.",
              },
            ],
            intro3: "Module 4: Accessibility and HTML Best Practices",
            topics3: [
              {
                name: "1. Enhancing Web Accessibility",
                description:
                  "Utilizing ARIA roles and proper HTML structure to support all users.",
              },
              {
                name: "2. Maintaining HTML Standards",
                description:
                  "Importance of validating HTML code and adhering to web standards for cross-browser compatibility.",
              },
            ],
            intro4: "Module 5: Performance, Security, and Staying Current",
            topics4: [
              {
                name: "1. Optimizing Performance",
                description:
                  "Best practices for embedding content and managing user-generated content to prevent common security vulnerabilities.",
              },
              {
                name: "2. Web Security Fundamentals",
                description:
                  "Importance of validating HTML code and adhering to web standards for cross-browser compatibility.",
              },
              {
                name: "3. Keeping Up with HTML Evolution",
                description:
                  "Resources and strategies for staying updated with HTML developments and future trends.",
              },
            ],
          },
          {
            module: "Module 2",
            title: "Data Handling with Python",
            topics: [
              {
                description: [
                  "NumPy for Numerical Data",
                  "Pandas for Data Cleaning and Preparation",
                  "Data Visualization with Matplotlib and Seaborn",
                ],
              },
            ],
            intro1: "Module 2: Styling and the Box Model",
            topics1: [
              {
                name: "1. Understanding the Box Model",
                description: [
                  "In-depth look at content, padding, border, and margin.",
                  "Box-sizing: border-box vs. content-box.",
                  "Visualizing the box model with browser developer tools.",
                ],
              },

              {
                name: "2. Typography and Text Styling",
                description: [
                  "Font families, web-safe fonts, and @font-face rule.",
                  "Text styling properties: weight, style, spacing, shadow.",
                  "Web typography best practices for readability and accessibility.",
                ],
              },
              {
                name: "3. Units, Values, and Colors",
                description: [
                  "Absolute vs. Relative units: When and why to use each.",
                  "Color models in CSS: RGB, RGBA, HSL, HSLA, and Hexadecimal.",
                  "Implementing custom properties (CSS Variables) for theme management.",
                ],
              },
              {
                name: "4. Specificity, Inheritance, and the Cascade",
                description: [
                  "How CSS determines which rules apply: Specificity hierarchy. Inheritance and how it affects styling.",
                  "The role of the cascade in resolving style conflicts.",
                  "Strategies to organize and structure CSS to minimize specificity conflicts.",
                ],
              },
            ],
            intro2: "Module 3: Advanced Styling Techniques",
            topics2: [
              {
                name: "1. Visual Effects ,",
                description: [
                  "Implementing box-shadow and text-shadow for depth and visual interest.",
                  "Using border-radius for rounded corners.",
                  "Gradient backgrounds: Linear and radial gradients.",
                ],
              },

              {
                name: "2. Background Techniques",
                description: [
                  "Complex background images and patterns.",
                  "Controlling background size, position, and repetition.",
                  "Multi-layer backgrounds and their use cases.",
                ],
              },
              {
                name: "3. Advanced Border and Outline Styling",
                description: [
                  "Border images for intricate border designs.",
                  "Styling and animating outlines as focus indicators.",
                ],
              },
              {
                name: "4. Layout Control with Overflow and Margin Collapsing",
                description: [
                  "Controlling content overflow: scroll, hidden, and auto.",
                  "Understanding when and why margin collapsing occurs.",
                  "Strategies to prevent unwanted margin collapsing.",
                ],
              },
            ],
            intro3: "Module 4: CSS Layouts and Positioning",
            topics3: [
              {
                name: "1. The Display Property",
                description: [
                  "The Display Property",
                  "Newer display values: flex, grid, and contents.",
                ],
              },

              {
                name: "2. CSS Positioning Techniques",
                description: [
                  "Detailed scenarios for using each positioning value.",
                  "Creating sticky headers and footers.",
                  "Overlaying content with absolute positioning.",
                ],
              },
              {
                name: "3. Floating Elements and Clearing Floats",
                description: [
                  "The role of floats in CSS layout history.",
                  "Techniques for clearing floats: clearfix hack and overflow method.",
                  "When to use floats in modern CSS.",
                ],
              },
              {
                name: "4. Handling Overflow",
                description: [
                  "Techniques for managing content overflow in containers.",
                  "Design patterns for scrollable elements.",
                ],
              },
            ],
            intro4: "Module 5: Responsive Design and Advanced CSS Features",
            topics4: [
              {
                name: "1. Flexbox and Grid Layouts",
                description: [
                  "Detailed guide to Flexbox: Properties for containers and items.",
                  "Grid Layout: Defining grid containers, grid items, and grid areas.",
                  "Use cases and practical examples: When to use Flexbox vs. Grid.",
                ],
              },

              {
                name: "2. Responsive Design Techniques",
                description: [
                  "Media Queries: Syntax and breakpoints.",
                  "Mobile-first vs. Desktop-first strategies.",
                  "Responsive images and videos: Techniques for adaptive media.",
                ],
              },
              {
                name: "3. Animations and Transitions",
                description: [
                  "Creating smooth transitions between states.",
                  "Keyframe animations: Building complex animations with @keyframes.",
                  "Performance considerations for CSS animations.",
                ],
              },
              {
                name: "4. Advanced Responsive Design",
                description: [
                  "Implementing responsive typography.",
                  "Strategies for accessible, responsive forms.",
                  "Advanced layout patterns: Masonry, column-drop, and >",
                ],
              },
            ],
          },
          {
            module: "Module 3",
            title: "Intermediate Python for AI",
            topics: [
              {
                description: [
                  "Working with APIs and Web Data",
                  "Introduction to Web Scraping",
                  "File Handling and Data Persistence",
                ],
              },
            ],
          },
          {
            module: "Module 4",
            title: " Advanced Python Concepts",

            topics: [
              {
                description: [
                  "Advanced Data Structures",
                  "Python Decorators, Generators, and Context Managers",
                  "Multithreading and Multiprocessing for Performance Optimization",
                ],
              },
            ],
            intro1: "Topic 2: Advanced JavaScript Features",
            topics1: [
              {
                name: "1. Deep Dive into Functions and Scope",
                description:
                  "Exploring further into Functions and Scope beyond the basics",
              },
              {
                name: "2. Asynchronous JavaScript",
                description:
                  "Introduction To AJAX, Callbacks, Promises, Async/Await",
              },
              {
                name: "3. Execution Context, Scope Chain, and Error Handling",
                description:
                  "Execution Context and Scope Chain, Error Handling (try...catch)",
              },
              {
                name: "4. Modules and Regular Expressions",
                description:
                  "Modules and Import/Export, Introduction to Regular Expressions",
              },
              {
                name: "5. Local Storage and Session Storage",
                description:
                  "Utilizing Web Storage APIs for storing data locally",
              },
            ],
            intro2: "Topic 3: Working with the Document Object Model (DOM)",
            topics2: [
              {
                name: "1. DOM Basics",
                description: "DOM Tree, Nodes, Manipulation",
              },
              {
                name: "2. Event Handling",
                description: "Event Listeners & Event Delegation",
              },
              {
                name: "3. Advanced DOM Manipulation",
                description:
                  "DOM Traversal, createElement, appendChild, insertBefore",
              },
            ],
            intro3: "Topic 4: Asynchronous Programming and APIs",
            topics3: [
              {
                name: "1. Asynchronous JavaScript Revisited",
                description:
                  "A comprehensive look into AJAX, Fetch API, Promises, and Async/Await",
              },
              {
                name: "2. Working with APIs",
                description:
                  "Understanding Web APIs, Making HTTP requests using the Fetch API, Handling responses and working with JSON, Error handling with Fetch API",
              },
            ],
            intro4: "Topic 5: Modern JavaScript Development",
            topics4: [
              {
                name: "1. Advanced Function Usage",
                description:
                  "A deeper exploration of JavaScript's functional programming aspects",
              },
              {
                name: "2. Error Handling and Regular Expressions",
                description:
                  "Advanced techniques for managing errors and utilizing regular expressions for data validation",
              },
              {
                name: "3. JavaScript Modules",
                description:
                  "Leveraging modules for efficient code organization and reusability",
              },
              {
                name: "3. Web Storage",
                description:
                  "Strategies for using Local Storage & Session Storage to enhance user experience",
              },
            ],
          },
          {
            module: "Module 5",
            title: "Python Libraries for AI Development",
            topics: [
              {
                description: [
                  "TensorFlow Basics",
                  "Keras for Deep Learning Models",
                  "PyTorch Introduction",
                ],
              },
            ],
          },
        ],
      },
      {
        maintitle: "Mathematics and Statistics for AI",
        subdata: [
          {
            module: "Module 1",
            title: "Linear Algebra for AI",

            topics: [
              {
                description: [
                  "Vectors, Matrices, and Linear Transformations",
                  "Eigenvalues and Eigenvectors",
                  "Application in AI and ML",
                ],
              },
            ],
          },
          {
            module: "Module 2",
            title: "Calculus and Optimization for AI",
            topics: [
              {
                description: [
                  "Differential Calculus and Gradients",
                  "Optimization Algorithms",
                  "Application in Neural Network Training",
                ],
              },
            ],
          },
          {
            module: "Module 3",
            title: "Probability Theory for AI",
            topics: [
              {
                description: [
                  "Basics of Probability",
                  "Probability Distributions",
                  "Bayesian Thinking in AI",
                ],
              },
            ],
          },
          {
            module: "Module 4",
            title: "Statistical Foundations for AI",
            topics: [
              {
                description: [
                  "Descriptive Statistics and Inferential Statistics",
                  "Hypothesis Testing and Confidence Intervals",
                  "Correlation vs. Causation",
                ],
              },
            ],
          },
          {
            module: "Module 5",
            title: "Advanced Mathematics for AI",
            topics: [
              {
                description: [
                  "Discrete Mathematics Concepts",
                  "Graph Theory and Network Models",
                  "Continuous Optimization and Constraint Satisfaction",
                ],
              },
            ],
          },
        ],
      },
      {
        maintitle: "Machine Learning",
        subdata: [
          {
            module: "Module 1",
            title: "Machine Learning Foundations",
            topics: [
              {
                description: [
                  "Types of Machine Learning: Supervised, Unsupervised, and Reinforcement",
                  "Bias-Variance Tradeoff",
                  "Evaluating Machine Learning Models",
                ],
              },
            ],
          },
          {
            module: "Module 2",
            title: "Supervised Learning Deep Dive",
            topics: [
              {
                description: [
                  "Classification Algorithms",
                  "Regression Analysis",
                  "Ensemble Learning Methods",
                ],
              },
            ],
          },
          {
            module: "Module 3",
            title: "Unsupervised Learning and Clustering",
            topics: [
              {
                description: [
                  "K-means and Hierarchical Clustering",
                  "Dimensionality Reduction Techniques: PCA, t-SNE",
                  "Association Rule Learning",
                ],
              },
            ],
          },
          {
            module: "Module 4",
            title: "Time Series Analysis and Forecasting",
            topics: [
              {
                description: [
                  "Time Series Data and Its Components",
                  "ARIMA and Seasonal ARIMA",
                  "Using Machine Learning for Time Series Prediction",
                ],
              },
            ],
          },
          {
            module: "Module 5",
            title: "Reinforcement Learning Basics",
            topics: [
              {
                description: [
                  "Principles of Reinforcement Learning",
                  "Markov Decision Processes",
                  "Implementing Q-Learning and Deep Q-Networks (DQN)",
                ],
              },
            ],
          },
        ],
      },
      {
        maintitle: "Deep Learning",
        subdata: [
          {
            module: "Module 1",
            title: "Introduction to Deep Learning",
            topics: [
              {
                description: [
                  "Understanding Deep Learning and Neural Networks",
                  "Activation Functions, Loss Functions, and Optimization Techniques",
                  "Building Your First Neural Network",
                ],
              },
            ],
          },
          {
            module: "Module 2",
            title: "Convolutional Neural Networks (CNNs)",
            topics: [
              {
                description: [
                  "Introduction to CNNs and Their Architecture",
                  "Implementing CNNs for Image Recognition and Classification",
                  "Advanced CNN Techniques for Computer Vision",
                ],
              },
            ],
          },
          {
            module: "Module 3",
            title: "Recurrent Neural Networks (RNNs) and LSTMs",
            topics: [
              {
                description: [
                  "Understanding RNNs and Their Applications",
                  "Long Short-Term Memory Networks (LSTMs) for Sequential Data Processing",
                  "Use Cases: Text Generation, Time Series Forecasting",
                ],
              },
            ],
          },
          {
            module: "Module 4",
            title: "Generative Adversarial Networks (GANs) and Autoencoders",
            topics: [
              {
                description: [
                  "Fundamentals of GANs and Their Architecture",
                  "Building Simple Generative Models with GANs",
                  "Exploring Autoencoders for Data Compression and Generation",
                ],
              },
            ],
          },
          {
            module: "Module 5",
            title: "Introduction to Transformer Models",
            topics: [
              {
                description: [
                  "Basics of Attention Mechanisms and Transformer Architecture",
                  "Implementing Transformer Models for NLP Tasks",
                  "Understanding BERT, GPT, and Other Variants",
                ],
              },
            ],
          },
        ],
      },
      {
        maintitle: "AI Applications",
        subdata: [
          {
            module: "Module 1",
            title: "Natural Language Processing (NLP) Applications",
            topics: [
              {
                description: [
                  "Text Preprocessing and Feature Extraction Techniques",
                  "Sentiment Analysis, Named Entity Recognition (NER), and Text Summarization",
                  "Chatbots and Language Models",
                ],
              },
            ],
          },
          {
            module: "Module 2",
            title: "AI in Computer Vision",
            topics: [
              {
                description: [
                  "Object Detection and Image Segmentation Techniques",
                  "Facial Recognition Systems",
                  "Autonomous Vehicles and Drone Technology",
                ],
              },
            ],
          },
          {
            module: "Module 3",
            title: "Reinforcement Learning Applications",
            topics: [
              {
                description: [
                  "Deep Reinforcement Learning for Game Playing",
                  "Applying RL in Robotics and Autonomous Systems",
                  "RL in Finance and Healthcare",
                ],
              },
            ],
          },
          {
            module: "Module 4",
            title: "Ethical AI and Governance",
            topics: [
              {
                description: [
                  "Ensuring Fairness and Transparency in AI Models",
                  "Data Privacy and Security in AI Applications",
                  "AI Governance and Regulatory Compliance",
                ],
              },
            ],
          },
          {
            module: "Module 5",
            title: "Innovative AI Technologies",
            topics: [
              {
                description: [
                  "Quantum Computing for AI",
                  "Edge AI and Its Applications",
                  "The Future of AI: Trends and Predictions",
                ],
              },
            ],
          },
        ],
      },
      {
        maintitle: "Cloud and DevOps for AI",
        subdata: [
          {
            module: "Module 1",
            title: "Cloud Platforms for AI",
            topics: [
              {
                description: [
                  "Overview of AWS, Google Cloud, and Azure for AI",
                  "Leveraging Cloud AI Services for Model Training and Deployment",
                  "Big Data Technologies and AI: Integrating Apache Spark and Hadoop",
                ],
              },
            ],
          },
          {
            module: "Module 2",
            title: "MLOps: Best Practices",
          },
          {
            module: "Module 3",
            title: "Deploying AI Models",
            topics: [
              {
                description: [
                  "Techniques for Model Deployment: API, Docker Containers, and Microservices",
                  "Scalability and Performance Optimization",
                  "User Interfaces for AI Applications",
                ],
              },
            ],
          },
          {
            module: "Module 4",
            title: "Security and Monitoring of AI Systems",
            topics: [
              {
                description: [
                  "Security Best Practices in AI Deployment",
                  "Techniques for Monitoring AI Systems for Anomalies and Performance Issues",
                  "Automated Remediation and Alerting Strategies",
                ],
              },
            ],
          },
          {
            module: "Module 5",
            title: "Future Directions in AI Deployment",
            topics: [
              {
                description: [
                  "Emerging Tools and Platforms for AI Deployment",
                  "Ethics and Responsible AI in Deployment",
                  "Preparing for Future Technological Advances in AI",
                ],
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
];

export const servicesData = [
  {
    course: "class_training",
    pageName: "Class Room Training",
    headerImage: classTraining,
    imagePosition: "br",
    boldDescription: "Welcome to Digital Edify's Classroom Training — ",
    description:
      "where learning meets innovation. Our classroom programs are designed to provide you with an immersive, interactive, and engaging educational experience.",
    keyword: [
      "Personalized Attention",
      "Interactive Sessions",
      "Networking Opportunities",
      "Advanced Classrooms",
      "Group Projects",
      "Collaborative Spaces",
    ],
    title: "Why Choose Classroom Training?",
    subTitle:
      "Choosing the right learning environment is crucial for your success. Here's why our classroom training stands out:",
    bulletPoints: [
      {
        title: "Personalized Attention",
        description:
          "Benefit from face-to-face interactions with instructors who are committed to your learning journey.",
      },
      {
        title: "Interactive Sessions",
        description:
          "Engage in dynamic discussions, collaborative projects, and immediate feedback loops.",
      },
      {
        title: "Networking Opportunities:",
        description:
          "Connect with like-minded peers and industry professionals.",
      },
      {
        title: "Engaging Discussions",
        description:
          "Participate in thought-provoking conversations that stimulate critical thinking.",
      },
      {
        title: "Advanced Classrooms",
        description:
          "Modern, spacious classrooms with ergonomic seating and cutting-edge presentation tools.",
      },
      {
        title: "Group Projects",
        description:
          "Work collaboratively on assignments that mirror real-world scenarios.",
      },
      {
        title: "Immediate Feedback",
        description:
          "Receive instant insights and guidance to enhance your understanding.",
      },
      {
        title: "Collaborative Spaces",
        description:
          "Dedicated areas for group study, brainstorming, and project development.",
      },
    ],
  },
  {
    course: "online_training",
    pageName: "Online Training",
    headerImage: onlineTraining,
    imagePosition: "bl",
    boldDescription: "Welcome to Digital Edify's Online Training — ",
    description:
      "where flexibility meets excellence. Our online programs are designed to provide you with a convenient, interactive, and engaging educational experience from the comfort of your home or office.",
    keyword: [
      "Flexible Scheduling",
      "Interactive Sessions",
      "Global Networking Opportunities",
      "Accessible Learning Resources",
      "Virtual Group Projects",
      "Personalized Mentorship",
    ],
    title: "Why Choose Online Training?",
    subTitle:
      "Choosing the right mode of learning is crucial for your success. Here's why our online training stands out:",
    bulletPoints: [
      {
        title: "Flexible Scheduling",
        description:
          "Learn at your own pace with access to live and recorded sessions that fit your schedule.",
      },
      {
        title: "Interactive Sessions",
        description:
          "Engage in dynamic online discussions, collaborative projects, and receive immediate feedback.",
      },
      {
        title: "Global Networking Opportunities",
        description:
          "Connect with like-minded peers and industry professionals from around the world.",
      },
      {
        title: "Accessible Learning Resources",
        description:
          "Gain 24/7 access to course materials, recordings, and our digital library.",
      },
      {
        title: "Virtual Group Projects",
        description:
          "Collaborate on assignments that simulate real-world scenarios through our online platforms.",
      },
      {
        title: "Personalized Mentorship",
        description:
          "Receive one-on-one guidance from instructors committed to your learning journey.",
      },
    ],
  },
  {
    course: "weekend_training",
    pageName: "Weekend Training",
    headerImage: weekendTraining,
    imagePosition: "rl",
    boldDescription: "Welcome to Digital Edify's Weekend Training — ",
    description:
      "where flexibility meets excellence. Our weekend programs are designed specifically for working professionals and individuals with busy weekday schedules. Experience an immersive, interactive, and engaging educational journey without disrupting your weekday commitments.",
    keyword: [
      "Flexible Scheduling",
      "Interactive Sessions",
      "Networking Opportunities",
      "Experienced Instructors",
      "Group Projects",
      "Collaborative Learning",
    ],
    title: "Why Choose Weekend Training?",
    subTitle:
      "Choosing the right training schedule is crucial for your success. Here's why our weekend training stands out:",
    bulletPoints: [
      {
        title: "Flexible Scheduling",
        description:
          "Balance your work-life commitments by attending classes on weekends without sacrificing quality education.",
      },
      {
        title: "Interactive Sessions",
        description:
          "Engage in dynamic discussions, collaborative projects, and receive immediate feedback, just like our weekday programs.",
      },
      {
        title: "Networking Opportunities",
        description:
          "Connect with like-minded professionals and expand your industry network during weekend classes.",
      },
      {
        title: "Experienced Instructors",
        description:
          "Learn from trainers who specialize in weekend teaching, understanding the unique needs of weekend learners.",
      },
      {
        title: "Group Projects",
        description:
          "Collaborate on assignments that simulate real-world scenarios, enhancing teamwork and problem-solving skills.",
      },
      {
        title: "Immediate Feedback",
        description:
          "Receive instant insights and guidance to enhance your understanding and accelerate your learning process.",
      },
      {
        title: "Collaborative Learning",
        description:
          "Participate in group activities and discussions that promote a deeper comprehension of the material.",
      },
      {
        title: "Personal Mentorship",
        description:
          "Benefit from one-on-one guidance to address your individual learning needs and career aspirations.",
      },
    ],
  },
  {
    course: "corporate_training",
    pageName: "Corporate Training",
    headerImage: corporateTraining,
    imagePosition: "tr",
    boldDescription: "Welcome to Digital Edify's Corporate Training — ",
    description:
      "where tailored solutions meet excellence. Our corporate programs are designed to empower your team with the skills and knowledge necessary to drive your organization's success.",
    keyword: [
      "Customized Programs",
      "Experienced Instructors",
      "Flexible Scheduling",
      "Practical Application",
      "Industry-Relevant Curriculum",
      "Ongoing Support",
    ],
    title: "Why Choose Corporate Training?",
    subTitle:
      "Investing in your team's development is crucial for organizational growth. Here's why our corporate training stands out:",
    bulletPoints: [
      {
        title: "Customized Programs",
        description: "Receive training solutions tailored to your organization's specific needs and goals.",
      },
      {
        title: "Experienced Instructors",
        description: "Benefit from industry experts who bring real-world insights to the training sessions.",
      },
      {
        title: "Flexible Scheduling",
        description: "Choose training schedules that fit your company's timelines and operational demands.",
      },
      {
        title: "Practical Application",
        description: "Engage in hands-on exercises and projects that directly relate to your business challenges.",
      },
      {
        title: "Industry-Relevant Curriculum",
        description: "Stay ahead with content that reflects the latest trends and technologies in your industry.",
      },
      {
        title: "Ongoing Support",
        description: "Access continuous resources and assistance even after the training concludes to ensure sustained success.",
      },
    ],
  },
  {
    course: "one_to_one_training",
    pageName: "One-To-One Training",
    headerImage: oneToOneTraining,
    imagePosition: "br",
    boldDescription: "Welcome to Digital Edify's Weekend Training — ",
    description: "where personalized learning meets excellence. Our one-on-one programs are designed to provide you with a tailored, interactive, and engaging educational experience that focuses entirely on your individual needs.",
    keyword: [
      "Personalized Curriculum",
      "Flexible Scheduling",
      "Dedicated Instructor",
      "Customized Learning Pace",
      "Direct Feedback",
      "Enhanced Focus",
    ],
    title: "Why Choose One-on-One Training?",
    subTitle: "Selecting the right training format is crucial for your success. Here's why our one-on-one training stands out:",
    bulletPoints: [
      {
        title: "Personalized Curriculum",
        description: "Receive a customized learning plan that targets your specific goals and areas for improvement.",
      },
      {
        title: "Flexible Scheduling",
        description: "Set your own schedule to learn at times that are most convenient for you.",
      },
      {
        title: "Dedicated Instructor",
        description: "Benefit from the undivided attention of an expert instructor committed to your success.",
      },
      {
        title: "Customized Learning Pace",
        description: "Progress through the material at a speed that matches your learning style.",
      },
      {
        title: "Direct Feedback",
        description: "Get immediate, tailored feedback to enhance your understanding and skills.",
      },
      {
        title: "Enhanced Focus",
        description: "Minimize distractions and maximize learning efficiency with a personalized setting.",
      },
    ],
  },
];
