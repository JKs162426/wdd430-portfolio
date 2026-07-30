"use server";

import { z } from "zod";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const currentYear = new Date().getFullYear();

const CreateProjectSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters."),
  description: z
    .string()
    .min(20, "Description must be at least 20 characters."),
  technologies: z.string().min(2, "Add at least one technology."),
  yearCompleted: z.coerce
    .number()
    .int("Year must be a whole number.")
    .gte(2000, "Year must be 2000 or later.")
    .lte(currentYear, `Year cannot be greater than ${currentYear}.`),
});

export type State = {
  errors?: {
    title?: string[];
    description?: string[];
    technologies?: string[];
    yearCompleted?: string[];
  };
  message?: string | null;
};

export async function createProject(prevState: State, formData: FormData) {
  const validatedFields = CreateProjectSchema.safeParse({
    title: formData.get("title"),
    description: formData.get("description"),
    technologies: formData.get("technologies"),
    yearCompleted: formData.get("yearCompleted"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing or invalid fields. Failed to create project.",
    };
  }

  const { title, description, technologies, yearCompleted } =
    validatedFields.data;

  try {
    await sql`
      INSERT INTO projects (title, description, technologies, year_completed)
      VALUES (${title}, ${description}, ${technologies}, ${yearCompleted})
    `;
  } catch (error) {
    return {
      message: "Database Error: Failed to create project.",
    };
  }

  revalidatePath("/projects");
  redirect("/projects");
}

export async function updateProject(id: number, formData: FormData) {
  const raw = {
    title: formData.get("title"),
    description: formData.get("description"),
    technologies: formData.get("technologies"),
  };

  const parsed = CreateProjectSchema.safeParse(raw);
  if (!parsed.success) {
    throw new Error("Invalid project input.");
  }

  const { title, description, technologies } = parsed.data;
  const technologiesArray = `{${technologies
    .split(",")
    .map((t) => t.trim())
    .join(",")}}`;
  try {
    await sql`
        UPDATE projects
        SET title = ${title}, description = ${description}, technologies = ${technologiesArray}
        WHERE id = ${id}
    `;
  } catch (error) {
    console.error("Error updating project:", error);
    throw new Error("Failed to update project.");
  }

  revalidatePath("/projects");
  redirect("/projects");
}

export async function deleteProject(id: number) {
  try {
    await sql`
            DELETE FROM projects WHERE id = ${id}
        `;
  } catch (error) {
    console.error("Error deleting project:", error);
    throw new Error("Failed to delete project.");
  }

  revalidatePath("/projects");
  redirect("/projects");
}
