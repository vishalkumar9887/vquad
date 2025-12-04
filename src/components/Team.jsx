import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaBriefcase, FaCode, FaGamepad, FaVideo, FaBrain, FaExternalLinkAlt } from 'react-icons/fa';

const teamMembers = [
    {
        name: 'Vishal Kumar',
        role: 'Full-Stack Engineer',
        bio: 'Focus: React, Node.js, Express, MongoDB, Spring Boot, deployment, APIs.',
        tags: ['Full-Stack'],
        image: '/portfolio/vishal.jpeg',
        icon: <FaCode />,
        social: {
            linkedin: 'https://www.linkedin.com/in/vishal-offc/',
            github: 'https://github.com/vishalkumar9887',
            email: 'vishalviru100207@gmail.com',
            portfolio: 'https://delightful-khapse-28e51f.netlify.app'
        }
    },
    {
        name: 'Shuvradeep Chatrjee',
        role: 'AI/ML Engineer',
        bio: 'Focus: face recognition, automation, data processing, AI model integration.',
        tags: ['AI/ML'],
        image: '/portfolio/imagecopyy2.png',
        icon: <FaBrain />,
        social: {
            linkedin: 'https://www.linkedin.com/in/shuvradeep-chatterjee/',
            github: 'https://github.com/sayan-dot',
            email: 'shuvradeep.86@gmail.com',
            portfolio: 'https://shuvradeep-chatterjee.vercel.app/'
        }
    },
    {
        name: 'Vivek Kumar',
        role: 'Game Developer',
        bio: 'Focus: Unity/Unreal, interactive experiences, web games and playable demos.',
        tags: ['Game Dev'],
        image: '/portfolio/image.png',
        icon: <FaGamepad />,
        social: {
            linkedin: 'https://www.linkedin.com/in/vivek-kumar-garg-64429b36b',
            github: "https://github.com/vivek21821",
            email: 'satojiav@gmail.com',
            portfolio: 'https://vivek-games.vercel.app'
        }
    },
    {
        name: 'Vasu',
        role: 'Video Editor & AI/ML Engineer',
        bio: 'Focus: professional video editing, reels, promotional videos, and ML-assisted video workflows.',
        tags: ['Video', 'AI/ML'],
        image: '/portfolio/imageecopy2.png',
        icon: <FaVideo />,
        social: {
            linkedin: 'https://www.linkedin.com/in/vasubandhu-dhosh-91223638',
            github: 'https://github.com/vasuaieditor',
            email: 'sdvashu9090@gmail.com',
            portfolio: 'https://vasu-portfolio.vercel.app'
        }
    },
];

const allTags = ['All', 'AI/ML', 'Game Dev', 'Video', 'Full-Stack'];

const Team = () => {
    const [filter, setFilter] = useState('All');
    const [hoveredMember, setHoveredMember] = useState(null);
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

                {/* Team Members Grid - Circular Cards */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    <AnimatePresence>
                        {filteredMembers.map((member, index) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                key={member.name}
                                className="relative"
                                onMouseEnter={() => setHoveredMember(member.name)}
                                onMouseLeave={() => setHoveredMember(null)}
                            >
                                {/* Circular Card Container */}
                                <div className="relative w-64 h-64 mx-auto">
                                    {/* Outer Circle with Background */}
                                    <motion.div 
                                        className="absolute inset-0 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 shadow-xl overflow-hidden"
                                        whileHover={{ 
                                            scale: 1.05, 
                                            boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
                                            borderColor: "rgba(59, 130, 246, 0.5)"
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {/* Inner Circle for Image */}
                                        <div className="absolute inset-4 rounded-full overflow-hidden bg-slate-700">
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        
                                        {/* Floating Icon */}
                                        <motion.div 
                                            className="absolute top-4 right-4 w-10 h-10 bg-blue-600/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white"
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
                                    </motion.div>
                                    
                                    {/* Info Overlay - Appears on Hover */}
                                    <AnimatePresence>
                                        {hoveredMember === member.name && (
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute inset-0 rounded-full bg-gradient-to-br from-slate-900/95 to-slate-800/95 flex flex-col justify-center items-center p-6"
                                            >
                                                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                                                <p className="text-blue-400 text-sm mb-2">{member.role}</p>
                                                <p className="text-slate-300 text-xs text-center mb-4 line-clamp-3">{member.bio}</p>
                                                
                                                {/* Tags */}
                                                <div className="flex flex-wrap gap-1 justify-center mb-4">
                                                    {member.tags.map(tag => (
                                                        <span key={tag} className="px-2 py-1 bg-slate-700/50 rounded-full text-xs text-slate-300">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                                
                                                {/* Social Links */}
                                                <div className="flex space-x-3">
                                                    <motion.a 
                                                        href={member.social.linkedin} 
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-slate-400 hover:text-blue-500 transition-colors"
                                                        whileHover={{ scale: 1.2, rotate: 5 }}
                                                        whileTap={{ scale: 0.8 }}
                                                        title={`Connect with ${member.name} on LinkedIn`}
                                                    >
                                                        <FaLinkedin />
                                                    </motion.a>
                                                    <motion.a 
                                                        href={member.social.github} 
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-slate-400 hover:text-white transition-colors"
                                                        whileHover={{ scale: 1.2, rotate: -5 }}
                                                        whileTap={{ scale: 0.8 }}
                                                        title={`View ${member.name}'s GitHub profile`}
                                                    >
                                                        <FaGithub />
                                                    </motion.a>
                                                    <motion.a 
                                                        href={`mailto:${member.social.email}`}
                                                        className="text-slate-400 hover:text-green-500 transition-colors"
                                                        whileHover={{ scale: 1.2 }}
                                                        whileTap={{ scale: 0.8 }}
                                                        title={`Email ${member.name}`}
                                                    >
                                                        <FaEnvelope />
                                                    </motion.a>
                                                    <motion.a 
                                                        href={member.social.portfolio} 
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-slate-400 hover:text-purple-500 transition-colors"
                                                        whileHover={{ scale: 1.2, rotate: 10 }}
                                                        whileTap={{ scale: 0.8 }}
                                                        title={`View ${member.name}'s portfolio`}
                                                    >
                                                        <FaExternalLinkAlt />
                                                    </motion.a>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                                
                                {/* Name and Role - Always Visible */}
                                <div className="text-center mt-4">
                                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                                    <p className="text-blue-400 text-sm">{member.role}</p>
                                </div>
                                
                                {/* Hire Me Button - Always Visible */}
                                <motion.a 
                                    href="#contact" 
                                    className="flex justify-center mt-3"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <span className="text-xs font-bold bg-blue-600/20 text-blue-400 px-4 py-1 rounded-full hover:bg-blue-600 hover:text-white transition-all">
                                        Hire Me
                                    </span>
                                </motion.a>
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

            {/* CSS for grid pattern and line-clamp */}
            <style jsx>{`
                .bg-grid-pattern {
                    background-image: 
                        linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
                    background-size: 20px 20px;
                }
                
                .line-clamp-3 {
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            `}</style>
        </section>
    );
};

export default Team;