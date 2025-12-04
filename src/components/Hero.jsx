import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useInView } from "framer-motion";
import { FaArrowDown, FaPlay, FaRocket, FaCode, FaBrain, FaCogs, FaLightbulb, FaStar } from "react-icons/fa";
import "../styles/custom.css";

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true });

  // Framer Motion scroll hook
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const heroTexts = [
    "Building Digital Excellence",
    "Creating Innovative Solutions",
    "Transforming Ideas Into Reality",
  ];

  // Auto-changing text animation
  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % heroTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Mouse movement background parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Component loaded state
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* About-style Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs - Similar to About component */}
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

      {/* Floating Icons - Keep from original Hero */}
      <motion.div
        className="absolute top-1/4 left-1/4 text-blue-500 opacity-20"
        animate={{ 
          y: [0, -20, 0], 
          rotate: [0, 10, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <FaCode size={40} />
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-1/4 text-cyan-500 opacity-20"
        animate={{ 
          y: [0, -15, 0], 
          rotate: [0, -15, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 7, 
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <FaBrain size={40} />
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 left-1/3 text-purple-500 opacity-20"
        animate={{ 
          y: [0, -25, 0], 
          rotate: [0, 20, 0],
          scale: [1, 1.15, 1]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <FaCogs size={40} />
      </motion.div>

      <motion.div
        className="absolute top-2/3 right-1/3 text-yellow-500 opacity-20"
        animate={{ 
          y: [0, -18, 0], 
          rotate: [0, -10, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1
        }}
      >
        <FaLightbulb size={40} />
      </motion.div>

      {/* Star Rating - Keep from original Hero */}
      <motion.div
        className="absolute top-1/5 right-1/5 text-yellow-500 opacity-30"
        animate={{ 
          opacity: [0.3, 0.7, 0.3],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <FaStar size={30} />
      </motion.div>

      {/* Main Content - Keep from original Hero */}
      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ y, opacity }}
        >
          {/* Subtitle */}
          <motion.h2
            className="text-sm md:text-base font-semibold text-blue-400 uppercase tracking-widest mb-4 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <motion.span
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-block"
            >
              INNOVATING THE FUTURE
            </motion.span>
          </motion.h2>

          {/* Rotating Text */}
          <div className="relative mb-6 h-24 md:h-32">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              <AnimatePresence mode="wait">
                <motion.div
                  key={textIndex}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -100, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="h-full"
                >
                  {heroTexts[textIndex].split(" ").map((word, i) => (
                    <motion.span
                      key={i}
                      className="inline-block mr-2"
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 * i }}
                    >
                      {["Digital", "Innovative", "Ideas"].includes(word) ? (
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
                          {word}
                        </span>
                      ) : (
                        word
                      )}
                    </motion.span>
                  ))}
                </motion.div>
              </AnimatePresence>
            </h1>

            {/* Animated Underline */}
            <motion.div
              className="h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mt-4"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            We transform ideas into powerful digital solutions.  
            From AI/ML integration to immersive web experiences  
            and professional video production.
          </motion.p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-16">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-semibold flex items-center shadow-lg relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center">
                Get a Quote <FaRocket className="ml-2" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </motion.a>

            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(71, 85, 105, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-slate-800 text-white rounded-full font-semibold border border-slate-700 flex items-center relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center">
                <FaPlay className="mr-2" /> View Our Work
              </span>
              <div className="absolute inset-0 bg-slate-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </motion.a>
          </div>

          {/* Scroll Down Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="cursor-pointer mx-auto w-10 h-16 flex flex-col items-center justify-center"
            onClick={() => scrollToSection("services")}
          >
            <FaArrowDown className="text-2xl text-slate-400 mb-2" />
            <div className="w-0.5 h-8 bg-gradient-to-b from-slate-400 to-transparent"></div>
          </motion.div>
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

export default Hero;