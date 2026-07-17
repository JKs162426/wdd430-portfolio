import Link from "next/link";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <nav className="flex gap-4 mb-8 border-b pb-4">
        <Link href="/projects" className="text-blue-600 hover:underline">
          Projects
        </Link>
        <Link
          href="/projects/settings"
          className="text-blue-600 hover:underline"
        >
          Settings
        </Link>
      </nav>
      {children}
    </div>
  );
}
