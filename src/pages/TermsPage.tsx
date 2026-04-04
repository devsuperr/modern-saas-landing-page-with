// src/pages/TermsPage.tsx
import React from 'react';

const TermsPage: React.FC = () => {
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
                    <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms of Service</h1>
                    <p className="text-gray-500 mb-4">Last updated: {new Date().toLocaleDateString()}</p>

                    <div className="prose lg:prose-lg max-w-none">
                        <p>Please read these terms of service ("terms", "terms of service") carefully before using the SynthWave website (the "service") operated by SynthWave Inc. ("us", 'we", "our").</p>

                        <h2 className="text-2xl font-semibold mt-6 mb-2">Conditions of Use</h2>
                        <p>We will provide their services to you, which are subject to the conditions stated below in this document. Every time you visit this website, use its services or make a purchase, you accept the following conditions. This is why we urge you to read them carefully.</p>

                        <h2 className="text-2xl font-semibold mt-6 mb-2">Privacy Policy</h2>
                        <p>Before you continue using our website we advise you to read our privacy policy regarding our user data collection. It will help you better understand our practices.</p>

                        <h2 className="text-2xl font-semibold mt-6 mb-2">Copyright</h2>
                        <p>Content published on this website (digital downloads, images, texts, graphics, logos) is the property of SynthWave Inc. and/or its content creators and protected by international copyright laws. The entire compilation of the content found on this website is the exclusive property of SynthWave Inc.</p>

                        <h2 className="text-2xl font-semibold mt-6 mb-2">Applicable Law</h2>
                        <p>By visiting this website, you agree that the laws of your location, without regard to principles of conflict laws, will govern these terms of service, or any dispute of any sort that might come between SynthWave Inc. and you, or its business partners and associates.</p>

                        <p className="mt-8">This is a sample terms of service document. You should consult with a legal professional to create a document that is appropriate for your business.</p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default TermsPage;