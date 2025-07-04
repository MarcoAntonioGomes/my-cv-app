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
      experience: "1 year",
    },
    {
      icon: <FaAngular />,
      name: "Angular",
      experience: "5 years",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
      experience: "4 years",
    },
    {
      icon: <SiJavascript />,
      name: "JavaScript",
      experience: "6 years",
    },
    {
      icon: <FaJava />,
      name: "Java",
      experience: "5 years",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
      experience: "4 years",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
      experience: "2 years",
    },
    {
      icon: <FaHtml5 />,
      name: "HTML5",
      experience: "7 years",
    },
    {
      icon: <FaCss3Alt />,
      name: "CSS3",
      experience: "7 years",
    },
    {
      icon: <SiPostgresql />,
      name: "PostgreSQL",
      experience: "4 years",
    },
    {
      icon: <FaDatabase />,
      name: "MySQL",
      experience: "5 years",
    },
    {
      icon: <FaDocker />,
      name: "Docker",
      experience: "3 years",
    },
    {
      icon: <FaGitAlt />,
      name: "Git",
      experience: "6 years",
    },
    {
      icon: <FaAws />,
      name: "AWS",
      experience: "3 years",
    },
    {
      icon: <SiFlutter />,
      name: "Flutter",
      experience: "2 years",
    },
  ];

  return (
    <section
      id="technologies"
      className="w-full bg-[#1a1a1a] py-24 border-b border-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Technologies</h2>
          <div className="w-20 h-1 bg-green-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
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
