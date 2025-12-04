import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { FaRocket, FaShieldAlt, FaGlobe, FaCode, FaBrain, FaUsers, FaAward, FaLightbulb } from 'react-icons/fa';

const About = () => {
    const [activeFeature, setActiveFeature] = useState(0);
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true });
    
    const features = [
        {
            icon: <FaRocket />,
            title: "Fast",
            description: "Lightning-fast development with optimized performance",
            color: "from-purple-600 to-blue-600"
        },
        {
            icon: <FaShieldAlt />,
            title: "Secure",
            description: "Enterprise-grade security for all your digital assets",
            color: "from-blue-600 to-cyan-600"
        },
        {
            icon: <FaGlobe />,
            title: "Global",
            description: "Worldwide deployment and 24/7 support",
            color: "from-cyan-600 to-teal-600"
        },
        {
            icon: <FaCode />,
            title: "Clean Code",
            description: "Maintainable and scalable code architecture",
            color: "from-indigo-600 to-purple-600"
        },
        {
            icon: <FaBrain />,
            title: "Innovative",
            description: "Cutting-edge solutions with AI integration",
            color: "from-pink-600 to-purple-600"
        },
        {
            icon: <FaUsers />,
            title: "Collaborative",
            description: "Team-based approach to project success",
            color: "from-green-600 to-teal-600"
        }
    ];

    const stats = [
        { value: "100+", label: "Projects Delivered" },
        { value: "50+", label: "Happy Clients" },
        { value: "99%", label: "Client Satisfaction" },
        { value: "24/7", label: "Support Available" }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveFeature((prev) => (prev + 1) % features.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [features.length]);

    return (
        <section id="about" className="relative py-20 bg-black overflow-hidden" ref={sectionRef}>
            {/* Advanced Animated Background */}
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
                ></motion.div>
                
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
                ></motion.div>
                
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
                ></motion.div>
                
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

            <div className="container mx-auto px-6 text-center relative z-10">
                {/* Section Title */}
                <motion.div 
                    className="inline-block mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative group">
                        <span className="relative z-10">Who We Are</span>
                        <motion.span 
                            className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r from-purple-600 to-blue-600 transform -translate-y-2 origin-left"
                            initial={{ scaleX: 0 }}
                            whileHover={{ scaleX: 1 }}
                            transition={{ duration: 0.7 }}
                        ></motion.span>
                    </h2>
                </motion.div>

                {/* Description */}
                <motion.div 
                    className="max-w-4xl mx-auto mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <p className="text-lg text-gray-300 leading-relaxed">
                        Provide complete digital solutions including full-stack web development, backend APIs, mobile-friendly UI design, cloud deployment, AI/ML model integration, automation systems, and professional video editing. I help businesses build scalable applications, optimize workflows, and deliver high-quality content for marketing and branding.
                    </p>
                </motion.div>

                {/* Stats Section */}
                <motion.div 
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {stats.map((stat, index) => (
                        <motion.div 
                            key={index}
                            className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-4"
                            whileHover={{ y: -5, borderColor: "rgba(147, 51, 234, 0.5)" }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-1">
                                {stat.value}
                            </div>
                            <div className="text-gray-400 text-sm">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Features Carousel */}
                <motion.div 
                    className="mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <div className="flex justify-center mb-8">
                        <div className="flex flex-wrap justify-center gap-2">
                            {features.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveFeature(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                        index === activeFeature 
                                            ? 'bg-gradient-to-r from-purple-600 to-blue-600 w-8' 
                                            : 'bg-gray-600 hover:bg-gray-500'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeFeature}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.5 }}
                                className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 max-w-md mx-auto"
                            >
                                <div className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-br ${features[activeFeature].color} rounded-full flex items-center justify-center`}>
                                    <div className="text-3xl text-white">
                                        {features[activeFeature].icon}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">
                                    {features[activeFeature].title}
                                </h3>
                                <p className="text-gray-400">
                                    {features[activeFeature].description}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </motion.div>

                {/* Feature Icons Grid */}
                <motion.div 
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="transform transition-all duration-500"
                            whileHover={{ scale: 1.1, y: -5 }}
                            onClick={() => setActiveFeature(index)}
                        >
                            <div className={`w-16 h-16 mx-auto mb-3 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center cursor-pointer`}>
                                <div className="text-2xl text-white">
                                    {feature.icon}
                                </div>
                            </div>
                            <p className="text-gray-400 text-sm">{feature.title}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Call to Action */}
                <motion.div 
                    className="mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-purple-800/30 rounded-2xl p-8 max-w-2xl mx-auto">
                        <div className="flex items-center justify-center mb-4">
                            <FaAward className="text-4xl text-purple-400 mr-4" />
                            <h3 className="text-2xl font-bold text-white">Our Commitment</h3>
                        </div>
                        <p className="text-gray-300 mb-6">
                            We're dedicated to delivering exceptional digital experiences that drive results and exceed expectations. Your success is our priority.
                        </p>
                        <motion.button
                            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full"
                            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(147, 51, 234, 0.3)" }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Learn More About Us
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

export default About;