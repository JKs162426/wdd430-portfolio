import ProjectList from "@/components/ProjectList";
const projects = [
  {
    title: "Glossia",
    description:
      "'A language learning app with React frontend, Node.js backend, and PostgreSQL database. Features include user auth, flashcards, and progress tracking.'.",
    technologies: ["Node.js", "React", "Express", "MySQL"],
    link: "https://github.com/jks162426/glossia",
  },
  {
    title: "BaseballAPI",
    description:
      "A RESTful API for baseball data built with Node.js, Express, and MongoDB. Provides endpoints for player stats, team info, and game schedules.",
    technologies: ["Node.js", "Express", "MongoDB"],
    link: "https://github.com/JKs162426/cse341-node/tree/main/cse341-baseball",
  },
];

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-lg text-gray-700">
          I'm a full-stack developer learning Next.js and React. Here are some
          of my recent projects.
        </p>
      </section>
      <ProjectList projects={projects} />
    </main>
  );
}
