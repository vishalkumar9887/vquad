import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-slate-950 pt-20 pb-10 overflow-hidden border-t border-slate-800">
      {/* Glow Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/20 blur-3xl rounded-full opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[250px] bg-cyan-500/20 blur-3xl rounded-full opacity-40"></div>

      {/* Floating Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-40"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-extrabold tracking-tight text-white mb-4">
              V-Quad <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Innovations</span>
            </h2>

            <p className="text-slate-400 max-w-md leading-relaxed mb-6">
              Empowering businesses with cutting-edge digital solutions — AI/ML, full-stack development, automation, deployment & immersive experiences.
            </p>

            {/* Animated Social Icons */}
            <div className="flex space-x-4">
              {[
                { icon: <FaLinkedin />, link: "#" },
                { icon: <FaGithub />, link: "#" },
                { icon: <FaTwitter />, link: "#" },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  className="p-3 rounded-full bg-slate-900/70 border border-slate-700 hover:border-blue-500 hover:text-blue-400 transition-all shadow-md hover:shadow-blue-500/20"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-3 text-slate-400">
              {[
                { name: "Home", id: "home" },
                { name: "Services", id: "services" },
                { name: "Team", id: "team" },
                { name: "Portfolio", id: "portfolio" },
                { name: "Contact", id: "contact" },
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href={`#${item.id}`}
                    className="hover:text-blue-400 transition-colors flex items-center"
                  >
                    <span className="mr-2 text-blue-500">•</span> {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-4 text-lg">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-center text-slate-400 hover:text-white transition-colors">
                <FaEnvelope className="mr-3 text-blue-500 text-lg" />
                <a href="mailto:contact@vquad.com">contact@vquad.com</a>
              </li>

              <li className="flex items-center text-slate-400 hover:text-white transition-colors">
                <FaMapMarkerAlt className="mr-3 text-blue-500 text-lg" />
                Remote / Worldwide
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 border-t border-slate-800 pt-6 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p className="mb-4 md:mb-0">
            © {new Date().getFullYear()} V-Quad Innovations. All Rights Reserved.
          </p>

          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
