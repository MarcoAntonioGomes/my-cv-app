import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="w-full bg-[#1a1a1a] py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white text-xl font-semibold mb-6">
              Contact Me
            </h3>
            <div className="flex items-center mb-4 text-gray-300">
              <FaPhone className="text-green-400 mr-3 text-lg" />
              <span>+55 (37) 99928-0550</span>
            </div>
            <div className="flex items-center mb-4 text-gray-300">
              <FaEnvelope className="text-green-400 mr-3 text-lg" />
              <span>marcoant.gomes07@gmail.com</span>
            </div>
            <div className="flex items-center text-gray-300">
              <FaMapMarkerAlt className="text-green-400 mr-3 text-lg" />
              <span>Belo Horizonte, MG, Brazil</span>
            </div>
          </div>

          {/* About */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white text-xl font-semibold mb-6">About</h3>
            <p className="text-gray-400 text-justify ">
              I'm a Full Stack Developer with a passion for creating modern web
              or mobile applications. With 5 years of experience, I have a
              strong foundation in Java, Spring Boot, Angular, React and
              Flutter.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white text-xl font-semibold mb-6">Follow Me</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/MarcoAntonioGomes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors duration-300"
              >
                <FaGithub className="text-2xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/marco-ant%C3%B4nio-gomes-098031149/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors duration-300"
              >
                <FaLinkedin className="text-2xl" />
              </a>
              <a
                href="https://www.instagram.com/m4rc0g0ms?igsh=czZuZDkyMHFpenhh&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors duration-300"
              >
                <FaInstagram className="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Marco Antônio. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
