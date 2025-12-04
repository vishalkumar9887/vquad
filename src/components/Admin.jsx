import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { FaLock, FaKey, FaDownload, FaSignOutAlt, FaSearch, FaFilter, FaSort, FaEye, FaTrash } from 'react-icons/fa';
import "./custom.css";

const Admin = () => {
    const [submissions, setSubmissions] = useState([]);
    const [filteredSubmissions, setFilteredSubmissions] = useState([]);
    const [token, setToken] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortField, setSortField] = useState('timestamp');
    const [sortDirection, setSortDirection] = useState('desc');
    const [selectedRows, setSelectedRows] = useState([]);
    const loginRef = useRef(null);
    const isInView = useInView(loginRef, { once: true });

    // Handle login
    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await axios.get('http://localhost:3001/api/submissions', {
                headers: { Authorization: `Bearer ${token}` }
            });
            setSubmissions(response.data);
            setFilteredSubmissions(response.data);
            setIsAuthenticated(true);
            setError('');
        } catch (err) {
            setError('Invalid token or server error');
        } finally {
            setIsLoading(false);
        }
    };

    // Handle logout
    const handleLogout = () => {
        setIsAuthenticated(false);
        setToken('');
        setSubmissions([]);
        setFilteredSubmissions([]);
        setSelectedRows([]);
    };

    // Download CSV
    const downloadCSV = () => {
        const dataToDownload = selectedRows.length > 0 
            ? submissions.filter(sub => selectedRows.includes(sub.id))
            : submissions;
            
        const headers = ['ID', 'Name', 'Email', 'Company', 'Service', 'Message', 'Date'];
        const csvContent = [
            headers.join(','),
            ...dataToDownload.map(s => [
                s.id,
                `"${s.name}"`,
                `"${s.email}"`,
                `"${s.company || ''}"`,
                `"${s.service}"`,
                `"${s.message.replace(/"/g, '""')}"`,
                s.timestamp
            ].join(','))
        ].join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'submissions.csv';
        a.click();
    };

    // Filter submissions
    useEffect(() => {
        let filtered = [...submissions];
        
        if (searchTerm) {
            filtered = filtered.filter(sub => 
                sub.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                sub.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                sub.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
                (sub.company && sub.company.toLowerCase().includes(searchTerm.toLowerCase()))
            );
        }
        
        // Sort submissions
        filtered.sort((a, b) => {
            const aValue = a[sortField];
            const bValue = b[sortField];
            
            if (sortDirection === 'asc') {
                return aValue > bValue ? 1 : -1;
            } else {
                return aValue < bValue ? 1 : -1;
            }
        });
        
        setFilteredSubmissions(filtered);
    }, [submissions, searchTerm, sortField, sortDirection]);

    // Toggle row selection
    const toggleRowSelection = (id) => {
        setSelectedRows(prev => 
            prev.includes(id) 
                ? prev.filter(rowId => rowId !== id)
                : [...prev, id]
        );
    };

    // Toggle all rows selection
    const toggleAllRowsSelection = () => {
        if (selectedRows.length === filteredSubmissions.length) {
            setSelectedRows([]);
        } else {
            setSelectedRows(filteredSubmissions.map(sub => sub.id));
        }
    };

    // Handle sort
    const handleSort = (field) => {
        if (sortField === field) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            setSortField(field);
            setSortDirection('asc');
        }
    };

    // Login View
    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center p-6 relative overflow-hidden" ref={loginRef}>
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

                <motion.div 
                    className="bg-gray-900 bg-opacity-90 backdrop-blur-lg p-8 rounded-2xl shadow-2xl max-w-md w-full relative z-10 border border-gray-800"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex justify-center mb-6">
                        <motion.div 
                            className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ duration: 0.3 }}
                        >
                            <FaLock className="w-8 h-8 text-white" />
                        </motion.div>
                    </div>

                    <motion.h2 
                        className="text-2xl font-bold text-white mb-6 text-center"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Admin Login
                    </motion.h2>
                    
                    <form onSubmit={handleLogin} className="space-y-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <label className="block text-gray-400 mb-2">Access Token</label>
                            <div className="relative">
                                <input
                                    type="password"
                                    value={token}
                                    onChange={(e) => setToken(e.target.value)}
                                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 pl-10 text-white focus:border-purple-500 outline-none transition-all duration-300 focus:shadow-lg focus:shadow-purple-500/20"
                                    placeholder="Enter your access token"
                                />
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <FaKey className="w-5 h-5 text-gray-500" />
                                </div>
                            </div>
                        </motion.div>
                        
                        <AnimatePresence>
                            {error && (
                                <motion.p 
                                    className="text-red-500 text-sm"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                >
                                    {error}
                                </motion.p>
                            )}
                        </AnimatePresence>
                        
                        <motion.button
                            type="submit"
                            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 flex items-center justify-center"
                            disabled={isLoading}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {isLoading ? (
                                <span className="flex items-center justify-center">
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Authenticating...
                                </span>
                            ) : 'Login'}
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        );
    }

    // Dashboard View
    return (
        <div className="min-h-screen bg-black p-6 text-white relative overflow-hidden">
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

            <div className="container mx-auto relative z-10">
                {/* Header */}
                <motion.div 
                    className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center">
                        <h1 className="text-3xl font-bold mr-3">Submissions</h1>
                        <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-sm">
                            {filteredSubmissions.length}
                        </span>
                        {selectedRows.length > 0 && (
                            <span className="ml-2 px-3 py-1 bg-green-600 rounded-full text-sm">
                                {selectedRows.length} selected
                            </span>
                        )}
                    </div>
                    
                    <div className="flex gap-2">
                        <motion.button
                            onClick={handleLogout}
                            className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg font-bold transition-all duration-300 flex items-center"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaSignOutAlt className="mr-2" />
                            Logout
                        </motion.button>
                        
                        <motion.button
                            onClick={downloadCSV}
                            className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 px-4 py-2 rounded-lg font-bold transition-all duration-300 flex items-center"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaDownload className="mr-2" />
                            Download CSV
                        </motion.button>
                    </div>
                </motion.div>

                {/* Search and Filter */}
                <motion.div 
                    className="bg-gray-900 bg-opacity-90 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-800 p-4 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="relative flex-1">
                            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                            <input
                                type="text"
                                placeholder="Search submissions..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-white focus:border-purple-500 outline-none transition-all duration-300"
                            />
                        </div>
                        
                        <div className="flex gap-2">
                            <motion.button
                                onClick={() => handleSort('timestamp')}
                                className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaSort className="mr-2" />
                                Date {sortField === 'timestamp' && (sortDirection === 'asc' ? '↑' : '↓')}
                            </motion.button>
                            
                            <motion.button
                                onClick={() => handleSort('name')}
                                className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaSort className="mr-2" />
                                Name {sortField === 'name' && (sortDirection === 'asc' ? '↑' : '↓')}
                            </motion.button>
                        </div>
                    </div>
                </motion.div>

                {/* Table */}
                <motion.div 
                    className="overflow-x-auto bg-gray-900 bg-opacity-90 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-800"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-800 bg-opacity-50 text-gray-300">
                                <th className="p-4 border-b border-gray-700">
                                    <input
                                        type="checkbox"
                                        checked={selectedRows.length === filteredSubmissions.length && filteredSubmissions.length > 0}
                                        onChange={toggleAllRowsSelection}
                                        className="rounded"
                                    />
                                </th>
                                <th className="p-4 border-b border-gray-700 cursor-pointer" onClick={() => handleSort('timestamp')}>
                                    Date {sortField === 'timestamp' && (sortDirection === 'asc' ? '↑' : '↓')}
                                </th>
                                <th className="p-4 border-b border-gray-700 cursor-pointer" onClick={() => handleSort('name')}>
                                    Name {sortField === 'name' && (sortDirection === 'asc' ? '↑' : '↓')}
                                </th>
                                <th className="p-4 border-b border-gray-700 cursor-pointer" onClick={() => handleSort('email')}>
                                    Email {sortField === 'email' && (sortDirection === 'asc' ? '↑' : '↓')}
                                </th>
                                <th className="p-4 border-b border-gray-700">Service</th>
                                <th className="p-4 border-b border-gray-700">Message</th>
                                <th className="p-4 border-b border-gray-700">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredSubmissions.map((sub, index) => (
                                <motion.tr
                                    key={sub.id}
                                    className="border-b border-gray-800 hover:bg-gray-800 hover:bg-opacity-50 transition-all duration-300"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                >
                                    <td className="p-4">
                                        <input
                                            type="checkbox"
                                            checked={selectedRows.includes(sub.id)}
                                            onChange={() => toggleRowSelection(sub.id)}
                                            className="rounded"
                                        />
                                    </td>
                                    <td className="p-4 text-gray-400 text-sm">{new Date(sub.timestamp).toLocaleDateString()}</td>
                                    <td className="p-4 font-medium">{sub.name}</td>
                                    <td className="p-4 text-blue-400">{sub.email}</td>
                                    <td className="p-4">
                                        <span className="px-2 py-1 bg-gray-800 rounded-full text-xs">
                                            {sub.service}
                                        </span>
                                    </td>
                                    <td className="p-4 text-gray-400 max-w-xs truncate">{sub.message}</td>
                                    <td className="p-4">
                                        <div className="flex gap-2">
                                            <motion.button
                                                className="text-blue-400 hover:text-blue-300 transition-colors"
                                                whileHover={{ scale: 1.2 }}
                                                whileTap={{ scale: 0.8 }}
                                            >
                                                <FaEye />
                                            </motion.button>
                                            <motion.button
                                                className="text-red-400 hover:text-red-300 transition-colors"
                                                whileHover={{ scale: 1.2 }}
                                                whileTap={{ scale: 0.8 }}
                                            >
                                                <FaTrash />
                                            </motion.button>
                                        </div>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                    
                    {filteredSubmissions.length === 0 && (
                        <div className="p-8 text-center text-gray-500">
                            {searchTerm ? 'No submissions match your search criteria.' : 'No submissions yet.'}
                        </div>
                    )}
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
        </div>
    );
};

export default Admin;