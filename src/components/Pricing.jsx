import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaCheckCircle, FaRocket, FaCreditCard, FaChartLine } from 'react-icons/fa';

const Pricing = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true });

    return (
        <section id="pricing" className="relative py-20 bg-black overflow-hidden" ref={sectionRef}>
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
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Pricing & Payment Terms</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Transparent pricing tailored to your project needs. Choose between fixed-price projects or hourly billing.
                    </p>
                </motion.div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
                    {/* Project Structure Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all relative overflow-hidden group"
                    >
                        {/* Card Background Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* Icon */}
                        <div className="relative z-10 mb-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                                <FaCreditCard className="text-2xl text-white" />
                            </div>
                        </div>
                        
                        {/* Content */}
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold text-white mb-4">Project Structure</h3>
                            <p className="text-slate-400 mb-6">
                                I charge based on the project scope. Clients can choose fixed-price projects or hourly billing for ongoing tasks.
                            </p>
                            
                            {/* Features List */}
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-start text-slate-300">
                                    <FaCheckCircle className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                                    <span>Fixed-price for defined scope</span>
                                </li>
                                <li className="flex items-start text-slate-300">
                                    <FaCheckCircle className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                                    <span>Hourly billing for maintenance</span>
                                </li>
                                <li className="flex items-start text-slate-300">
                                    <FaCheckCircle className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                                    <span>Custom quotes based on complexity</span>
                                </li>
                            </ul>
                            
                            {/* CTA Button */}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg relative overflow-hidden group"
                            >
                                <span className="relative z-10">Get Quote</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Milestone Payments Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all relative overflow-hidden group"
                    >
                        {/* Card Background Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* Icon */}
                        <div className="relative z-10 mb-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center">
                                <FaChartLine className="text-2xl text-white" />
                            </div>
                        </div>
                        
                        {/* Content */}
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold text-white mb-4">Milestone Payments</h3>
                            <p className="text-slate-400 mb-6">
                                Payments are collected in milestones to ensure progress and satisfaction at every step.
                            </p>
                            
                            {/* Timeline */}
                            <div className="space-y-6 relative mb-6">
                                {/* Timeline Line */}
                                <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-slate-700"></div>
                                
                                {/* Timeline Items */}
                                <div className="flex items-start relative z-10">
                                    <div className="w-6 h-6 rounded-full bg-blue-600 border-4 border-slate-800 flex-shrink-0"></div>
                                    <div className="ml-4">
                                        <h4 className="text-white font-bold">Initial Advance</h4>
                                        <p className="text-sm text-slate-400">To kickstart the project</p>
                                    </div>
                                </div>

                                <div className="flex items-start relative z-10">
                                    <div className="w-6 h-6 rounded-full bg-blue-600 border-4 border-slate-800 flex-shrink-0"></div>
                                    <div className="ml-4">
                                        <h4 className="text-white font-bold">Mid-Project Updates</h4>
                                        <p className="text-sm text-slate-400">Upon reaching key milestones</p>
                                    </div>
                                </div>

                                <div className="flex items-start relative z-10">
                                    <div className="w-6 h-6 rounded-full bg-green-500 border-4 border-slate-800 flex-shrink-0"></div>
                                    <div className="ml-4">
                                        <h4 className="text-white font-bold">Final Delivery</h4>
                                        <p className="text-sm text-slate-400">After successful testing & approval</p>
                                    </div>
                                </div>
                            </div>
                            
                            {/* CTA Button */}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg relative overflow-hidden group"
                            >
                                <span className="relative z-10">View Details</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                            </motion.button>
                        </div>
                    </motion.div>
                </div>

                {/* Benefits Section */}
                <motion.div 
                    className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-10 border border-slate-700"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="text-center mb-12">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Why Choose Our Services?</h3>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            We deliver exceptional value with transparent pricing and flexible payment options.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <FaRocket />,
                                title: "Fast Delivery",
                                description: "Quick turnaround times without compromising quality"
                            },
                            {
                                icon: <FaCheckCircle />,
                                title: "Quality Assurance",
                                description: "Thorough testing and review before delivery"
                            },
                            {
                                icon: <FaCreditCard />,
                                title: "Flexible Payments",
                                description: "Multiple payment options to suit your needs"
                            }
                        ].map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * index }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center">
                                    <div className="text-2xl text-white">
                                        {benefit.icon}
                                    </div>
                                </div>
                                <h4 className="text-xl font-semibold text-white mb-2">
                                    {benefit.title}
                                </h4>
                                <p className="text-slate-400">
                                    {benefit.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="flex justify-center mt-12">
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-full shadow-lg"
                        >
                            Get Started Today
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

export default Pricing;