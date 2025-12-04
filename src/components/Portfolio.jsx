import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { FaPlay, FaTimes, FaExternalLinkAlt } from 'react-icons/fa';

const portfolioItems = [
    {
        id: 1,
        title: 'E-Commerce Platform',
        category: 'Full-Stack',
        image: 'https://placehold.co/600x400/1e293b/white?text=E-Commerce',
        description: 'A scalable e-commerce solution with React and Node.js.',
        type: 'image'
    },
    {
        id: 2,
        title: 'AI Face Recognition',
        category: 'AI/ML',
        image: 'https://placehold.co/600x400/1e293b/white?text=Face+Recognition',
        description: 'Real-time face recognition system for security applications.',
        type: 'image'
    },
    {
        id: 3,
        title: 'Promotional Reel',
        category: 'Video',
        image: 'https://placehold.co/600x400/1e293b/white?text=Video+Reel',
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', // Placeholder video
        description: 'High-energy promotional video for a tech startup.',
        type: 'video'
    },
    {
        id: 4,
        title: 'Interactive 3D Game',
        category: 'Game Dev',
        image: 'https://placehold.co/600x400/1e293b/white?text=3D+Game',
        description: 'Web-based 3D game built with Unity and WebGL.',
        type: 'image'
    },
    {
        id: 5,
        title: 'Corporate Branding',
        category: 'Video',
        image: 'https://placehold.co/600x400/1e293b/white?text=Branding',
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
        description: 'Corporate branding video package.',
        type: 'video'
    },
    {
        id: 6,
        title: 'SaaS Dashboard',
        category: 'Full-Stack',
        image: 'https://placehold.co/600x400/1e293b/white?text=Dashboard',
        description: 'Analytics dashboard for SaaS application.',
        type: 'image'
    }
];

const Portfolio = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true });

    return (
        <section id="portfolio" className="relative py-20 bg-black overflow-hidden" ref={sectionRef}>
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

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Work</h2>
                    <p className="text-slate-400">Showcasing our latest projects and success stories.</p>
                </motion.div>

                {/* Portfolio Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {portfolioItems.map((item) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            className="group relative rounded-xl overflow-hidden cursor-pointer"
                            onClick={() => setSelectedItem(item)}
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-blue-400 text-sm mb-4">{item.category}</p>
                                {item.type === 'video' && (
                                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                                        <FaPlay className="text-white ml-1" />
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Lightbox */}
                <AnimatePresence>
                    {selectedItem && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
                            onClick={() => setSelectedItem(null)}
                        >
                            <div
                                className="bg-slate-900/50 backdrop-blur-sm rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col relative"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    className="absolute top-4 right-4 text-white/70 hover:text-white z-10 text-2xl"
                                    onClick={() => setSelectedItem(null)}
                                >
                                    <FaTimes />
                                </button>

                                <div className="flex-1 overflow-y-auto">
                                    {selectedItem.type === 'video' ? (
                                        <div className="aspect-video bg-black">
                                            <video
                                                controls
                                                autoPlay
                                                className="w-full h-full"
                                                src={selectedItem.videoUrl}
                                            >
                                                Your browser does not support the video tag.
                                            </video>
                                        </div>
                                    ) : (
                                        <img
                                            src={selectedItem.image}
                                            alt={selectedItem.title}
                                            className="w-full h-auto object-contain max-h-[60vh] bg-black"
                                        />
                                    )}

                                    <div className="p-8">
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <h3 className="text-2xl font-bold text-white mb-2">{selectedItem.title}</h3>
                                                <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm font-medium">
                                                    {selectedItem.category}
                                                </span>
                                            </div>
                                            <a href="#" className="flex items-center text-white hover:text-blue-400 transition-colors">
                                                View Project <FaExternalLinkAlt className="ml-2 text-sm" />
                                            </a>
                                        </div>
                                        <p className="text-slate-300 leading-relaxed">
                                            {selectedItem.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
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

export default Portfolio;