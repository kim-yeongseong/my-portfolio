import { BookOpen, ExternalLink } from "lucide-react";
import { Study } from "@/types";

export default function StudyCard({
  title,
  description,
  category,
  tags,
  date,
  link,
}: Study) {
  return (
    <div className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 hover:border-purple-500 transition-all duration-300">
      <div className="flex items-start gap-4 mb-4">
        <div className="flex-shrink-0 w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center border border-purple-500/20">
          <BookOpen className="w-6 h-6 text-purple-400" />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
              {title}
            </h3>
            <span className="text-sm text-gray-500">{date}</span>
          </div>
          <span className="inline-block px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm border border-purple-500/20 mb-2">
            {category}
          </span>
        </div>
      </div>

      <p className="text-gray-300 leading-relaxed mb-4">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-slate-900/50 text-gray-400 rounded-full text-sm border border-slate-700"
          >
            {tag}
          </span>
        ))}
      </div>

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-700 border border-slate-700 rounded-lg transition-all text-sm"
        >
          <ExternalLink className="w-4 h-4" />
          <span>Read More</span>
        </a>
      )}
    </div>
  );
}
