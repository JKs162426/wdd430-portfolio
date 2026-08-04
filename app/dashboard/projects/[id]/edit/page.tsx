import { updateProject } from "@/app/lib/actions";
import { getProjectById } from "@/app/lib/projects-db";
import { notFound } from "next/navigation";

export default async function EditProjectPage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const id = Number(params.id);

  if (Number.isNaN(id)) {
    return <div>Invalid project ID</div>;
  } else {
    const project = await getProjectById(id);
    if (!project) {
      return notFound();
    }
    return (
      <div>
        <h1 className="text-xl font-bold mb-2">Edit Project</h1>
        <form action={updateProject.bind(null, id)}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            defaultValue={project.title}
          />
          <br />
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            defaultValue={project.description}
          />
          <br />
          <label htmlFor="technologies">Technologies</label>
          <input
            type="text"
            id="technologies"
            name="technologies"
            defaultValue={project.technologies.join(", ")}
          ></input>
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}
