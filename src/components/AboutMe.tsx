import React from "react";
import cvFile from "../assets/cv.pdf";

const AboutMe: React.FC = () => {
  const handleDownloadCV = () => {
    // Create a link element
    const link = document.createElement("a");
    link.href = cvFile;
    link.download = "Marco_Antonio_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
            <p className="text-gray-400 text-justify mb-12 text-base leading-relaxed max-w-2xl pl-4">
              I am a Full Stack Software Developer with over 5 years of
              experience, specialized in Java, Spring Boot, Angular, React and
              Flutter. I hold a degree in Computer Engineering and a Master's in
              Software Engineering with Java focus. Skilled in backend,
              frontend, and cloud development using AWS, Kubernetes, and Docker,
              I build scalable, secure, and high-performance applications.
            </p>
          </div>

          {/* Info Grid with hover effects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-16 mb-12 w-full">
            {[
              { label: "Age", value: "30" },
              { label: "Residence", value: "Brazil" },
              { label: "Freelance", value: "Available" },
              { label: "Address", value: "Belo Horizonte, MG" },
              { label: "Phone", value: "+55 (37) 99928-0550" },
              { label: "E-mail", value: "marcoant.gomes07@gmail.com" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left group cursor-default"
              >
                <span className="text-green-400 md:w-24 font-medium mb-1 md:mb-0">
                  {item.label}:
                </span>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300 md:ml-2">
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          {/* Download CV Button with enhanced hover effect */}
          <div className="flex justify-center w-full">
            <button
              onClick={handleDownloadCV}
              className="border-2 h-10 border-green-400 bg-transparent text-green-400 text-sm hover:bg-green-400 hover:text-black transition-all duration-300 tracking-wide px-8"
            >
              <span>Download CV</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
