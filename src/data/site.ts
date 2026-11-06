import { z } from 'astro/zod';
import raw from './site.json';
import pkg from '../../package.json';

const schema = z.object({
  contact: z.object({
    name: z.string(),
    linkedInURL: z.url(),
    githubURL: z.url(),
    emailURL: z.string().startsWith('mailto:'),
    mastodonURL: z.url(),
    emailAddr: z.email(),
    mobilePhone: z.string(),
    mobilePhoneURL: z.string().startsWith('tel:'),
  }),
  config: z.object({
    copyright: z.string(),
    deploymentURL: z.url(),
    repositoryURL: z.url(),
  }),
});

const site = schema.parse(raw);

export const contact = site.contact;
export const config = site.config;
export const appInfo = { appName: pkg.name, appVersion: pkg.version };
