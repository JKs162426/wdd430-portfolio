import SkillCard from "@/components/SkillCard";
const skills = [
  {
    skill: "JavaScript",
    projects: ["Glossia"],
  },
  {
    skill: "React",
    projects: ["Glossia"],
  },
  {
    skill: "Node.js",
    projects: ["Glossia, BaseballAPI"],
  },
  {
    skill: "MySQL",
    projects: ["Glossia"],
  },
  {
    skill: "MongoDB",
    projects: ["BaseballAPI"],
  },
];

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg text-gray-700">
        This about page shares more information about my background and work.
      </p>
      <section>
        <h3 className="text-2xl font-bold mt-8 mb-4">Skills</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {skills.map((skill) => (
            <SkillCard key={skill.skill} {...skill} />
          ))}
        </div>
      </section>
    </main>
  );
}
