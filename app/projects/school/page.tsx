import { Suspense } from "react";
import SchoolProjectList from "@/components/SchoolProjectList";

export default function SchoolProjects() {
  return (
    <div>
      <h1 className="text-xl font-bold mb-2">School Projects</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <SchoolProjectList />
      </Suspense>
    </div>
  );
}
