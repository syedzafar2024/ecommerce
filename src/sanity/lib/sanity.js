// lib/sanity.js
import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'vx4ps17r', // Find this in sanity.json or Sanity dashboard
  dataset: 'production',
  apiVersion: '2023-05-03', // Use current date
  useCdn: true, // Enable CDN for faster responses
});