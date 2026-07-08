interface SkillCardProps {
  skill: string;
  projects: string[];
}

export default function SkillCard({ skill, projects }: SkillCardProps) {
  return (
    <article className="p-4 border-l-4 border-green-600 bg-gray-50 rounded">
      <h3 className="text-xl font-bold mb-2">{skill}</h3>
      <ul className="list-disc list-inside text-gray-700">
        {projects.map((project) => (
          <li key={project}>{project}</li>
        ))}
      </ul>
    </article>
  );
}
