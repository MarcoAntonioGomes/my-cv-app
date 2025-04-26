import myPhoto from "../assets/my-photo.jpg";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";

const IntroSection: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex flex-col justify-between overflow-hidden text-white">
      {/* Background */}
      <img
        src={myPhoto}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-[-2]"
      />
      <div className="absolute inset-0 bg-black/80 z-[-1]" />

      {/* Vertical grid lines (optional, for effect) */}
      <div className="absolute inset-0 flex z-0 pointer-events-none">
        <div className="flex-1 border-l border-white/10" />
        <div className="flex-1 border-l border-white/10" />
        <div className="flex-1 border-l border-white/10" />
        <div className="flex-1 border-l border-white/10" />
      </div>

      {/* Top left name */}
      <div className="absolute top-6 left-8 z-10">
        <span className="text-gray-300 font-light">Alejandro</span>
        <span className="font-bold ml-1">Abeyta</span>
      </div>

      {/* Top right navigation */}
      <nav className="absolute top-6 right-12 flex gap-8 z-10 text-gray-300 text-base font-medium">
        <a href="#home" className="hover:text-white transition-colors">
          Home
        </a>
        <a href="#resume" className="hover:text-white transition-colors">
          Resume
        </a>
        <a href="#works" className="hover:text-white transition-colors">
          Works
        </a>
        <a href="#blog" className="hover:text-white transition-colors">
          Blog
        </a>
        <a href="#contacts" className="hover:text-white transition-colors">
          Contacts
        </a>
      </nav>

      {/* Centered headline */}
      <div className="flex flex-1 items-center justify-center z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-center">
          I develop{" "}
          <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
            mobile apps
          </span>
        </h1>
      </div>

      {/* Bottom left contact and intro */}
      <div className="absolute bottom-10 left-8 z-10 flex flex-col gap-4">
        <div className="text-gray-300 text-sm">
          <div>E: alejandroa@gmail.com</div>
          <div>T: +1 (234) 567 80 98</div>
        </div>
        <div className="text-white text-base">
          <span>
            Hello, I'm{" "}
            <span className="text-green-400 font-bold">Alejandro Abeyta</span>,
            UX/UI Designer and
          </span>
          <br />
          <span>Front-end Developer Based in San Francisco.</span>
        </div>
      </div>

      {/* Right vertical social links and label */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col items-center gap-6 z-10">
        <span className="text-xs text-gray-300 mb-4 rotate-90 origin-left">
          Follow Me
        </span>
        <div className="flex flex-col gap-4">
          <a
            href="#linkedin"
            aria-label="LinkedIn"
            className="hover:text-green-400 transition-colors text-lg"
          >
            <FaLinkedin />
          </a>
          <a
            href="#github"
            aria-label="GitHub"
            className="hover:text-green-400 transition-colors text-lg"
          >
            <FaGithub />
          </a>
          <a
            href="#facebook"
            aria-label="Facebook"
            className="hover:text-green-400 transition-colors text-lg"
          >
            <FaFacebook />
          </a>
          <a
            href="#instagram"
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
