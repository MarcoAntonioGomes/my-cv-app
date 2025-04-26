import React from "react";
import {
  FaReact,
  FaJava,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaDatabase,
  FaAws,
  FaAngular,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiFlutter,
} from "react-icons/si";

interface TechCardProps {
  icon: React.ReactNode;
  name: string;
  experience: string;
}

const TechCard: React.FC<TechCardProps> = ({ icon, name, experience }) => {
  return (
    <div className="bg-[#1E1E1E] p-6 rounded-lg border border-gray-800 hover:border-green-400 transition-all duration-300 group flex flex-col items-center text-center">
      <div className="text-green-400 text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-white text-lg font-semibold mb-2">{name}</h3>
      <p className="text-gray-400 text-sm">{experience}</p>
    </div>
  );
};

const Technologies: React.FC = () => {
  const technologies = [
    {
      icon: <FaReact />,
      name: "React",
      experience: "3 years",
    },
    {
      icon: <FaAngular />,
      name: "Angular",
      experience: "5 years",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
      experience: "2 years",
    },
    {
      icon: <SiJavascript />,
      name: "JavaScript",
      experience: "5 years",
    },
    {
      icon: <FaJava />,
      name: "Java",
      experience: "5 years",
    },
    {
      icon: <SiFlutter />,
      name: "Flutter",
      experience: "1 year",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
      experience: "5 years",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
      experience: "2 years",
    },
    {
      icon: <FaDocker />,
      name: "Docker",
      experience: "3 year",
    },
    {
      icon: <FaGitAlt />,
      name: "Git",
      experience: "5 years",
    },
    {
      icon: <FaDatabase />,
      name: "SQL",
      experience: "5 years",
    },
    {
      icon: <SiPostgresql />,
      name: "PostgreSQL",
      experience: "3 year",
    },
    {
      icon: <FaAws />,
      name: "AWS",
      experience: "3 year",
    },
    {
      icon: <FaHtml5 />,
      name: "HTML",
      experience: "5 year",
    },
    {
      icon: <FaCss3Alt />,
      name: "CSS",
      experience: "5 year",
    },
  ];

  return (
    <section className="w-full bg-[#111111] py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Technologies Experience
          </h2>
          <div className="w-20 h-1 bg-green-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {technologies.map((tech, index) => (
            <TechCard
              key={index}
              icon={tech.icon}
              name={tech.name}
              experience={tech.experience}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
