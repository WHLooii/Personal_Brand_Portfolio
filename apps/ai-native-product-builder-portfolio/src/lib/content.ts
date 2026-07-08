import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";

export type ProjectEntry = CollectionEntry<"projects">;

export async function getAllProjects() {
  const projects = await getCollection("projects");

  return projects.sort((a, b) => a.data.meta.priority - b.data.meta.priority);
}

export async function getProjects() {
  const projects = await getAllProjects();

  return projects.filter((project) => project.data.meta.visibility !== "archived");
}

export async function getFeaturedProjects() {
  const projects = await getProjects();

  return projects.filter((project) => project.data.meta.visibility === "featured").slice(0, 3);
}

export function getProjectSlug(project: ProjectEntry) {
  return project.data.meta.slug || project.id;
}
