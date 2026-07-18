import { getProjects } from "@/lib/projects-db";

export default async function OpenSourceProjects() {
  const projects = await getProjects("opensource");
  return (
    <div>
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
