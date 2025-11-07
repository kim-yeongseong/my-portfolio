import { Github, ExternalLink, Calendar, Sparkles } from "lucide-react";
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
    <div className="group relative h-full bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-lg border border-slate-700/50 rounded-2xl p-7 hover:border-blue-500/60 transition-all duration-500 hover:transform hover:scale-[1.03] hover:shadow-2xl hover:shadow-blue-500/10 overflow-hidden">
      {/* Animated gradient background on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/[0.03] group-hover:via-purple-500/[0.03] group-hover:to-pink-500/[0.03] transition-all duration-700 rounded-2xl"></div>

      {/* Subtle shimmer effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent shimmer"></div>
      </div>

      <div className="relative z-10 h-full flex flex-col">
        {/* Header */}
        <div className="mb-5">
          <div className="flex items-start justify-between gap-3 mb-3">
            <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:via-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300 leading-tight">
              {title}
            </h3>
            <div className="flex items-center gap-1.5 text-xs text-gray-400 bg-slate-900/60 px-3 py-1.5 rounded-full border border-slate-700/50 whitespace-nowrap flex-shrink-0">
              <Calendar className="w-3 h-3" />
              <span>{date}</span>
            </div>
          </div>
          <p className="text-gray-300 leading-relaxed text-sm md:text-base">{description}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.slice(0, 6).map((tag, index) => (
            <span
              key={tag}
              className="px-3 py-1.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-400 rounded-lg text-xs font-medium border border-blue-500/20 hover:border-blue-500/50 hover:from-blue-500/20 hover:to-purple-500/20 transition-all hover:scale-105 cursor-default"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {tag}
            </span>
          ))}
          {tags.length > 6 && (
            <span className="px-3 py-1.5 bg-slate-900/50 text-gray-400 rounded-lg text-xs font-medium border border-slate-700/50">
              +{tags.length - 6}
            </span>
          )}
        </div>

        {/* Buttons - pushed to bottom */}
        <div className="mt-auto flex gap-3 pt-4 border-t border-slate-700/30">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-slate-900/70 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 border border-slate-700/50 hover:border-blue-500 rounded-xl transition-all duration-300 text-sm font-medium hover:shadow-lg hover:shadow-blue-500/30 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-blue-500/0 group-hover/btn:from-blue-500/20 group-hover/btn:to-blue-600/20 transition-all duration-300"></div>
              <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform relative z-10" />
              <span className="relative z-10">Code</span>
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-slate-900/70 hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-600 border border-slate-700/50 hover:border-purple-500 rounded-xl transition-all duration-300 text-sm font-medium hover:shadow-lg hover:shadow-purple-500/30 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-purple-500/0 group-hover/btn:from-purple-500/20 group-hover/btn:to-purple-600/20 transition-all duration-300"></div>
              <ExternalLink className="w-4 h-4 group-hover/btn:rotate-12 transition-transform relative z-10" />
              <span className="relative z-10">Demo</span>
            </a>
          )}
        </div>

        {/* Featured badge (optional, for highlighting important projects) */}
        {tags.includes("Spring Boot 3.x") && (
          <div className="absolute top-4 right-4 z-20">
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-full">
              <Sparkles className="w-3 h-3 text-yellow-400" />
              <span className="text-xs font-semibold text-yellow-400">Latest</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
