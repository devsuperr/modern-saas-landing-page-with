// src/pages/ContactPage.tsx
import React, { useState } from 'react';

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('Sending...');
        // Mock API call
        setTimeout(() => {
            console.log('Form submitted:', formData);
            setStatus('Your message has been sent. Thank you!');
            setFormData({ name: '', email: '', message: '' });
        }, 1000);
    };

    return (
        <div className="bg-gray-900 min-h-screen text-white">
            <header className="bg-gray-800/50">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <a href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">SynthWave</a>
                    <a href="/" className="text-indigo-400 hover:text-indigo-300 transition-colors">&larr; Back to Home</a>
                </div>
            </header>
            <main className="container mx-auto px-6 py-16">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
                    <p className="text-lg text-gray-400 mb-12">We'd love to hear from you. Please fill out the form below or reach out to us directly.</p>
                </div>
                <div className="max-w-lg mx-auto bg-gray-800/50 p-8 rounded-xl shadow-lg">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                            <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} required className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                            Send Message
                        </button>
                    </form>
                    {status && <p className="mt-4 text-center text-green-400">{status}</p>}
                </div>
            </main>
        </div>
    );
};

export default ContactPage;