// src/pages/PrivacyPage.tsx
import React from 'react';

const PrivacyPage: React.FC = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <header className="bg-white shadow-sm">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <a href="/" className="text-2xl font-bold text-gray-800">SynthWave</a>
                    <a href="/" className="text-indigo-600 hover:underline">Back to Home</a>
                </div>
            </header>
            <main className="container mx-auto px-6 py-12">
                <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
                    <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
                    <p className="text-gray-500 mb-4">Last updated: {new Date().toLocaleDateString()}</p>
                    
                    <div className="prose lg:prose-lg max-w-none">
                        <p>Your privacy is important to us. It is SynthWave's policy to respect your privacy regarding any information we may collect from you across our website, and other sites we own and operate.</p>
                        
                        <h2 className="text-2xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
                        <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.</p>
                        
                        <h2 className="text-2xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
                        <p>We use the information we collect in various ways, including to:</p>
                        <ul>
                            <li>Provide, operate, and maintain our website</li>
                            <li>Improve, personalize, and expand our website</li>
                            <li>Understand and analyze how you use our website</li>
                            <li>Develop new products, services, features, and functionality</li>
                            <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
                            <li>Send you emails</li>
                            <li>Find and prevent fraud</li>
                        </ul>

                        <h2 className="text-2xl font-semibold mt-6 mb-2">3. Security</h2>
                        <p>The security of your personal information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.</p>

                        <p className="mt-8">This is a sample privacy policy. You should consult with a legal professional to create a policy that is appropriate for your business.</p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default PrivacyPage;