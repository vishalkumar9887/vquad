import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import axios from 'axios';
import { 
    FaPaperPlane, 
    FaCheck, 
    FaExclamationCircle, 
    FaUser, 
    FaEnvelope, 
    FaBuilding, 
    FaCommentAlt,
    FaPhone,
    FaMapMarkerAlt,
    FaClock,
    FaShieldAlt,
    FaRocket,
    FaArrowRight
} from 'react-icons/fa';

const Contact = () => {
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
    const [status, setStatus] = useState('idle');
    const [focusedField, setFocusedField] = useState(null);
    const [charCount, setCharCount] = useState(0);
    const [progress, setProgress] = useState(0);
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true });

    const onSubmit = async (data) => {
        setStatus('submitting');
        setProgress(0);
        
        // Simulate progress
        const progressInterval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 90) {
                    clearInterval(progressInterval);
                    return 90;
                }
                return prev + 10;
            });
        }, 200);

        try {
            const payload = { ...data, source: 'website', timestamp: new Date().toISOString() };
            await axios.post('http://localhost:3001/api/contact', payload);
            
            setTimeout(() => {
                setProgress(100);
                setStatus('success');
                reset();
                setCharCount(0);
                setTimeout(() => {
                    setStatus('idle');
                    setProgress(0);
                }, 5000);
            }, 1000);
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
            setTimeout(() => {
                setStatus('idle');
                setProgress(0);
            }, 5000);
        }
    };

    const handleInputChange = (e) => {
        if (e.target.name === 'message') {
            setCharCount(e.target.value.length);
        }
    };

    const getProgressColor = () => {
        if (status === 'success') return 'bg-green-500';
        if (status === 'error') return 'bg-red-500';
        if (status === 'submitting') return 'bg-blue-500';
        return 'bg-slate-700';
    };

    return (
        <section id="contact" className="relative py-20 bg-black overflow-hidden" ref={sectionRef}>
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
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mx-auto mb-6"
                    />
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get in Touch</h2>
                    <p className="text-slate-400">Ready to start your project? Fill out the form below.</p>
                </motion.div>

                {/* Contact Info Cards */}
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <motion.div 
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 text-center"
                    >
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FaEnvelope className="text-white text-xl" />
                        </div>
                        <h3 className="text-white font-semibold mb-2">Email</h3>
                        <p className="text-slate-400 text-sm">contact@vquad.com</p>
                    </motion.div>

                    <motion.div 
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 text-center"
                    >
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FaPhone className="text-white text-xl" />
                        </div>
                        <h3 className="text-white font-semibold mb-2">Phone</h3>
                        <p className="text-slate-400 text-sm">+1 (555) 123-4567</p>
                    </motion.div>

                    <motion.div 
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 text-center"
                    >
                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FaMapMarkerAlt className="text-white text-xl" />
                        </div>
                        <h3 className="text-white font-semibold mb-2">Location</h3>
                        <p className="text-slate-400 text-sm">Remote</p>
                    </motion.div>
                </motion.div>

                {/* Main Form Container */}
                <motion.div 
                    className="max-w-4xl mx-auto bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl border border-slate-700 relative overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {/* Form Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50 opacity-0"></div>
                    
                    {/* Progress Bar */}
                    <AnimatePresence>
                        {status === 'submitting' && (
                            <motion.div
                                initial={{ width: 0, opacity: 0 }}
                                animate={{ width: `${progress}%`, opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute top-0 left-0 h-1 transition-all duration-300"
                                style={{ backgroundColor: getProgressColor() }}
                            />
                        )}
                    </AnimatePresence>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <motion.div
                                animate={{ 
                                    borderColor: focusedField === 'name' ? '#3B82F6' : errors.name ? '#EF4444' : '#475569',
                                    y: focusedField === 'name' ? -2 : 0
                                }}
                                className="relative"
                            >
                                <label className="block text-sm font-medium text-slate-300 mb-2 flex items-center">
                                    <FaUser className="mr-2 text-blue-400" />
                                    Full Name
                                </label>
                                <div className="relative">
                                    <input
                                        {...register('name', { required: 'Name is required' })}
                                        type="text"
                                        className="w-full bg-slate-900 border rounded-lg px-4 py-3 pl-10 text-white focus:outline-none transition-all duration-300"
                                        placeholder="John Doe"
                                        onFocus={() => setFocusedField('name')}
                                        onBlur={() => setFocusedField(null)}
                                        onChange={handleInputChange}
                                    />
                                    </div>
                                {errors.name && (
                                    <motion.p 
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-red-500 text-xs mt-1"
                                    >
                                        {errors.name.message}
                                    </motion.p>
                                )}
                            </motion.div>

                            <motion.div
                                animate={{ 
                                    borderColor: focusedField === 'email' ? '#3B82F6' : errors.email ? '#EF4444' : '#475569',
                                    y: focusedField === 'email' ? -2 : 0
                                }}
                                className="relative"
                            >
                                <label className="block text-sm font-medium text-slate-300 mb-2 flex items-center">
                                    <FaEnvelope className="mr-2 text-blue-400" />
                                    Email Address
                                </label>
                                <div className="relative">
                                    <input
                                        {...register('email', {
                                            required: 'Email is required',
                                            pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }
                                        })}
                                        type="email"
                                        className="w-full bg-slate-900 border rounded-lg px-4 py-3 pl-10 text-white focus:outline-none transition-all duration-300"
                                        placeholder="john@example.com"
                                        onFocus={() => setFocusedField('email')}
                                        onBlur={() => setFocusedField(null)}
                                    />
                                </div>
                                {errors.email && (
                                    <motion.p 
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-red-500 text-xs mt-1"
                                    >
                                        {errors.email.message}
                                    </motion.p>
                                )}
                            </motion.div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <motion.div
                                animate={{ 
                                    borderColor: focusedField === 'company' ? '#3B82F6' : '#475569',
                                    y: focusedField === 'company' ? -2 : 0
                                }}
                                className="relative"
                            >
                                <label className="block text-sm font-medium text-slate-300 mb-2 flex items-center">
                                    <FaBuilding className="mr-2 text-blue-400" />
                                    Company (Optional)
                                </label>
                                <div className="relative">
                                    <input
                                        {...register('company')}
                                        type="text"
                                        className="w-full bg-slate-900 border rounded-lg px-4 py-3 pl-10 text-white focus:outline-none transition-all duration-300"
                                        placeholder="Acme Corp"
                                        onFocus={() => setFocusedField('company')}
                                        onBlur={() => setFocusedField(null)}
                                    />
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ 
                                    borderColor: focusedField === 'service' ? '#3B82F6' : errors.service ? '#EF4444' : '#475569',
                                    y: focusedField === 'service' ? -2 : 0
                                }}
                                className="relative"
                            >
                                <label className="block text-sm font-medium text-slate-300 mb-2 flex items-center">
                                    <FaRocket className="mr-2 text-blue-400" />
                                    Service Interest
                                </label>
                                <div className="relative">
                                    <select
                                        {...register('service', { required: 'Please select a service' })}
                                        className="w-full bg-slate-900 border rounded-lg px-4 py-3 text-white focus:outline-none transition-all duration-300 appearance-none cursor-pointer"
                                        onFocus={() => setFocusedField('service')}
                                        onBlur={() => setFocusedField(null)}
                                    >
                                        <option value="">Select a Service</option>
                                        <option value="Full-Stack Development">Full-Stack Development</option>
                                        <option value="AI/ML Integration">AI/ML Integration</option>
                                        <option value="Game Development">Game Development</option>
                                        <option value="Video Editing">Video Editing</option>
                                        <option value="Other">Other</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                        <svg className="w-5 h-5 text-slate-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 0l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                                {errors.service && (
                                    <motion.p 
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-red-500 text-xs mt-1"
                                    >
                                        {errors.service.message}
                                    </motion.p>
                                )}
                            </motion.div>
                        </div>

                        <motion.div
                            animate={{ 
                                borderColor: focusedField === 'message' ? '#3B82F6' : errors.message ? '#EF4444' : '#475569',
                                y: focusedField === 'message' ? -2 : 0
                            }}
                            className="relative"
                        >
                            <label className="block text-sm font-medium text-slate-300 mb-2 flex items-center justify-between">
                                <span className="flex items-center">
                                    <FaCommentAlt className="mr-2 text-blue-400" />
                                    Project Details
                                </span>
                                <span className="text-xs text-slate-500">{charCount}/500</span>
                            </label>
                            <div className="relative">
                                <textarea
                                    {...register('message', { required: 'Message is required' })}
                                    rows="4"
                                    className="w-full bg-slate-900 border rounded-lg px-4 py-3 pl-10 text-white focus:outline-none transition-all duration-300 resize-none"
                                    placeholder="Tell us about your project..."
                                    onFocus={() => setFocusedField('message')}
                                    onBlur={() => setFocusedField(null)}
                                    onChange={handleInputChange}
                                ></textarea>
                            </div>
                            {errors.message && (
                                <motion.p 
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-red-500 text-xs mt-1"
                                >
                                    {errors.message.message}
                                </motion.p>
                                )}
                            </motion.div>

                        {/* Additional Options */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <motion.div
                                animate={{ 
                                    borderColor: focusedField === 'timeline' ? '#3B82F6' : '#475569',
                                    y: focusedField === 'timeline' ? -2 : 0
                                }}
                                className="relative"
                            >
                                <label className="block text-sm font-medium text-slate-300 mb-2 flex items-center">
                                    <FaClock className="mr-2 text-blue-400" />
                                    Timeline
                                </label>
                                <div className="relative">
                                    <select
                                        {...register('timeline')}
                                        className="w-full bg-slate-900 border rounded-lg px-4 py-3 text-white focus:outline-none transition-all duration-300 appearance-none cursor-pointer"
                                        onFocus={() => setFocusedField('timeline')}
                                        onBlur={() => setFocusedField(null)}
                                    >
                                        <option value="">Select Timeline</option>
                                        <option value="ASAP">ASAP</option>
                                        <option value="1-2 weeks">1-2 weeks</option>
                                        <option value="1 month">1 month</option>
                                        <option value="3+ months">3+ months</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                        <svg className="w-5 h-5 text-slate-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 0l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ 
                                    borderColor: focusedField === 'budget' ? '#3B82F6' : '#475569',
                                    y: focusedField === 'budget' ? -2 : 0
                                }}
                                className="relative"
                            >
                                <label className="block text-sm font-medium text-slate-300 mb-2 flex items-center">
                                    <FaShieldAlt className="mr-2 text-blue-400" />
                                    Budget Range
                                </label>
                                <div className="relative">
                                    <select
                                        {...register('budget')}
                                        className="w-full bg-slate-900 border rounded-lg px-4 py-3 text-white focus:outline-none transition-all duration-300 appearance-none cursor-pointer"
                                        onFocus={() => setFocusedField('budget')}
                                        onBlur={() => setFocusedField(null)}
                                    >
                                        <option value="">Select Budget</option>
                                        <option value="5k-10k">$5,000 - $10,000</option>
                                        <option value="10k-25k">$10,000 - $25,000</option>
                                        <option value="25k-50k">$25,000 - $50,000</option>
                                        <option value="50k+">$50,000+</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                        <svg className="w-5 h-5 text-slate-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 0l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Privacy Checkbox */}
                        <motion.div 
                            animate={{ 
                                borderColor: focusedField === 'privacy' ? '#3B82F6' : errors.privacy ? '#EF4444' : '#475569',
                                y: focusedField === 'privacy' ? -2 : 0
                            }}
                            className="flex items-start p-4 bg-slate-900/50 rounded-lg border"
                            onFocus={() => setFocusedField('privacy')}
                            onBlur={() => setFocusedField(null)}
                        >
                            <input
                                type="checkbox"
                                {...register('privacy', { required: 'You must agree to privacy policy' })}
                                className="w-4 h-4 rounded border-slate-700 bg-slate-900 text-blue-600 focus:ring-blue-500 mt-1"
                            />
                            <label className="text-sm text-slate-300 ml-3 cursor-pointer">
                                I agree to the <a href="#" className="text-blue-400 hover:text-blue-300 underline">privacy policy</a> and <a href="#" className="text-blue-400 hover:text-blue-300 underline">terms of service</a>
                            </label>
                        </motion.div>
                        {errors.privacy && (
                            <motion.p 
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-red-500 text-xs mt-1"
                            >
                                {errors.privacy.message}
                            </motion.p>
                        )}

                        {/* Submit Button */}
                        <motion.button
                            type="submit"
                            disabled={isSubmitting}
                            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                            className={`w-full py-4 rounded-lg font-bold text-white transition-all relative overflow-hidden group ${
                                isSubmitting 
                                    ? 'bg-slate-700 cursor-not-allowed' 
                                    : 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-lg shadow-blue-600/25'
                                }`}
                        >
                            <span className="relative z-10 flex items-center justify-center">
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Processing...
                                    </>
                                ) : (
                                    <>
                                        Send Message <FaPaperPlane className="ml-2" />
                                    </>
                                )}
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                        </motion.button>
                    </form>

                    {/* Status Messages */}
                    <AnimatePresence>
                        {status === 'success' && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="mt-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center text-green-400"
                            >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.2, type: "spring" }}
                                    className="mr-3"
                                >
                                    <FaCheck />
                                </motion.div>
                                <div>
                                    <div className="font-semibold">Message sent successfully!</div>
                                    <div className="text-sm">We'll get back to you within 24 hours.</div>
                                </div>
                            </motion.div>
                        )}
                        {status === 'error' && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="mt-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center text-red-400"
                            >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.2, type: "spring" }}
                                    className="mr-3"
                                >
                                    <FaExclamationCircle />
                                </motion.div>
                                <div>
                                    <div className="font-semibold">Something went wrong</div>
                                    <div className="text-sm">Please try again or contact us directly.</div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* Quick Contact */}
                <motion.div 
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <h3 className="text-xl font-semibold text-white mb-4">Need Immediate Assistance?</h3>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <motion.a
                            href="tel:+15551234567"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg text-white flex items-center hover:bg-slate-700/70 transition-all"
                        >
                            <FaPhone className="mr-2" />
                            Call Now
                        </motion.a>
                        <motion.a
                            href="mailto:contact@vquad.com"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg text-white flex items-center hover:bg-slate-700/70 transition-all"
                        >
                            <FaEnvelope className="mr-2" />
                            Email Us
                        </motion.a>
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

export default Contact;