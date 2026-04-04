// src/api/routes.ts
import { Hono } from 'hono';
import {
  getFeatures,
  getPricingPlans,
  getTestimonials,
  getFAQs,
} from '../services/api';

const api = new Hono();

api.get('/features', async (c) => {
  try {
    const features = await getFeatures();
    return c.json(features);
  } catch (error: any) {
    return c.json({ error: error.message }, 500);
  }
});

api.get('/pricing', async (c) => {
  try {
    const plans = await getPricingPlans();
    return c.json(plans);
  } catch (error: any) {
    return c.json({ error: error.message }, 500);
  }
});

api.get('/testimonials', async (c) => {
  try {
    const testimonials = await getTestimonials();
    return c.json(testimonials);
  } catch (error: any) {
    return c.json({ error: error.message }, 500);
  }
});

api.get('/faqs', async (c) => {
  try {
    const faqs = await getFAQs();
    return c.json(faqs);
  } catch (error: any) {
    return c.json({ error: error.message }, 500);
  }
});

// Note: The /subscribe endpoint is handled by a separate Supabase Edge Function.
// We are not adding it here as it requires a different setup.

export default api;