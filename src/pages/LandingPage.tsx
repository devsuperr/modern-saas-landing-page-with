// src/pages/LandingPage.tsx
import React, { useState, useEffect, useRef } from 'react';

// --- Helper Components ---
const Icon: React.FC<{ html: string }> = ({ html }) => <div dangerouslySetInnerHTML={{ __html: html }} />;

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <header className="absolute top-0 left-0 right-0 z-50 bg-transparent text-white">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                    SynthWave
                </div>
                <nav className="hidden md:flex space-x-8 items-center">
                    <a href="#features" className="hover:text-indigo-300 transition-colors">Features</a>
                    <a href="#pricing" className="hover:text-indigo-300 transition-colors">Pricing</a>
                    <a href="#testimonials" className="hover:text-indigo-300 transition-colors">Testimonials</a>
                    <a href="/contact" className="hover:text-indigo-300 transition-colors">Contact</a>
                </nav>
                <div className="hidden md:flex items-center space-x-4">
                    <a href="/login" className="py-2 px-4 rounded-md hover:bg-white/10 transition-colors">Log In</a>
                    <a href="/signup" className="py-2 px-4 rounded-md bg-white text-indigo-600 font-semibold shadow-lg hover:bg-gray-200 transition-transform transform hover:scale-105">
                        Get Started Free
                    </a>
                </div>
                <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                    </svg>
                </button>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-gray-900/90 backdrop-blur-sm px-6 py-4 flex flex-col space-y-4">
                    <a href="#features" className="block py-2" onClick={() => setIsMenuOpen(false)}>Features</a>
                    <a href="#pricing" className="block py-2" onClick={() => setIsMenuOpen(false)}>Pricing</a>
                    <a href="#testimonials" className="block py-2" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
                    <a href="/contact" className="block py-2" onClick={() => setIsMenuOpen(false)}>Contact</a>
                    <div className="border-t border-gray-700 pt-4 flex flex-col space-y-3">
                         <a href="/login" className="py-2 px-4 rounded-md text-center border border-white/50 hover:bg-white/10 transition-colors">Log In</a>
                         <a href="/signup" className="py-2 px-4 rounded-md bg-white text-indigo-600 font-semibold shadow-lg hover:bg-gray-200 transition-colors">
                            Get Started Free
                         </a>
                    </div>
                </div>
            )}
        </header>
    );
};

const Footer: React.FC = () => (
    <footer className="bg-gray-900 text-gray-400">
        <div className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-xl font-bold text-white mb-4">SynthWave</h3>
                    <p className="text-sm">Supercharge your productivity.</p>
                </div>
                <div>
                    <h4 className="text-white font-semibold mb-4">Product</h4>
                    <ul className="space-y-2">
                        <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                        <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                        <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-semibold mb-4">Company</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                        <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
                        <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                        <li><a href="/terms" className="hover:text-white transition-colors">Terms of Service</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-semibold mb-4">Follow Us</h4>
                    <div className="flex space-x-4">
                        {/* SVGs for social media icons */}
                    </div>
                </div>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm">
                <p>&copy; {new Date().getFullYear()} SynthWave Inc. All rights reserved.</p>
            </div>
        </div>
    </footer>
);

const LandingPage: React.FC = () => {
    // State for dynamic content
    const [features, setFeatures] = useState<any[]>([]);
    const [plans, setPlans] = useState<any[]>([]);
    const [testimonials, setTestimonials] = useState<any[]>([]);
    const [faqs, setFaqs] = useState<any[]>([]);

    // State for interactive components
    const [isYearly, setIsYearly] = useState(false);
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [newsletterEmail, setNewsletterEmail] = useState('');
    const [newsletterMessage, setNewsletterMessage] = useState('');

    // Refs for animations
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Fetch data (mocked for this example)
        // In a real app, this would call services from src/services/api.ts
        const mockData = {
          features: [
            { id: 1, title: 'Advanced Analytics', description: 'Gain deep insights into your performance with our state-of-the-art analytics dashboard.', icon_svg: '<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>'},
            { id: 2, title: 'Real-time Collaboration', description: 'Work with your team in real-time, no matter where they are. Share and edit documents seamlessly.', icon_svg: '<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a3.002 3.002 0 01-2.732 0M11 16V9a4 4 0 00-8 0v7M5 9h6v7m-6 0h6m4 4v-2c0-.656.126-1.283.356-1.857m0 0a3.002 3.002 0 012.732 0M19 9h-6v7m6 0h-6" /></svg>'},
            { id: 3, title: 'Cloud Storage', description: 'Securely store and access your files from anywhere, on any device. 256-bit encryption standard.', icon_svg: '<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>'},
            { id: 4, title: '24/7 Support', description: 'Our dedicated support team is available around the clock to help you with any questions or issues.', icon_svg: '<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>'}
          ],
          plans: [
            { id: 1, name: 'Starter', monthly_price: 29, yearly_price: 290, features_list: ['5 Projects', '10GB Storage', 'Basic Analytics', 'Email Support'], is_popular: false },
            { id: 2, name: 'Pro', monthly_price: 79, yearly_price: 790, features_list: ['Unlimited Projects', '100GB Storage', 'Advanced Analytics', 'Priority Support', 'Team Collaboration'], is_popular: true },
            { id: 3, name: 'Enterprise', monthly_price: 199, yearly_price: 1990, features_list: ['Everything in Pro', 'Dedicated Account Manager', 'Custom Integrations', '24/7 Phone Support'], is_popular: false }
          ],
          testimonials: [
            { id: 1, quote: 'This product has transformed our workflow. The real-time collaboration is a game-changer for our remote team.', author_name: 'Jane Doe', author_title: 'CEO, Innovate Inc.', avatar_url: 'https://randomuser.me/api/portraits/women/44.jpg' },
            { id: 2, quote: 'The analytics are incredibly detailed and have helped us optimize our strategy. Highly recommended!', author_name: 'John Smith', author_title: 'Marketing Director, Growth Co.', avatar_url: 'https://randomuser.me/api/portraits/men/32.jpg' },
            { id: 3, quote: 'Customer support is top-notch. They are responsive, knowledgeable, and genuinely helpful.', author_name: 'Emily White', author_title: 'Project Manager, Solutions Corp', avatar_url: 'https://randomuser.me/api/portraits/women/68.jpg' },
          ],
          faqs: [
            { id: 1, question: 'Is there a free trial available?', answer: 'Yes, we offer a 14-day free trial for our Pro plan. No credit card is required to get started.' },
            { id: 2, question: 'Can I change my plan later?', answer: 'Absolutely! You can upgrade, downgrade, or cancel your plan at any time from your account dashboard.' },
            { id: 3, question: 'What payment methods do you accept?', answer: 'We accept all major credit cards. For Enterprise plans, we also support bank transfers.' },
            { id: 4, question: 'Is my data secure?', answer: 'Data security is our top priority. We use industry-standard encryption for data in transit and at rest.' },
          ]
        };
        setFeatures(mockData.features);
        setPlans(mockData.plans);
        setTestimonials(mockData.testimonials);
        setFaqs(mockData.faqs);
    }, []);

    // Testimonial carousel effect
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [testimonials.length]);

    const handleNewsletterSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newsletterEmail) {
            setNewsletterMessage('Please enter a valid email.');
            return;
        }
        // In a real app, you would call your API service here
        // e.g., subscribeToNewsletter(newsletterEmail).then(...).catch(...)
        console.log('Subscribing with:', newsletterEmail);
        setNewsletterMessage('Thank you for subscribing!');
        setNewsletterEmail('');
        setTimeout(() => setNewsletterMessage(''), 3000);
    };

    return (
        <div className="bg-gray-900 text-gray-300 font-sans">
            <Header />

            <main>
                {/* Hero Section */}
                <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-900 via-gray-900 to-black text-white text-center px-4">
                    <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                    <div className="relative z-10 animate-fade-in-up">
                        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-4 leading-tight">
                            Elevate Your Workflow.
                            <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">Unleash Productivity.</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mb-8">
                            SynthWave is the all-in-one platform designed to streamline your projects, foster collaboration, and drive results.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                            <a href="/signup" className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105">
                                Start Free Trial
                            </a>
                            <a href="#features" className="w-full sm:w-auto bg-transparent border-2 border-gray-500 hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-full transition-colors">
                                Learn More
                            </a>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section id="features" className="py-20 bg-gray-900">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-white">Why SynthWave?</h2>
                            <p className="mt-4 text-lg text-gray-400">Everything you need to boost your team's efficiency.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {features.map(feature => (
                                <div key={feature.id} className="bg-gray-800/50 p-6 rounded-xl shadow-lg hover:shadow-indigo-500/20 hover:-translate-y-1 transition-all duration-300">
                                    <div className="text-indigo-400 mb-4"><Icon html={feature.icon_svg} /></div>
                                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                                    <p className="text-gray-400">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Pricing Section */}
                <section id="pricing" className="py-20 bg-black/20">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-white">Flexible Pricing for Teams of All Sizes</h2>
                            <p className="mt-4 text-lg text-gray-400">Choose the plan that's right for you.</p>
                            <div className="mt-6 flex justify-center items-center space-x-4">
                                <span className={!isYearly ? 'text-white' : 'text-gray-500'}>Monthly</span>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" checked={isYearly} onChange={() => setIsYearly(!isYearly)} className="sr-only peer" />
                                    <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                                </label>
                                <span className={isYearly ? 'text-white' : 'text-gray-500'}>Yearly (Save 20%)</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {plans.map(plan => (
                                <div key={plan.id} className={`p-8 rounded-2xl border transition-all duration-300 ${plan.is_popular ? 'border-indigo-500 bg-gray-800/50 scale-105 shadow-2xl shadow-indigo-500/20' : 'border-gray-700 bg-gray-800/30'}`}>
                                    {plan.is_popular && <div className="text-center mb-4"><span className="bg-indigo-500 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase">Most Popular</span></div>}
                                    <h3 className="text-2xl font-semibold text-white text-center">{plan.name}</h3>
                                    <p className="text-center text-gray-400 mt-2 h-10">{plan.description}</p>
                                    <div className="text-center my-6">
                                        <span className="text-5xl font-extrabold text-white">${isYearly ? plan.yearly_price / 12 : plan.monthly_price}</span>
                                        <span className="text-gray-400">/ month</span>
                                    </div>
                                    <ul className="space-y-4 text-gray-300">
                                        {plan.features_list.map((feature: string, index: number) => (
                                            <li key={index} className="flex items-center">
                                                <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <button className={`w-full mt-8 py-3 px-6 font-semibold rounded-lg transition-colors ${plan.is_popular ? 'bg-indigo-600 hover:bg-indigo-700 text-white' : 'bg-gray-700 hover:bg-indigo-600 text-white'}`}>
                                        Choose Plan
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section id="testimonials" className="py-20 bg-gray-900 overflow-hidden">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-white">Loved by Teams Worldwide</h2>
                            <p className="mt-4 text-lg text-gray-400">Don't just take our word for it. Here's what our customers say.</p>
                        </div>
                        <div className="relative h-64">
                            {testimonials.map((testimonial, index) => (
                                <div key={testimonial.id} className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentTestimonial ? 'opacity-100' : 'opacity-0'}`}>
                                    <div className="flex flex-col items-center text-center">
                                        <img src={testimonial.avatar_url} alt={testimonial.author_name} className="w-20 h-20 rounded-full mb-4 border-4 border-gray-700" />
                                        <blockquote className="max-w-3xl mx-auto text-xl italic text-white">
                                            “{testimonial.quote}”
                                        </blockquote>
                                        <p className="mt-4 font-semibold text-gray-300">{testimonial.author_name}</p>
                                        <p className="text-indigo-400">{testimonial.author_title}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-center mt-8 space-x-2">
                            {testimonials.map((_, index) => (
                                <button key={index} onClick={() => setCurrentTestimonial(index)} className={`w-3 h-3 rounded-full transition-colors ${index === currentTestimonial ? 'bg-indigo-500' : 'bg-gray-600 hover:bg-gray-500'}`}></button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section id="faq" className="py-20 bg-black/20">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-white">Frequently Asked Questions</h2>
                        </div>
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div key={faq.id} className="bg-gray-800/50 rounded-lg">
                                    <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="w-full flex justify-between items-center p-6 text-left">
                                        <span className="text-lg font-medium text-white">{faq.question}</span>
                                        <svg className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${openFaq === index ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                    </button>
                                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-96' : 'max-h-0'}`}>
                                        <div className="p-6 pt-0 text-gray-400">
                                            <p>{faq.answer}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Newsletter CTA Section */}
                <section className="py-20 bg-gray-900">
                    <div className="container mx-auto px-6">
                        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl shadow-indigo-500/30">
                            <h2 className="text-3xl font-bold mb-4">Stay Ahead of the Curve</h2>
                            <p className="max-w-2xl mx-auto mb-8">Subscribe to our newsletter for the latest product updates, industry news, and productivity tips.</p>
                            <form onSubmit={handleNewsletterSubmit} className="max-w-lg mx-auto flex flex-col sm:flex-row gap-4">
                                <input
                                    type="email"
                                    value={newsletterEmail}
                                    onChange={(e) => setNewsletterEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-3 rounded-md text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-purple-300"
                                    required
                                />
                                <button type="submit" className="bg-gray-900 hover:bg-black text-white font-semibold py-3 px-6 rounded-md transition-colors shadow-lg">
                                    Subscribe
                                </button>
                            </form>
                            {newsletterMessage && <p className="mt-4 text-sm">{newsletterMessage}</p>}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default LandingPage;