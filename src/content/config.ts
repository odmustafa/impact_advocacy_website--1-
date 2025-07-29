
import { defineCollection, z } from 'astro:content';

const teamCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    title: z.string(),
    bio: z.string(),
    photo: z.string(),
    phone: z.string(),
    whatsapp: z.string(),
    website: z.string().optional(),
    linkedin: z.string().optional(),
    order: z.number().default(1),
  }),
});

const servicesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.enum(['finance', 'community', 'consulting', 'housing']),
    features: z.array(z.string()),
    order: z.number().default(1),
  }),
});

const eventsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    location: z.string(),
    type: z.enum(['upcoming', 'past']),
    registrationLink: z.string().optional(),
  }),
});

const testimonialsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    title: z.string(),
    quote: z.string(),
    photo: z.string().optional(),
  }),
});

export const collections = {
  team: teamCollection,
  services: servicesCollection,
  events: eventsCollection,
  testimonials: testimonialsCollection,
};
