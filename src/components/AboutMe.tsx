import React from "react";

const AboutMe: React.FC = () => {
  return (
    <section className="w-full bg-[#111111] py-16 flex justify-center items-center">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full grid grid-cols-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="border-l border-white/20 h-full" />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 flex flex-col  items-center justify-center gap-16 relative max-w-6xl">
        {/* Content */}
        <div className="flex-1  ">
          {/* Description */}
          <div className="relative ">
            <div className="absolute -left-4 top-0 w-0.5 h-full bg-green-400/30" />
            <p className="text-gray-400 mb-12 text-base leading-relaxed max-w-2xl pl-4">
              Hello! I'm Marco Antônio. Full Stack Developer from Brazil. I have
              rich experience in web development, also I am good at TypeScript.
              I love to talk about our unique.
            </p>
          </div>

          {/* Info Grid with hover effects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-16 mb-12">
            {[
              { label: "Age", value: "24" },
              { label: "Residence", value: "Brazil" },
              { label: "Freelance", value: "Available" },
              { label: "Address", value: "Belo Horizonte, MG" },
              { label: "Phone", value: "+55 (37) 99928-0550" },
              { label: "E-mail", value: "marcoant.gomes07@gmail.com" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center group cursor-default"
              >
                <span className="text-green-400 w-24 font-medium">
                  {item.label}:
                </span>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          {/* Download CV Button with enhanced hover effect */}
          <button className="border-2 h-10 border-green-400 bg-transparent text-green-400 text-sm hover:bg-green-400 hover:text-black transition-all duration-300 tracking-wide">
            <span className="m-10">Download CV</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
