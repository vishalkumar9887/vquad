import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaBriefcase, FaCode, FaGamepad, FaVideo, FaBrain } from 'react-icons/fa';



const teamMembers = [
     {
        name: 'Vishal Kumar',
        role: 'Full-Stack Engineer',
        bio: 'Focus: React, Node.js, Express, MongoDB, Spring Boot, deployment, APIs.',
        tags: ['Full-Stack'],
        image: 'src/assets/vishal.jpeg',
        icon: <FaCode />
    },
    {
        name: 'Shuvradeep Chatrjee',
        role: 'AI/ML Engineer',
        bio: 'Focus: face recognition, automation, data processing, AI model integration.',
        tags: ['AI/ML'],
        image: 'https://ui-avatars.com/api/?name=Shuvradeep+Chatrjee&background=0D8ABC&color=fff',
        icon: <FaBrain />
    },
    {
        name: 'Vivek Kumar',
        role: 'Game Developer',
        bio: 'Focus: Unity/Unreal, interactive experiences, web games and playable demos.',
        tags: ['Game Dev'],
        image: "/src/assets/image.png",
        icon: <FaGamepad />
    },
    {
        name: 'Vasu',
        role: 'Video Editor & AI/ML Engineer',
        bio: 'Focus: professional video editing, reels, promotional videos, and ML-assisted video workflows.',
        tags: ['Video', 'AI/ML'],
        image: 'https://ui-avatars.com/api/?name=Vasu&background=0D8ABC&color=fff',
        icon: <FaVideo />
    },
   
];

const allTags = ['All', 'AI/ML', 'Game Dev', 'Video', 'Full-Stack'];

const Team = () => {
    const [filter, setFilter] = useState('All');
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true });

    const filteredMembers = filter === 'All'
        ? teamMembers
        : teamMembers.filter(member => member.tags.includes(filter));

    const getIconForTag = (tag) => {
        switch(tag) {
            case 'AI/ML': return <FaBrain />;
            case 'Game Dev': return <FaGamepad />;
            case 'Video': return <FaVideo />;
            case 'Full-Stack': return <FaCode />;
            default: return <FaBriefcase />;
        }
    };

    return (
        <section id="team" className="relative py-20 bg-black overflow-hidden" ref={sectionRef}>
            {/* Advanced Animated Background - Same as About Component */}
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
                
                {/* Light Beams */}
                <motion.div
                    className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-blue-500/20 to-transparent"
                    animate={{ 
                        opacity: [0.1, 0.3, 0.1],
                        scaleY: [0.8, 1.2, 0.8]
                    }}
                    transition={{ 
                        duration: 8, 
                        repeat: Infinity,
                        delay: 0
                    }}
                    style={{ transformOrigin: "top" }}
                />
                
                <motion.div
                    className="absolute top-0 right-1/4 w-1 h-full bg-gradient-to-b from-purple-500/20 to-transparent"
                    animate={{ 
                        opacity: [0.1, 0.3, 0.1],
                        scaleY: [0.8, 1.2, 0.8]
                    }}
                    transition={{ 
                        duration: 8, 
                        repeat: Infinity,
                        delay: 2
                    }}
                    style={{ transformOrigin: "top" }}
                />
            </div>

            <div className="container mx-auto px-6 text-center relative z-10">
                {/* Section Header */}
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Meet the Team</h2>
                    <p className="text-slate-400">Experts in their respective fields, ready to deliver.</p>

                    <div className="flex flex-wrap justify-center gap-4 mt-8">
                        {allTags.map(tag => (
                            <motion.button
                                key={tag}
                                onClick={() => setFilter(tag)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center ${
                                    filter === tag
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                                }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="mr-2">{getIconForTag(tag)}</span>
                                {tag}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>

                {/* Team Members Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <AnimatePresence>
                        {filteredMembers.map((member, index) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                key={member.name}
                                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-blue-500/10 transition-all group relative"
                            >
                                {/* Card Background Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                
                                {/* Image Container */}
                                <div className="h-48 overflow-hidden bg-slate-700 relative">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                                    
                                    {/* Floating Icon */}
                                    <motion.div 
                                        className="absolute bottom-4 right-4 w-12 h-12 bg-blue-600/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white"
                                        animate={{ 
                                            y: [0, -5, 0],
                                            rotate: [0, 5, 0]
                                        }}
                                        transition={{ 
                                            duration: 3, 
                                            repeat: Infinity,
                                            repeatType: "reverse"
                                        }}
                                    >
                                        {member.icon}
                                    </motion.div>
                                </div>
                                
                                {/* Member Info */}
                                <div className="p-6 relative z-10">
                                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                                    <p className="text-blue-400 text-sm mb-4">{member.role}</p>
                                    <p className="text-slate-400 text-sm mb-6 min-h-[60px]">{member.bio}</p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {member.tags.map(tag => (
                                            <span key={tag} className="px-2 py-1 bg-slate-700/50 rounded-full text-xs text-slate-300">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Footer */}
                                    <div className="flex justify-between items-center">
                                        <div className="flex space-x-3">
                                            <motion.a 
                                                href="#" 
                                                className="text-slate-400 hover:text-white transition-colors"
                                                whileHover={{ scale: 1.2 }}
                                                whileTap={{ scale: 0.8 }}
                                            >
                                                <FaLinkedin />
                                            </motion.a>
                                            <motion.a 
                                                href="#" 
                                                className="text-slate-400 hover:text-white transition-colors"
                                                whileHover={{ scale: 1.2 }}
                                                whileTap={{ scale: 0.8 }}
                                            >
                                                <FaGithub />
                                            </motion.a>
                                            <motion.a 
                                                href="#" 
                                                className="text-slate-400 hover:text-white transition-colors"
                                                whileHover={{ scale: 1.2 }}
                                                whileTap={{ scale: 0.8 }}
                                            >
                                                <FaEnvelope />
                                            </motion.a>
                                        </div>
                                        <motion.a 
                                            href="#contact" 
                                            className="text-xs font-bold bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full hover:bg-blue-600 hover:text-white transition-all"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            Hire Me
                                        </motion.a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
                
                {/* No Results Message */}
                {filteredMembers.length === 0 && (
                    <motion.div 
                        className="text-center py-12"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <p className="text-slate-400">No team members found for selected filter.</p>
                    </motion.div>
                )}
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

export default Team;