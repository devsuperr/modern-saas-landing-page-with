// src/services/api.ts
import { createClient } from '@supabase/supabase-js';

// Define types for our data
export interface Feature {
  id: string;
  title: string;
  description: string;
  icon_svg: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  monthly_price: number;
  yearly_price: number;
  features_list: string[];
  is_popular: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  author_name: string;
  author_title: string;
  avatar_url: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

// Initialize Supabase client
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || '';
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

// --- API Service Functions ---

export const getFeatures = async (): Promise<Feature[]> => {
  const { data, error } = await supabase
    .from('features')
    .select('*')
    .order('id');
  if (error) throw new Error(error.message);
  return data || [];
};

export const getPricingPlans = async (): Promise<PricingPlan[]> => {
  const { data, error } = await supabase
    .from('pricing_plans')
    .select('*')
    .order('sort_order');
  if (error) throw new Error(error.message);
  return data || [];
};

export const getTestimonials = async (): Promise<Testimonial[]> => {
  const { data, error } = await supabase
    .from('testimonials')
    .select('*')
    .order('created_at');
  if (error) throw new Error(error.message);
  return data || [];
};

export const getFAQs = async (): Promise<FAQ[]> => {
  const { data, error } = await supabase
    .from('faqs')
    .select('*')
    .order('sort_order');
  if (error) throw new Error(error.message);
  return data || [];
};

export const subscribeToNewsletter = async (email: string): Promise<any> => {
    // This function will invoke the Supabase Edge Function
    const { data, error } = await supabase.functions.invoke('subscribe', {
        body: JSON.stringify({ email }),
    });

    if (error) {
        throw new Error(error.message);
    }
    
    // The edge function returns a response object, we need to parse the JSON body
    if (data.error) {
      throw new Error(data.error);
    }

    return data;
};