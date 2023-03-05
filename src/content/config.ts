import { defineCollection, z } from 'astro:content';

const schema = z.object({
  title: z.string(),
  company: z.string(),
  start: z.string(),
  end: z.string().optional(),
});

const experienceCollection = defineCollection({
  schema,
});

const volunteerCollection = defineCollection({
  schema,
});

const internshipCollection = defineCollection({
  schema,
});

const educationCollection = defineCollection({
  schema,
});

const projectCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    image: z.string(),
    featured: z.boolean().default(false),
    sort: z.number().default(0),
  }),
});

export const collections = {
  experience: experienceCollection,
  volunteering: volunteerCollection,
  internships: internshipCollection,
  education: educationCollection,
  projects: projectCollection,
};
