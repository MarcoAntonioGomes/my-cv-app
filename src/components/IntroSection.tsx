import myPhoto from "../assets/my-photo.png";
import profileBg from "../assets/profile_bg.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const IntroSection: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative w-full h-[700px] flex flex-col justify-between overflow-hidden text-white"
    >
      {/* Background */}
      <div className="absolute inset-0 z-[-2] flex items-center justify-center">
        <img
          src={profileBg}
          alt="Background Pattern"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative h-full w-full max-w-2xl flex items-center">
          <img src={myPhoto} alt="Background" className="w-full h-full " />
        </div>
      </div>

      {/* Top left name */}
      <div className="absolute top-6 left-8 z-10">
        <span className="text-gray-300 font-light">Marco</span>
        <span className="font-bold ml-1">Antônio</span>
      </div>

      {/* Top right navigation */}
      <nav className="absolute top-6 right-12 flex gap-8 z-10 text-gray-300 text-base font-medium">
        <button
          onClick={() => scrollToSection("home")}
          className="hover:text-white transition-colors"
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection("services")}
          className="hover:text-white transition-colors"
        >
          Services
        </button>
        <button
          onClick={() => scrollToSection("technologies")}
          className="hover:text-white transition-colors"
        >
          Technologies
        </button>
        <button
          onClick={() => scrollToSection("works")}
          className="hover:text-white transition-colors"
        >
          Works
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          className="hover:text-white transition-colors"
        >
          Contact
        </button>
      </nav>

      {/* Centered headline */}
      <div className="flex flex-1 mt-64  items-center justify-center z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-center">
          I'm a Full Stack{" "}
          <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
            Developer
          </span>
        </h1>
      </div>

      {/* Bottom left contact and intro */}
      <div className="absolute bottom-10 left-8 z-10 flex flex-col gap-4">
        <div className="text-gray-300 text-sm">
          <div>E: marcoant.gomes07@gmail.com</div>
          <div>T: +55 (37) 99928-0550</div>
        </div>
        <div className="text-white text-base">
          <span>
            Hello, I'm{" "}
            <span className="text-green-400 font-bold">Marco Antônio</span>,
            Full Stack Developer
          </span>
          <br />
          <span>Based in Brazil.</span>
        </div>
      </div>

      {/* Right vertical social links and label */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col items-center gap-8 z-10">
        <div className="flex flex-col items-center">
          <span className="text-xs ml-8 mb-10 text-gray-300 rotate-90 origin-left translate-x-3 translate-y-8 whitespace-nowrap">
            Follow Me
          </span>
          <div className="w-[1px] h-16 bg-gray-300 mt-16"></div>
        </div>
        <div className="flex flex-col items-center gap-6">
          <a
            href="https://linkedin.com"
            target="_blank"
            aria-label="LinkedIn"
            className="hover:text-green-400 transition-colors text-lg"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            aria-label="GitHub"
            className="hover:text-green-400 transition-colors text-lg"
          >
            <FaGithub />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            aria-label="Instagram"
            className="hover:text-green-400 transition-colors text-lg"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
