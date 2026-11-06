import { getCollection, getEntry, render } from 'astro:content';

export async function getProfile() {
  const entry = await getEntry('profile', 'profile');
  if (!entry) throw new Error('src/content/profile.md not found');
  return render(entry);
}

export async function getExperience() {
  const entries = await getCollection('experience');
  return entries.sort((a, b) => a.data.order - b.data.order);
}

export async function getTechnologies() {
  const entries = await getCollection('technologies');
  return entries.sort((a, b) => a.data.order - b.data.order);
}
