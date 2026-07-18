import { getProjects } from "@/lib/projects-db";

export default async function SchoolProjectList() {
  const projects = await getProjects("school");
  return (
    <ul>
      {projects.map((project) => (
        <li key={project.id} className="mb-1">
          {project.title} - {project.type}
        </li>
      ))}
    </ul>
  );
}
