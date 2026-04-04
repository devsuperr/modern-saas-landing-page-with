-- schema.sql

-- Enable UUID generation
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Features table
-- Stores the features displayed in the feature grid.
CREATE TABLE features (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    description TEXT,
    icon_svg TEXT NOT NULL, -- Storing SVG content directly for simplicity
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Pricing Plans table
-- Stores different subscription plans for the SaaS product.
CREATE TABLE pricing_plans (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    description TEXT,
    monthly_price NUMERIC(10, 2) NOT NULL,
    yearly_price NUMERIC(10, 2) NOT NULL,
    features_list JSONB NOT NULL, -- e.g., ["Feature A", "Feature B"]
    is_popular BOOLEAN DEFAULT FALSE,
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Testimonials table
-- Stores user testimonials for the carousel.
CREATE TABLE testimonials (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    quote TEXT NOT NULL,
    author_name VARCHAR(255) NOT NULL,
    author_title VARCHAR(255),
    avatar_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- FAQs table
-- Stores frequently asked questions and their answers.
CREATE TABLE faqs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    question TEXT NOT NULL,
    answer TEXT NOT NULL,
    category VARCHAR(100),
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Subscribers table
-- Stores email addresses for the newsletter.
CREATE TABLE subscribers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(50) DEFAULT 'subscribed' -- e.g., subscribed, unsubscribed
);

-- User Profiles Table
-- This table stores public profile data and is linked to the auth.users table.
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  display_name VARCHAR(255),
  avatar_url TEXT,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Function to create a profile when a new user signs up
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, display_name)
  VALUES (new.id, new.raw_user_meta_data->>'display_name');
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to call the function on new user creation
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();


-- Sample Data Insertion
-- This data will be used by the HTML previews and can be used to seed the database.

-- Features
INSERT INTO features (title, description, icon_svg) VALUES
('Advanced Analytics', 'Gain deep insights into your performance with our state-of-the-art analytics dashboard.', '<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>'),
('Real-time Collaboration', 'Work with your team in real-time, no matter where they are. Share and edit documents seamlessly.', '<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a3.002 3.002 0 01-2.732 0M11 16V9a4 4 0 00-8 0v7M5 9h6v7m-6 0h6m4 4v-2c0-.656.126-1.283.356-1.857m0 0a3.002 3.002 0 012.732 0M19 9h-6v7m6 0h-6" /></svg>'),
('Cloud Storage', 'Securely store and access your files from anywhere, on any device. 256-bit encryption standard.', '<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>'),
('24/7 Support', 'Our dedicated support team is available around the clock to help you with any questions or issues.', '<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>');

-- Pricing Plans
INSERT INTO pricing_plans (name, description, monthly_price, yearly_price, features_list, is_popular, sort_order) VALUES
('Starter', 'For individuals and small teams starting out.', 29.00, 290.00, '["5 Projects", "10GB Storage", "Basic Analytics", "Email Support"]', false, 1),
('Pro', 'For growing businesses that need more power and features.', 79.00, 790.00, '["Unlimited Projects", "100GB Storage", "Advanced Analytics", "Priority Support", "Team Collaboration"]', true, 2),
('Enterprise', 'For large organizations with custom needs.', 199.00, 1990.00, '["Everything in Pro", "Dedicated Account Manager", "Custom Integrations", "24/7 Phone Support"]', false, 3);

-- Testimonials
INSERT INTO testimonials (quote, author_name, author_title, avatar_url) VALUES
('This product has transformed our workflow. The real-time collaboration is a game-changer for our remote team.', 'Jane Doe', 'CEO, Innovate Inc.', 'https://randomuser.me/api/portraits/women/44.jpg'),
('The analytics are incredibly detailed and have helped us optimize our strategy. Highly recommended!', 'John Smith', 'Marketing Director, Growth Co.', 'https://randomuser.me/api/portraits/men/32.jpg'),
('Customer support is top-notch. They are responsive, knowledgeable, and genuinely helpful.', 'Emily White', 'Project Manager, Solutions Corp', 'https://randomuser.me/api/portraits/women/68.jpg'),
('An indispensable tool for our daily operations. It''s intuitive, powerful, and reliable.', 'Michael Brown', 'Operations Lead, Tech Forward', 'https://randomuser.me/api/portraits/men/46.jpg');

-- FAQs
INSERT INTO faqs (question, answer, sort_order) VALUES
('Is there a free trial available?', 'Yes, we offer a 14-day free trial for our Pro plan. No credit card is required to get started. You can explore all the features and see if it''s the right fit for your team.', 1),
('Can I change my plan later?', 'Absolutely! You can upgrade, downgrade, or cancel your plan at any time from your account dashboard. Changes will be prorated.', 2),
('What payment methods do you accept?', 'We accept all major credit cards, including Visa, Mastercard, and American Express. For Enterprise plans, we also support bank transfers.', 3),
('Is my data secure?', 'Data security is our top priority. We use industry-standard encryption for data in transit and at rest. Our infrastructure is hosted on secure, certified data centers.', 4),
('Do you offer discounts for non-profits?', 'Yes, we do! We offer a 30% discount for registered non-profit organizations. Please contact our sales team with your documentation to apply for the discount.', 5);