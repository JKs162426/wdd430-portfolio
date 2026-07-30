import { deleteProject } from "@/lib/actions";
import { getProjectById } from "@/lib/projects-db";

export default async function DeleteProjectPage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const id = Number(params.id);

  if (Number.isNaN(id)) {
    return <div>Invalid project ID</div>;
  } else {
    const project = await getProjectById(id);
    if (!project) {
      return <div>Project not found</div>;
    }
    return (
      <div>
        <h1 className="text-xl font-bold mb-2">Delete Project</h1>
        <p>
          Are you sure you want to delete the project &quot{project.title}
          &quot;?
        </p>
        <form action={deleteProject.bind(null, id)}>
          <button
            type="submit"
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Delete
          </button>
        </form>
      </div>
    );
  }
}
