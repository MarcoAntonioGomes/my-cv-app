import React from "react";
import { FaCode, FaMobile, FaSearch, FaServer } from "react-icons/fa";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="bg-[#1E1E1E] p-8 rounded-lg border border-gray-800 hover:border-green-400 transition-all duration-300 group flex flex-col items-center text-center">
      <div className="text-green-400 text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-white text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <FaCode />,
      title: "Web Development",
      description:
        "Creating responsive and modern web applications using the latest technologies.",
    },
    {
      icon: <FaMobile />,
      title: "Mobile Development",
      description: "Building cross-platform mobile applications with Flutter.",
    },
    {
      icon: <FaServer />,
      title: "Backend Development",
      description: "Developing robust and scalable backend services and APIs.",
    },
    {
      icon: <FaSearch />,
      title: "SEO Optimization",
      description:
        "Improving website visibility and ranking in search engine results.",
    },
  ];

  return (
    <section id="services" className="w-full bg-[#111111] py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">My Services</h2>
          <div className="w-20 h-1 bg-green-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
