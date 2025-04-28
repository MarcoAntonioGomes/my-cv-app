import React from "react";
import gearImage from "../assets/gear.png";
import WorkItem from "../components/WorkItem";

interface Project {
  title: string;
  year: string;
  description: string;
}

const Works: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Liberty Fitness Web and Administrative Platform",
      year: "2019-2020",
      description:
        "At Find Soluções Corporativas, I contributed to the development of the Liberty Fitness system, working on both the front-end and back-end. On the front-end, I developed web application screens using Angular, HTML, CSS, JavaScript, Bootstrap, and TypeScript. On the back-end, I built REST APIs with Spring Boot, implementing business rules and user management functionalities. Additionally, I developed cloud file upload functionality using AWS S3, enabling scalable storage for user documents and data. My work supported the creation of management panels for gym owners and system administrators, allowing the registration of gyms, users, plans, and access to system usage statistics.",
    },
    {
      title: "Integrated Smart Cities Management Platform – IPGC",
      year: "2020-2021",
      description:
        "At the Institute of Planning and Management of Cities (IPGC), I was responsible for developing the back-end of the main API, creating microservices and REST endpoints for the CRM and Projects modules. I implemented CI/CD pipelines using Jenkins, set up API documentation with Swagger, and managed file storage using AWS S3. I also developed a microservice for document conversion between different formats (DOCX, PDF, and HTML) and implemented document rendering and automation processes for corporate use. Additionally, I programmed business logic and data processing routines aimed at smart city projects, focusing on public lighting efficiency, telecommunications infrastructure deployment, and solar power plant development.",
    },
    {
      title: "Joinder – Astrological Relationship Matching Platform",
      year: "2020-2023",
      description:
        "At Joinder, I was responsible for developing the entire back-end of a relationship application similar to Tinder, but focused on astrological compatibility. I designed and implemented the system's back-end using Spring Boot and Spring Cloud to deliver a scalable microservices architecture. In addition to the back-end development, I managed the cloud infrastructure on AWS, configuring and maintaining services such as EC2 for server hosting, RDS for relational database management, Redis for caching, and S3 for cloud file storage. My work ensured high availability, scalability, and performance for the application, supporting a seamless user matching experience based on astrological profiles.",
    },
    {
      title: "Sicoob – Banking Solutions Modernization and Process Automation",
      year: "2020-2023",
      description:
        "At Sicoob, I worked as a Senior Full Stack Developer, leading and implementing several strategic initiatives for banking systems modernization and process automation. I developed banking transactions using Java EE (EJB), created and maintained REST APIs, and built user interfaces with Angular (using the Redux pattern) and Flutter for the Super App Sicoob. I was responsible for developing and maintaining batch processing flows, integrating messaging solutions with JMS, and writing unit tests with JUnit, Jasmine, and Karma. Among the key deliveries, I developed a Monitoring Panel for INSS File Processing, optimized business reporting for credit unions, and participated in the integration of the BPS (Social Security Benefits) system with SSPB to automate TED payments to BACEN. I led the migration of Java projects from Docker to Kubernetes clusters, ensuring system scalability and robustness, and automated processes for managing unpaid INSS benefits. Additionally, I worked on the modernization of legacy systems, migrating critical routines from VB to Java, and contributed to the implementation of an ATM Token system that validates user transactions through their registered cellphone number, enhancing the security and authentication process across ATM networks.",
    },
  ];

  return (
    <section
      id="works"
      className="w-full bg-[#1a1a1a] py-24 relative border-b border-gray-800"
    >
      {/* Background with gear image */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src={gearImage}
          alt="Gear background"
          className="w-[600px] h-[600px] opacity-20 object-center"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">My Works</h2>
          <div className="w-20 h-1 bg-green-400 mx-auto"></div>
        </div>

        {/* Projects List */}
        <div className="flex flex-col gap-8 max-w-3xl mx-auto">
          {projects.map((project, index) => (
            <WorkItem
              key={index}
              title={project.title}
              year={project.year}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
