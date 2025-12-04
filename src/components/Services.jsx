import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  FaCode,
  FaCloudUploadAlt,
  FaBrain,
  FaDatabase,
  FaCogs,
  FaVideo,
  FaRocket,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

// ----------------------------- //
//         SERVICES DATA         //
// ----------------------------- //
const services = [
  {
    icon: <FaCode />,
    title: "Full-Stack Development",
    description:
      "React, Node.js, Express, MongoDB, Spring Boot — scalable and secure applications.",
    features: [
      "Custom Web Applications",
      "API Development",
      "Database Design",
      "UI/UX Implementation",
    ],
  },
  {
    icon: <FaCloudUploadAlt />,
    title: "Deployment & DevOps",
    description:
      "Vercel, Render, Firebase, AWS — seamless deployment pipelines.",
    features: ["CI/CD Pipelines", "Cloud Architecture", "Security", "Monitoring"],
  },
  {
    icon: <FaBrain />,
    title: "AI/ML Integration",
    description: "Face recognition, automation, model inference.",
    features: [
      "Real-time Monitoring",
      "Intelligent Guardrails",
      "Data Processing",
      "Predictive Analytics",
    ],
  },
  {
    icon: <FaDatabase />,
    title: "API & Database Design",
    description:
      "Custom API development and high-performance database architecture.",
    features: [
      "REST APIs",
      "GraphQL",
      "Database Optimization",
      "Data Security",
    ],
  },
  {
    icon: <FaCogs />,
    title: "Workflow Automation",
    description:
      "Automating business tasks to increase efficiency and reduce cost.",
    features: [
      "Process Optimization",
      "Automated Testing",
      "Workflow Integration",
      "Performance Monitoring",
    ],
  },
  {
    icon: <FaVideo />,
    title: "Video Editing",
    description:
      "Professional reels, shorts, ads, cinematic videos, and YouTube content.",
    features: [
      "Video Production",
      "Motion Graphics",
      "Post-Production",
      "Content Strategy",
    ],
  },
  {
    icon: <FaRocket />,
    title: "Optimization",
    description: "Boost performance, fix bugs, and upgrade existing systems.",
    features: [
      "A/B Testing",
      "Performance Tuning",
      "Code Optimization",
      "Continuous Improvements",
    ],
  },
];

// ----------------------------- //
//      MOTION VARIANTS         //
// ----------------------------- //
const cardVariant = {
  initial: { opacity: 0, y: 40 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, type: "spring", stiffness: 60 },
  }),
};

const rotateArrow = {
  open: { rotate: 45, transition: { duration: 0.3 } },
  closed: { rotate: 0, transition: { duration: 0.3 } },
};

// ----------------------------- //
//         MAIN COMPONENT       //
// ----------------------------- //
const Services = () => {
  const [active, setActive] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <section id="services" className="relative py-20 bg-black overflow-hidden" ref={sectionRef}>
      {/* About-style Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <motion.div 
          className="absolute top-0 left-0 w-96 h-96 bg-purple-900 rounded-full filter blur-3xl opacity-20"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        <motion.div 
          className="absolute bottom-0 right-0 w-96 h-96 bg-blue-900 rounded-full filter blur-3xl opacity-20"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 40, 0]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        />
        
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-900 rounded-full filter blur-3xl opacity-10"
          animate={{ 
            scale: [1, 1.4, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2
          }}
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.1, 0.5, 0.1],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 5 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Transforming your ideas into powerful digital solutions with
            development, AI, automation, infrastructure, optimization, and
            professional editing.
          </p>
        </motion.div>

        {/* SERVICE CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={cardVariant}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={i}
              onClick={() => setActive(active === i ? null : i)}
              className={`p-8 bg-slate-800/50 backdrop-blur-sm hover:bg-slate-700/40 
                rounded-2xl border transition-all cursor-pointer relative overflow-hidden
                ${
                  active === i
                    ? "border-blue-500 shadow-blue-500/20 shadow-lg"
                    : "border-slate-700"
                }
              `}
            >
              {/* Card Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Header Icon + Arrow */}
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className="text-4xl text-blue-400">{service.icon}</div>

                <motion.div
                  animate={active === i ? "open" : "closed"}
                  variants={rotateArrow}
                  className="text-slate-500"
                >
                  <FaArrowRight />
                </motion.div>
              </div>

              {/* Title & Description */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4">
                  {service.description}
                </p>

                {/* Features Expand Section */}
                <AnimatePresence>
                  {active === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                        transition: { duration: 0.3 },
                      }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden mt-3"
                    >
                      <h4 className="text-blue-400 text-sm font-semibold mb-3">
                        Key Features
                      </h4>

                      <ul className="space-y-2">
                        {service.features.map((item, j) => (
                          <li
                            key={j}
                            className="flex items-start text-slate-300 text-sm"
                          >
                            <FaCheckCircle className="text-green-500 mt-1 mr-2" />
                            {item}
                          </li>
                        ))}
                      </ul>

                      <button className="mt-4 text-blue-400 text-sm flex items-center">
                        Learn more <FaArrowRight className="ml-2 text-xs" />
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM SECTION (3 steps) */}
        <motion.div 
          className="mt-20 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-10 border border-slate-700"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Our Development Process
            </h3>
            <p className="text-slate-400 max-w-2xl mx-auto">
              We follow an optimized, transparent and high-performance workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[ 
              {
                num: "01",
                title: "Realtime Monitoring",
                desc: "Track behavior, usage and system health to ensure consistency.",
              },
              {
                num: "02",
                title: "Security Guardrails",
                desc: "Enforce robust security at every request and data interaction.",
              },
              {
                num: "03",
                title: "A/B Testing Optimization",
                desc: "Improve performance and UX using continuous testing strategies.",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-blue-400">
                    {step.num}
                  </span>
                </div>
                <h4 className="text-xl text-white font-semibold mb-2">
                  {step.title}
                </h4>
                <p className="text-slate-400">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full shadow-lg"
            >
              Start Testing Now
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* CSS for grid pattern */}
      <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </section>
  );
};

export default Services;