import { Github, ExternalLink } from "lucide-react";
import { Project } from "@/types";

export default function ProjectCard({
  title,
  description,
  tags,
  githubUrl,
  liveUrl,
  date,
}: Project) {
  return (
    <div className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105">
      <div className="mb-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
            {title}
          </h3>
          <span className="text-sm text-gray-500">{date}</span>
        </div>
        <p className="text-gray-300 leading-relaxed">{description}</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-slate-900/50 text-blue-400 rounded-full text-sm border border-slate-700"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-3">
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-700 border border-slate-700 rounded-lg transition-all text-sm"
          >
            <Github className="w-4 h-4" />
            <span>Code</span>
          </a>
        )}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-700 border border-slate-700 rounded-lg transition-all text-sm"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Live Demo</span>
          </a>
        )}
      </div>
    </div>
  );
}
