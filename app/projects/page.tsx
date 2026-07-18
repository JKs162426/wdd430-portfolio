import { fetchFilteredProjects } from "@/lib/projects-db";
import ProjectSearch from "@/components/ProjectSearch";

export default async function Projects({
  searchParams,
}: {
  searchParams: Promise<{ query?: string; page?: string }>;
}) {
  const { query, page } = await searchParams;
  const projects = await fetchFilteredProjects(query ?? "");
  return (
    <div>
      <ProjectSearch />
      <h1 className="text-xl font-bold mb-2">Projects Overview</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id} className="mb-1">
            {project.title} - {project.type}
          </li>
        ))}
      </ul>
    </div>
  );
}
