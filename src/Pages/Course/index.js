import React from 'react'
import img1 from "../../assets/javabanner.webp"
import rating from "../../assets/rating.webp"
import m1 from "../../assets/Compaines/ansible.webp"
import m2 from "../../assets/Compaines/aws.webp"
import m3 from "../../assets/Compaines/azure.webp"
import m4 from "../../assets/Compaines/Chef.webp"
import m5 from "../../assets/Compaines/docker.webp"
import m6 from "../../assets/Compaines/git.webp"
import m7 from "../../assets/Compaines/jenkins.webp"
import m8 from "../../assets/Compaines/kubernetes.webp"
import m9 from "../../assets/Compaines/linux.webp"
import m10 from "../../assets/Compaines/nexus.webp"
import m11 from "../../assets/Compaines/terraform.webp"
import m12 from "../../assets/Compaines/slack.webp"
import m13 from "../../assets/Compaines/trello.webp"
import m14 from "../../assets/Compaines/azure.webp"
import m15 from "../../assets/Compaines/cgpt.webp"
import m16 from "../../assets/Compaines/githubgl.png"
import m17 from "../../assets/Compaines/seleniu.webp"
import { MdCheck } from 'react-icons/md'
import { LuUserPlus } from 'react-icons/lu'
import { PiClockCountdown } from 'react-icons/pi'
import WhyJavaTraining from './WhyJavaTraining'
import Compaines from '../Home/Compaines'
import Accordion from './Accordion'
import OneLearnCircle from '../../Components/HomePage/OneLearnCircle'
import LmsProject from '../Home/LmsProject'
import Certificate from '../Home/Certificate'
import GetJob from '../Home/GetJob'
import GitHubProfile from '../Home/GitHubProfile'
import ItEngineers from '../Home/ItEngineers'
import UpcomingBatch from '../Home/UpcomingBatch'
import WhyDigitalEdify from '../Home/WhyDigitalEdify'
import OnlineTaining from '../Home/OnlineTaining'
import OurLocations from '../Home/OurLocations'
import LogoGrid from '../../Components/Course/LogoGrid'


const Course = () => {

  const Data1 = ["Fundamentals of IT", "Core JAVA", "Advanced JAVA", "SpringBoot & MicroServices", "DevOps & Cloud For JAVA"]
  const Data2 = ["Online & ClassRoom Real-Time training", "Project & Task Based Learning", "24/7 Learning Support with Dedicated Mentors", "Interviews, Jobs, and Placement Support"]

  const Fundamentals = [
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
              description: "Classification and examples of various application types.",
            },
            {
              name: "3. Fundamentals of Web Applications",
              description: "Basic concepts and components of web applications.",
            },
            {
              name: "4. Web Application Architecture",
              description: "Structure and design patterns in web application architecture.",
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
              description: "Examination of different methodologies used in software development.",
            },
            {
              name: "4. DevOps Process",
              description: "Understanding the principles, practices, and benefits of DevOps.",
            },
          ],
        },
        {
          module: "Module 3",
          title: "Agile and Scrum",
          topics: [
            {
              name: "1. Introduction To Agile & Scrum",
              description: "Fundamental overview of Agile methodologies and the Scrum framework.",
            },
            {
              name: "2. The Principles of Agile Methodology",
              description: "Core principles of Agile focusing on iterative development and customer collaboration.",
            },
            {
              name: "3. Scrum Framework: Roles, Artifacts, and Events",
              description: "Key components of Scrum, including its roles, artifacts, and structured events.",
            },
            {
              name: "4. Implementing Agile with Scrum",
              description: "Strategies for applying Agile and Scrum practices in software development projects.",
            },
            {
              name: "5. Agile Project Management Best Practices",
              description:
                "Essential practices for leading Agile projects, emphasizing communication and continuous improvement.",
            },
          ],
        },
      ]
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
      ]
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
      ]
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
      ]
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
              description: "Understanding cloud computing: Definitions, service models (IaaS, PaaS, SaaS), and deployment models (public, private, hybrid, multicloud).",
            },
            {
              name: "2. Cloud Service Providers Overview",
              description: "Introduction to major cloud platforms (e.g., AWS, Azure, Google Cloud), focusing on their core services relevant to developers.",
            },
            {
              name: "3. Cloud-based Development Environments",
              description: "Setting up and utilizing cloud-based IDEs and development tools to streamline development workflows.",
            },
            {
              name: "4. Deploying Applications on the Cloud",
              description: "Basic concepts of application deployment on the cloud, including containerization basics with Docker and initial orchestration concepts.",
            },

          ],
        },
        {
          module: "Module 2",
          title: " DevOps for Full Stack Developers",
          topics: [
            {
              name: "1. Understanding DevOps",
              description: "The philosophy, practices, and benefits of DevOps in modern software development, emphasizing collaboration, automation, and integration.",
            },
            {
              name: "2. Version Control with Git",
              description: "Deep dive into using Git for source code management, including best practices for branches, commits, merges, and pull requests.",
            },
            {
              name: "3. Continuous Integration/Continuous Deployment (CI/CD)",
              description: "Introduction to CI/CD pipelines, overview of tools ( GitHub Actions), and setting up basic pipelines for automated testing and deployment.",
            },
            {
              name: "4. Monitoring and Feedback",
              description: "Basics of application monitoring, log management, and utilizing feedback for continuous improvement.",
            },
          ],
        },
        {
          module: "Module 3",
          title: " Infrastructure and Configuration Management",
          topics: [
            {
              name: "1. Containers and Docker",
              description: "Introduction to containers, Docker fundamentals, creating Docker https://www.digitaledify.ai/images, and container management basics.",
            },
            {
              name: "2. Managing Application Infrastructure",
              description: "Basic strategies for managing infrastructure as part of the application lifecycle, including introduction to infrastructure as code (IaC) principles.",
            },

          ],
        },
        {
          module: "Module 4",
          title: " Building and Deploying Scalable Web Applications",
          topics: [
            {
              name: "1. Scalable Application Design",
              description: "Principles of designing scalable applications that can grow with user demand, focusing on microservices architecture and stateless application design.",
            },
            {
              name: "2. Cloud-native Services for Developers",
              description: "Leveraging cloud-native services (e.g., AWS Lambda, Azure Functions, Google Cloud Run) for building and deploying applications.",
            },
            {
              name: "3. Databases in the Cloud",
              description: "Overview of cloud database services (SQL and NoSQL) and integrating them into web applications.",
            },
            {
              name: "4. Security Basics in Cloud and DevOps",
              description: "Understanding security best practices in cloud environments and throughout the DevOps pipeline.",
            },
          ],
        },
        {
          module: "Module 5",
          title: " Project Collaboration and DevOps Practices",
          topics: [
            {
              name: "1. Agile and Scrum Methodologies",
              description: "Incorporating Agile and Scrum practices into team collaboration for efficient project management.",
            },
            {
              name: "2. Code Review and Collaboration Tools",
              description: "Utilizing code review processes and collaboration tools GitHub, to enhance code quality and team productivity.",
            },
            {
              name: "3. Automation in Development",
              description: "Exploring automation beyond CI/CD, including automated testing frameworks, database migrations, and environment setup.",
            },
            {
              name: "4. DevOps Culture and Best Practices",
              description: "Cultivating a DevOps culture within teams, embracing continuous learning, and adopting industry best practices for sustainable development.",
            },
          ],
        },
      ]
    },
  ];

  const imageData = [
    { "id": 1, "src": m1 },
    { "id": 2, "src": m2 },
    { "id": 3, "src": m3 },
    { "id": 4, "src": m4 },
    { "id": 5, "src": m5 },
    { "id": 6, "src": m6 },
    { "id": 7, "src": m7 },
    { "id": 8, "src": m8 },
    { "id": 9, "src": m9 },
    { "id": 10, "src": m10 },
    { "id": 11, "src": m11 },
    { "id": 12, "src": m12 },
    { "id": 13, "src": m13 },
    { "id": 14, "src": m14 },
    { "id": 15, "src": m15 },
    { "id": 16, "src": m16 },
    { "id": 17, "src": m17 },
  ]

  return (
    <div className='bg-[#FAFDFC]'>
      <div className='container mx-auto px-2'>
        <div className="flex flex-wrap font-poppins mt-20">
          {/* Left Column */}
          <div className="lg:w-1/2 w-full p-4">
            <div className="text-2xl md:text-4xl font-extrabold mb-4 text-[#212529] ">Java Training & Certification</div>
            <div className='flex gap-2.5'>
              <div className='mt-3.5'>
                {
                  Data1.map((item, index) => {
                    return (
                      <div className='flex-row items-center justify-center'>
                        <div className='bg-[#01AC61] rounded-full w-2.5 h-2.5'></div>
                        {index !== Data1.length - 1 && (
                          <div className="border-[#01AC61] border-r h-[17px] w-[5px]"></div>
                        )}
                      </div>
                    )
                  })
                }
              </div>
              <div>
                {
                  Data1.map((item, index) => {
                    return (
                      <p className='mt-1'>{item}</p>
                    )
                  })
                }
              </div>
            </div>

            <div className='mt-5'>
              {
                Data2.map((item) => {
                  return (
                    <div className='flex font-poppins gap-2 my-1.5'>
                      <div className='w-[19px] h-[19px] rounded-full flex justify-end bg-gradient-to-b from-[#023892] to-[#4a78da]'>
                        <MdCheck className="text-white text-[17px]" />
                      </div>
                      <p className='text-sm font-light text-gray-800'>{item}</p>
                    </div>
                  )
                })
              }
            </div>

            <div className="flex flex-wrap items-center justify-start py-4 font-poppins">
              <div className='border-r border-[#5080CC] pr-3'>
                <LuUserPlus className="text-2xl md:text-3xl my-2" />
              </div>
              <div className="flex items-center gap-2 border-r border-[#5080CC] px-3">
                <div>
                  <p className="text-xs md:text-2xl font-semibold">50000 +</p>
                  <p className=" text-[10px] md:text-base text-gray-600 font-light">Students Enrolled</p>
                </div>
              </div>
              <div className="flex items-center gap-2 border-r border-[#5080CC] px-3">
                <div>
                  <p className="text-xs md:text-2xl font-semibold flex items-center">
                    4.7 <img src={rating} alt="rating" className='hidden md:block' />
                    <p className="hidden md:block text-[10px] md:text-base text-gray-600 font-light">(500)</p>
                  </p>
                  <p className="  text-[10px] md:text-base text-gray-600 font-light">Ratings</p>
                </div>
                <PiClockCountdown className="text-2xl md:text-4xl ms-2" />
              </div>
              <div className="flex items-center gap-2 px-3">

                <div>
                  <p className="text-xs md:text-2xl font-semibold">60 Days</p>
                  <p className=" text-[10px] md:text-base text-gray-600 font-light">Duration</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center md:justify-start flex-wrap mt-3 gap-3">
              <button
                href="#"
                aria-label="Java Training"
                className="bg-[#1554BB] text-sm md:text-base text-white px-7 py-2.5 rounded-full font-poppins font-medium"
              >
                SCHEDULE ONLINE DEMO
              </button>
              <button
                href="#"
                aria-label="Java Training"
                className="bg-white border text-sm md:text-base border-[#1554BB] text-[#1554BB] px-7 py-2.5 rounded-full font-poppins font-medium"
              >
                CONTACT COURSE ADVISER
              </button>
            </div>
          </div>

          <div className="lg:w-1/2 w-full p-4 flex justify-end">
            <img
              src={img1}
              alt="DevOps"
              title="DevOps"
              className="w-full rounded-md"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <WhyJavaTraining />

      <p className='text-xl md:text-3xl font-semibold text-[#343433] text-center mb-10 font-poppins mt-16'>Our Alumni Work at Top
        Companies</p>

      <Compaines />

      <div className='bg-[#F5F5F5] pt-16'>
        <div className='container mx-auto px-2'>
          <OneLearnCircle title="Learn" number="1" mainTitle="Explore the Digital Edify way" />
          <p className="text-xs md:text-base mt-2 font-poppins text-center">
            Learn from Curated Curriculums{" "}
            <span className="text-blue-800">developed by Industry Experts</span>
          </p>

          <p className='text-2xl md:text-4xl font-poppins font-semibold text-center mt-7 md:mt-16'>Java Course Curriculum</p>
          <p className='text-sm md:text-base font-poppins text-center mt-3 mb-16'>It Stretches Your Mind, Think Better And Create Even Better.</p>

          <Accordion data={Fundamentals} />

          <p className='text-2xl md:text-4xl text-[#343433] font-semibold font-poppins text-center mt-5 mb-10'>TOOlS & PLATFORMS</p>

          <LogoGrid logos={imageData} />
        </div>
      </div>

      <OneLearnCircle title="Build" number="2" />
      <p className="text-xs md:text-base mt-2 font-poppins text-center">
        Work on our Real-time{" "}
        <span className="text-blue-800">Projects , Task Based</span>
      </p>

      <LmsProject />

      <Certificate />

      <GetJob />

      <GitHubProfile />

      <ItEngineers />

      <UpcomingBatch />

      <WhyDigitalEdify />

      <OnlineTaining />

      <OurLocations />
    </div>
  )
}

export default Course