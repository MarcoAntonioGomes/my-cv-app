import React from "react";

interface WorkItemProps {
  title: string;
  year: string;
  description: string;
}

const WorkItem: React.FC<WorkItemProps> = ({ title, year, description }) => {
  return (
    <div className="bg-opacity-20 bg-black p-6 rounded-lg hover:bg-opacity-30 transition-all duration-300 border border-white/10">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <span className="text-green-400 text-sm">{year}</span>
      </div>
      <p className="text-gray-300 text-sm leading-relaxed text-justify">
        {description}
      </p>
    </div>
  );
};

export default WorkItem;
