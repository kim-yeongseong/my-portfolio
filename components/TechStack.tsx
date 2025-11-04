import { skillCategories } from "@/data/skills";

export default function TechStack() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {skillCategories.map((category) => (
        <div
          key={category.category}
          className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 hover:border-blue-500 transition-all duration-300"
        >
          <h3 className="text-xl font-semibold mb-4 text-blue-400">
            {category.category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-slate-900/50 text-gray-300 rounded-full text-sm border border-slate-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
